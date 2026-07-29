import { Link } from "react-router-dom"

import { Avatar, AvatarFallback, AvatarImage, Card } from "@/components/ui"
import { EmptyState } from "@/components/shared"
import { EmployeeStatusBadge } from "@/components/employees"
import { useLocale } from "@/hooks"
import { getFullName, getInitials } from "@/utils"
import { ROUTE_PATHS } from "@/constants"

export function RecentEmployeesList({ employees }) {
  const { t } = useLocale()

  return (
    <Card className="p-5">
      <div className="mb-3 flex items-center justify-between">
        <p className="font-semibold">{t("dashboard.recentEmployees")}</p>
        <Link to={ROUTE_PATHS.EMPLOYEES} className="text-sm text-primary hover:underline">
          {t("common.viewAll")}
        </Link>
      </div>

      {!employees?.length ? (
        <EmptyState title={t("dashboard.noEmployees")} />
      ) : (
        <div className="space-y-3">
          {employees.map((employee) => (
            <div key={employee.id} className="flex items-center justify-between gap-3">
              <div className="flex min-w-0 items-center gap-3">
                <Avatar className="size-8">
                  <AvatarImage src={employee.avatar} alt={getFullName(employee)} />
                  <AvatarFallback>{getInitials(employee.firstName, employee.lastName)}</AvatarFallback>
                </Avatar>
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium">{getFullName(employee)}</p>
                  <p className="truncate text-xs text-muted-foreground">{employee.position}</p>
                </div>
              </div>
              <EmployeeStatusBadge status={employee.status} />
            </div>
          ))}
        </div>
      )}
    </Card>
  )
}
