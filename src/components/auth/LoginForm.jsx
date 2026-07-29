import { ArrowRight, Lock, Mail } from "lucide-react"

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
      <h2 className="text-2xl font-bold">{t("auth.welcomeBack")}</h2>
      <p className="text-sm text-muted-foreground">{t("auth.welcomeBackSubtitle")}</p>

      <Form {...form}>
        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("auth.email")}</FormLabel>
                <div className="relative">
                  <Mail className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
                  <FormControl>
                    <Input className="pl-9" placeholder="admin@corpcrm.dev" {...field} />
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
                <FormLabel>{t("auth.password")}</FormLabel>
                <div className="relative">
                  <Lock className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
                  <FormControl>
                    <Input className="pl-9" type="password" placeholder="••••••••" {...field} />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full" disabled={isPending}>
            {t("auth.signIn")}
            <ArrowRight className="size-4" />
          </Button>
        </form>
      </Form>
    </div>
  )
}
