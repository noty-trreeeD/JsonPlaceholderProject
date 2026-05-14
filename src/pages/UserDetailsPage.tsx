import { useParams } from "react-router-dom";
import {
    getUserById,
    getPostsByUserId,
    UserDetailsCard,
    type User, PostCard,
} from "../features";
import { useEffect, useState } from "react";
import { Loader, ErrorMessage } from "../shared";
import type { Post } from "../features";
import { Typography } from "@mui/material";

export function UserDetailsPage() {
    const { userId } = useParams();
    const [user, setUser] =useState<User | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        async function loadPostByPostId() {
            try {
                setIsLoading(true);
                setError(null);
                setPosts([]);
                setUser(null);

                if (!userId) {
                    throw new Error("UserId if not found");
                }

                const id = Number(userId);

                if (Number.isNaN(id)) {
                    throw new Error("Uncorrected userId");
                }

                const [data, postsData] = await Promise.all([
                    getUserById(id),
                    getPostsByUserId(id),
                ]);

                setUser(data);
                setPosts(postsData);
            } catch (error) {
                setError(error instanceof Error ? error.message : "Неизвестная ошибка");
            } finally {
                setIsLoading(false);
            }
        }

        loadPostByPostId();
    }, [userId])

    return (
        <>
            {isLoading && <Loader />}

            {!isLoading && error && <ErrorMessage error={error} />}

            {!isLoading && !error && !user && (
                <div>Пост не найден</div>
            )}

            {!isLoading && !error && user && (
                <>
                    <UserDetailsCard user={user} />

                    <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: 700 }}>
                        Посты пользователя
                    </Typography>

                    {posts.map((post) => (
                        <PostCard key={post.id} post={post} author={user} />
                    ))}
                </>
            )}
        </>
    );
}