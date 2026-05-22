import {TodoList} from "../features/todos/components/TodoList";
import {getTodos} from "../features/todos/api/todosApi";
import {AppErrorBoundary, Loader} from "../shared";
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