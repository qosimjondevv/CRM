import { useDocumentTitle } from "@/hooks"

export function PageHeader({ title, pageTitle, subtitle, children }) {
  useDocumentTitle(pageTitle ?? title)

  return (
    <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
        {subtitle ? <p className="text-base text-muted-foreground">{subtitle}</p> : null}
      </div>
      {children ? <div className="shrink-0">{children}</div> : null}
    </div>
  )
}
