import { Typography } from "@mui/material";

export function NotFoundPage() {
    return (
        <>
            <Typography variant="h4" sx={{ fontWeight: 700 }} gutterBottom>
                Страница не найдена
            </Typography>

            <Typography color="text.secondary">
                Такой страницы не существует.
            </Typography>
        </>
    );
}