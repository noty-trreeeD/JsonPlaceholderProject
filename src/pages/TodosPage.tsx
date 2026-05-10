import Typography from "@mui/material/Typography";

export function TodosPage() {
    return (
        <>
            <Typography variant="h4" sx={{ fontWeight: 700 }} gutterBottom>
                Todos
            </Typography>

            <Typography color="text.secondary">
                Тут будет список задач.
            </Typography>
        </>
    );
}