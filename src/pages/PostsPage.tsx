import { PostList, getPosts, getUsers } from "../features";
import { ErrorMessage, Loader } from "../shared"
import { Link as RouterLink } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

export function PostsPage() {
    const postsQuery = useQuery({
        queryKey: ['posts'],
        queryFn: getPosts,
    })
    const usersQuery = useQuery({
        queryKey: ['users'],
        queryFn: getUsers,
    })
    if (postsQuery.isLoading || usersQuery.isLoading) return <Loader />;
    if (postsQuery.error || usersQuery.error) return <ErrorMessage error={`Не удалось загрузить данные.`} />;

    const posts = postsQuery.data;
    const users = usersQuery.data;

    if (!users || !posts) return <Loader />;

    return (
        <>
            <Stack
                direction="row"
                sx={{
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: 3,
                }}
            >
                <Typography variant="h4" sx={{ fontWeight: 700 }}>
                    Посты
                </Typography>

                <Button
                    component={RouterLink}
                    to="/posts/create"
                    variant="contained"
                >
                    Создать пост
                </Button>
            </Stack>
            <PostList
                posts={posts}
                users={users}
            />
        </>
    );
}