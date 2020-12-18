import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './layouts/home/home.component';
import { WorksComponent } from './layouts/works/works.component';


import { CenzorComponent } from './layouts/works/cenzor/cenzor.component';
import { UsersListComponent } from './layouts/works/users-list/users-list.component';
import { TaskListComponent } from './layouts/works/task-list/task-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  {
    path: 'works', component: WorksComponent, children: [
      { path: 'cenzor', component: CenzorComponent },
      { path: 'users-list', component: UsersListComponent },
      { path: 'task-list', component: TaskListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
