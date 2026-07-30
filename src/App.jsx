import { BrowserRouter } from "react-router-dom"

import { QueryProvider, AuthProvider, LocaleProvider, ThemeProvider } from "@/context"
import { Toaster } from "@/components/ui"
import { ErrorBoundary } from "@/components/shared"
import { AppRoutes } from "@/routes"

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <LocaleProvider>
          <QueryProvider>
            <AuthProvider>
              <BrowserRouter>
                <AppRoutes />
              </BrowserRouter>
              <Toaster />
            </AuthProvider>
          </QueryProvider>
        </LocaleProvider>
      </ThemeProvider>
    </ErrorBoundary>
  )
}
