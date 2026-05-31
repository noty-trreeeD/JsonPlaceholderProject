import { Stack } from "@mui/material";
import { CommentCard } from "./CommentCard";
import type { Comment } from "../types/comment";
import { EmptyState } from "../../../shared";

type CommentListProps = {
    comments: Comment[];
}

export const CommentList = ({ comments }: CommentListProps) => {
    if (comments.length === 0) return <EmptyState
        title={"Comments not found"}
        description={"No comments found."}
    />;
    return (
        <Stack spacing={2}>
            {comments.map((comment) => (
                <CommentCard key={comment.id} comment={comment} />
            ))}
        </Stack>
    )
}