import { useEffect, useMemo } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { useCreateTask } from "./useCreateTask"
import { useUpdateTask } from "./useUpdateTask"
import { useLocale } from "./useLocale"
import { createTaskSchema, createFieldErrorHandler } from "@/utils"

const EMPTY_VALUES = {
  title: "",
  description: "",
  priority: "MEDIUM",
  status: "TODO",
  dueDate: "",
  assignedToId: "UNASSIGNED",
}

export function useTaskForm({ mode, task, onSuccess }) {
  const isEdit = mode === "edit"
  const { t } = useLocale()
  const createMutation = useCreateTask()
  const updateMutation = useUpdateTask()
  const mutation = isEdit ? updateMutation : createMutation

  const schema = useMemo(() => createTaskSchema(t), [t])

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: EMPTY_VALUES,
  })

  useEffect(() => {
    if (isEdit && task) {
      form.reset({
        title: task.title ?? "",
        description: task.description ?? "",
        priority: task.priority ?? "MEDIUM",
        status: task.status ?? "TODO",
        dueDate: task.dueDate ? task.dueDate.slice(0, 10) : "",
        assignedToId: task.assignedTo?.id ?? "UNASSIGNED",
      })
    } else if (!isEdit) {
      form.reset(EMPTY_VALUES)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEdit, task?.id])

  const onSubmit = form.handleSubmit((values) => {
    const payload = {
      ...values,
      assignedToId: values.assignedToId === "UNASSIGNED" ? null : values.assignedToId,
    }
    if (!payload.description) delete payload.description

    const action = isEdit
      ? updateMutation.mutateAsync({ id: task.id, values: payload })
      : createMutation.mutateAsync(payload)

    action
      .then(() => {
        form.reset(EMPTY_VALUES)
        onSuccess?.()
      })
      .catch(createFieldErrorHandler(form.setError, t))
  })

  return { form, onSubmit, isPending: mutation.isPending }
}
