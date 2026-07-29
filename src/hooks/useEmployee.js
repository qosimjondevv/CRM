import { useQuery } from "@tanstack/react-query"

import { getEmployee } from "@/api"
import { queryKeys } from "@/constants"

export function useEmployee(id) {
  return useQuery({
    queryKey: queryKeys.employees.detail(id),
    queryFn: () => getEmployee(id),
    select: (response) => response.data,
    enabled: !!id,
  })
}
