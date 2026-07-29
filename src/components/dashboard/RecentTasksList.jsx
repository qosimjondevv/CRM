import { Link } from "react-router-dom"

import { cn } from "@/lib/utils"
import { Card } from "@/components/ui"
import { EmptyState } from "@/components/shared"
import { TaskStatusBadge } from "@/components/tasks"
import { useLocale } from "@/hooks"
import { formatDate, getFullName, isOverdue } from "@/utils"
import { ROUTE_PATHS } from "@/constants"

export function RecentTasksList({ title, tasks, personKey = "assignedTo" }) {
  const { t } = useLocale()

  return (
    <Card className="p-5">
      <div className="mb-3 flex items-center justify-between">
        <p className="font-semibold">{title}</p>
        <Link to={ROUTE_PATHS.TASKS} className="text-sm text-primary hover:underline">
          {t("common.viewAll")}
        </Link>
      </div>

      {!tasks?.length ? (
        <EmptyState title={t("dashboard.noTasks")} />
      ) : (
        <div className="space-y-3">
          {tasks.map((task) => {
            const person = task[personKey]
            const overdue = isOverdue(task.dueDate, task.status)
            return (
              <div key={task.id} className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium">{task.title}</p>
                  <p className="text-xs text-muted-foreground">
                    <span className={cn(overdue && "text-destructive")}>{formatDate(task.dueDate)}</span>
                    {person ? ` · ${getFullName(person)}` : null}
                  </p>
                </div>
                <TaskStatusBadge status={task.status} />
              </div>
            )
          })}
        </div>
      )}
    </Card>
  )
}
