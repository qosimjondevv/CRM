import { ROLES } from "@/constants"

export function isAdmin(user) {
  return user?.role === ROLES.ADMIN
}

export function canManageTask(user, task) {
  if (isAdmin(user)) return true
  return task?.assignedTo?.id === user?.id
}
