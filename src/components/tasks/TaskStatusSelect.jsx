import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui"
import { useTaskStatusOptions } from "@/hooks"

export function TaskStatusSelect({ value, onChange, disabled }) {
  const options = useTaskStatusOptions()

  return (
    <Select items={options} value={value} onValueChange={onChange} disabled={disabled}>
      <SelectTrigger className="h-7 w-40 text-xs">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
