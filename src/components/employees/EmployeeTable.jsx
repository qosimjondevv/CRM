import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui"
import { EmptyState, LoadingSkeleton } from "@/components/shared"
import { EmployeeTableRow } from "./EmployeeTableRow"
import { useLocale } from "@/hooks"

export function EmployeeTable({ employees, isLoading, onEdit, onDelete }) {
  const { t } = useLocale()

  if (isLoading) return <LoadingSkeleton />
  if (!employees?.length) return <EmptyState title={t("employees.noEmployeesFound")} />

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>{t("employees.columnEmployee")}</TableHead>
          <TableHead>{t("employees.columnPosition")}</TableHead>
          <TableHead>{t("employees.columnRole")}</TableHead>
          <TableHead>{t("employees.columnStatus")}</TableHead>
          <TableHead>{t("employees.columnJoined")}</TableHead>
          <TableHead className="w-10" />
        </TableRow>
      </TableHeader>
      <TableBody>
        {employees.map((employee) => (
          <EmployeeTableRow key={employee.id} employee={employee} onEdit={onEdit} onDelete={onDelete} />
        ))}
      </TableBody>
    </Table>
  )
}
