import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesListComponent } from './Components/Employees/employees-list/employees-list.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './Components/header/header/header.component';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { CalendarModule } from 'primeng/calendar';

import {InputTextModule} from 'primeng/inputtext';
import { UpdateEmployeeComponent } from './Components/Employees/update-employee/update-employee.component';
import { AddDepartmentComponent } from './Components/Departments/add-department/add-department.component';
import { UpdateDepartmentComponent } from './Components/Departments/update-department/update-department.component';
import { DepartmentListComponent } from './Components/Departments/department-list/department-list.component';
import { ViewEmployeeComponent } from './Components/Employees/view-employee/view-employee.component';
import { AddEmployeeComponent } from './Components/Employees/add-employee/add-employee.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { LeavesComponent } from './Components/Employees/leaves/leaves.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeesListComponent,
    HeaderComponent,
    UpdateEmployeeComponent,
    AddDepartmentComponent,
    UpdateDepartmentComponent,
    DepartmentListComponent,
    ViewEmployeeComponent,
    AddEmployeeComponent,
    LeavesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ButtonModule,
    RippleModule,
    InputTextModule,
    CalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
