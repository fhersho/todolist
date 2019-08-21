import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TaskAddComponent } from './task-add/task-add.component';
import { TaskUpdateComponent } from './task-update/task-update.component';
import { TaskListComponent } from './task-list/task-list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [TaskAddComponent, TaskUpdateComponent, TaskListComponent],
  imports: [
    CommonModule,
    FormsModule,
    TasksRoutingModule
  ]
})
export class TasksModule { }
