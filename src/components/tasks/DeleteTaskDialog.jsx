import { ConfirmDialog } from "@/components/shared"
import { useDeleteTask, useLocale } from "@/hooks"

export function DeleteTaskDialog({ task, open, onOpenChange }) {
  const { t } = useLocale()
  const deleteMutation = useDeleteTask()

  function handleConfirm() {
    deleteMutation.mutate(task.id, { onSuccess: () => onOpenChange(false) })
  }

  return (
    <ConfirmDialog
      open={open}
      onOpenChange={onOpenChange}
      title={t("tasks.deleteTitle")}
      description={t("tasks.deleteDescription", { title: task?.title })}
      onConfirm={handleConfirm}
      isPending={deleteMutation.isPending}
    />
  )
}
