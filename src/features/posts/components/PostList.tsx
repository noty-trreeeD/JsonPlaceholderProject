import { Grid, Box } from "@mui/material";
import type { Post } from "../types/post";
import { PostCard } from "./PostCard";
import { Loader } from "../../../shared/ui/Loader";
import {
    use,
    useState,
    useDeferredValue,
    useMemo,
    memo,
} from "react";

type PostListProps = {
    postPromise: Promise<Post[]>;
};

const HeavyPostGrid = memo(function HeavyPostGrid({ posts }: { posts: Post[] }) {
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
            {renderedPosts.map((post, index) => (
                <Grid
                    key={`${post.id}-${index}`}
                    size={{
                        xs: 12,
                        sm: 6,
                        md: 4,
                    }}
                >
                    <PostCard post={post} />
                </Grid>
            ))}
        </>
    );
});

export const PostList = ({ postPromise }: PostListProps) => {
    const posts = use(postPromise);

    const [sortBy, setSortBy] = useState<"asc" | "desc">("desc");

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
            {isStale ? <Loader /> : <HeavyPostGrid posts={sortedPosts} />}
        </Grid>
    );
};