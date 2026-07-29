import { lazy, Suspense } from "react"
import { Route, Routes } from "react-router-dom"

import { ProtectedRoute } from "./ProtectedRoute"
import { RoleRoute } from "./RoleRoute"
import { AppShell, PageSkeleton } from "@/components/layout"
import { ROLES } from "@/constants"
import LoginPage from "@/pages/LoginPage"
import NotFoundPage from "@/pages/NotFoundPage"

// Lazy-imported directly (bypassing the pages barrel) so each page becomes its own chunk —
// importing through the barrel would bundle every page into a single chunk instead.
const DashboardPage = lazy(() => import("@/pages/DashboardPage"))
const EmployeesPage = lazy(() => import("@/pages/EmployeesPage"))
const EmployeeDetailPage = lazy(() => import("@/pages/EmployeeDetailPage"))
const TasksPage = lazy(() => import("@/pages/TasksPage"))
const TaskDetailPage = lazy(() => import("@/pages/TaskDetailPage"))
const ProfilePage = lazy(() => import("@/pages/ProfilePage"))

function withSuspense(element) {
  return <Suspense fallback={<PageSkeleton />}>{element}</Suspense>
}

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route element={<ProtectedRoute />}>
        <Route element={<AppShell />}>
          <Route index element={withSuspense(<DashboardPage />)} />
          <Route element={<RoleRoute roles={[ROLES.ADMIN]} />}>
            <Route path="employees" element={withSuspense(<EmployeesPage />)} />
            <Route path="employees/:id" element={withSuspense(<EmployeeDetailPage />)} />
          </Route>
          <Route path="tasks" element={withSuspense(<TasksPage />)} />
          <Route path="tasks/:id" element={withSuspense(<TaskDetailPage />)} />
          <Route path="profile" element={withSuspense(<ProfilePage />)} />
        </Route>
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
