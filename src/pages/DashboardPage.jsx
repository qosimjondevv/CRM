import { useAuth, useDashboard, useLocale } from "@/hooks"
import { PageContainer, PageHeader } from "@/components/layout"
import { AdminDashboardView, EmployeeDashboardView } from "@/components/dashboard"
import { ErrorState, LoadingSkeleton } from "@/components/shared"

export default function DashboardPage() {
  const { user } = useAuth()
  const { t } = useLocale()
  const { data, isLoading, isError, error } = useDashboard()

  const isAdmin = data?.scope === "ADMIN"

  return (
    <PageContainer>
      <PageHeader
        title={
          isAdmin ? t("dashboard.adminTitle", { name: user?.firstName ?? "" }) : t("dashboard.employeeTitle")
        }
        subtitle={isAdmin ? t("dashboard.adminSubtitle") : t("dashboard.employeeSubtitle")}
      />

      {isLoading ? (
        <div className="space-y-4">
          <LoadingSkeleton className="h-24" />
          <LoadingSkeleton />
        </div>
      ) : isError ? (
        <ErrorState message={error.message} />
      ) : isAdmin ? (
        <AdminDashboardView {...data} />
      ) : (
        <EmployeeDashboardView {...data} />
      )}
    </PageContainer>
  )
}
