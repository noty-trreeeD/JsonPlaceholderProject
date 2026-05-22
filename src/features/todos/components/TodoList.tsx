import type { Todo } from "../types/todo";
import { use, useMemo, useState } from "react";
import Grid from "@mui/material/Grid";
import { TodoCard } from "./TodoCard";
import { TodoFilters, type TodoFilter } from "./TodoFilters";

type TodoListProps = {
    todosPromise: Promise<Todo[]>;
};

export const TodoList = ({ todosPromise }: TodoListProps) => {
    const todos = use(todosPromise);

    const [filter, setFilter] = useState<TodoFilter>("all");

    const filteredTodos = useMemo(() => {
        return todos.filter((todo) => {
            if (filter === "completed") return todo.completed;
            if (filter === "active") return !todo.completed;
            return true;
        });
    }, [todos, filter]);

    return (
        <>
            <TodoFilters value={filter} onChange={setFilter} />
            <Grid container spacing={2}>
                {filteredTodos.map((todo) => (
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
        </>
    );
};