import { useMutation, useQueryClient } from "@tanstack/react-query"

import { deleteEmployee } from "@/api"
import { notify } from "@/utils"
import { useLocale } from "./useLocale"

export function useDeleteEmployee() {
  const queryClient = useQueryClient()
  const { t } = useLocale()

  return useMutation({
    mutationFn: (id) => deleteEmployee(id),
    onSuccess: () => {
      notify.success(t("toasts.employeeDeleted"))
      queryClient.invalidateQueries({ queryKey: ["employees"] })
    },
    onError: (error) => notify.error(error.message ?? t("toasts.genericError")),
  })
}
