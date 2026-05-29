import { Alert, Snackbar } from "@mui/material";
import { useToastStore } from "../store/toastStore";

export const AppSnackbar = () => {
    const open = useToastStore((state) => state.open);
    const message = useToastStore((state) => state.message);
    const severity = useToastStore((state) => state.severity);
    const closeToast = useToastStore((state) => state.closeToast);

    return (
        <Snackbar
            open={open}
            autoHideDuration={5000}
            onClose={closeToast}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        >
            <Alert
                onClose={closeToast}
                severity={severity}
                variant="filled"
                sx={{ width: '100%' }}
            >
                {message}
            </Alert>
        </Snackbar>
    )
}