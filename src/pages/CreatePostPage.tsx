import { useNavigate } from "react-router-dom";
import { Paper } from "@mui/material";
import {
    type PostFormValues,
    createPost,
    PostForm,
} from "../features";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ErrorMessage, PageHeader, useToastStore } from "../shared";

export function CreatePostPage() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const showToast = useToastStore((state) => state.showToast);

    const createPostMutation = useMutation({
        mutationFn: createPost,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['posts']})
            showToast("Successfully created post", "success");
            navigate('/posts')
        },
        onError: () => {
                showToast("Failed to create post", "error");
        }
    })

    async function handleCreatePost(values: PostFormValues) {
        await createPostMutation.mutateAsync(values);
        console.log(values);
    }

    return (
        <>
            <PageHeader title={"Create Post"}/>
            {createPostMutation.error && (<ErrorMessage error="Не удалось создать пост" />)}
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