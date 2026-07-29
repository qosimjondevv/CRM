import { useLocale } from "./useLocale"
import { ROLES, TASK_STATUS, TASK_PRIORITY, EMPLOYEE_STATUS } from "@/constants"

export function useRoleOptions() {
  const { t } = useLocale()
  return Object.values(ROLES).map((value) => ({ value, label: t(`roles.${value}`) }))
}

export function useRoleFilterOptions() {
  const { t } = useLocale()
  const options = useRoleOptions()
  return [{ value: "ALL", label: t("common.all") }, ...options]
}

export function useTaskStatusOptions() {
  const { t } = useLocale()
  return Object.values(TASK_STATUS).map((value) => ({ value, label: t(`taskStatus.${value}`) }))
}

export function useTaskStatusFilterOptions() {
  const { t } = useLocale()
  const options = useTaskStatusOptions()
  return [{ value: "ALL", label: t("common.all") }, ...options]
}

export function useTaskPriorityOptions() {
  const { t } = useLocale()
  return Object.values(TASK_PRIORITY).map((value) => ({ value, label: t(`taskPriority.${value}`) }))
}

export function useTaskPriorityFilterOptions() {
  const { t } = useLocale()
  const options = useTaskPriorityOptions()
  return [{ value: "ALL", label: t("common.all") }, ...options]
}

export function useEmployeeStatusOptions() {
  const { t } = useLocale()
  return Object.values(EMPLOYEE_STATUS).map((value) => ({ value, label: t(`employeeStatus.${value}`) }))
}

export function useEmployeeStatusFilterOptions() {
  const { t } = useLocale()
  const options = useEmployeeStatusOptions()
  return [{ value: "ALL", label: t("common.all") }, ...options]
}
