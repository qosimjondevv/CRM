import { useMemo } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { useChangePassword } from "./useChangePassword"
import { useLocale } from "./useLocale"
import { createPasswordSchema, createFieldErrorHandler } from "@/utils"

const EMPTY_VALUES = { currentPassword: "", newPassword: "", confirmPassword: "" }

export function usePasswordForm() {
  const { t } = useLocale()
  const mutation = useChangePassword()
  const schema = useMemo(() => createPasswordSchema(t), [t])

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: EMPTY_VALUES,
  })

  const onSubmit = form.handleSubmit((values) => {
    mutation.mutate(values, {
      onSuccess: () => form.reset(EMPTY_VALUES),
      onError: createFieldErrorHandler(form.setError, t),
    })
  })

  return { form, onSubmit, isPending: mutation.isPending }
}
