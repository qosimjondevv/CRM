import { Skeleton } from "@/components/ui"
import { cn } from "@/lib/utils"

export function LoadingSkeleton({ className }) {
  return <Skeleton className={cn("h-64 w-full", className)} />
}
