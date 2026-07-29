import { z } from "zod"

export function createTaskSchema(t) {
  return z.object({
    title: z.string().min(3, t("validation.titleMin")).max(120, t("validation.titleMax")),
    description: z.string().max(2000, t("validation.descriptionMax")).optional().or(z.literal("")),
    priority: z.enum(["LOW", "MEDIUM", "HIGH"]).optional(),
    status: z.enum(["TODO", "IN_PROGRESS", "DONE"]).optional(),
    dueDate: z.string().min(1, t("validation.dueDateRequired")),
    assignedToId: z.string().nullable().optional(),
  })
}
