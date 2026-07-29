import { useEffect, useMemo } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { useCreateEmployee } from "./useCreateEmployee"
import { useUpdateEmployee } from "./useUpdateEmployee"
import { useLocale } from "./useLocale"
import { createEmployeeCreateSchema, createEmployeeUpdateSchema, createFieldErrorHandler } from "@/utils"

const EMPTY_VALUES = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  position: "",
  phone: "",
  avatar: "",
  role: "EMPLOYEE",
  status: "ACTIVE",
}

export function useEmployeeForm({ mode, employee, onSuccess }) {
  const isEdit = mode === "edit"
  const { t } = useLocale()
  const createMutation = useCreateEmployee()
  const updateMutation = useUpdateEmployee()
  const mutation = isEdit ? updateMutation : createMutation

  const schema = useMemo(
    () => (isEdit ? createEmployeeUpdateSchema(t) : createEmployeeCreateSchema(t)),
    [isEdit, t]
  )

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: EMPTY_VALUES,
  })

  useEffect(() => {
    if (isEdit && employee) {
      form.reset({
        firstName: employee.firstName ?? "",
        lastName: employee.lastName ?? "",
        email: employee.email ?? "",
        password: "",
        position: employee.position ?? "",
        phone: employee.phone ?? "",
        avatar: employee.avatar ?? "",
        role: employee.role ?? "EMPLOYEE",
        status: employee.status ?? "ACTIVE",
      })
    } else if (!isEdit) {
      form.reset(EMPTY_VALUES)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEdit, employee?.id])

  const onSubmit = form.handleSubmit((values) => {
    const payload = { ...values }
    if (!payload.password) delete payload.password
    if (!payload.avatar) delete payload.avatar
    if (!payload.phone) delete payload.phone

    const action = isEdit
      ? updateMutation.mutateAsync({ id: employee.id, values: payload })
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
