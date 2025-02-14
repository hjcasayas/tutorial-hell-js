import { z } from "zod";

const formSchema = z
  .object({
    email: z.string().email(),
    accountType: z.enum(["personal", "company"], { message: "Required" }),
    companyName: z.string().optional(),
    numberOfEmployees: z.coerce.number().optional(),
    dob: z.date().refine((date) => {
      const today = new Date();
      const eighteenYearsAgo = new Date(
        today.getFullYear() - 18,
        today.getMonth(),
        today.getDay(),
      );

      return date <= eighteenYearsAgo;
    }, "You must be at least 18 years old"),
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
    if (
      data.accountType === "company" &&
      (data.companyName == null || data.companyName.trim() === "")
    ) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["companyName"],
        message: "Company name is required",
      });
    }

    if (
      data.accountType === "company" &&
      (data.numberOfEmployees == null || data.numberOfEmployees <= 0)
    ) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["numberOfEmployees"],
        message: "Number of employees is required",
      });
    }

    if (data.password !== data.passwordConfirm) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["passwordConfirm"],
        message: "Password does not match",
      });
    }
  });

type FormValuesType = z.infer<typeof formSchema>;
