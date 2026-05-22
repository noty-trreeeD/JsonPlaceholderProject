import { Suspense } from "react";
import { PostList, getPosts, getUsers } from "../features";
import { AppErrorBoundary, Loader } from "../shared"

const postsPromise = getPosts();
const usersPromise = getUsers()

export function PostsPage() {
    return (
        <AppErrorBoundary>
            <Suspense fallback={<Loader />}>
                <PostList postPromise={postsPromise} usersPromise={usersPromise}/>
            </Suspense>
        </AppErrorBoundary>
    );
}