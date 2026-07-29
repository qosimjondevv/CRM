import { useCallback, useState } from "react"

export function useQueryParams(initial) {
  const [params, setParams] = useState(initial)

  const setParam = useCallback((key, value) => {
    setParams((prev) => ({
      ...prev,
      [key]: value,
      ...(key === "page" ? {} : { page: 1 }),
    }))
  }, [])

  const resetFilters = useCallback(() => setParams(initial), [initial])

  return { params, setParam, resetFilters }
}
