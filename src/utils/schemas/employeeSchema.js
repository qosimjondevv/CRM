import { z } from "zod"

function nameField(t, { minKey, maxKey, formatKey }) {
  return z
    .string()
    .min(2, t(minKey))
    .max(50, t(maxKey))
    .regex(/^[\p{L}\s'-]+$/u, t(formatKey))
}

function passwordField(t) {
  return z
    .string()
    .min(8, t("validation.passwordMin"))
    .max(72, t("validation.passwordMax"))
    .regex(/[a-z]/, t("validation.passwordLower"))
    .regex(/[A-Z]/, t("validation.passwordUpper"))
    .regex(/\d/, t("validation.passwordDigit"))
}

export function createEmployeeCreateSchema(t) {
  return z.object({
    firstName: nameField(t, {
      minKey: "validation.firstNameMin",
      maxKey: "validation.firstNameMax",
      formatKey: "validation.firstNameFormat",
    }),
    lastName: nameField(t, {
      minKey: "validation.lastNameMin",
      maxKey: "validation.lastNameMax",
      formatKey: "validation.lastNameFormat",
    }),
    email: z.string().min(1, t("validation.emailRequired")).email(t("validation.emailInvalid")),
    password: passwordField(t),
    position: z.string().min(2, t("validation.positionMin")).max(80, t("validation.positionMax")),
    phone: z.string().optional().or(z.literal("")),
    avatar: z.string().url(t("validation.urlInvalid")).optional().or(z.literal("")),
    role: z.enum(["ADMIN", "EMPLOYEE"]).optional(),
    status: z.enum(["ACTIVE", "INACTIVE", "ON_LEAVE"]).optional(),
  })
}

export function createEmployeeUpdateSchema(t) {
  return createEmployeeCreateSchema(t)
    .partial()
    .extend({
      password: passwordField(t).optional().or(z.literal("")),
    })
}
