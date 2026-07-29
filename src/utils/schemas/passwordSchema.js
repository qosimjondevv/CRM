import { z } from "zod"

export function createPasswordSchema(t) {
  return z
    .object({
      currentPassword: z.string().min(1, t("validation.currentPasswordRequired")),
      newPassword: z
        .string()
        .min(8, t("validation.passwordMin"))
        .max(72, t("validation.passwordMax"))
        .regex(/[a-z]/, t("validation.passwordLower"))
        .regex(/[A-Z]/, t("validation.passwordUpper"))
        .regex(/\d/, t("validation.passwordDigit")),
      confirmPassword: z.string().min(1, t("validation.confirmPasswordRequired")),
    })
    .refine((data) => data.newPassword === data.confirmPassword, {
      message: t("validation.passwordsMismatch"),
      path: ["confirmPassword"],
    })
}
