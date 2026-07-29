import { apiClient } from "./client"
import { buildQueryString } from "@/utils"

/** @typedef {import('@/types/task.types').Task} Task */

/** @returns {Promise<{data: Task[], meta: import('@/types/api.types').PaginationMeta}>} */
export function getTasks(filters) {
  return apiClient.get(`/tasks${buildQueryString(filters)}`)
}

/** @returns {Promise<{data: Task}>} */
export function getTask(id) {
  return apiClient.get(`/tasks/${id}`)
}

/** @returns {Promise<{data: Task}>} */
export function createTask(values) {
  return apiClient.post("/tasks", values)
}

/** @returns {Promise<{data: Task}>} */
export function updateTask(id, values) {
  return apiClient.put(`/tasks/${id}`, values)
}

/** @returns {Promise<{data: Task}>} */
export function updateTaskStatus(id, status) {
  return apiClient.patch(`/tasks/${id}/status`, { status })
}

/** @returns {Promise<{data: {id: string}}>} */
export function deleteTask(id) {
  return apiClient.del(`/tasks/${id}`)
}
