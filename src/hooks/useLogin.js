import { useMemo } from "react"
import { useMutation } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useNavigate } from "react-router-dom"

import { useAuth } from "./useAuth"
import { useLocale } from "./useLocale"
import { createLoginSchema, createFieldErrorHandler } from "@/utils"
import { ROUTE_PATHS } from "@/constants"

export function useLogin() {
  const { login } = useAuth()
  const { t } = useLocale()
  const navigate = useNavigate()

  const schema = useMemo(() => createLoginSchema(t), [t])

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: { email: "", password: "" },
  })

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: () => navigate(ROUTE_PATHS.DASHBOARD, { replace: true }),
    onError: createFieldErrorHandler(form.setError, t),
  })

  return {
    form,
    onSubmit: form.handleSubmit((values) => mutation.mutate(values)),
    isPending: mutation.isPending,
  }
}
