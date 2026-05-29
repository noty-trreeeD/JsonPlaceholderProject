import { Box, Paper, Typography } from "@mui/material"
import type { ReactNode } from "react";

type EmptyStateProps = {
    title: string;
    description: string;
    action?: ReactNode;
}

export const EmptyState = ({title, description, action}:EmptyStateProps ) => {
    return (
        <Paper
            variant="outlined"
            sx={{
                p: 4,
                borderRadius: 3,
                textAlign: "center",
            }}
        >
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
                {title}
            </Typography>

            {description && (
                <Typography color="text.secondary" sx={{ mt: 1 }}>
                    {description}
                </Typography>
            )}

            {action && <Box sx={{ mt: 3 }}>{action}</Box>}
        </Paper>
    )
}