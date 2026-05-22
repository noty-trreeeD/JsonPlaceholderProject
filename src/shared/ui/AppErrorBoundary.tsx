import { Component, type ErrorInfo, type ReactNode } from "react";
import { ErrorMessage } from "./ErrorMessage.tsx";

type AppErrorBoundaryProps = {
    children: ReactNode;
}

type AppErrorBoundaryState = {
    hasError: boolean;
    error: string | null;
}

export class AppErrorBoundary extends Component<
    AppErrorBoundaryProps,
    AppErrorBoundaryState
> {
    state: AppErrorBoundaryState = {
        hasError: false,
        error: null,
    }

    static getDerivedStateFromError(error: unknown): AppErrorBoundaryState {
        return {
            hasError: true,
            error: error instanceof Error ? error.message : "Неизвестная ошибка",
        }
    };

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("AppErrorBoundary caught an error: ", error, errorInfo);
    }

    render() {
        if (this.state.hasError && this.state.error) {
            return <ErrorMessage error={this.state.error} />;
        }

        return this.props.children;
    }
}