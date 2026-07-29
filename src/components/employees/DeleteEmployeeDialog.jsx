import { ConfirmDialog } from "@/components/shared"
import { useDeleteEmployee, useLocale } from "@/hooks"
import { getFullName } from "@/utils"

export function DeleteEmployeeDialog({ employee, open, onOpenChange }) {
  const { t } = useLocale()
  const deleteMutation = useDeleteEmployee()

  function handleConfirm() {
    deleteMutation.mutate(employee.id, { onSuccess: () => onOpenChange(false) })
  }

  return (
    <ConfirmDialog
      open={open}
      onOpenChange={onOpenChange}
      title={t("employees.deleteTitle")}
      description={t("employees.deleteDescription", { name: getFullName(employee) })}
      onConfirm={handleConfirm}
      isPending={deleteMutation.isPending}
    />
  )
}
