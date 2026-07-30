import { Button } from "@/components/ui"
import { useLocale } from "@/hooks"

export function DataTablePagination({ meta, onPageChange, itemLabel }) {
  const { t } = useLocale()

  if (!meta || meta.total === 0) return null

  const from = (meta.page - 1) * meta.pageSize + 1
  const to = Math.min(meta.page * meta.pageSize, meta.total)

  return (
    <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
      <p>
        {t("common.paginationSummary", { from, to, total: meta.total })}
        {itemLabel ? ` ${itemLabel}` : ""}
      </p>
      <div className="flex items-center gap-3">
        <p>{t("common.pageOf", { page: meta.page, totalPages: meta.totalPages })}</p>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            disabled={!meta.hasPreviousPage}
            onClick={() => onPageChange(meta.page - 1)}
          >
            {t("common.previous")}
          </Button>
          <Button
            variant="outline"
            size="sm"
            disabled={!meta.hasNextPage}
            onClick={() => onPageChange(meta.page + 1)}
          >
            {t("common.next")}
          </Button>
        </div>
      </div>
    </div>
  )
}
