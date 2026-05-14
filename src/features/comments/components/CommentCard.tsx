import type { Comment } from "../types/comment"
import {
    Box,
    Card,
    CardContent,
    Chip,
    Stack,
    Typography
} from "@mui/material";

type CommentCardProps = {
    comment: Comment
}

export const CommentCard = ({comment}:CommentCardProps) => {

    return (
        <Card
            variant="outlined"
            sx={{
                height: "100%",
                borderRadius: 3,
                transition: "0.2s ease",
                "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: 4,
                }
            }}
        >
            <CardContent>
                <Stack spacing={2}>
                    <Box>
                        <Chip
                            label={`${comment.email}`}
                            size="medium"
                            color="primary"
                            variant="outlined"
                        />
                    </Box>
                    <Typography
                        variant="h6"
                        component="h2"
                        sx={{
                            fontWeight: 700,
                            lineHeight: 1.3,
                        }}
                    >
                        {comment.name}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                            display: "-webkit-box",
                            WebkitLineClamp: 3,
                            overflow: "hidden",
                        }}
                    >
                        {comment.body}
                    </Typography>
                </Stack>
            </CardContent>
        </Card>
    )
}
