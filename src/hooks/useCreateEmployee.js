import { useMutation, useQueryClient } from "@tanstack/react-query"

import { createEmployee } from "@/api"
import { notify } from "@/utils"
import { useLocale } from "./useLocale"

export function useCreateEmployee() {
  const queryClient = useQueryClient()
  const { t } = useLocale()

  return useMutation({
    mutationFn: (values) => createEmployee(values),
    onSuccess: () => {
      notify.success(t("toasts.employeeCreated"))
      queryClient.invalidateQueries({ queryKey: ["employees"] })
    },
  })
}
