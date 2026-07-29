const UZ_MONTHS = [
  "yanvar",
  "fevral",
  "mart",
  "aprel",
  "may",
  "iyun",
  "iyul",
  "avgust",
  "sentabr",
  "oktabr",
  "noyabr",
  "dekabr",
]

export function formatDate(dateString) {
  if (!dateString) return "—"
  const date = new Date(dateString)
  if (Number.isNaN(date.getTime())) return "—"
  return `${date.getFullYear()}-yil ${date.getDate()}-${UZ_MONTHS[date.getMonth()]}`
}

export function isOverdue(dueDate, status) {
  if (!dueDate || status === "DONE") return false
  return new Date(dueDate).getTime() < Date.now()
}

export function getInitials(firstName, lastName) {
  const first = firstName?.[0] ?? ""
  const last = lastName?.[0] ?? ""
  return `${first}${last}`.toUpperCase() || "?"
}

export function getFullName(person) {
  if (!person) return "—"
  return `${person.firstName ?? ""} ${person.lastName ?? ""}`.trim() || "—"
}
