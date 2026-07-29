import {
  Button,
  Card,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "@/components/ui"
import { usePasswordForm, useLocale } from "@/hooks"

export function ChangePasswordForm() {
  const { t } = useLocale()
  const { form, onSubmit, isPending } = usePasswordForm()

  return (
    <Card className="gap-0 p-0">
      <div className="border-b p-5">
        <p className="font-semibold">{t("profile.passwordTitle")}</p>
        <p className="text-sm text-muted-foreground">{t("profile.passwordSubtitle")}</p>
      </div>

      <Form {...form}>
        <form onSubmit={onSubmit} className="space-y-4 p-5">
          <FormField
            control={form.control}
            name="currentPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("profile.currentPassword")}</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="newPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("profile.newPassword")}</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("profile.confirmPassword")}</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <p className="text-xs text-muted-foreground">{t("profile.passwordHint")}</p>

          <div className="flex justify-end">
            <Button type="submit" disabled={isPending}>
              {t("profile.changePassword")}
            </Button>
          </div>
        </form>
      </Form>
    </Card>
  )
}
