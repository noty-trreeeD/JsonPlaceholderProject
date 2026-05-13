import { Suspense } from "react";
import { PostList } from "../features/posts/components/PostList";
import { getPosts } from "../features/posts/api/postsApi";
import { Loader } from "../shared/ui/Loader"

const postsPromise = getPosts();

export function PostsPage() {
    return (
        <Suspense fallback={<Loader />}>
            <PostList postPromise={postsPromise} />
        </Suspense>
    );
}