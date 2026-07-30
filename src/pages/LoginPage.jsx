import { Navigate } from "react-router-dom"
import { Users } from "lucide-react"

import { useAuth, useLogin, useLocale, useDocumentTitle } from "@/hooks"
import { LoginHero, LoginForm, DemoAccountsCard } from "@/components/auth"
import { LanguageSwitcher } from "@/components/shared"
import { ROUTE_PATHS } from "@/constants"

export default function LoginPage() {
  const { isAuthenticated, isLoading } = useAuth()
  const { form, onSubmit, isPending } = useLogin()
  const { t } = useLocale()

  useDocumentTitle(t("auth.signIn"))

  if (!isLoading && isAuthenticated) {
    return <Navigate to={ROUTE_PATHS.DASHBOARD} replace />
  }

  return (
    <div className="flex min-h-screen">
      <LoginHero />
      <div className="relative flex flex-1 flex-col items-center justify-center gap-6 bg-slate-50 p-8 dark:bg-background">
        <LanguageSwitcher className="absolute top-4 right-4" />
        <div className="w-full max-w-md space-y-6">
          <div className="flex items-center gap-2.5 lg:hidden">
            <div className="flex size-10 items-center justify-center rounded-xl bg-foreground text-background">
              <Users className="size-6" />
            </div>
            <span className="text-xl font-semibold">CorpCRM</span>
          </div>
          <LoginForm form={form} onSubmit={onSubmit} isPending={isPending} />
          <DemoAccountsCard
            onSelect={(email, password) => {
              form.setValue("email", email)
              form.setValue("password", password)
            }}
          />
          <p className="text-center text-sm text-muted-foreground">{t("auth.noAccount")}</p>
        </div>
      </div>
    </div>
  )
}
