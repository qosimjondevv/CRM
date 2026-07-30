import { Link } from "react-router-dom"
import { Calendar } from "lucide-react"

import { cn } from "@/lib/utils"
import { Card } from "@/components/ui"
import { EmptyState } from "@/components/shared"
import { TaskStatusBadge } from "@/components/tasks"
import { useLocale } from "@/hooks"
import { formatDate, getFullName, isOverdue } from "@/utils"
import { ROUTE_PATHS } from "@/constants"

export function RecentTasksList({ title, tasks, personKey = "assignedTo" }) {
  const { t, locale } = useLocale()

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
        <div className="divide-y">
          {tasks.map((task) => {
            const person = task[personKey]
            const overdue = isOverdue(task.dueDate, task.status)
            return (
              <div key={task.id} className="flex items-start justify-between gap-3 py-3 first:pt-0 last:pb-0">
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium">{task.title}</p>
                  <p className="mt-0.5 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Calendar className={cn("size-3.5", overdue && "text-destructive")} />
                    <span className={cn(overdue && "font-medium text-destructive")}>
                      {formatDate(task.dueDate, locale)}
                    </span>
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
