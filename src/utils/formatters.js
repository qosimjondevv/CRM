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

export function formatDate(dateString, locale = "en") {
  if (!dateString) return "—"
  const date = new Date(dateString)
  if (Number.isNaN(date.getTime())) return "—"
  if (locale === "uz") {
    return `${date.getFullYear()}-yil ${date.getDate()}-${UZ_MONTHS[date.getMonth()]}`
  }
  if (locale === "ru") {
    return new Intl.DateTimeFormat("ru", { day: "numeric", month: "short", year: "numeric" }).format(date)
  }
  return new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short", year: "numeric" }).format(date)
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
