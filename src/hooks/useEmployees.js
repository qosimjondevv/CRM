import { useQuery, keepPreviousData } from "@tanstack/react-query"

import { getEmployees } from "@/api"
import { queryKeys } from "@/constants"

export function useEmployees(filters) {
  return useQuery({
    queryKey: queryKeys.employees.list(filters),
    queryFn: () => getEmployees(filters),
    placeholderData: keepPreviousData,
  })
}
