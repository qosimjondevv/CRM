import { ArrowRight, Loader2, Lock, Mail } from "lucide-react"

import {
  Button,
  Input,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui"
import { useLocale } from "@/hooks"

export function LoginForm({ form, onSubmit, isPending }) {
  const { t } = useLocale()

  return (
    <div>
      <h2 className="text-2xl font-bold sm:text-3xl">{t("auth.welcomeBack")}</h2>
      <p className="text-sm text-muted-foreground sm:text-base">{t("auth.welcomeBackSubtitle")}</p>

      <div className="mt-8 rounded-2xl border bg-card p-6 shadow-sm sm:p-7">
        <Form {...form}>
          <form onSubmit={onSubmit} className="space-y-5">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">{t("auth.email")}</FormLabel>
                  <div className="relative">
                    <Mail className="pointer-events-none absolute top-1/2 left-3.5 size-5 -translate-y-1/2 text-muted-foreground" />
                    <FormControl>
                      <Input
                        className="h-12 border-blue-100 bg-blue-50/70 pl-11 text-base focus-visible:border-blue-300 focus-visible:bg-white focus-visible:ring-blue-200/60 dark:border-input dark:bg-input/30 dark:focus-visible:bg-input/30"
                        placeholder="admin@corpcrm.dev"
                        {...field}
                      />
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">{t("auth.password")}</FormLabel>
                  <div className="relative">
                    <Lock className="pointer-events-none absolute top-1/2 left-3.5 size-5 -translate-y-1/2 text-muted-foreground" />
                    <FormControl>
                      <Input
                        className="h-12 border-blue-100 bg-blue-50/70 pl-11 text-base focus-visible:border-blue-300 focus-visible:bg-white focus-visible:ring-blue-200/60 dark:border-input dark:bg-input/30 dark:focus-visible:bg-input/30"
                        type="password"
                        placeholder="••••••••"
                        {...field}
                      />
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" size="lg" className="w-full" disabled={isPending}>
              {isPending ? (
                <>
                  <Loader2 className="size-5 animate-spin" />
                  {t("auth.signingIn")}
                </>
              ) : (
                <>
                  {t("auth.signIn")}
                  <ArrowRight className="size-5" />
                </>
              )}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  )
}
