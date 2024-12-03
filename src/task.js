// Task Model
export class Task {
    constructor(title, description, date, priority, tag, checklist = []) {
        this.title = title;
        this.description = description;
        this.date = date;
        this.priority = priority;
        this.tag = tag;
        this.checklist = checklist; // Array of checklist items
        this.completed = false
    }

    isOverdue() {
        const taskDate = new Date(this.date);
        const currentDate = new Date();

        return taskDate < currentDate && !this.completed;
    }

    addChecklistItem(item) {
        this.checklist.push(item);
    }

    toggleChecklistItem(index) {
        this.checklist[index].completed = !this.checklist[index].completed;
    }

    addChecklistItemToTask(taskIndex, checklistItem) {
        this.tasks[taskIndex].addChecklistItem(checklistItem);
    }

    toggleChecklistItemInTask(taskIndex, checklistItemIndex) {
        this.tasks[taskIndex].toggleChecklistItem(checklistItemIndex);
    }

    isTaskComplete(index) {
        return this.checklist[index].completed;
    }
}


