import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskAddComponent } from './task-add/task-add.component';
import { TaskUpdateComponent } from './task-update/task-update.component';


const routes: Routes = [
  {
    path: 'list',
    component: TaskListComponent,
    data: {
      title: 'Lista de Tareas'
    }
  },
  {
    path: 'add',
    component: TaskAddComponent,
    data: {
      title: 'Crear Tarea'
    }
  },
  {
    path: 'update/:id',
    component: TaskUpdateComponent,
    data: {
      title: 'Modificar Tarea'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
