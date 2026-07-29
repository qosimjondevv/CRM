import { StatusBadge } from "@/components/shared"
import { useLocale } from "@/hooks"
import { ROLE_BADGE_VARIANT } from "@/constants"

export function EmployeeRoleBadge({ role }) {
  const { t } = useLocale()
  return <StatusBadge color={ROLE_BADGE_VARIANT[role]}>{t(`roles.${role}`)}</StatusBadge>
}
