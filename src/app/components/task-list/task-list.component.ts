import { Component } from '@angular/core';

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html'
})
export class TaskListComponent {
    taskData = [];
    showForm = false;

    constructor() {
    }

    showTaskForm() {
        this.showForm = true;
    }

    addTask(name:string, description:string) {
        this.taskData.unshift({name: name, description: description});
        this.showForm = false;
    }

    deleteTask(i:number) {
        this.taskData.splice(i, 1);
    }
}