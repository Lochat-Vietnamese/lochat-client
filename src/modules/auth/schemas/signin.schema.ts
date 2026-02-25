import { z } from "zod";

export const SigninSchema = z.object({
    username: z
        .string("validation:signin.username.type")
        .regex(/^[a-zA-Z0-9]+$/, "validation:signin.username.regex")
        .min(5, { message: `validation:signin.username.min$${5}` })
        .optional(),
    email: z
        .email("validation:signin.email.type")
        .optional(),
    password: z
        .string({
            error: (issue) => issue.input === undefined ? "validation:signin.password.required" : issue.message
        }),
}).refine(
    (data) => !!data.username || !!data.email,
    {
        message: "validation:signin.refine.message",
        path: ["username"],
    }
);

export type SigninType = z.infer<typeof SigninSchema>;