import { apiClient } from "../../../shared";
import type { User } from "../types/user";

export function getUsers(): Promise<User[]> {
    return apiClient<User[]>(`/users`);
}

export function getUserById(id: number): Promise<User> {
    return apiClient<User>(`/users/${id}`);
}