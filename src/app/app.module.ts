import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TaskComponent } from './components/task/task.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { UserNameComponent } from './components/user-name/user-name.component';
import { AppRoutingModule } from './app.route';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskListComponent,
    UserNameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
