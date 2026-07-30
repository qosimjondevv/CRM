import { SidebarNav } from "./SidebarNav"

export function AppSidebar({ isAdmin, onLogout, isLoggingOut }) {
  return (
    <aside className="hidden h-screen w-64 shrink-0 border-r bg-muted/40 lg:flex">
      <SidebarNav isAdmin={isAdmin} onLogout={onLogout} isLoggingOut={isLoggingOut} />
    </aside>
  )
}
