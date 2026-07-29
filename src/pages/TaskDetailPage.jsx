import { useState } from "react"
import { useParams } from "react-router-dom"

import { useAssignableEmployees, useAuth, useCan, useTask, useUpdateTaskStatus, useLocale } from "@/hooks"
import { PageContainer, PageHeader } from "@/components/layout"
import { ErrorState, LoadingSkeleton } from "@/components/shared"
import { TaskDetailView, TaskFormDialog } from "@/components/tasks"
import { Button } from "@/components/ui"
import { canManageTask } from "@/utils"

export default function TaskDetailPage() {
  const { id } = useParams()
  const { user } = useAuth()
  const { isAdmin } = useCan()
  const { t } = useLocale()
  const { data: task, isLoading, isError, error } = useTask(id)
  const { data: assignableEmployees } = useAssignableEmployees({ enabled: isAdmin })
  const updateStatus = useUpdateTaskStatus()
  const [editOpen, setEditOpen] = useState(false)

  return (
    <PageContainer>
      <PageHeader title={t("tasks.detailTitle")} subtitle={t("tasks.detailSubtitle")}>
        {isAdmin && task ? <Button onClick={() => setEditOpen(true)}>{t("common.edit")}</Button> : null}
      </PageHeader>

      {isLoading ? (
        <LoadingSkeleton />
      ) : isError ? (
        <ErrorState message={error.message} />
      ) : (
        <TaskDetailView
          task={task}
          canEditStatus={canManageTask(user, task)}
          onStatusChange={(taskId, status) => updateStatus.mutate({ id: taskId, status })}
        />
      )}

      {isAdmin ? (
        <TaskFormDialog
          open={editOpen}
          onOpenChange={setEditOpen}
          mode="edit"
          task={task}
          assignableEmployees={assignableEmployees}
        />
      ) : null}
    </PageContainer>
  )
}
