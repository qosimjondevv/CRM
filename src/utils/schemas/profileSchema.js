import { z } from "zod"

export function createProfileSchema(t) {
  return z.object({
    firstName: z.string().min(2, t("validation.firstNameMin")).max(50, t("validation.firstNameMax")),
    lastName: z.string().min(2, t("validation.lastNameMin")).max(50, t("validation.lastNameMax")),
    position: z.string().min(2, t("validation.positionMin")).max(80, t("validation.positionMax")),
    phone: z.string().optional().or(z.literal("")),
    avatar: z.string().url(t("validation.urlInvalid")).optional().or(z.literal("")),
  })
}
