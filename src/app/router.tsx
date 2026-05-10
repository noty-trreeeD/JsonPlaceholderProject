import { createBrowserRouter } from "react-router-dom";

import { MainLayout } from "../layouts/MainLayout";

import { HomePage } from "../pages/HomePage";
import { PostsPage } from "../pages/PostsPage";
import { PostDetailsPage } from "../pages/PostDetailsPage";
import { UsersPage } from "../pages/UsersPage";
import { TodosPage } from "../pages/TodosPage";
import { NotFoundPage } from "../pages/NotFoundPage";

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
                path: "todos",
                element: <TodosPage />,
            },
        ],
    },
]);