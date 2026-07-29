import { notify } from "./notify"

export function createFieldErrorHandler(setError, t) {
  return function handleMutationError(error) {
    if ((error?.status === 422 || error?.status === 409) && error?.fieldErrors) {
      Object.entries(error.fieldErrors).forEach(([field, messages]) => {
        setError(field, { message: Array.isArray(messages) ? messages[0] : messages })
      })
      return
    }
    notify.error(error?.message ?? t("toasts.genericError"))
  }
}
