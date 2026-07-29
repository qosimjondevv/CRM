import { cn } from "@/lib/utils"

export function PageContainer({ className, children }) {
  return <div className={cn("rounded-xl border bg-background p-4 sm:p-6", className)}>{children}</div>
}
