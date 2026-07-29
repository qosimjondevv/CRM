import { Search } from "lucide-react"

import { Input, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui"
import { useLocale, useTaskStatusFilterOptions, useTaskPriorityFilterOptions } from "@/hooks"
import { getFullName } from "@/utils"

export function TaskFilters({ filters, onFilterChange, isAdmin, assignableEmployees }) {
  const { t } = useLocale()
  const statusOptions = useTaskStatusFilterOptions()
  const priorityOptions = useTaskPriorityFilterOptions()

  return (
    <div className="mb-4 flex flex-col gap-2 sm:flex-row">
      <div className="relative flex-1">
        <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          className="pl-9"
          placeholder={t("tasks.searchPlaceholder")}
          value={filters.search}
          onChange={(event) => onFilterChange("search", event.target.value)}
        />
      </div>
      <Select value={filters.status} onValueChange={(value) => onFilterChange("status", value)}>
        <SelectTrigger className="w-full sm:w-44">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {statusOptions.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select value={filters.priority} onValueChange={(value) => onFilterChange("priority", value)}>
        <SelectTrigger className="w-full sm:w-44">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {priorityOptions.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {isAdmin ? (
        <Select value={filters.assignedToId} onValueChange={(value) => onFilterChange("assignedToId", value)}>
          <SelectTrigger className="w-full sm:w-48">
            <SelectValue placeholder={t("tasks.allAssignees")} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ALL">{t("tasks.allAssignees")}</SelectItem>
            <SelectItem value="UNASSIGNED">{t("common.unassigned")}</SelectItem>
            {assignableEmployees?.map((employee) => (
              <SelectItem key={employee.id} value={employee.id}>
                {getFullName(employee)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      ) : null}
    </div>
  )
}
