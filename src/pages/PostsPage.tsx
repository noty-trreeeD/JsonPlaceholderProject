import { PostList, getPosts, getUsers, PostListSkeleton } from "../features";
import { ErrorMessage, Loader, PageHeader } from "../shared"
import { Link as RouterLink } from "react-router-dom";
import { Button } from "@mui/material";
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
    if (postsQuery.isLoading || usersQuery.isLoading) return <PostListSkeleton />;
    if (postsQuery.error || usersQuery.error) return <ErrorMessage error={`Не удалось загрузить данные.`} />;

    const posts = postsQuery.data;
    const users = usersQuery.data;

    if (!users || !posts) return <Loader />;

    return (
        <>
            <PageHeader
                title="Посты"
                action={
                    <Button
                        component={RouterLink}
                        to="/posts/create"
                        variant="contained"
                    >
                        Создать пост
                    </Button>
                }
            />
            <PostList
                posts={posts}
                users={users}
            />
        </>
    );
}