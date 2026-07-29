import { useQuery } from "@tanstack/react-query"

import { getTask } from "@/api"
import { queryKeys } from "@/constants"

export function useTask(id) {
  return useQuery({
    queryKey: queryKeys.tasks.detail(id),
    queryFn: () => getTask(id),
    select: (response) => response.data,
    enabled: !!id,
  })
}
