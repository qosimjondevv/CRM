import { NavLink } from "react-router-dom"
import { LayoutGrid, ListChecks, Loader2, LogOut, User, Users } from "lucide-react"

import { cn } from "@/lib/utils"
import { useLocale } from "@/hooks"
import { ROUTE_PATHS } from "@/constants"

const NAV_ICONS = {
  dashboard: LayoutGrid,
  employees: Users,
  tasks: ListChecks,
  profile: User,
}

export function SidebarNav({ isAdmin, onLogout, onNavigate, isLoggingOut }) {
  const { t } = useLocale()

  const navItems = [
    { key: "dashboard", to: ROUTE_PATHS.DASHBOARD, label: t("nav.dashboard"), end: true },
    isAdmin && { key: "employees", to: ROUTE_PATHS.EMPLOYEES, label: t("nav.employees") },
    { key: "tasks", to: ROUTE_PATHS.TASKS, label: t("nav.tasks") },
    { key: "profile", to: ROUTE_PATHS.PROFILE, label: t("nav.profile") },
  ].filter(Boolean)

  return (
    <div className="flex h-full w-full flex-col p-3.5">
      <div className="mb-5 flex items-center gap-2.5 px-2 py-2">
        <div className="flex size-9 items-center justify-center rounded-lg bg-foreground text-background">
          <Users className="size-5" />
        </div>
        <span className="text-base font-semibold">CorpCRM</span>
      </div>

      <nav className="flex flex-1 flex-col gap-1">
        {navItems.map(({ key, to, label, end }) => {
          const Icon = NAV_ICONS[key]
          return (
            <NavLink
              key={key}
              to={to}
              end={end}
              onClick={onNavigate}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-2.5 rounded-lg px-3.5 py-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground",
                  isActive && "bg-background font-medium text-foreground shadow-sm"
                )
              }
            >
              <Icon className="size-5" />
              {label}
            </NavLink>
          )
        })}
      </nav>

      <button
        type="button"
        onClick={onLogout}
        disabled={isLoggingOut}
        className="flex cursor-pointer items-center gap-2.5 rounded-lg px-3.5 py-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground disabled:pointer-events-none disabled:opacity-60"
      >
        {isLoggingOut ? <Loader2 className="size-5 animate-spin" /> : <LogOut className="size-5" />}
        {isLoggingOut ? t("nav.loggingOut") : t("nav.logout")}
      </button>
    </div>
  )
}
