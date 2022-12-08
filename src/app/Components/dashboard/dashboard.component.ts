import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { interval, Subscription } from 'rxjs';
import { Department } from 'src/app/models/department.model';
import { DashboardIndex, Employee } from 'src/app/models/employee.model';
import { DepartmentDataService } from 'src/app/services/department-data.service';
import { EmployeesService } from 'src/app/services/employees.service';
import { EmployeeSearch } from 'src/app/models/employee.model';
import { Title } from '@angular/platform-browser';

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
  constructor(
    private EmployeeService: EmployeesService,
    private DepartmentDataService: DepartmentDataService,
    private titleService : Title) {
    this.titleService.setTitle('Dashboard');
  }

  countd:any;

  departments: Department[] = [];
  employees: EmployeeSearch[] = [];
  ecount:number = 0;
  dcount:number = 0;
  dashboard:DashboardIndex[] = [];


  ngOnInit(): void {
    this.DepartmentDataService.getAllDepartments()
    .subscribe({
      next: (department) => {
        this.departments = department;
        this.dcount = department.length;
      },
      error: (Response) => {
        console.log(Response);
      }
    })

    this.EmployeeService.getAllEmployees()
    .subscribe({
      next: (employee) => {
        this.employees = employee;
        this.ecount = employee.length;
      },
      error: (Response) => {
        console.log(Response);
      }
    })
  }

}
