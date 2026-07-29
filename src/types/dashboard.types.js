/**
 * @typedef {Object} DashboardChartPoint
 * @property {string} label
 * @property {string} date
 * @property {number} created
 * @property {number} completed
 */

/**
 * @typedef {Object} AdminDashboard
 * @property {"ADMIN"} scope
 * @property {{ totalEmployees: number, activeTasks: number, completedTasks: number, pendingTasks: number, overdueTasks: number }} stats
 * @property {DashboardChartPoint[]} chart
 * @property {import('./task.types').Task[]} recentTasks
 * @property {import('./employee.types').Employee[]} recentEmployees
 */

/**
 * @typedef {Object} EmployeeDashboard
 * @property {"EMPLOYEE"} scope
 * @property {{ assignedTasks: number, completedTasks: number, pendingTasks: number, overdueTasks: number }} stats
 * @property {DashboardChartPoint[]} chart
 * @property {import('./task.types').Task[]} myTasks
 */

export {}
