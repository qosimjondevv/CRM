import { StatusBadge } from "@/components/shared"
import { useLocale } from "@/hooks"
import { TASK_STATUS_BADGE_VARIANT } from "@/constants"

export function TaskStatusBadge({ status }) {
  const { t } = useLocale()
  return <StatusBadge color={TASK_STATUS_BADGE_VARIANT[status]}>{t(`taskStatus.${status}`)}</StatusBadge>
}
