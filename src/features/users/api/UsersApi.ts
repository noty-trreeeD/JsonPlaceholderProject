import { apiClient } from "../../../shared";

export function getUsers() {
    return apiClient(`/users`);
}

export function getUserById(id: number) {
    return apiClient(`/users/${id}`);
}