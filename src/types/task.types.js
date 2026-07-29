/**
 * @typedef {Object} TaskPersonSummary
 * @property {string} id
 * @property {string} firstName
 * @property {string} lastName
 * @property {string} email
 * @property {string} [avatar]
 * @property {string} [position]
 */

/**
 * @typedef {Object} Task
 * @property {string} id
 * @property {string} title
 * @property {string} [description]
 * @property {"LOW"|"MEDIUM"|"HIGH"} priority
 * @property {"TODO"|"IN_PROGRESS"|"DONE"} status
 * @property {string} dueDate
 * @property {string} createdAt
 * @property {string} updatedAt
 * @property {TaskPersonSummary|null} assignedTo
 * @property {TaskPersonSummary} createdBy
 */

export {}
