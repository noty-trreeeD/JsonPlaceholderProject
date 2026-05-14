import { Stack } from "@mui/material";
import { CommentCard } from "./CommentCard";
import type { Comment } from "../types/comment";

type CommentListProps = {
    comments: Comment[];
}

export const CommentList = ({ comments }: CommentListProps) => {

    return (
        <Stack spacing={2}>
            {comments.map((comment) => (
                <CommentCard key={comment.id} comment={comment} />
            ))}
        </Stack>
    )
}