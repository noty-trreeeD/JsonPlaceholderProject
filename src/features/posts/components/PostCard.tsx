import {
    Card,
    Box,
    CardContent,
    Chip,
    Stack,
    Typography, CardActions, Button
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import type {Post} from "../types/post";

type PostCardProps = {
    post: Post;
}

export const PostCard = ({post}: PostCardProps) => {
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
                            label={`User ${post.userId}`}
                            size="small"
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
                        {post.title}
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
                        {post.body}
                    </Typography>
                </Stack>
            </CardContent>
            <CardActions sx={{ px: 2, pb: 2}}>
                <Button
                    component={RouterLink}
                    to={`/posts/${post.id}`}
                    variant="contained"
                    size="small"
                >
                    Подробнее
                </Button>
            </CardActions>
        </Card>
    )
}