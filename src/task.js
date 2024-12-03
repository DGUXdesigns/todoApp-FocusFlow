// Task Model
export class Task {
    // TODO: add checklist and tags
    constructor(title, description, date, priority, tag, checklist = []) {
        this.title = title;
        this.description = description;
        this.date = date;
        this.priority = priority;
        this.tag = tag;
        this.checklist = checklist; //Array of checlist items
        this.completed = false //TODO: implement toggle for completed tasks
    }

    isOverdue() {
        const taskDate = new Date(this.date);
        const currentDate = new Date();

        return taskDate < currentDate && !this.completed;
    }

    addChecklistItem(item) {
        this.checklist.push(item);
    }

    togglechecklistItem(index) {
        this.checklist[index].completed = !this.checklist[index].completed;
    }
}


