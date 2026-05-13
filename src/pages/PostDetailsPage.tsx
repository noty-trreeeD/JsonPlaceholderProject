import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { PostDetailCard } from "../features/posts/components/PostDetailCard";
import {useEffect, useState} from "react";
import type {Post} from "../features/posts/types/post";
import {getPostById } from "../features/posts/api/postsApi";
import {Loader} from "../shared/ui/Loader.tsx";
import {ErrorMessage} from "../shared/ui/ErrorMessage";

export function PostDetailsPage() {
    const { postId } = useParams();
    const [post, setPost] =useState<Post | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function loadPostByPostId() {
            try {
                setIsLoading(true);
                setError(null);
                setPost(null);

                if (!postId) {
                    throw new Error("ID поста не найден");
                }

                const id = Number(postId);

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
    }, [postId])

    return (
        <>
            <Typography variant="h4" sx={{ fontWeight: 700 }} gutterBottom>
                Пост #{postId}
            </Typography>

            {isLoading && <Loader />}

            {!isLoading && error && <ErrorMessage error={error} />}

            {!isLoading && !error && !post && (
                <div>Пост не найден</div>
            )}

            {!isLoading && !error && post && (
                <PostDetailCard post={post} userId={post.userId} title={post.title} body={post.body} id={post.id}/>
            )}

        </>
    );
}