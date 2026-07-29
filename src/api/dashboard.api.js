import { apiClient } from "./client"

/**
 * @typedef {import('@/types/dashboard.types').AdminDashboard} AdminDashboard
 * @typedef {import('@/types/dashboard.types').EmployeeDashboard} EmployeeDashboard
 */

/** @returns {Promise<{data: AdminDashboard|EmployeeDashboard}>} */
export function getDashboard() {
  return apiClient.get("/dashboard")
}
