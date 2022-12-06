import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { interval, Subscription } from 'rxjs';
import { Department } from 'src/app/models/department.model';
import { DashboardIndex, Employee } from 'src/app/models/employee.model';
import { DepartmentDataService } from 'src/app/services/department-data.service';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  reactForm = new FormGroup({
    code: new FormControl('',Validators.required),
    name: new FormControl('',Validators.required)
  });
  constructor(private EmployeeService: EmployeesService, private DepartmentDataService: DepartmentDataService) { }

  countd:any;

  departments: Department[] = [];
  employees: Employee[] = [];
  ecount:number = 0;
  dcount:number = 0;
  dashboard:DashboardIndex[] = [];


  ngOnInit(): void {
    this.DepartmentDataService.getAllDepartments()
    .subscribe({
      next: (department) => {
        this.departments = department;
        this.dcount = department.length;
        // this.dashboard[0].SNo = 1;
        // this.dashboard[0].Name = 'Departments';
        // this.dashboard[0].Total = department.length;
      },
      error: (Response) => {
        console.log(Response);
      }
    })

    this.EmployeeService.getAllEmployees()
    .subscribe({
      next: (employee) => {
        console.log(employee)
        this.employees = employee;
        this.ecount = employee.length;
      },
      error: (Response) => {
        console.log(Response);
      }
    })
  }

}
