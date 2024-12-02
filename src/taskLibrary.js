// Task Logic
export class TaskLibrary {
    constructor(Task = []) {
        this.tasks = Task; // Array of task objects
    }

    // Add task to list  
    addTask(task) {
        this.tasks.push(task);
    }

    removeTask(index) {
        this.tasks.splice(index, 1);
    }

    toggleTaskCompletion(index) {
        this.tasks[index].completed = !this.tasks[index].completed;
    }

    getTasks() {
        return this.tasks;
    }
}