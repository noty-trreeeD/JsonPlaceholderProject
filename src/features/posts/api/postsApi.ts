import { apiClient } from "../../../shared/api/client";

export function getPosts() {
    return apiClient("/posts");
}

export function getPostById(id: number) {
    return apiClient(`/posts/${id}`);
}

export function getPostComments(id: number) {
    return apiClient(`/posts/${id}/comments`);
}