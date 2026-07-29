import { cn } from "@/lib/utils"
import { Card } from "@/components/ui"

export function StatCard({ icon: Icon, iconClassName, label, value, helper, helperClassName }) {
  return (
    <Card className="gap-3 p-5">
      <div className={cn("flex size-9 items-center justify-center rounded-lg", iconClassName)}>
        <Icon className="size-4" />
      </div>
      <div>
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="text-2xl font-bold">{value}</p>
      </div>
      {helper ? <p className={cn("text-xs text-muted-foreground", helperClassName)}>{helper}</p> : null}
    </Card>
  )
}
