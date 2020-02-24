import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-task',
    templateUrl: './task.component.html'
})
export class TaskComponent {
    @Input() name: string;
    @Input() description: string;

    constructor() {
        this.name = 'The name of the task to be completed.';
        this.description = 'The description of the task.';
    }
}
