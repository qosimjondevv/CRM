import { useState } from "react"
import { Check, Copy } from "lucide-react"

import { useLocale } from "@/hooks"

const ACCOUNTS = [
  { roleKey: "ADMIN", email: "admin@corpcrm.dev", password: "Admin123!" },
  { roleKey: "EMPLOYEE", email: "alice.freeman@corpcrm.dev", password: "Employee123!" },
]

export function DemoAccountsCard({ onSelect }) {
  const { t } = useLocale()
  const [copiedEmail, setCopiedEmail] = useState(null)

  function handleCopy(account) {
    navigator.clipboard?.writeText(`${account.email}\n${account.password}`)
    onSelect?.(account.email, account.password)
    setCopiedEmail(account.email)
    setTimeout(() => setCopiedEmail((current) => (current === account.email ? null : current)), 1500)
  }

  return (
    <div className="rounded-lg border bg-muted/30 p-4">
      <p className="text-sm font-medium">{t("auth.demoAccounts")}</p>
      <p className="mb-3 text-xs text-muted-foreground">{t("auth.demoAccountsHint")}</p>
      <div className="space-y-1">
        {ACCOUNTS.map((account) => (
          <button
            key={account.email}
            type="button"
            onClick={() => handleCopy(account)}
            className="flex w-full items-center justify-between rounded-md px-2 py-1.5 text-left text-sm hover:bg-muted"
          >
            <span>
              <span className="font-medium">{t(`roles.${account.roleKey}`)}</span>{" "}
              <span className="text-muted-foreground">
                {account.email} · {account.password}
              </span>
            </span>
            {copiedEmail === account.email ? (
              <Check className="size-4 shrink-0 text-green-600" />
            ) : (
              <Copy className="size-4 shrink-0 text-muted-foreground" />
            )}
          </button>
        ))}
      </div>
    </div>
  )
}
