import {Alert} from "@mui/material"

interface ErrorMessageProps {
    error?: string | null
}

export const ErrorMessage = ({error}: ErrorMessageProps) => {
    return (
        <Alert>{error}</Alert>
    )
}