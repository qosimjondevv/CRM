import { useState } from "react"
import { Plus } from "lucide-react"

import { useEmployees, useQueryParams, useDebouncedValue, useLocale } from "@/hooks"
import { PageContainer, PageHeader } from "@/components/layout"
import {
  EmployeeFilters,
  EmployeeTable,
  EmployeeFormDialog,
  DeleteEmployeeDialog,
} from "@/components/employees"
import { DataTablePagination, ErrorState } from "@/components/shared"
import { Button } from "@/components/ui"
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE, SEARCH_DEBOUNCE_MS } from "@/constants"

const INITIAL_FILTERS = {
  page: DEFAULT_PAGE,
  pageSize: DEFAULT_PAGE_SIZE,
  search: "",
  role: "ALL",
  status: "ALL",
  sortBy: "createdAt",
  sortOrder: "desc",
}

export default function EmployeesPage() {
  const { t } = useLocale()
  const { params, setParam } = useQueryParams(INITIAL_FILTERS)
  const debouncedSearch = useDebouncedValue(params.search, SEARCH_DEBOUNCE_MS)
  const { data, isLoading, isError, error } = useEmployees({ ...params, search: debouncedSearch })

  const [formState, setFormState] = useState({ open: false, mode: "create", employee: null })
  const [deleteTarget, setDeleteTarget] = useState(null)

  return (
    <PageContainer>
      <PageHeader title={t("employees.title")} subtitle={t("employees.subtitle")}>
        <Button onClick={() => setFormState({ open: true, mode: "create", employee: null })}>
          <Plus className="size-4" />
          {t("employees.addEmployee")}
        </Button>
      </PageHeader>

      <EmployeeFilters filters={params} onFilterChange={setParam} />

      {isError ? (
        <ErrorState message={error.message} />
      ) : (
        <>
          <EmployeeTable
            employees={data?.data}
            isLoading={isLoading}
            onEdit={(employee) => setFormState({ open: true, mode: "edit", employee })}
            onDelete={(employee) => setDeleteTarget(employee)}
          />
          <DataTablePagination meta={data?.meta} onPageChange={(page) => setParam("page", page)} />
        </>
      )}

      <EmployeeFormDialog
        key={formState.employee?.id ?? "create"}
        open={formState.open}
        onOpenChange={(open) => setFormState((state) => ({ ...state, open }))}
        mode={formState.mode}
        employee={formState.employee}
      />

      {deleteTarget ? (
        <DeleteEmployeeDialog
          employee={deleteTarget}
          open={!!deleteTarget}
          onOpenChange={(open) => !open && setDeleteTarget(null)}
        />
      ) : null}
    </PageContainer>
  )
}
