/** @typedef {import('@/types/api.types').ApiSuccess} ApiSuccess */
/** @typedef {import('@/types/api.types').ApiError} ApiError */

/**
 * Base request helper: always sends the session cookie, unwraps the `{success,data,meta}`
 * envelope, and throws an {@link ApiError} (status/code/fieldErrors) on any failure.
 * @param {string} path - appended to `/api`, e.g. "/employees"
 * @param {{ method?: string, body?: *, headers?: Object, signal?: AbortSignal }} [options]
 * @returns {Promise<ApiSuccess>}
 */
async function request(path, { method = "GET", body, headers, signal } = {}) {
  const res = await fetch(`/api${path}`, {
    method,
    credentials: "include",
    headers: { "Content-Type": "application/json", ...headers },
    body: body !== undefined ? JSON.stringify(body) : undefined,
    signal,
  })

  let json = null
  try {
    json = await res.json()
  } catch {
    json = null
  }

  if (!res.ok || !json?.success) {
    const error = new Error(json?.error?.message ?? `Request failed (${res.status})`)
    error.status = res.status
    error.code = json?.error?.code ?? "UNKNOWN"
    error.fieldErrors = json?.error?.fieldErrors
    throw error
  }

  return json
}

export const apiClient = {
  get: (path, opts) => request(path, { ...opts, method: "GET" }),
  post: (path, body, opts) => request(path, { ...opts, method: "POST", body }),
  put: (path, body, opts) => request(path, { ...opts, method: "PUT", body }),
  patch: (path, body, opts) => request(path, { ...opts, method: "PATCH", body }),
  del: (path, opts) => request(path, { ...opts, method: "DELETE" }),
}
