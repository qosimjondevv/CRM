import { useMutation } from "@tanstack/react-query"

import { changePassword } from "@/api"
import { notify } from "@/utils"
import { useLocale } from "./useLocale"

export function useChangePassword() {
  const { t } = useLocale()

  return useMutation({
    mutationFn: (values) => changePassword(values),
    onSuccess: () => notify.success(t("toasts.passwordChanged")),
  })
}
