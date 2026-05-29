import { Grid } from "@mui/material";
import { PostCardSkeleton } from "./PostCardSkeleton";

type PostListSkeletonProps = {
    count?: number;
};

export function PostListSkeleton({ count = 6 }: PostListSkeletonProps) {
    return (
        <Grid container spacing={2}>
            {Array.from({ length: count }).map((_, index) => (
                <Grid
                    key={index}
                    size={{
                        xs: 12,
                        sm: 6,
                        md: 4,
                    }}
                >
                    <PostCardSkeleton />
                </Grid>
            ))}
        </Grid>
    );
}