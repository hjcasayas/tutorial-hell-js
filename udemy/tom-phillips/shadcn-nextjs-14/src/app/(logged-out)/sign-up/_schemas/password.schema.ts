import { z } from "zod";

export const passwordSchema = z
  .object({
    password: z
      .string()
      .min(8, "Password must contain at least 8 characters")
      .max(32, "Password can only have up to 32 characters")
      .refine((password) => {
        return /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?])(?=.{8,32}$).*/.test(
          password,
        );
      }, "Password must contain at least one special character, uppercase letter and number."),
    passwordConfirm: z.string(),
  })
  .superRefine((data, context) => {
    if (data.password !== data.passwordConfirm) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["passwordConfirm"],
        message: "Password does not match",
      });
    }
  });
