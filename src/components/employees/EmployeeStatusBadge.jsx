import { StatusBadge } from "@/components/shared"
import { useLocale } from "@/hooks"
import { EMPLOYEE_STATUS_BADGE_VARIANT } from "@/constants"

export function EmployeeStatusBadge({ status }) {
  const { t } = useLocale()
  return (
    <StatusBadge color={EMPLOYEE_STATUS_BADGE_VARIANT[status]}>{t(`employeeStatus.${status}`)}</StatusBadge>
  )
}
