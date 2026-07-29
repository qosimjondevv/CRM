import { Avatar, AvatarFallback, AvatarImage, Card } from "@/components/ui"
import { useLocale } from "@/hooks"
import { getFullName, getInitials } from "@/utils"

export function TaskPersonCard({ label, person }) {
  const { t } = useLocale()

  return (
    <Card className="p-4">
      <p className="mb-2 text-sm text-muted-foreground">{label}</p>
      {person ? (
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={person.avatar} alt={getFullName(person)} />
            <AvatarFallback>{getInitials(person.firstName, person.lastName)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{getFullName(person)}</p>
            <p className="text-sm text-muted-foreground">{person.position}</p>
          </div>
        </div>
      ) : (
        <p className="text-sm text-muted-foreground">{t("common.unassigned")}</p>
      )}
    </Card>
  )
}
