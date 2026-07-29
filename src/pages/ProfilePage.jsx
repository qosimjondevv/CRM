import { useProfile, useLocale } from "@/hooks"
import { PageContainer, PageHeader } from "@/components/layout"
import { ErrorState, LoadingSkeleton } from "@/components/shared"
import { ProfileDetailsForm, ChangePasswordForm } from "@/components/profile"

export default function ProfilePage() {
  const { t } = useLocale()
  const { data: profile, isLoading, isError, error } = useProfile()

  return (
    <PageContainer>
      <PageHeader title={t("profile.title")} subtitle={t("profile.subtitle")} />

      {isLoading ? (
        <div className="space-y-4">
          <LoadingSkeleton className="h-56" />
          <LoadingSkeleton className="h-56" />
        </div>
      ) : isError ? (
        <ErrorState message={error.message} />
      ) : (
        <div className="space-y-4">
          <ProfileDetailsForm profile={profile} />
          <ChangePasswordForm />
        </div>
      )}
    </PageContainer>
  )
}
