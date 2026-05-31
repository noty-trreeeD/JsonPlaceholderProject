import { TodoList } from "../features";
import { getTodos } from "../features";
import { ErrorMessage, Loader, PageHeader } from "../shared";
import { useQuery } from "@tanstack/react-query";

export function TodosPage() {
    const todosQuery = useQuery({
        queryKey: ['todos'],
        queryFn: getTodos,
    })

    if (todosQuery.isLoading) return <Loader />;

    if (todosQuery.error) {
        return <ErrorMessage error="Не удалось загрузить задачи" />;
    }

    const todos = todosQuery.data ?? [];

    return (
        <>
            <PageHeader
                title={"Todos page"}
            />
            <TodoList todos={todos}/>
        </>

    );
}