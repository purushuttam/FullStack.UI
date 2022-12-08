import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { AddDepartmentComponent } from './Components/Departments/add-department/add-department.component';
import { DepartmentListComponent } from './Components/Departments/department-list/department-list.component';
import { UpdateDepartmentComponent } from './Components/Departments/update-department/update-department.component';
import { AddEmployeeComponent } from './Components/Employees/add-employee/add-employee.component';
import { EmployeesListComponent } from './Components/Employees/employees-list/employees-list.component';
import { AddLeaveComponent } from './Components/Employees/leaves/add-leave/add-leave.component';
import { LeavesComponent } from './Components/Employees/leaves/leaves.component';
import { UpdateEmployeeComponent } from './Components/Employees/update-employee/update-employee.component';
import { ViewEmployeeComponent } from './Components/Employees/view-employee/view-employee.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    data:{title: 'Dashboard'}
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'Employees/employee-list',
    component :EmployeesListComponent,
    data:{title: 'Dashboard'}
  },
  {
    path: 'Employees/add-employee',
    component : AddEmployeeComponent,
    data:{title: 'Dashboard'}
  },
  {
    path: 'Employees/update-employee',
    component : UpdateEmployeeComponent,
    data:{title: 'Dashboard'}
  },
  {
    path:'Employees/view-employee',
    component:ViewEmployeeComponent,
    data:{title: 'Dashboard'}
  },
  {
    path:'Employees/leaves',
    component: LeavesComponent,
    data:{title: 'Dashboard'}
  },
  {
    path: 'Employees/leaves/add-leave',
    component: AddLeaveComponent
  },
  {
    path: 'Department/add-department',
    component : AddDepartmentComponent,
    data:{title: 'Dashboard'}
  },
  {
    path: 'Department/department-list',
    component: DepartmentListComponent,
    data:{title: 'Dashboard'}
  },
  {
    path: 'Department/update-department',
    component: UpdateDepartmentComponent,
    data:{title: 'Dashboard'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
