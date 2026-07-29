import { useMutation, useQueryClient } from "@tanstack/react-query"

import { updateProfile } from "@/api"
import { notify } from "@/utils"
import { queryKeys } from "@/constants"
import { useAuth } from "./useAuth"
import { useLocale } from "./useLocale"

export function useUpdateProfile() {
  const queryClient = useQueryClient()
  const { setUser } = useAuth()
  const { t } = useLocale()

  return useMutation({
    mutationFn: (values) => updateProfile(values),
    onSuccess: ({ data }) => {
      notify.success(t("toasts.profileUpdated"))
      setUser(data)
      queryClient.invalidateQueries({ queryKey: queryKeys.profile.root })
    },
  })
}
