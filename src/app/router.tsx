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