import { useCallback, useEffect, useState } from "react"

import { AuthContext } from "./AuthContext"
import { login as loginRequest, logout as logoutRequest } from "@/api/auth.api"
import { getProfile } from "@/api/profile.api"
import { authEvents } from "@/utils"

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getProfile()
      .then(({ data }) => setUser(data))
      .catch(() => setUser(null))
      .finally(() => setIsLoading(false))
  }, [])

  useEffect(() => authEvents.onUnauthenticated(() => setUser(null)), [])

  const login = useCallback(async (credentials) => {
    const { data } = await loginRequest(credentials)
    setUser(data)
    return data
  }, [])

  const logout = useCallback(async () => {
    try {
      await logoutRequest()
    } catch {
      // session cookie may already be gone; proceed to clear local state regardless
    }
    setUser(null)
  }, [])

  return (
    <AuthContext.Provider value={{ user, isLoading, isAuthenticated: !!user, login, logout, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}
