import { z } from "zod";

export const accountTypeSchema = z
  .object({
    accountType: z.enum(["personal", "company"], { message: "Required" }),
    companyName: z.string().optional(),
    numberOfEmployees: z.coerce.number().optional(),
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
  });
