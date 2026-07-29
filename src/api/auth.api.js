import { apiClient } from "./client"

/** @typedef {import('@/types/auth.types').User} User */

/** @returns {Promise<{data: User}>} */
export function login(credentials) {
  return apiClient.post("/auth/login", credentials)
}

export function logout() {
  return apiClient.post("/auth/logout")
}
