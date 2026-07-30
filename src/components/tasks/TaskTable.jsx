import { Link } from "react-router-dom"
import { Calendar, MoreVertical } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui"
import { EmptyState, LoadingSkeleton } from "@/components/shared"
import { TaskPriorityBadge } from "./TaskPriorityBadge"
import { TaskStatusBadge } from "./TaskStatusBadge"
import { useLocale, useTaskStatusOptions } from "@/hooks"
import { formatDate, getFullName, getInitials, isOverdue } from "@/utils"
import { ROUTE_PATHS } from "@/constants"

const HEAD_CLASS = "text-xs font-medium tracking-wide text-muted-foreground uppercase"

export function TaskTable({ tasks, isLoading, isAdmin, onEdit, onDelete, onStatusChange }) {
  const { t, locale } = useLocale()
  const statusOptions = useTaskStatusOptions()

  if (isLoading) return <LoadingSkeleton />
  if (!tasks?.length) return <EmptyState title={t("tasks.noTasksFound")} />

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className={HEAD_CLASS}>{t("tasks.columnTask")}</TableHead>
          {isAdmin ? <TableHead className={HEAD_CLASS}>{t("tasks.columnAssignee")}</TableHead> : null}
          <TableHead className={HEAD_CLASS}>{t("tasks.columnPriority")}</TableHead>
          <TableHead className={HEAD_CLASS}>{t("tasks.columnDueDate")}</TableHead>
          <TableHead className={HEAD_CLASS}>{t("tasks.columnStatus")}</TableHead>
          <TableHead className="w-10" />
        </TableRow>
      </TableHeader>
      <TableBody>
        {tasks.map((task) => {
          const overdue = isOverdue(task.dueDate, task.status)
          return (
            <TableRow key={task.id}>
              <TableCell className="max-w-xs">
                <Link to={ROUTE_PATHS.TASK_DETAIL(task.id)}>
                  <p className="truncate font-medium">{task.title}</p>
                  {task.description ? (
                    <p className="truncate text-sm text-muted-foreground">{task.description}</p>
                  ) : null}
                </Link>
              </TableCell>
              {isAdmin ? (
                <TableCell>
                  {task.assignedTo ? (
                    <div className="flex items-center gap-2">
                      <Avatar className="size-6">
                        <AvatarImage src={task.assignedTo.avatar} alt={getFullName(task.assignedTo)} />
                        <AvatarFallback>
                          {getInitials(task.assignedTo.firstName, task.assignedTo.lastName)}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-sm">{getFullName(task.assignedTo)}</span>
                    </div>
                  ) : (
                    <span className="text-sm text-muted-foreground">{t("common.unassigned")}</span>
                  )}
                </TableCell>
              ) : null}
              <TableCell>
                <TaskPriorityBadge priority={task.priority} />
              </TableCell>
              <TableCell className={cn(overdue && "font-medium text-destructive")}>
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="size-3.5 text-muted-foreground" />
                  {formatDate(task.dueDate, locale)}
                </span>
              </TableCell>
              <TableCell>
                <TaskStatusBadge status={task.status} />
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger render={<Button variant="ghost" size="icon-sm" />}>
                    <MoreVertical className="size-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    {isAdmin ? (
                      <>
                        <DropdownMenuItem onClick={() => onEdit(task)}>{t("common.edit")}</DropdownMenuItem>
                        <DropdownMenuItem variant="destructive" onClick={() => onDelete(task)}>
                          {t("common.delete")}
                        </DropdownMenuItem>
                      </>
                    ) : (
                      <DropdownMenuRadioGroup
                        value={task.status}
                        onValueChange={(status) => onStatusChange(task.id, status)}
                      >
                        {statusOptions.map((option) => (
                          <DropdownMenuRadioItem key={option.value} value={option.value}>
                            {option.label}
                          </DropdownMenuRadioItem>
                        ))}
                      </DropdownMenuRadioGroup>
                    )}
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}
