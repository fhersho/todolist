import { Component, OnInit } from '@angular/core';
import { Task } from '../../../models/Task';
import { TaskService } from '../../../services/task.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { MessagesService } from '../../../services/messages.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html'
})
export class TaskListComponent implements OnInit {

  tasks: Task[] = [];

  constructor (private taskService: TaskService,
    private loading: NgxUiLoaderService,
    private messageService: MessagesService) {
  }

  ngOnInit(): void {
    this.loading.start();
    this.taskService.getAll().subscribe((data: Task[]) => {
      this.tasks = data;
      console.log(this.tasks);
      this.loading.stop();
    }, err => {
      this.loading.stop();
    });
  }

  public rest (task: Task): number {
    if (task.workedTime) {
      return task.estimateTime - task.workedTime;
    }
    return task.estimateTime;
  }
}
