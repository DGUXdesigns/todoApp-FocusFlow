// Task Model
export class Task {
    // TODO: add checklist and tags
    constructor(title, description, date, priority) {
        this.title = title;
        this.description = description;
        this.date = date;
        this.priority = priority;
        this.completed = false // Optional: Tracks task completion
    }
}


