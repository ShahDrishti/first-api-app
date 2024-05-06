import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListDepartmentComponent } from './list-department/list-department.component';
import { CreateDepartmentComponent } from './create-department/create-department.component';

const routes: Routes = [
  {
    component:ListDepartmentComponent,
    path:'list'
  },
  {
    component:CreateDepartmentComponent,
    path:'create'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
