import { TodoList } from "../features";
import { getTodos } from "../features";
import { AppErrorBoundary, Loader } from "../shared";
import { Suspense } from "react";

const todosPromise = getTodos()

export function TodosPage() {
    return (
        <AppErrorBoundary>
            <Suspense fallback={<Loader />}>
                <TodoList todosPromise={todosPromise}/>
            </Suspense>
        </AppErrorBoundary>
    );
}