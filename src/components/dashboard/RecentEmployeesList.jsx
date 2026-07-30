import { Link } from "react-router-dom"

import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage, Card } from "@/components/ui"
import { EmptyState } from "@/components/shared"
import { EmployeeStatusBadge } from "@/components/employees"
import { useLocale } from "@/hooks"
import { getFullName, getInitials } from "@/utils"
import { ROUTE_PATHS, EMPLOYEE_STATUS } from "@/constants"

const AVATAR_RING = {
  [EMPLOYEE_STATUS.ACTIVE]: "ring-green-500/50",
  [EMPLOYEE_STATUS.INACTIVE]: "ring-border",
  [EMPLOYEE_STATUS.ON_LEAVE]: "ring-yellow-500/50",
}

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
        <div className="divide-y">
          {employees.map((employee) => (
            <Link
              key={employee.id}
              to={ROUTE_PATHS.EMPLOYEE_DETAIL(employee.id)}
              className="-mx-2 flex items-center justify-between gap-3 rounded-lg px-2 py-3 transition-colors first:pt-0 last:pb-0 hover:bg-muted/50"
            >
              <div className="flex min-w-0 items-center gap-3">
                <Avatar className={cn("size-8 ring-2 ring-offset-2 ring-offset-card", AVATAR_RING[employee.status])}>
                  <AvatarImage src={employee.avatar} alt={getFullName(employee)} />
                  <AvatarFallback>{getInitials(employee.firstName, employee.lastName)}</AvatarFallback>
                </Avatar>
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium">{getFullName(employee)}</p>
                  <p className="truncate text-xs text-muted-foreground">{employee.position}</p>
                </div>
              </div>
              <EmployeeStatusBadge status={employee.status} />
            </Link>
          ))}
        </div>
      )}
    </Card>
  )
}
