import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { UserNameComponent } from './components/user-name/user-name.component';
import { TaskListComponent } from './components/task-list/task-list.component';

const routes: Routes = [
    {
        path: 'Username',
        component: UserNameComponent
    },
    {
        path: ':name/Tasklist',
        component: TaskListComponent
    },

    {
        path: '',
        redirectTo: '/Username',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule]
})
export class AppRoutingModule { }