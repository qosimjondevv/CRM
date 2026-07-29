import { useCan } from "@/hooks"

export function Can({ roles, children }) {
  const { hasRole } = useCan()
  if (!hasRole(roles)) return null
  return children
}
