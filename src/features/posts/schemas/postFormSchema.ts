import { z } from 'zod'

export const postFormSchema = z.object({
    title: z
        .string()
        .min(3, "Minimum 3 characters"),
    body: z
        .string()
        .min(10, "Minimum 10 characters"),
    userId: z
        .number()
        .min(1, "UserId must be a number"),
})

export type PostFormValues = z.infer<typeof postFormSchema>