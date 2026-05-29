import type { ReactNode } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { QueryClientProvider } from "@tanstack/react-query";
import { theme } from "./theme";
import { queryClient } from "./queryClient";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { AppSnackbar } from "../shared";

type ProvidersProps = {
    children: ReactNode;
};

export function Providers({ children }: ProvidersProps) {
    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false}/>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
                <AppSnackbar />
            </ThemeProvider>
        </QueryClientProvider>
    );
}