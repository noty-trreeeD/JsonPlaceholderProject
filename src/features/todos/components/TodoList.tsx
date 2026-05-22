import type { Todo } from '../types/todo'
import { use } from "react";
import { Grid } from "@mui/material";
import { TodoCard } from "./TodoCard";

type TodoListProps = {
    todosPromise: Promise<Todo[]>
}

export const TodoList = ({ todosPromise }: TodoListProps) => {
    const todos = use(todosPromise);

    return (
        <Grid container spacing={2}>
            {todos.map((todo) => (
                <Grid
                    key={todo.id}
                    size={{
                        xs: 12,
                        sm: 6,
                        md: 4,
                    }}
                >
                    <TodoCard todo={todo} />
                </Grid>
            ))}
        </Grid>
    )
}