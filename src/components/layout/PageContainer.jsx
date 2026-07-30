import { cn } from "@/lib/utils"

export function PageContainer({ className, children }) {
  return <div className={cn("rounded-xl border bg-background p-5 sm:p-7", className)}>{children}</div>
}
