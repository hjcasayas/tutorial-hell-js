import { z } from "zod";

export const baseSchema = z.object({
  email: z.string().email(),

  dob: z.date().refine((date) => {
    const today = new Date();
    const eighteenYearsAgo = new Date(
      today.getFullYear() - 18,
      today.getMonth(),
      today.getDay(),
    );

    return date <= eighteenYearsAgo;
  }, "You must be at least 18 years old"),
  termsAndCondition: z
    .boolean({
      required_error: "You must accept the terms and conditions",
    })
    .refine((accepted) => {
      return accepted;
    }, "You must accept the terms and conditions"),
});
