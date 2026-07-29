import { useQuery } from "@tanstack/react-query"

import { getDashboard } from "@/api"
import { queryKeys } from "@/constants"

export function useDashboard() {
  return useQuery({
    queryKey: queryKeys.dashboard.root,
    queryFn: getDashboard,
    select: (response) => response.data,
  })
}
