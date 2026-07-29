import { useState } from "react"
import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from "@tanstack/react-query"

import { authEvents } from "@/utils"

function handleError(error) {
  if (error?.status === 401) {
    authEvents.emitUnauthenticated()
  }
}

export function QueryProvider({ children }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: { retry: false, refetchOnWindowFocus: false },
        },
        queryCache: new QueryCache({ onError: handleError }),
        mutationCache: new MutationCache({ onError: handleError }),
      })
  )

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
