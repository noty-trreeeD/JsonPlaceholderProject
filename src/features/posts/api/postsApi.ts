import { apiClient } from "../../../shared";
import type { Post, CreatePostDto } from "../types/post";

export function getPosts():Promise<Post[]> {
    return apiClient<Post[]>("/posts");
}

export function getPostById(id: number):Promise<Post> {
    return apiClient<Post>(`/posts/${id}`);
}

export function getPostComments(id: number) {
    return apiClient(`/posts/${id}/comments`);
}

export function getPostsByUserId(userId: number) {
    return apiClient(`/posts?${userId}`);
}

export function createPost(payload: CreatePostDto):Promise<Post> {
    return apiClient<Post>(`/posts`, {
        method: "POST",
        body: payload,
    });
}