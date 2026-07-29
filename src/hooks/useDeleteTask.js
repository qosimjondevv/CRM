import { useMutation, useQueryClient } from "@tanstack/react-query"

import { deleteTask } from "@/api"
import { notify } from "@/utils"
import { useLocale } from "./useLocale"

export function useDeleteTask() {
  const queryClient = useQueryClient()
  const { t } = useLocale()

  return useMutation({
    mutationFn: (id) => deleteTask(id),
    onSuccess: () => {
      notify.success(t("toasts.taskDeleted"))
      queryClient.invalidateQueries({ queryKey: ["tasks"] })
      queryClient.invalidateQueries({ queryKey: ["dashboard"] })
    },
    onError: (error) => notify.error(error.message ?? t("toasts.genericError")),
  })
}
