import { useMutation, useQueryClient } from "@tanstack/react-query"

import { updateEmployee } from "@/api"
import { notify } from "@/utils"
import { useLocale } from "./useLocale"

export function useUpdateEmployee() {
  const queryClient = useQueryClient()
  const { t } = useLocale()

  return useMutation({
    mutationFn: ({ id, values }) => updateEmployee(id, values),
    onSuccess: () => {
      notify.success(t("toasts.employeeUpdated"))
      queryClient.invalidateQueries({ queryKey: ["employees"] })
    },
  })
}
