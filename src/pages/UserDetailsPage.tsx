import { useParams } from "react-router-dom";
import {
    getUserById,
    getPostsByUserId,
    UserDetailsCard,
    PostCard,
} from "../features";
import { Loader, ErrorMessage, PageHeader, EmptyState } from "../shared";
import { Typography, Stack } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

export function UserDetailsPage() {
    const { userId } = useParams();
    const id = Number(userId);
    const isValidId = Boolean(userId) && !Number.isNaN(id);

    const userQuery = useQuery({
        queryKey: ["users", id],
        queryFn: () => getUserById(id),
        enabled: isValidId,
    });

    const postsQuery = useQuery({
        queryKey: ["posts", "user", id],
        queryFn: () => getPostsByUserId(id),
        enabled: isValidId,
    });

    if (!isValidId) return <ErrorMessage error="Некорректный ID пользователя" />;

    if (postsQuery.isLoading || userQuery.isLoading) return <Loader />;

    if (postsQuery.error || userQuery.error)return <ErrorMessage error="Не удалось загрузить данные пользователя." />;

    const user = userQuery.data;
    const posts = postsQuery.data ?? [];

    if (!user) {
        return <ErrorMessage error="Пользователь не найден" />;
    }

    return (
        <>
            <PageHeader
                title="User info"
            />

            <UserDetailsCard user={user} />

            <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: 700 }}>
                Посты пользователя
            </Typography>

            {posts.length === 0 ? (
                <EmptyState
                    title="Посты не найдены"
                    description="У этого пользователя пока нет постов."
                />
            ) : (
                <Stack spacing={2}>
                    {posts.map((post) => (
                        <PostCard key={post.id} post={post} author={user} />
                    ))}
                </Stack>
            )}
        </>
    );
}