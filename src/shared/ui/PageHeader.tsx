import type { ReactNode } from "react";
import { Stack, Typography } from "@mui/material";

type PageHeaderProps = {
    title: string;
    subtitle?: string;
    action?: ReactNode;
}

export const PageHeader = ({ title, subtitle, action }: PageHeaderProps) => {
    return (
        <Stack
            direction={{
                xs: "column",
                sm: "row",
            }}
            spacing={2}
            sx={{
                alignItems: {
                    xs: "flex-start",
                    sm: "center",
                },
                justifyContent: "space-between",
                mb: 3,
            }}
        >
            <div>
                <Typography variant="h4" sx={{ fontWeight: 700 }}>
                    {title}
                </Typography>

                {subtitle && (
                    <Typography color="text.secondary" sx={{ mt: 0.5 }}>
                        {subtitle}
                    </Typography>
                )}
            </div>

            {action}
        </Stack>
    )
}