import { Grid, Box } from "@mui/material";
import type { Post } from "../types/post";
import { PostCard } from "./PostCard";
import { Loader } from "../../../shared";
import {
    use,
    useState,
    useDeferredValue,
    useMemo,
    memo,
} from "react";
import type {User} from "../../index";

type PostListProps = {
    postPromise: Promise<Post[]>;
    usersPromise: Promise<User[]>;
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

export const PostList = ({ postPromise, usersPromise }: PostListProps) => {
    const posts = use(postPromise);
    const users = use(usersPromise)

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