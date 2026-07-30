import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Loader2, LogOut, Menu, User } from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Sheet,
  SheetContent,
  SheetTitle,
} from "@/components/ui"
import { SidebarNav } from "./SidebarNav"
import { LanguageSwitcher, ThemeSwitcher } from "@/components/shared"
import { useLocale } from "@/hooks"
import { ROUTE_PATHS } from "@/constants"
import { getFullName, getInitials } from "@/utils"

export function AppHeader({ user, isAdmin, onLogout, isLoggingOut }) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const navigate = useNavigate()
  const { t } = useLocale()

  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b bg-background px-4 lg:justify-end lg:px-6">
      <Button variant="ghost" size="icon-sm" className="lg:hidden" onClick={() => setMobileNavOpen(true)}>
        <Menu className="size-5" />
      </Button>

      <div className="flex items-center gap-3.5">
        <ThemeSwitcher />
        <LanguageSwitcher />

        <DropdownMenu>
          <DropdownMenuTrigger className="cursor-pointer rounded-full outline-none focus-visible:ring-2 focus-visible:ring-ring/50">
            <Avatar size="lg">
              <AvatarImage src={user?.avatar} alt={getFullName(user)} />
              <AvatarFallback>{getInitials(user?.firstName, user?.lastName)}</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-64">
            <div className="px-2 py-1.5">
              <p className="truncate text-sm font-semibold text-foreground">{getFullName(user)}</p>
              <p className="truncate text-sm text-muted-foreground">{user?.email}</p>
              {user?.role && <p className="text-sm text-primary">{t(`roles.${user.role}`)}</p>}
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer" onClick={() => navigate(ROUTE_PATHS.PROFILE)}>
              <User className="size-4" />
              {t("profile.title")}
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              variant="destructive"
              className="cursor-pointer"
              disabled={isLoggingOut}
              onClick={onLogout}
            >
              {isLoggingOut ? <Loader2 className="size-4 animate-spin" /> : <LogOut className="size-4" />}
              {isLoggingOut ? t("nav.loggingOut") : t("nav.logout")}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <Sheet open={mobileNavOpen} onOpenChange={setMobileNavOpen}>
        <SheetContent side="left" className="w-64 gap-0 p-0 sm:max-w-64">
          <SheetTitle className="sr-only">Navigation</SheetTitle>
          <SidebarNav
            isAdmin={isAdmin}
            onLogout={onLogout}
            isLoggingOut={isLoggingOut}
            onNavigate={() => setMobileNavOpen(false)}
          />
        </SheetContent>
      </Sheet>
    </header>
  )
}
