import { Avatar, AvatarFallback, AvatarImage, Card } from "@/components/ui"
import { EmployeeRoleBadge } from "./EmployeeRoleBadge"
import { EmployeeStatusBadge } from "./EmployeeStatusBadge"
import { useLocale } from "@/hooks"
import { formatDate, getFullName, getInitials } from "@/utils"

export function EmployeeProfileCard({ employee }) {
  const { t } = useLocale()

  return (
    <Card className="flex flex-col items-center gap-3 p-6 text-center">
      <Avatar className="size-16">
        <AvatarImage src={employee.avatar} alt={getFullName(employee)} />
        <AvatarFallback className="text-lg">
          {getInitials(employee.firstName, employee.lastName)}
        </AvatarFallback>
      </Avatar>
      <div>
        <p className="text-lg font-semibold">{getFullName(employee)}</p>
        <p className="text-sm text-muted-foreground">{employee.position}</p>
      </div>
      <div className="flex gap-2">
        <EmployeeRoleBadge role={employee.role} />
        <EmployeeStatusBadge status={employee.status} />
      </div>
      <div className="w-full space-y-1 border-t pt-3 text-left text-sm">
        <p>
          <span className="text-muted-foreground">{t("employees.contactEmail")}</span> {employee.email}
        </p>
        <p>
          <span className="text-muted-foreground">{t("employees.contactPhone")}</span> {employee.phone || "—"}
        </p>
        <p>
          <span className="text-muted-foreground">{t("employees.joinedOn")}</span>{" "}
          {formatDate(employee.createdAt)}
        </p>
      </div>
    </Card>
  )
}
