import { useState } from "react"
import { Plus } from "lucide-react"

import {
  useTasks,
  useAssignableEmployees,
  useUpdateTaskStatus,
  useQueryParams,
  useDebouncedValue,
  useCan,
  useLocale,
} from "@/hooks"
import { PageContainer, PageHeader } from "@/components/layout"
import { TaskFilters, TaskTable, TaskFormDialog, DeleteTaskDialog } from "@/components/tasks"
import { DataTablePagination, ErrorState } from "@/components/shared"
import { Button } from "@/components/ui"
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE, SEARCH_DEBOUNCE_MS } from "@/constants"

const INITIAL_FILTERS = {
  page: DEFAULT_PAGE,
  pageSize: DEFAULT_PAGE_SIZE,
  search: "",
  status: "ALL",
  priority: "ALL",
  assignedToId: "ALL",
  sortBy: "dueDate",
  sortOrder: "asc",
}

export default function TasksPage() {
  const { isAdmin } = useCan()
  const { t } = useLocale()
  const { params, setParam } = useQueryParams(INITIAL_FILTERS)
  const debouncedSearch = useDebouncedValue(params.search, SEARCH_DEBOUNCE_MS)
  const { data, isLoading, isError, error } = useTasks({ ...params, search: debouncedSearch })
  const { data: assignableEmployees } = useAssignableEmployees({ enabled: isAdmin })
  const updateStatus = useUpdateTaskStatus()

  const [formState, setFormState] = useState({ open: false, mode: "create", task: null })
  const [deleteTarget, setDeleteTarget] = useState(null)

  return (
    <PageContainer>
      <PageHeader
        title={isAdmin ? t("tasks.titleAdmin") : t("tasks.titleEmployee")}
        subtitle={isAdmin ? t("tasks.subtitleAdmin") : t("tasks.subtitleEmployee")}
      >
        {isAdmin ? (
          <Button onClick={() => setFormState({ open: true, mode: "create", task: null })}>
            <Plus className="size-4" />
            {t("tasks.createTask")}
          </Button>
        ) : null}
      </PageHeader>

      <TaskFilters
        filters={params}
        onFilterChange={setParam}
        isAdmin={isAdmin}
        assignableEmployees={assignableEmployees}
      />

      {isError ? (
        <ErrorState message={error.message} />
      ) : (
        <>
          <TaskTable
            tasks={data?.data}
            isLoading={isLoading}
            isAdmin={isAdmin}
            onEdit={(task) => setFormState({ open: true, mode: "edit", task })}
            onDelete={(task) => setDeleteTarget(task)}
            onStatusChange={(id, status) => updateStatus.mutate({ id, status })}
          />
          <DataTablePagination
            meta={data?.meta}
            onPageChange={(page) => setParam("page", page)}
            itemLabel={t("tasks.paginationLabel")}
          />
        </>
      )}

      {isAdmin ? (
        <>
          <TaskFormDialog
            key={formState.task?.id ?? "create"}
            open={formState.open}
            onOpenChange={(open) => setFormState((state) => ({ ...state, open }))}
            mode={formState.mode}
            task={formState.task}
            assignableEmployees={assignableEmployees}
          />
          {deleteTarget ? (
            <DeleteTaskDialog
              task={deleteTarget}
              open={!!deleteTarget}
              onOpenChange={(open) => !open && setDeleteTarget(null)}
            />
          ) : null}
        </>
      ) : null}
    </PageContainer>
  )
}
