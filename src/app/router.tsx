import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "./MainLayout";
import {
    HomePage,
    PostsPage,
    PostDetailsPage,
    UsersPage,
    TodosPage,
    NotFoundPage,
    UserDetailsPage,
    CreatePostPage,
    UpdatePostPage
} from "../pages";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <NotFoundPage />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "posts",
                element: <PostsPage />,
            },
            {
                path: "posts/:postId",
                element: <PostDetailsPage />,
            },
            {
                path: "posts/create",
                element: <CreatePostPage />
            },
            {
                path: "posts/:postId/edit",
                element: <UpdatePostPage />,
            },
            {
                path: "users",
                element: <UsersPage />,
            },
            {
                path: "users/:userId",
                element: <UserDetailsPage />,
            },
            {
                path: "todos",
                element: <TodosPage />,
            },
        ],
    },
]);