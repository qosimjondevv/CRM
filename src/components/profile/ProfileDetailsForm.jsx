import {
  Avatar,
  AvatarFallback,
  AvatarImage,
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
import { useProfileForm, useLocale } from "@/hooks"
import { getFullName, getInitials } from "@/utils"

export function ProfileDetailsForm({ profile }) {
  const { t } = useLocale()
  const { form, onSubmit, isPending, isDirty } = useProfileForm(profile)

  return (
    <Card className="gap-0 p-0">
      <div className="border-b p-5">
        <p className="font-semibold">{t("profile.detailsTitle")}</p>
        <p className="text-sm text-muted-foreground">{t("profile.detailsSubtitle")}</p>
      </div>

      <Form {...form}>
        <form onSubmit={onSubmit} className="space-y-4 p-5">
          <div className="flex items-center gap-3">
            <Avatar className="size-12">
              <AvatarImage src={profile?.avatar} alt={getFullName(profile)} />
              <AvatarFallback>{getInitials(profile?.firstName, profile?.lastName)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{profile?.email}</p>
              <p className="text-xs text-muted-foreground">{t("profile.emailHint")}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("employees.firstName")}</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("employees.lastName")}</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="position"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("employees.position")}</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("employees.phone")}</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="avatar"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("employees.avatarUrl")}</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <p className="text-xs text-muted-foreground">{t("profile.avatarHint")}</p>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-end">
            <Button type="submit" disabled={!isDirty || isPending}>
              {t("profile.saveChanges")}
            </Button>
          </div>
        </form>
      </Form>
    </Card>
  )
}
