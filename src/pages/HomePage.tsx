import { Typography } from "@mui/material";

export function HomePage() {
    return (
        <>
            <Typography variant="h4" sx={{ fontWeight: 700 }} gutterBottom>
                Главная
            </Typography>

            <Typography color="text.secondary">
                Мини-приложение для практики работы с JSONPlaceholder.
            </Typography>
        </>
    );
}