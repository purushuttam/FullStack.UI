import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { AddDepartmentComponent } from './Components/Departments/add-department/add-department.component';
import { DepartmentListComponent } from './Components/Departments/department-list/department-list.component';
import { UpdateDepartmentComponent } from './Components/Departments/update-department/update-department.component';
import { AddEmployeeComponent } from './Components/Employees/add-employee/add-employee.component';
import { EmployeesListComponent } from './Components/Employees/employees-list/employees-list.component';
import { LeavesComponent } from './Components/Employees/leaves/leaves.component';
import { UpdateEmployeeComponent } from './Components/Employees/update-employee/update-employee.component';
import { ViewEmployeeComponent } from './Components/Employees/view-employee/view-employee.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'Employees/employee-list',
    component :EmployeesListComponent
  },
  {
    path: 'Employees/add-employee',
    component : AddEmployeeComponent
  },
  {
    path: 'Employees/update-employee',
    component : UpdateEmployeeComponent
  },
  {
    path:'Employees/view-employee',
    component:ViewEmployeeComponent
  },
  {
    path:'Employees/leaves',
    component: LeavesComponent
  },
  {
    path: 'Department/add-department',
    component : AddDepartmentComponent
  },
  {
    path: 'Department/department-list',
    component: DepartmentListComponent
  },
  {
    path: 'Department/update-department',
    component: UpdateDepartmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
