import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CreateDepartmentComponent } from './create-department/create-department.component';
import { ListDepartmentComponent } from './list-department/list-department.component';
import { EditDepartmentComponent } from './edit-department/edit-department.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { AddUserComponent } from './add-user/add-user.component';
import { FormsModule } from '@angular/forms';
import { EditUserComponent } from './edit-user/edit-user.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SrcDepartmentComponent } from './src-department/src-department.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateDepartmentComponent,
    ListDepartmentComponent,
    EditDepartmentComponent,
    UserManagementComponent,
    AddUserComponent,
    EditUserComponent,
    LoginPageComponent,
    SrcDepartmentComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
