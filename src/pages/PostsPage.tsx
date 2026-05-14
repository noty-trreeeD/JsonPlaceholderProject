import { Suspense } from "react";
import { PostList, getPosts } from "../features";
import { Loader } from "../shared"

const postsPromise = getPosts();

export function PostsPage() {
    return (
        <Suspense fallback={<Loader />}>
            <PostList postPromise={postsPromise} />
        </Suspense>
    );
}