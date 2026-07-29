import { Navigate, Outlet } from "react-router-dom"

import { useRoleGuard } from "@/hooks"
import { PageSkeleton } from "@/components/layout"
import { ROUTE_PATHS } from "@/constants"

export function RoleRoute({ roles }) {
  const { allowed, isLoading } = useRoleGuard(roles)

  if (isLoading) return <PageSkeleton />
  if (!allowed) return <Navigate to={ROUTE_PATHS.DASHBOARD} replace />
  return <Outlet />
}
