/**
 * @typedef {Object} Employee
 * @property {string} id
 * @property {string} firstName
 * @property {string} lastName
 * @property {string} email
 * @property {string} [phone]
 * @property {string} position
 * @property {string} [avatar]
 * @property {"ADMIN"|"EMPLOYEE"} role
 * @property {"ACTIVE"|"INACTIVE"|"ON_LEAVE"} status
 * @property {string} createdAt
 * @property {string} updatedAt
 */

/**
 * @typedef {Object} EmployeeTaskStats
 * @property {number} total
 * @property {number} todo
 * @property {number} inProgress
 * @property {number} done
 * @property {number} overdue
 */

/**
 * @typedef {Employee & { taskStats: EmployeeTaskStats }} EmployeeDetail
 */

export {}
