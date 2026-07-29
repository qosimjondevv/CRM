import { StatusBadge } from "@/components/shared"
import { useLocale } from "@/hooks"
import { TASK_PRIORITY_BADGE_VARIANT } from "@/constants"

export function TaskPriorityBadge({ priority }) {
  const { t } = useLocale()
  return (
    <StatusBadge color={TASK_PRIORITY_BADGE_VARIANT[priority]}>{t(`taskPriority.${priority}`)}</StatusBadge>
  )
}
