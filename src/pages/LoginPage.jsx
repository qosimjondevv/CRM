import { Navigate } from "react-router-dom"

import { useAuth, useLogin, useLocale } from "@/hooks"
import { LoginHero, LoginForm, DemoAccountsCard } from "@/components/auth"
import { LanguageSwitcher } from "@/components/shared"
import { ROUTE_PATHS } from "@/constants"

export default function LoginPage() {
  const { isAuthenticated, isLoading } = useAuth()
  const { form, onSubmit, isPending } = useLogin()
  const { t } = useLocale()

  if (!isLoading && isAuthenticated) {
    return <Navigate to={ROUTE_PATHS.DASHBOARD} replace />
  }

  return (
    <div className="flex min-h-screen">
      <LoginHero />
      <div className="relative flex flex-1 flex-col items-center justify-center gap-6 p-8">
        <LanguageSwitcher className="absolute top-4 right-4" />
        <div className="w-full max-w-md space-y-6">
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
