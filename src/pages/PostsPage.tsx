import { Suspense } from "react";
import { PostList, getPosts, getUsers } from "../features";
import { AppErrorBoundary, Loader } from "../shared"
import { Link as RouterLink } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";

const postsPromise = getPosts();
const usersPromise = getUsers()

export function PostsPage() {
    return (
        <AppErrorBoundary>
            <Suspense fallback={<Loader />}>
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
                <PostList postPromise={postsPromise} usersPromise={usersPromise}/>
            </Suspense>
        </AppErrorBoundary>
    );
}