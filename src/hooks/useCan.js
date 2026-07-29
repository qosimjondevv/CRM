import { useAuth } from "./useAuth"
import { ROLES } from "@/constants"

export function useCan() {
  const { user } = useAuth()

  return {
    role: user?.role ?? null,
    isAdmin: user?.role === ROLES.ADMIN,
    hasRole: (roles) => (roles ?? []).includes(user?.role),
  }
}
