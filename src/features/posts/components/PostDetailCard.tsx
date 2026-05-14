import {
    Card,
    CardContent,
    CardActions,
    Typography,
    Chip,
    Stack,
    Button,
    Divider,
    Box,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import type { Post } from "../types/post";
import type { User } from "../../users/types/user";
import { AuthorBadge } from "../../users/components/AuthorBadge";

type PostDetailCardProps = {
    post: Post;
    author?: User;
};

export const PostDetailCard = ({ post, author }: PostDetailCardProps) => {
    return (
        <Card
            variant="outlined"
            sx={{
                borderRadius: 3,
                overflow: "hidden",
            }}
        >
            <CardContent>
                <Stack spacing={3}>
                    <Box>
                        <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                            <Chip
                                label={`Post #${post.id}`}
                                size="small"
                                color="primary"
                                variant="outlined"
                            />

                            <AuthorBadge author={author} fallbackUserId={post.userId} />
                        </Stack>

                        <Typography
                            variant="h4"
                            component="h1"
                            sx={{
                                fontWeight: 700,
                                lineHeight: 1.25,
                            }}
                        >
                            {post.title}
                        </Typography>
                    </Box>

                    <Divider />

                    <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{
                            fontSize: 18,
                            lineHeight: 1.8,
                        }}
                    >
                        {post.body}
                    </Typography>
                </Stack>
            </CardContent>

            <CardActions sx={{ px: 2, pb: 2 }}>
                <Button
                    component={RouterLink}
                    to="/posts"
                    startIcon={<ArrowBackIcon />}
                    variant="outlined"
                >
                    Назад к постам
                </Button>
            </CardActions>
        </Card>
    );
};