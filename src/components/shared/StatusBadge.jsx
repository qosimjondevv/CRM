import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui"

const COLOR_CLASSNAMES = {
  gray: "bg-muted text-muted-foreground",
  blue: "bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-400",
  green: "bg-green-100 text-green-700 dark:bg-green-500/15 dark:text-green-400",
  red: "bg-red-100 text-red-700 dark:bg-red-500/15 dark:text-red-400",
  yellow: "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/15 dark:text-yellow-400",
}

export function StatusBadge({ color = "gray", children }) {
  return <Badge className={cn("border-transparent font-medium", COLOR_CLASSNAMES[color])}>{children}</Badge>
}
