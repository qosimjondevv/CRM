import { CheckCircle2, CheckSquare, Clock, Users } from "lucide-react"

import { StatCard } from "./StatCard"
import { ActivityChart } from "./ActivityChart"
import { RecentEmployeesList } from "./RecentEmployeesList"
import { RecentTasksList } from "./RecentTasksList"
import { useLocale } from "@/hooks"

export function AdminDashboardView({ stats, chart, recentTasks, recentEmployees }) {
  const { t } = useLocale()

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          icon={Users}
          iconClassName="bg-blue-100 text-blue-600"
          label={t("dashboard.totalEmployees")}
          value={stats.totalEmployees}
        />
        <StatCard
          icon={CheckSquare}
          iconClassName="bg-indigo-100 text-indigo-600"
          label={t("dashboard.activeTasks")}
          value={stats.activeTasks}
        />
        <StatCard
          icon={CheckCircle2}
          iconClassName="bg-green-100 text-green-600"
          label={t("dashboard.completedTasks")}
          value={stats.completedTasks}
        />
        <StatCard
          icon={Clock}
          iconClassName="bg-orange-100 text-orange-600"
          label={t("dashboard.pendingTasks")}
          value={stats.pendingTasks}
          helper={
            stats.overdueTasks > 0 ? t("dashboard.overdueHelper", { count: stats.overdueTasks }) : undefined
          }
          helperClassName="text-destructive"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[2fr_1fr]">
        <ActivityChart title={t("dashboard.activityChartAdmin")} data={chart} />
        <RecentEmployeesList employees={recentEmployees} />
      </div>

      <RecentTasksList title={t("dashboard.recentTasksAdmin")} tasks={recentTasks} personKey="assignedTo" />
    </div>
  )
}
