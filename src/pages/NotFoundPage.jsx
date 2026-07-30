import { Link } from "react-router-dom"

import { Button } from "@/components/ui"
import { useLocale, useDocumentTitle } from "@/hooks"
import { ROUTE_PATHS } from "@/constants"

export default function NotFoundPage() {
  const { t } = useLocale()

  useDocumentTitle(t("notFound.title"))

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">{t("notFound.title")}</h1>
      <p className="text-muted-foreground">{t("notFound.message")}</p>
      <Button render={<Link to={ROUTE_PATHS.DASHBOARD} />}>{t("notFound.backHome")}</Button>
    </div>
  )
}
