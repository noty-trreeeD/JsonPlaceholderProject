import { useNavigate, useParams } from "react-router-dom";
import {
    Paper,
    Typography,
} from "@mui/material";
import { updatePost, PostForm, getPostById } from "../features";
import type { PostFormValues } from "../features";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ErrorMessage, Loader, useToastStore } from "../shared";

export function UpdatePostPage() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const { postId } = useParams();
    const id = Number(postId);
    const isValidId = Boolean(postId) && !Number.isNaN(id);
    const showToast = useToastStore((state) => state.showToast);

    const postQuery = useQuery({
        queryKey: ['posts', id],
        queryFn: () => getPostById(id),
        enabled: isValidId,
    })

    const updatePostMutation = useMutation({
        mutationFn: (values: PostFormValues) => updatePost(id, values),
        onSuccess: (updatedPost) => {
            queryClient.invalidateQueries({queryKey: ['posts']})
            queryClient.invalidateQueries({queryKey: ['posts', id],})
            showToast("Post successfully updated!", "success");
            navigate(`/posts/${updatedPost.id}`, {})
        },
        onError:() => {
            showToast("Error updating post!", "error");
        }
    })

    async function handleUpdatePost(values: PostFormValues) {
        await updatePostMutation.mutateAsync(values);
    }

    if (postQuery.isLoading) return <Loader />;
    if (postQuery.error) return <ErrorMessage error={`Не удалось загрузить данные.`} />;

    const post = postQuery.data;

    if (!post) {
        return <div>Пост не найден</div>;
    }
    if (!isValidId) {
        return <ErrorMessage error="Некорректный ID поста" />;
    }

    return (
        <>
            <Typography variant="h4" sx={{ fontWeight: 700 }} gutterBottom>
                Edit post
            </Typography>
            <Paper
                variant="outlined"
                sx={{
                    p: 3,
                    borderRadius: 3,
                    maxWidth: 720,
                }}
            >
                <PostForm
                    defaultValues={{
                        title: post.title,
                        body: post.body,
                        userId: post.userId,
                    }}
                    submitLabel="Save changes"
                    onSubmit={handleUpdatePost}
                />
            </Paper>
        </>
    );
}