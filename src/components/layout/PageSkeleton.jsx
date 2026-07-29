import { Skeleton } from "@/components/ui"

export function PageSkeleton() {
  return (
    <div className="flex min-h-screen items-center justify-center p-6">
      <div className="w-full max-w-md space-y-3">
        <Skeleton className="h-8 w-1/2" />
        <Skeleton className="h-24 w-full" />
        <Skeleton className="h-24 w-full" />
      </div>
    </div>
  )
}
