import { Card, CardContent, Skeleton, Stack } from "@mui/material";

export function PostCardSkeleton() {
    return (
        <Card>
            <CardContent>
                <Stack spacing={1.5}>
                    <Skeleton variant="text" width="35%" height={24} animation="wave" />
                    <Skeleton variant="text" width="80%" height={32} animation="wave" />
                    <Skeleton variant="text" width="100%" animation="wave" />
                    <Skeleton variant="text" width="95%" animation="wave" />
                    <Skeleton variant="text" width="70%" animation="wave" />
                    <Skeleton variant="rounded" width={120} height={36} animation="wave" />
                </Stack>
            </CardContent>
        </Card>
    );
}