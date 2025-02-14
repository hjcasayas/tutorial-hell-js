import { z } from "zod";
import { baseSchema } from "./base.schema";
import { passwordSchema } from "./password.schema";
import { accountTypeSchema } from "./accont-type.schema";

export const formSchema = baseSchema.and(passwordSchema).and(accountTypeSchema);

export type FormValuesType = z.infer<typeof formSchema>;
