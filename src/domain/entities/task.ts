/**
 * Represents an individual task in this application.
 * @Author Karami
 *
 * @param title - The title of the task.
 * @param description - A detailed description of the task.
 * @param isCompleted - A boolean indicating whether the task is completed.
 * @param priority - The priority level of the task (1 being the highest, must be above 0).
 *
 * @remarks
 * This class is designed to encapsulate the properties and behaviours of a task
 * within a TO DO application context.
 *
 */
export class Task {
    public title: string;
    public description: string;
    public isCompleted: boolean;
    public priority: number;
    public dueDate: Date;

    constructor(title: string, description: string, priority?: number, dueDate?: Date) {
        this.title = title;
        this.description = description;
        this.isCompleted = false;
        this.priority = priority ?? 3; // Default priority is 3 if not provided
        this.dueDate = dueDate ?? new Date(); // Default due date is current date if not provided
    }
}
