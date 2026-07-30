import { Search } from "lucide-react"

import { Input, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui"
import { useLocale, useRoleFilterOptions, useEmployeeStatusFilterOptions } from "@/hooks"

export function EmployeeFilters({ filters, onFilterChange }) {
  const { t } = useLocale()
  const roleOptions = useRoleFilterOptions()
  const statusOptions = useEmployeeStatusFilterOptions()

  return (
    <div className="mb-4 flex flex-col gap-2 sm:flex-row">
      <div className="relative flex-1">
        <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          className="pl-9"
          placeholder={t("employees.searchPlaceholder")}
          value={filters.search}
          onChange={(event) => onFilterChange("search", event.target.value)}
        />
      </div>
      <Select items={roleOptions} value={filters.role} onValueChange={(value) => onFilterChange("role", value)}>
        <SelectTrigger className="w-full sm:w-44">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {roleOptions.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select
        items={statusOptions}
        value={filters.status}
        onValueChange={(value) => onFilterChange("status", value)}
      >
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
    </div>
  )
}
