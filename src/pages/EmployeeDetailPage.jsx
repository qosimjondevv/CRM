import { useParams } from "react-router-dom"

import { useEmployee, useLocale } from "@/hooks"
import { PageContainer, PageHeader } from "@/components/layout"
import { ErrorState, LoadingSkeleton } from "@/components/shared"
import { EmployeeProfileCard, EmployeeTaskStatsCard } from "@/components/employees"

export default function EmployeeDetailPage() {
  const { id } = useParams()
  const { t } = useLocale()
  const { data: employee, isLoading, isError, error } = useEmployee(id)

  return (
    <PageContainer>
      <PageHeader title={t("employees.detailTitle")} subtitle={t("employees.detailSubtitle")} />

      {isLoading ? (
        <LoadingSkeleton />
      ) : isError ? (
        <ErrorState message={error.message} />
      ) : (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <EmployeeProfileCard employee={employee} />
          <EmployeeTaskStatsCard taskStats={employee.taskStats} />
        </div>
      )}
    </PageContainer>
  )
}
