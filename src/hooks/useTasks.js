import { useQuery, keepPreviousData } from "@tanstack/react-query"

import { getTasks } from "@/api"
import { queryKeys } from "@/constants"

export function useTasks(filters) {
  return useQuery({
    queryKey: queryKeys.tasks.list(filters),
    queryFn: () => getTasks(filters),
    placeholderData: keepPreviousData,
  })
}
