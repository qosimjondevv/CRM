import { apiClient } from "./client"

/** @typedef {import('@/types/employee.types').Employee} Employee */

/** @returns {Promise<{data: Employee}>} */
export function getProfile() {
  return apiClient.get("/profile")
}

/** @returns {Promise<{data: Employee}>} */
export function updateProfile(values) {
  return apiClient.put("/profile", values)
}

export function changePassword(values) {
  return apiClient.put("/profile/password", values)
}
