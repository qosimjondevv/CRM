import { Users } from "lucide-react"

import { useLocale } from "@/hooks"

export function LoginHero() {
  const { t } = useLocale()

  return (
    <div className="hidden w-1/2 flex-col justify-center gap-6 bg-slate-950 p-16 text-white lg:flex">
      <div className="flex size-12 items-center justify-center rounded-xl bg-white/10">
        <Users className="size-6" />
      </div>
      <h1 className="max-w-lg text-4xl font-bold leading-tight">{t("auth.heroTitle")}</h1>
      <p className="max-w-md text-slate-300">{t("auth.heroSubtitle")}</p>
    </div>
  )
}
