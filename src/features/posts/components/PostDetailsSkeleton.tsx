import { Card, CardContent, Skeleton, Stack } from "@mui/material";

export function PostDetailsSkeleton() {
    return (
        <Stack spacing={3}>
            <Stack
                direction="row"
                sx={{
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <Skeleton variant="text" width={180} height={48} animation="wave" />
                <Stack direction="row" spacing={1}>
                    <Skeleton variant="rounded" width={140} height={36} animation="wave" />
                    <Skeleton variant="rounded" width={100} height={36} animation="wave" />
                </Stack>
            </Stack>

            <Card>
                <CardContent>
                    <Stack spacing={2}>
                        <Skeleton variant="text" width="30%" height={28} animation="wave" />
                        <Skeleton variant="text" width="80%" height={36} animation="wave" />
                        <Skeleton variant="text" width="100%" animation="wave" />
                        <Skeleton variant="text" width="95%" animation="wave" />
                        <Skeleton variant="text" width="70%" animation="wave" />
                    </Stack>
                </CardContent>
            </Card>

            <Skeleton variant="text" width={160} height={36} animation="wave" />

            <Stack spacing={2}>
                {Array.from({ length: 3 }).map((_, index) => (
                    <Card key={index}>
                        <CardContent>
                            <Stack spacing={1}>
                                <Skeleton variant="text" width="40%" height={24} animation="wave" />
                                <Skeleton variant="text" width="80%" animation="wave" />
                                <Skeleton variant="text" width="65%" animation="wave" />
                            </Stack>
                        </CardContent>
                    </Card>
                ))}
            </Stack>
        </Stack>
    );
}