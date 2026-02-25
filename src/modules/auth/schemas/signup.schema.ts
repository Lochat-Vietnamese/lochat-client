import { z } from "zod";
import { CreateProfileSchema } from "@/modules/common";

export const SignupSchema = z.object({
    username: z
        .string({
            error: (issue) => issue.input === undefined ? "validation:signup.username.required" : "validation:signup.username.type"
        })
        .regex(/^[a-zA-Z0-9]+$/, "validation:signup.username.regex")
        .min(5, { 
            message: `validation:signup.username.min$${5}`
        }),
        
    password: z
        .string({
            error: (issue) => issue.input === undefined ? "validation:signup.password.required" : "validation:signup.password.type"
        })
        .min(8, { message: `validation:signup.password.min$${8}` }),
    email: z
        .email({
            error: (issue) => issue.input === undefined ? "validation:signup.email.required" : "validation:signup.email.type"
        }),
    profile: CreateProfileSchema
});

export type SignupType = z.infer<typeof SignupSchema>;