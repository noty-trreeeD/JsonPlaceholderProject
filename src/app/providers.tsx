import type { ReactNode } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { QueryClientProvider } from "@tanstack/react-query";
import { theme } from "./theme";
import { queryClient } from "./queryClient";

type ProvidersProps = {
    children: ReactNode;
};

export function Providers({ children }: ProvidersProps) {
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </QueryClientProvider>
    );
}