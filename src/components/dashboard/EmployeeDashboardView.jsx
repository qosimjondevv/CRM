import { CheckCircle2, CheckSquare, Clock } from "lucide-react"

import { StatCard } from "./StatCard"
import { ActivityChart } from "./ActivityChart"
import { RecentTasksList } from "./RecentTasksList"
import { useLocale } from "@/hooks"

export function EmployeeDashboardView({ stats, chart, myTasks }) {
  const { t } = useLocale()

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatCard
          icon={CheckSquare}
          iconClassName="bg-indigo-100 text-indigo-600"
          label={t("dashboard.assignedTasks")}
          value={stats.assignedTasks}
        />
        <StatCard
          icon={CheckCircle2}
          iconClassName="bg-green-100 text-green-600"
          label={t("dashboard.completed")}
          value={stats.completedTasks}
        />
        <StatCard
          icon={Clock}
          iconClassName="bg-orange-100 text-orange-600"
          label={t("dashboard.pending")}
          value={stats.pendingTasks}
          helper={
            stats.overdueTasks > 0 ? t("dashboard.overdueHelper", { count: stats.overdueTasks }) : undefined
          }
          helperClassName="text-destructive"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <ActivityChart title={t("dashboard.activityChartEmployee")} data={chart} />
        <RecentTasksList title={t("dashboard.recentTasksEmployee")} tasks={myTasks} personKey="createdBy" />
      </div>
    </div>
  )
}
