import { AlertTriangle } from "lucide-react"

import { useLocale } from "@/hooks"

export function ErrorState({ message }) {
  const { t } = useLocale()

  return (
    <div className="flex flex-col items-center justify-center gap-2 py-12 text-center">
      <AlertTriangle className="size-8 text-destructive" />
      <p className="font-medium text-destructive">{t("common.errorTitle")}</p>
      {message ? <p className="text-sm text-muted-foreground">{message}</p> : null}
    </div>
  )
}
