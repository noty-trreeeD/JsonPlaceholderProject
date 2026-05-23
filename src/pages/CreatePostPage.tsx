import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Alert,
    Paper,
    Typography,
} from "@mui/material";
import { type PostFormValues,
    createPost,
    PostForm
} from "../features";

export function CreatePostPage() {
    const navigate = useNavigate();
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    async function handleCreatePost(values: PostFormValues) {
        const createdPost = await createPost(values);

        setSuccessMessage(`Пост создан. ID: ${createdPost.id}`);

        setTimeout(() => {
            navigate("/posts");
        }, 1000);
    }

    return (
        <>
            <Typography variant="h4" sx={{ fontWeight: 700 }} gutterBottom>
                Создать пост
            </Typography>

            {successMessage && (
                <Alert severity="success" sx={{ mb: 2 }}>
                    {successMessage}
                </Alert>
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