import { Outlet } from "react-router-dom"

import { AppSidebar } from "./AppSidebar"
import { AppHeader } from "./AppHeader"
import { useAuth, useCan, useLogout } from "@/hooks"

export function AppShell() {
  const { user } = useAuth()
  const { isAdmin } = useCan()
  const logout = useLogout()

  return (
    <div className="flex h-screen w-full overflow-hidden bg-muted/20">
      <AppSidebar isAdmin={isAdmin} onLogout={() => logout.mutate()} />
      <div className="flex flex-1 flex-col overflow-hidden">
        <AppHeader user={user} isAdmin={isAdmin} onLogout={() => logout.mutate()} />
        <main className="flex-1 overflow-auto p-4 lg:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
