import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-user-name',
    templateUrl: './user-name.component.html',
    styleUrls: ['./user-name.component.css']
})
export class UserNameComponent {

    constructor(private router: Router) {

    }

    createList(name: string) {
        if (this.isEmpty(name)) {
            alert("Missing entry.");
        }
        else {
            this.router.navigate([name, 'Tasklist']);
        }

    }

    isEmpty(text: string) {
        return text === null || text.replace(/^\s+|\s+$/g, '').length === 0;
    }
}