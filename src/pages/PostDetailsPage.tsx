import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";

export function PostDetailsPage() {
    const { postId } = useParams();

    return (
        <>
            <Typography variant="h4" sx={{ fontWeight: 700 }} gutterBottom>
                Пост #{postId}
            </Typography>

            <Typography color="text.secondary">
                Тут будет детальная страница поста.
            </Typography>
        </>
    );
}