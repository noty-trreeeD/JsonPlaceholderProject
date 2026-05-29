import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from "@mui/material";

type ConfirmDialogProps = {
    open: boolean;
    title: string;
    description?: string;
    confirmText?: string;
    cancelText?: string;
    loading?: boolean;
    onClose: () => void;
    onConfirm: () => void;
};

export function ConfirmDialog({
  open,
  title,
  description,
  confirmText = "Подтвердить",
  cancelText = "Отмена",
  loading = false,
  onClose,
  onConfirm,
}: ConfirmDialogProps) {
    return (
        <Dialog
            open={open}
            onClose={loading ? undefined : onClose}
            maxWidth="xs"
            fullWidth
        >
            <DialogTitle>{title}</DialogTitle>

            {description && (
                <DialogContent>
                    <DialogContentText>
                        {description}
                    </DialogContentText>
                </DialogContent>
            )}

            <DialogActions>
                <Button
                    onClick={onClose}
                    disabled={loading}
                >
                    {cancelText}
                </Button>

                <Button
                    onClick={onConfirm}
                    disabled={loading}
                    color="error"
                    variant="contained"
                >
                    {loading ? "Удаляю..." : confirmText}
                </Button>
            </DialogActions>
        </Dialog>
    );
}