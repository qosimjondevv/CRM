import { cn } from "@/lib/utils"
import { Card } from "@/components/ui"
import { TaskPriorityBadge } from "./TaskPriorityBadge"
import { TaskStatusBadge } from "./TaskStatusBadge"
import { TaskStatusSelect } from "./TaskStatusSelect"
import { TaskPersonCard } from "./TaskPersonCard"
import { useLocale } from "@/hooks"
import { formatDate, isOverdue } from "@/utils"

export function TaskDetailView({ task, canEditStatus, onStatusChange }) {
  const { t } = useLocale()
  const overdue = isOverdue(task.dueDate, task.status)

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[2fr_1fr]">
      <Card className="space-y-4 p-6">
        <div>
          <h2 className="text-xl font-semibold">{task.title}</h2>
          {task.description ? <p className="mt-2 text-sm text-muted-foreground">{task.description}</p> : null}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <TaskPriorityBadge priority={task.priority} />
          {canEditStatus ? (
            <TaskStatusSelect value={task.status} onChange={(status) => onStatusChange(task.id, status)} />
          ) : (
            <TaskStatusBadge status={task.status} />
          )}
        </div>
        <p className={cn("text-sm", overdue && "font-medium text-destructive")}>
          {t("tasks.dueDateLabel")} {formatDate(task.dueDate)}
        </p>
      </Card>

      <div className="space-y-4">
        <TaskPersonCard label={t("tasks.assigneeLabel")} person={task.assignedTo} />
        <TaskPersonCard label={t("tasks.creatorLabel")} person={task.createdBy} />
      </div>
    </div>
  )
}
