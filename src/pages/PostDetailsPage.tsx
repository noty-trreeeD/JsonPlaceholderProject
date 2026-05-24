import {useNavigate, useParams} from "react-router-dom";
import { Box, Button, Stack, Typography } from "@mui/material";
import {
    PostDetailCard,
    getPostById,
    getPostComments,
    CommentList,
    getUserById,
    deletePost,
} from "../features";
import { Loader, ErrorMessage } from "../shared";
import { Link as RouterLink } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function PostDetailsPage() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const { postId } = useParams();
    const id = Number(postId);
    const postQuery = useQuery({
        queryKey: ['posts', id],
        queryFn: () => getPostById(id),
        enabled: !Number.isNaN(id),
    })
    const commentsQuery = useQuery({
        queryKey: ['posts', id, 'comments'],
        queryFn: () => getPostComments(id),
        enabled: !Number.isNaN(id),
    })
    const userQuery = useQuery({
        queryKey: ['users', postQuery.data?.userId],
        queryFn: () => getUserById(postQuery.data!.userId),
        enabled: Boolean(postQuery.data?.userId),
    })
    const deletePostMutation = useMutation({
        mutationFn: () => deletePost(id),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['posts']
            })
            queryClient.removeQueries({
                queryKey: ['posts', id],
            })
            queryClient.removeQueries({
                queryKey: ['posts', id, 'comments'],
            })
            navigate(`/posts/`, {})
        }
    })

    if (postQuery.isLoading || commentsQuery.isLoading || userQuery.isLoading) return <Loader />;
    if (postQuery.error || commentsQuery.error || userQuery.error) return <ErrorMessage error={`Не удалось загрузить данные.`} />;

    const post = postQuery.data;
    const comments = commentsQuery.data ?? [];
    const author = userQuery.data;

    async function handleDeletePost() {
        const confirmed = window.confirm("Удалить этот пост?");

        if (!confirmed) return;

        await deletePostMutation.mutateAsync();
        console.log("post deleted successfully.");
    }

    if (!post) {
        return <div>Пост не найден</div>;
    }

    return (
        <>
            <Stack
                direction="row"
                sx={{
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: 3,
                }}
            >
                <Typography variant="h4" sx={{ fontWeight: 700 }}>
                    Пост #{postId}
                </Typography>
                <Box>
                    <Button
                        component={RouterLink}
                        to={`/posts/${id}/edit`}
                        variant="contained"
                        startIcon={<EditIcon />}
                    >
                        Редактировать
                    </Button>
                    <Button
                        variant="contained"
                        color="error"
                        startIcon={<DeleteIcon />}
                        onClick={handleDeletePost}
                        disabled={deletePostMutation.isPending}
                    >
                        {deletePostMutation.isPending ? "Удаляю..." : "Удалить"}
                    </Button>
                </Box>
            </Stack>
            <>
                <PostDetailCard post={post} author={author} />


                <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: 700 }}>
                    Комментарии
                </Typography>

                <CommentList comments={comments} />
            </>
        </>
    );
}