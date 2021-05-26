import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TodoComponent} from './todo/todo.component';
import {TaskAddComponent} from "./task-add/task-add.component";

const routes: Routes = [
  {
    path: 'tasks',
    component: TodoComponent
  },
  {
    path: 'tasks/add',
    component: TaskAddComponent
  },
  { path: '',
    redirectTo: '/tasks',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
