import { useLocale } from "@/hooks"

export function EmptyState({ title, description }) {
  const { t } = useLocale()

  return (
    <div className="flex flex-col items-center justify-center gap-1 py-12 text-center">
      <p className="font-medium">{title ?? t("common.noData")}</p>
      {description ? <p className="text-sm text-muted-foreground">{description}</p> : null}
    </div>
  )
}
