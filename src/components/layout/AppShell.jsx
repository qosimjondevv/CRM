import { AppSidebar } from "./AppSidebar"
import { AppHeader } from "./AppHeader"
import { PageTransition } from "./PageTransition"
import { useAuth, useCan, useLogout } from "@/hooks"

export function AppShell() {
  const { user } = useAuth()
  const { isAdmin } = useCan()
  const logout = useLogout()

  return (
    <div className="flex h-screen w-full overflow-hidden bg-muted/20">
      <AppSidebar isAdmin={isAdmin} onLogout={() => logout.mutate()} isLoggingOut={logout.isPending} />
      <div className="flex flex-1 flex-col overflow-hidden">
        <AppHeader
          user={user}
          isAdmin={isAdmin}
          onLogout={() => logout.mutate()}
          isLoggingOut={logout.isPending}
        />
        <main className="flex-1 overflow-auto p-5 lg:p-7">
          <PageTransition />
        </main>
      </div>
    </div>
  )
}
