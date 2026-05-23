import {useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
    Alert,
    Paper,
    Typography,
} from "@mui/material";
import { updatePost, PostForm, type Post, getPostById } from "../features";
import type { PostFormValues } from "../features";
import { ErrorMessage, Loader } from "../shared";

export function UpdatePostPage() {
    const navigate = useNavigate();
    const { postId } = useParams();
    const id = Number(postId);
    const [post, setPost] =useState<Post | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    useEffect(() => {
        async function loadPostByPostId() {
            try {
                setIsLoading(true);
                setError(null);
                setPost(null);
                setSuccessMessage(null);

                if (!postId) {
                    throw new Error("ID поста не найден");
                }
                if (Number.isNaN(id)) {
                    throw new Error("Некорректный ID поста");
                }

                const data = await getPostById(id);

                setPost(data);
            } catch (error) {
                setError(error instanceof Error ? error.message : "Неизвестная ошибка");
            } finally {
                setIsLoading(false);
            }
        }

        loadPostByPostId();
    }, [postId, id])

    async function handleUpdatePost(values: PostFormValues) {
        try {
            setError(null);

            if (!postId || Number.isNaN(id)) {
                throw new Error("Некорректный ID поста");
            }

            const updatedPost = await updatePost(id, values);
            console.log(updatedPost);

            setSuccessMessage(`Post edited. ID: ${updatedPost.id}. Check console log`);

            setTimeout(() => {
                navigate(`/posts/${id}`);
            }, 1000);
        } catch (error) {
            setError(error instanceof Error ? error.message : "Не удалось обновить пост");
        }
    }

    return (
        <>
            <Typography variant="h4" sx={{ fontWeight: 700 }} gutterBottom>
                Edit post
            </Typography>

            {successMessage && (
                <Alert severity="success" sx={{ mb: 2 }}>
                    {successMessage}
                </Alert>
            )}

            {isLoading && <Loader />}

            {!isLoading && error && <ErrorMessage error={error} />}

            {!isLoading && !error && !post && (
                <div>Пост не найден</div>
            )}

            {!isLoading && !error && post && (
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
            )}
        </>
    );
}