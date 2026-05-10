import Grid from "@mui/material/Grid";
import type {Post} from "../types/post";
import {PostCard} from "./PostCard";

type PostListProps = {
    posts: Post[];
}

export const PostList = ({ posts }: PostListProps) => {
    return (
        <Grid container spacing={2}>
            {posts.map((post: Post) => (
                <Grid
                    key={post.id}
                    size={{
                        xs: 12,
                        sm: 6,
                        md: 4,
                    }}
                >
                    <PostCard post={post} />
                </Grid>
            ))}
        </Grid>
    )
}