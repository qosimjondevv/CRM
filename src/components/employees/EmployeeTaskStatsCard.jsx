import { cn } from "@/lib/utils"
import { Card } from "@/components/ui"
import { useLocale } from "@/hooks"

function StatItem({ label, value, valueClassName }) {
  return (
    <div>
      <p className={cn("text-2xl font-bold", valueClassName)}>{value}</p>
      <p className="text-xs text-muted-foreground">{label}</p>
    </div>
  )
}

export function EmployeeTaskStatsCard({ taskStats }) {
  const { t } = useLocale()

  return (
    <Card className="p-6">
      <p className="mb-4 font-semibold">{t("employees.taskStatsTitle")}</p>
      <div className="grid grid-cols-2 gap-4 text-center sm:grid-cols-3">
        <StatItem label={t("employees.total")} value={taskStats.total} />
        <StatItem label={t("employees.todo")} value={taskStats.todo} />
        <StatItem label={t("employees.inProgress")} value={taskStats.inProgress} />
        <StatItem label={t("employees.done")} value={taskStats.done} />
        <StatItem
          label={t("employees.overdue")}
          value={taskStats.overdue}
          valueClassName="text-destructive"
        />
      </div>
    </Card>
  )
}
