import { Component } from '@angular/core';

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html'
})
export class TaskListComponent {
    taskData = [];

    constructor() {
        this.taskData.push({ name: 'Task#1', description: 'Description#1' });
        this.taskData.push({ name: 'Task#2', description: 'Description#2' });
        this.taskData.push({ name: 'Task#3', description: 'Description#3' });
        this.taskData.push({ name: 'Task#4', description: 'Description#4' });

        console.log(this.taskData);
    }
}