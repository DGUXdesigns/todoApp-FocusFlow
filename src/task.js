// Task Model
export class Task {
    // TODO: add checklist and tags
    constructor(title, description, date, priority, tag) {
        this.title = title;
        this.description = description;
        this.date = date;
        this.priority = priority;
        this.tag = tag;
        this.completed = false // Optional: Tracks task completion
    }

    isOverdue() {
        const taskDate = new Date(this.date);
        const currentDate = new Date();

        return taskDate < currentDate && !this.completed;
    }
}


