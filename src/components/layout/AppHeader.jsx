import { useState } from "react"
import { Menu } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage, Button, Sheet, SheetContent, SheetTitle } from "@/components/ui"
import { SidebarNav } from "./SidebarNav"
import { LanguageSwitcher } from "@/components/shared"
import { getFullName, getInitials } from "@/utils"

export function AppHeader({ user, isAdmin, onLogout }) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  return (
    <header className="flex h-14 shrink-0 items-center justify-between border-b bg-background px-4 lg:justify-end lg:px-6">
      <Button variant="ghost" size="icon-sm" className="lg:hidden" onClick={() => setMobileNavOpen(true)}>
        <Menu className="size-4" />
      </Button>

      <div className="flex items-center gap-3">
        <LanguageSwitcher />
        <Avatar>
          <AvatarImage src={user?.avatar} alt={getFullName(user)} />
          <AvatarFallback>{getInitials(user?.firstName, user?.lastName)}</AvatarFallback>
        </Avatar>
      </div>

      <Sheet open={mobileNavOpen} onOpenChange={setMobileNavOpen}>
        <SheetContent side="left" className="w-64 gap-0 p-0 sm:max-w-64">
          <SheetTitle className="sr-only">Navigation</SheetTitle>
          <SidebarNav isAdmin={isAdmin} onLogout={onLogout} onNavigate={() => setMobileNavOpen(false)} />
        </SheetContent>
      </Sheet>
    </header>
  )
}
