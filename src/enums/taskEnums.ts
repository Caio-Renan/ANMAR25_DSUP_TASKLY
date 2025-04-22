export enum TaskStatus {
    PENDING = "PENDING",
    IN_PROGRESS = "IN_PROGRESS",
    COMPLETED = "COMPLETED",
    OVERDUE = "OVERDUE"
}
  
export enum TaskPriority {
    LOW = "LOW",
    MEDIUM = "MEDIUM",
    HIGH = "HIGH",
}

export const TaskStatusValues = Object.values(TaskStatus);

export const TaskPriorityValues = Object.values(TaskPriority);