//Main app Logic
import './style.css';
import { Task } from './task.js';
import { TaskLibrary } from './taskLibrary.js';

// Initialize Library with task list
const tasks = [
    new Task("Family Vacation", "Yearly trip to Jamaica", "2025-01-01", "High"),
]

// Create task instance
const myTasks = new TaskLibrary(tasks);


// Testing & Debugging
console.table(myTasks.getTasks());

// Add a new task
const newTask = new Task("Grocery Shopping", "Buy vegetables and milk", "2024-12-01", "Medium");
myTasks.addTask(newTask);
console.log('Task Added:');

console.table(myTasks.getTasks());

// Toggle completion status of a task
myTasks.toggleTaskCompletion(0);
console.log('Task Completed:')

console.table(myTasks.getTasks());


// Remove the first task
myTasks.removeTask(0);
console.log('Task Removed:')

console.table(myTasks.getTasks());





