import type { Todo } from "../types/todo";
import { apiClient } from "../../../shared";

export function getTodos(): Promise<Todo[]> {
    return apiClient("/todos");
}