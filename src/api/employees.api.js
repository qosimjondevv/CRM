import { apiClient } from "./client"
import { buildQueryString } from "@/utils"

/** @typedef {import('@/types/employee.types').Employee} Employee */
/** @typedef {import('@/types/employee.types').EmployeeDetail} EmployeeDetail */

/** @returns {Promise<{data: Employee[], meta: import('@/types/api.types').PaginationMeta}>} */
export function getEmployees(filters) {
  return apiClient.get(`/employees${buildQueryString(filters)}`)
}

/** @returns {Promise<{data: EmployeeDetail}>} */
export function getEmployee(id) {
  return apiClient.get(`/employees/${id}`)
}

/** @returns {Promise<{data: Employee[]}>} */
export function getAssignableEmployees() {
  return apiClient.get("/employees/assignable")
}

/** @returns {Promise<{data: Employee}>} */
export function createEmployee(values) {
  return apiClient.post("/employees", values)
}

/** @returns {Promise<{data: Employee}>} */
export function updateEmployee(id, values) {
  return apiClient.put(`/employees/${id}`, values)
}

/** @returns {Promise<{data: {id: string}}>} */
export function deleteEmployee(id) {
  return apiClient.del(`/employees/${id}`)
}
