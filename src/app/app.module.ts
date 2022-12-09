import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesListComponent } from './Components/Employees/employees-list/employees-list.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './Components/header/header/header.component';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { CalendarModule } from 'primeng/calendar';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {InputTextModule} from 'primeng/inputtext';
import { UpdateEmployeeComponent } from './Components/Employees/update-employee/update-employee.component';
import { AddDepartmentComponent } from './Components/Departments/add-department/add-department.component';
import { UpdateDepartmentComponent } from './Components/Departments/update-department/update-department.component';
import { DepartmentListComponent } from './Components/Departments/department-list/department-list.component';
import { ViewEmployeeComponent } from './Components/Employees/view-employee/view-employee.component';
import { AddEmployeeComponent } from './Components/Employees/add-employee/add-employee.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { LeavesComponent } from './Components/Employees/leaves/leaves.component';
import { AddLeaveComponent } from './Components/Employees/leaves/add-leave/add-leave.component';
import { AddJobComponent } from './Components/Jobs/add-job/add-job.component';
import { UpdateJobComponent } from './Components/Jobs/update-job/update-job.component';
import { JobListComponent } from './Components/Jobs/job-list/job-list.component';


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
    AddLeaveComponent,
    AddJobComponent,
    UpdateJobComponent,
    JobListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ButtonModule,
    RippleModule,
    InputTextModule,
    CalendarModule,
    ReactiveFormsModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
