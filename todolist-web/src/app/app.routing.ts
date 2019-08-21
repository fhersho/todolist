import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';
import { Page404Component } from './views/page404/page404.component';

export const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Dashboard'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      }
    ]
  },
  {
    path: 'tasks',
    component: DefaultLayoutComponent,
    data: {
      title: 'Tareas'
    },
    children: [
      {
        path: '',
        loadChildren: () => import('./views/tasks/tasks.module').then(m => m.TasksModule)
      }
    ]
  },
  {
    path: '**',
    component: Page404Component,
  },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
