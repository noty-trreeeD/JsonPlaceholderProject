import { Suspense } from "react";
import { PostList, getPosts, getUsers } from "../features";
import { Loader } from "../shared"

const postsPromise = getPosts();
const usersPromise = getUsers()

export function PostsPage() {
    return (
        <Suspense fallback={<Loader />}>
            <PostList postPromise={postsPromise} usersPromise={usersPromise}/>
        </Suspense>
    );
}