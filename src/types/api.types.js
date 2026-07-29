/**
 * @typedef {Object} PaginationMeta
 * @property {number} page
 * @property {number} pageSize
 * @property {number} total
 * @property {number} totalPages
 * @property {boolean} hasNextPage
 * @property {boolean} hasPreviousPage
 */

/**
 * @typedef {Object} ApiSuccess
 * @property {*} data - the resource, or an array of them
 * @property {PaginationMeta} [meta] - present on list endpoints only
 */

/**
 * @typedef {Error} ApiError
 * @property {number} status - HTTP status code
 * @property {string} code - e.g. "VALIDATION_ERROR", "UNAUTHORIZED"
 * @property {Object.<string, string[]>} [fieldErrors] - present on 422/409 field-level failures
 */

export {}
