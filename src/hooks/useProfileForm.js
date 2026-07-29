import { useEffect, useMemo } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { useUpdateProfile } from "./useUpdateProfile"
import { useLocale } from "./useLocale"
import { createProfileSchema, createFieldErrorHandler } from "@/utils"

export function useProfileForm(profile) {
  const { t } = useLocale()
  const mutation = useUpdateProfile()
  const schema = useMemo(() => createProfileSchema(t), [t])

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: { firstName: "", lastName: "", position: "", phone: "", avatar: "" },
  })

  useEffect(() => {
    if (profile) {
      form.reset({
        firstName: profile.firstName ?? "",
        lastName: profile.lastName ?? "",
        position: profile.position ?? "",
        phone: profile.phone ?? "",
        avatar: profile.avatar ?? "",
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profile?.id])

  const onSubmit = form.handleSubmit((values) => {
    const payload = { ...values }
    if (!payload.phone) delete payload.phone
    if (!payload.avatar) delete payload.avatar

    mutation.mutate(payload, {
      onError: createFieldErrorHandler(form.setError, t),
    })
  })

  return { form, onSubmit, isPending: mutation.isPending, isDirty: form.formState.isDirty }
}
