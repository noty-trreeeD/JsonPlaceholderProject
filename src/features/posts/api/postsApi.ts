import { apiClient } from "../../../shared";

export function getPosts() {
    return apiClient("/posts");
}

export function getPostById(id: number) {
    return apiClient(`/posts/${id}`);
}

export function getPostComments(id: number) {
    return apiClient(`/posts/${id}/comments`);
}

export function getPostsByUserId(userId: number) {
    return apiClient(`/posts?${userId}`);
}