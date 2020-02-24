import { Component } from '@angular/core';

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
    taskData = [];
    showForm = false;

    constructor() {
    }

    showTaskForm() {
        this.showForm = true;
    }

    addTask(name: string, description: string) {
        if (this.isEmpty(name) || this.isEmpty(description)) {
            alert("Missing entry.");
        }
        else {
            this.taskData.unshift({ name: name, description: description });
            this.showForm = false;
        }

    }

    deleteTask(i: number) {
        this.taskData.splice(i, 1);
    }

    isEmpty(text: string) {
        return text === null || text.replace(/^\s+|\s+$/g, '').length === 0;
    }
}