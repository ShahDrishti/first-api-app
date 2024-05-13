import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListDepartmentComponent } from './list-department/list-department.component';
import { CreateDepartmentComponent } from './create-department/create-department.component';
import { EditDepartmentComponent } from './edit-department/edit-department.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';

const routes: Routes = [
  {
    component:ListDepartmentComponent,
    path:'list'
  },
  {
    component:CreateDepartmentComponent,
    path:'create'
  },
  {
    component:EditDepartmentComponent,
    path:'edit/:id'
  },
  {
    component:UserManagementComponent,
    path:'user'

  },
  {
    component:AddUserComponent,
    path:'add-user'
  },
  {
    component:EditUserComponent,
    path:'edit-user/:email'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
