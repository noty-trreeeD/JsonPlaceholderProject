import {apiClient} from "../../../shared/api/client.ts";

export function getUsers() {
    return apiClient(`/users`);
}

export function getUserById(id: number) {
    return apiClient(`/users/${id}`);
}