export type Post = {
    userId: number,
    id: number,
    title: string,
    body: string,
}

export type CreatePostDto = Omit<Post, "id">;

export type UpdatePostDto = Omit<Post, "id">;