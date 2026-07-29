import { useMutation, useQueryClient } from "@tanstack/react-query"

import { createTask } from "@/api"
import { notify } from "@/utils"
import { useLocale } from "./useLocale"

export function useCreateTask() {
  const queryClient = useQueryClient()
  const { t } = useLocale()

  return useMutation({
    mutationFn: (values) => createTask(values),
    onSuccess: () => {
      notify.success(t("toasts.taskCreated"))
      queryClient.invalidateQueries({ queryKey: ["tasks"] })
      queryClient.invalidateQueries({ queryKey: ["dashboard"] })
    },
  })
}
