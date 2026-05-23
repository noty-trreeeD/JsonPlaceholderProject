import { apiClient } from "../../../shared";
import type { Post, CreatePostDto, UpdatePostDto } from "../types/post";
import type { Comment as PostComment } from "../../comments/types/comment";

export function getPosts():Promise<Post[]> {
    return apiClient<Post[]>("/posts");
}

export function getPostById(id: number):Promise<Post> {
    return apiClient<Post>(`/posts/${id}`);
}

export function getPostComments(id: number): Promise<PostComment[]> {
    return apiClient<PostComment[]>(`/posts/${id}/comments`);
}

export function getPostsByUserId(userId: number): Promise<Post[]> {
    return apiClient<Post[]>(`/posts?userId=${userId}`);
}

export function createPost(payload: CreatePostDto):Promise<Post> {
    return apiClient<Post>(`/posts`, {
        method: "POST",
        body: payload,
    });
}

export function updatePost(id: number, payload: UpdatePostDto): Promise<Post> {
    return apiClient<Post>(`/posts/${id}`, {
        method: "PUT",
        body: payload,
    });
}