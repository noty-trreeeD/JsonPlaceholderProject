import { useParams } from "react-router-dom";
import {
    getUserById,
    getPostsByUserId,
    UserDetailsCard,
    PostCard,
} from "../features";
import { Loader, ErrorMessage } from "../shared";
import { Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

export function UserDetailsPage() {
    const { userId } = useParams();
    const id = Number(userId);
    const isValidId = Boolean(userId) && !Number.isNaN(id);

    const userQuery = useQuery({
        queryKey: ["user", id],
        queryFn: () => getUserById(id),
        enabled: isValidId,
    })
    const postsQuery = useQuery({
        queryKey: ["posts", "user", id],
        queryFn: () => getPostsByUserId(id),
        enabled: isValidId,
    })

    if (postsQuery.isLoading ||  userQuery.isLoading) return <Loader />;
    if (postsQuery.error || userQuery.error) return <ErrorMessage error={`Не удалось загрузить данные.`} />;

    const user = userQuery.data
    const posts = postsQuery.data

    if (!user) return <ErrorMessage error={"Error"}/>;
    if (!posts) return <Loader />;

    return (
        <>
            <UserDetailsCard user={user} />

            <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: 700 }}>
                Посты пользователя
            </Typography>

            {posts.map((post) => (
                <PostCard key={post.id} post={post} author={user} />
            ))}
        </>
    );
}