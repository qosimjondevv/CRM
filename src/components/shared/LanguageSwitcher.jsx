import { cn } from "@/lib/utils"
import { useLocale } from "@/hooks"

const LOCALES = ["en", "uz", "ru"]

export function LanguageSwitcher({ className }) {
  const { locale, setLocale } = useLocale()

  return (
    <div className={cn("flex items-center gap-0.5 rounded-lg border p-0.5 text-xs font-medium", className)}>
      {LOCALES.map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLocale(code)}
          className={cn(
            "cursor-pointer rounded-md px-2 py-1 uppercase transition-colors",
            locale === code ? "bg-muted text-foreground" : "text-muted-foreground hover:text-foreground"
          )}
        >
          {code}
        </button>
      ))}
    </div>
  )
}
