export type Post = {
    userId: number,
    id: number,
    title: string,
    body: string,
}

export type CreatePostDto = {
    userId: number,
    title: string,
    body: string,
}