import { cn } from "@/lib/utils"
import { Card } from "@/components/ui"

export function StatCard({ icon: Icon, iconClassName, accentClassName, label, value, helper, helperClassName }) {
  return (
    <Card className={cn("gap-3.5 border-l-4 p-6", accentClassName)}>
      <div className={cn("flex size-11 items-center justify-center rounded-lg", iconClassName)}>
        <Icon className="size-5" />
      </div>
      <div>
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="text-3xl font-bold">{value}</p>
      </div>
      {helper ? <p className={cn("text-xs text-muted-foreground", helperClassName)}>{helper}</p> : null}
    </Card>
  )
}
