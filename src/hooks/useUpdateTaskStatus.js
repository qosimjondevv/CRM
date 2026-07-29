import { useMutation, useQueryClient } from "@tanstack/react-query"

import { updateTaskStatus } from "@/api"
import { notify } from "@/utils"
import { useLocale } from "./useLocale"

export function useUpdateTaskStatus() {
  const queryClient = useQueryClient()
  const { t } = useLocale()

  return useMutation({
    mutationFn: ({ id, status }) => updateTaskStatus(id, status),
    onSuccess: () => {
      notify.success(t("toasts.taskStatusUpdated"))
      queryClient.invalidateQueries({ queryKey: ["tasks"] })
      queryClient.invalidateQueries({ queryKey: ["dashboard"] })
    },
    onError: (error) => notify.error(error.message ?? t("toasts.genericError")),
  })
}
