import { useEffect, useRef } from "react"

import { useAuth } from "./useAuth"
import { useCan } from "./useCan"
import { useLocale } from "./useLocale"
import { notify } from "@/utils"

export function useRoleGuard(roles) {
  const { isLoading } = useAuth()
  const { hasRole } = useCan()
  const { t } = useLocale()
  const allowed = hasRole(roles)
  const hasNotified = useRef(false)

  useEffect(() => {
    if (!isLoading && !allowed && !hasNotified.current) {
      hasNotified.current = true
      notify.error(t("toasts.accessDenied"))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading, allowed])

  return { allowed, isLoading }
}
