import { Grid, Box, Button } from "@mui/material";
import type { Post } from "../types/post";
import { PostCard } from "./PostCard";
import { EmptyState, Loader } from "../../../shared";
import { Link as RouterLink } from "react-router-dom";
import {
    useState,
    useDeferredValue,
    useMemo,
    memo,
} from "react";
import type {User} from "../../index";

type PostListProps = {
    posts: Post[];
    users: User[];
};

const HeavyPostGrid = memo(function HeavyPostGrid({ posts, users }: { posts: Post[]; users: User[] }) {
    const renderedPosts = useMemo(() => {
        return [
            ...posts,
            ...posts,
            ...posts,
            ...posts,
            ...posts,
            ...posts,
            ...posts,
            ...posts,
            ...posts,
        ];
    }, [posts]);

    return (
        <>
            {renderedPosts.map((post, index) => {
                const author = users.find((user) => user.id === post.userId);
                return (<Grid
                    key={`${post.id}-${index}`}
                    size={{
                        xs: 12,
                        sm: 6,
                        md: 4,
                    }}
                >
                    <PostCard post={post} author={author} />
                </Grid>
                );
            })}
        </>
    );
});

export const PostList = ({ posts, users }: PostListProps) => {
    const [sortBy, setSortBy] = useState<"asc" | "desc">("asc");

    const deferredSortBy = useDeferredValue(sortBy);

    const sortedPosts = useMemo(() => {
        return [...posts].sort((a, b) =>
            deferredSortBy === "asc" ? a.id - b.id : b.id - a.id
        );
    }, [posts, deferredSortBy]);

    const onClick = () => {
        setSortBy((prev) => (prev === "asc" ? "desc" : "asc"));
    };

    const isStale = sortBy !== deferredSortBy;

    if (posts.length === 0) {
        return (
            <EmptyState
                title="Постов пока нет"
                description="Создайте первый пост."
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
        );
    }

    return (
        <Grid container spacing={2}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    p: 1,
                    m: 1,
                    bgcolor: "background.paper",
                    borderRadius: 1,
                }}
            >
                <button onClick={onClick}>
                    Сортировать: {sortBy} {isStale ? "..." : ""}
                </button>
            </Box>
            {isStale ? <Loader /> : <HeavyPostGrid posts={sortedPosts} users={users}/>}
        </Grid>
    );
};