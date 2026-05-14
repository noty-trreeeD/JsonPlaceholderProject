import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";
import { PostDetailCard } from "../features/posts/components/PostDetailCard";
import { useEffect, useState } from "react";
import { getPostById, getPostComments } from "../features/posts/api/postsApi";
import { Loader } from "../shared/ui/Loader";
import { ErrorMessage } from "../shared/ui/ErrorMessage";
import { CommentList } from "../features/comments/components/CommentList";
import type { Post } from "../features/posts/types/post";
import type { Comment as PostComment } from "../features/comments/types/comment";

export function PostDetailsPage() {
    const { postId } = useParams();
    const [post, setPost] =useState<Post | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [comments, setComments] = useState<PostComment[]>([]);

    useEffect(() => {
        async function loadPostByPostId() {
            try {
                setIsLoading(true);
                setError(null);
                setPost(null);
                setComments([]);

                if (!postId) {
                    throw new Error("ID поста не найден");
                }

                const id = Number(postId);

                if (Number.isNaN(id)) {
                    throw new Error("Некорректный ID поста");
                }

                const [data, commentsData] = await Promise.all([
                    getPostById(id),
                    getPostComments(id),
                ]);

                setPost(data);
                setComments(commentsData);
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
                <>
                    <PostDetailCard post={post} />

                    <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: 700 }}>
                        Комментарии
                    </Typography>

                    <CommentList comments={comments} />
                </>
            )}

        </>
    );
}