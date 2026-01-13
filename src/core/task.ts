export class Task {
    public title: string;
    public description: string;
    public isCompleted: boolean;
    public priority: number;

    constructor(title: string, description: string, priority: number = 3) {
        this.title = title;
        this.description = description;
        this.isCompleted = false;
        this.priority = priority;
    }
}
