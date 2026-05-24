import { useNavigate } from "react-router-dom";
import {
    Paper,
    Typography,
} from "@mui/material";
import {
    type PostFormValues,
    createPost,
    PostForm,
} from "../features";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ErrorMessage } from "../shared";

export function CreatePostPage() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const createPostMutation = useMutation({
        mutationFn: createPost,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['posts']
            })
            navigate('/posts')

        }
    })

    async function handleCreatePost(values: PostFormValues) {
        await createPostMutation.mutateAsync(values);
        console.log(values);
    }

    return (
        <>
            <Typography variant="h4" sx={{ fontWeight: 700 }} gutterBottom>
                Создать пост
            </Typography>
            {createPostMutation.error && (
                <ErrorMessage error="Не удалось создать пост" />
            )}
            <Paper
                variant="outlined"
                sx={{
                    p: 3,
                    borderRadius: 3,
                    maxWidth: 720,
                }}
            >
                <PostForm onSubmit={handleCreatePost} />
            </Paper>
        </>
    );
}