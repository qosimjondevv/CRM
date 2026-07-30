import { Link } from "react-router-dom"
import { MoreVertical } from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  TableCell,
  TableRow,
} from "@/components/ui"
import { EmployeeRoleBadge } from "./EmployeeRoleBadge"
import { EmployeeStatusBadge } from "./EmployeeStatusBadge"
import { useLocale } from "@/hooks"
import { formatDate, getFullName, getInitials } from "@/utils"
import { ROUTE_PATHS } from "@/constants"

export function EmployeeTableRow({ employee, onEdit, onDelete }) {
  const { t, locale } = useLocale()

  return (
    <TableRow>
      <TableCell>
        <Link to={ROUTE_PATHS.EMPLOYEE_DETAIL(employee.id)} className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={employee.avatar} alt={getFullName(employee)} />
            <AvatarFallback>{getInitials(employee.firstName, employee.lastName)}</AvatarFallback>
          </Avatar>
          <div className="min-w-0">
            <p className="truncate font-medium">{getFullName(employee)}</p>
            <p className="truncate text-sm text-muted-foreground">{employee.email}</p>
          </div>
        </Link>
      </TableCell>
      <TableCell>{employee.position}</TableCell>
      <TableCell>
        <EmployeeRoleBadge role={employee.role} />
      </TableCell>
      <TableCell>
        <EmployeeStatusBadge status={employee.status} />
      </TableCell>
      <TableCell>{formatDate(employee.createdAt, locale)}</TableCell>
      <TableCell>
        <DropdownMenu>
          <DropdownMenuTrigger render={<Button variant="ghost" size="icon-sm" />}>
            <MoreVertical className="size-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => onEdit(employee)}>{t("common.edit")}</DropdownMenuItem>
            <DropdownMenuItem variant="destructive" onClick={() => onDelete(employee)}>
              {t("common.delete")}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  )
}
