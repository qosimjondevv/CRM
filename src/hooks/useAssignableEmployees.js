import { useQuery } from "@tanstack/react-query"

import { getAssignableEmployees } from "@/api"
import { queryKeys } from "@/constants"

export function useAssignableEmployees(options = {}) {
  return useQuery({
    queryKey: queryKeys.employees.assignable,
    queryFn: getAssignableEmployees,
    select: (response) => response.data,
    ...options,
  })
}
