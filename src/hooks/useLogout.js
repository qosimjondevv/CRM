import { useMutation } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"

import { useAuth } from "./useAuth"
import { ROUTE_PATHS } from "@/constants"

export function useLogout() {
  const { logout } = useAuth()
  const navigate = useNavigate()

  return useMutation({
    mutationFn: logout,
    onSuccess: () => navigate(ROUTE_PATHS.LOGIN, { replace: true }),
  })
}
