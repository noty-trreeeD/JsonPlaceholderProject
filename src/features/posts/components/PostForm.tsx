import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form"
import {
    Button,
    Stack,
    TextField,
} from "@mui/material";
import {
    postFormSchema,
    type PostFormValues
} from "../schemas/postFormSchema";

type PostFormProps = {
    defaultValues?: PostFormValues;
    submitLabel?: string;
    onSubmit: (values: PostFormValues) => Promise<void> | void;
}

export const PostForm = ({
    defaultValues,
    submitLabel = "Create Post",
    onSubmit,
}: PostFormProps) => {
    const {register, handleSubmit, formState: {errors, isSubmitting}} = useForm<PostFormValues>({
        resolver: zodResolver(postFormSchema),
        defaultValues: defaultValues ?? {
            title: "",
            body: "",
            userId: 1
        },
    })

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2}>
                <TextField
                    label="Заголовок"
                    fullWidth
                    {...register("title")}
                    error={Boolean(errors.title)}
                    helperText={errors.title?.message}
                />

                <TextField
                    label="Текст поста"
                    fullWidth
                    multiline
                    minRows={4}
                    {...register("body")}
                    error={Boolean(errors.body)}
                    helperText={errors.body?.message}
                />

                <TextField
                    label="User ID"
                    type="number"
                    fullWidth
                    {...register("userId", {
                        valueAsNumber: true,
                    })}
                    error={Boolean(errors.userId)}
                    helperText={errors.userId?.message}
                />

                <Button
                    type="submit"
                    variant="contained"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Сохраняю..." : submitLabel}
                </Button>
            </Stack>
        </form>
    )
}