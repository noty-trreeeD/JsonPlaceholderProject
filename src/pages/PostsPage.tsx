import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { PostList } from "../features/posts/components/PostList";
import {getPosts} from "../features/posts/api/postsApi";
import type { Post } from "../features/posts/types/post.ts";
import {ErrorMessage} from "../shared/ui/ErrorMessage.tsx";
import {Loader} from "../shared/ui/Loader.tsx";

export function PostsPage() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function loadPosts() {
            try {
                setIsLoading(true);
                setError(null);

                const data = await getPosts();

                setPosts(data);
            } catch (error) {
                setError(error instanceof Error ? error.message : "Неизвестная ошибка");
            } finally {
                setIsLoading(false);
            }
        }

        loadPosts();
    }, [])

    return (
        <>
            <Typography variant="h4" sx={{ fontWeight: 700 }} gutterBottom>
                Посты
            </Typography>

            {isLoading && <Loader />}

            {!isLoading && error && <ErrorMessage error={error} />}

            {!isLoading && !error && posts.length === 0 && (
                <div>Постов пока нет</div>
            )}

            {!isLoading && !error && posts.length > 0 && (
                <PostList posts={posts} />
            )}
        </>
    );
}