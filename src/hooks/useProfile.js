import { useQuery } from "@tanstack/react-query"

import { getProfile } from "@/api"
import { queryKeys } from "@/constants"

export function useProfile() {
  return useQuery({
    queryKey: queryKeys.profile.root,
    queryFn: getProfile,
    select: (response) => response.data,
  })
}
