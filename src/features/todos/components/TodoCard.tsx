import {
    Card,
    CardContent,
    Chip,
    Stack,
    Typography,
    Box,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import type { Todo } from "../types/todo";

type TodoCardProps = {
    todo: Todo;
};

export const TodoCard = ({ todo }: TodoCardProps) => {
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
                },
            }}
        >
            <CardContent>
                <Stack spacing={2}>
                    <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
                        <Chip
                            label={`Todo #${todo.id}`}
                            size="small"
                            color="primary"
                            variant="outlined"
                        />

                        <Chip
                            label={`User ${todo.userId}`}
                            size="small"
                            variant="outlined"
                        />
                    </Stack>

                    <Typography
                        variant="h6"
                        component="h2"
                        sx={{
                            fontWeight: 700,
                            lineHeight: 1.3,
                        }}
                    >
                        {todo.title}
                    </Typography>

                    <Box>
                        <Chip
                            icon={
                                todo.completed ? (
                                    <CheckCircleIcon />
                                ) : (
                                    <RadioButtonUncheckedIcon />
                                )
                            }
                            label={todo.completed ? "Выполнено" : "Не выполнено"}
                            color={todo.completed ? "success" : "default"}
                            variant={todo.completed ? "filled" : "outlined"}
                            size="small"
                        />
                    </Box>
                </Stack>
            </CardContent>
        </Card>
    );
};