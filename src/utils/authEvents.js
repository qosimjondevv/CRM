const listeners = new Set()

export const authEvents = {
  onUnauthenticated: (callback) => {
    listeners.add(callback)
    return () => listeners.delete(callback)
  },
  emitUnauthenticated: () => {
    listeners.forEach((callback) => callback())
  },
}
