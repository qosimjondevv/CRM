export const queryKeys = {
  auth: {
    session: ["auth", "session"],
  },
  employees: {
    list: (filters) => ["employees", "list", filters],
    detail: (id) => ["employees", "detail", id],
    assignable: ["employees", "assignable"],
  },
  tasks: {
    list: (filters) => ["tasks", "list", filters],
    detail: (id) => ["tasks", "detail", id],
  },
  dashboard: {
    root: ["dashboard"],
  },
  profile: {
    root: ["profile"],
  },
}
