import { Navigate, Outlet } from "react-router-dom"

import { useAuth } from "@/hooks"
import { PageSkeleton } from "@/components/layout"
import { ROUTE_PATHS } from "@/constants"

export function ProtectedRoute() {
  const { isAuthenticated, isLoading } = useAuth()

  if (isLoading) return <PageSkeleton />
  if (!isAuthenticated) return <Navigate to={ROUTE_PATHS.LOGIN} replace />
  return <Outlet />
}
