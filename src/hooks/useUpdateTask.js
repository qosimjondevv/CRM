import { useMutation, useQueryClient } from "@tanstack/react-query"

import { updateTask } from "@/api"
import { notify } from "@/utils"
import { useLocale } from "./useLocale"

export function useUpdateTask() {
  const queryClient = useQueryClient()
  const { t } = useLocale()

  return useMutation({
    mutationFn: ({ id, values }) => updateTask(id, values),
    onSuccess: () => {
      notify.success(t("toasts.taskUpdated"))
      queryClient.invalidateQueries({ queryKey: ["tasks"] })
      queryClient.invalidateQueries({ queryKey: ["dashboard"] })
    },
  })
}
