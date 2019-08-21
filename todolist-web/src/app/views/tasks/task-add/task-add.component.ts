import { Component, OnInit } from '@angular/core';
import { Task } from '../../../models/Task';
import { Developer } from '../../../models/developer';
import { TaskService } from '../../../services/task.service';
import { DeveloperService } from '../../../services/developer.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { MessagesService } from '../../../services/messages.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Utils } from '../../../utilities/Utils';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html'
})
export class TaskAddComponent implements OnInit {

  task: Task;

  developers: Developer[] = [];
  developerSelected: string = '0';

  constructor(private taskService: TaskService,
    private developerService: DeveloperService,
    private loading: NgxUiLoaderService,
    private messageService: MessagesService,
    private router: Router) { }

  ngOnInit() {
    this.task = new Task();
    this.getDevelopers();
  }

  getDevelopers() {
    this.loading.start();
    this.developerService.getAll().subscribe((data: Developer[]) => {
      this.developers = data;
      this.loading.stop();
    }, err => {
      this.messageService.addMessage(err.error);
      this.loading.stop();
    });
  }

  public guardar() {
    this.loading.start();

    this.task.developer = <Developer>{ id: +this.developerSelected };

    this.taskService.save(this.task).subscribe(data => {
      this.loading.stop();
      this.router.navigate(['/tasks/list']);
    }, err => {
      this.loading.stop();
      this.messageService.addMessage(err.error);
    });
  }

  isValidForm() {
    if (Utils.checkEmptyObject(this.task.title)) {
      return false;
    }

    if (Utils.checkEmptyObject(this.task.description)) {
      return false;
    }

    if (this.developerSelected === '0') {
      return false;
    }

    return true;
  }
}
