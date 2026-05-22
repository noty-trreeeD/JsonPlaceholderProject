import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Box from "@mui/material/Box";

export type TodoFilter = "all" | "completed" | "active";

type TodoFiltersProps = {
    value: TodoFilter;
    onChange: (value: TodoFilter) => void;
};

export const TodoFilters = ({ value, onChange }: TodoFiltersProps) => {
    return (
        <Box sx={{ mb: 2 }}>
            <ToggleButtonGroup
                value={value}
                exclusive
                onChange={(_, newValue: TodoFilter | null) => {
                    if (newValue) {
                        onChange(newValue);
                    }
                }}
                size="small"
            >
                <ToggleButton value="all">Все</ToggleButton>
                <ToggleButton value="completed">Выполненные</ToggleButton>
                <ToggleButton value="active">Не выполненные</ToggleButton>
            </ToggleButtonGroup>
        </Box>
    );
};