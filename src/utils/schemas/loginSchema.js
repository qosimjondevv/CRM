import { z } from "zod"

export function createLoginSchema(t) {
  return z.object({
    email: z.string().min(1, t("validation.emailRequired")).email(t("validation.emailInvalid")),
    password: z.string().min(1, t("validation.passwordRequired")),
  })
}
