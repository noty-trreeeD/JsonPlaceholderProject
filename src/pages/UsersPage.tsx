import Typography from "@mui/material/Typography";

export function UsersPage() {
    return (
        <>
            <Typography variant="h4" sx={{ fontWeight: 700 }} gutterBottom>
                Пользователи
            </Typography>

            <Typography color="text.secondary">
                Тут будет список пользователей.
            </Typography>
        </>
    );
}