import { Component, OnInit } from '@angular/core';
import { Employees } from 'src/app/models/employee.model';
import { EmployeeSearch } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  employee: EmployeeSearch[] = [];

  constructor(private employeeService: EmployeesService,
    private titleService: Title) {
    this.titleService.setTitle('Employee | List');
  }


  ngOnInit(): void {
    this.employeeService.getAllEmployees()
    .subscribe({
      next: (employee) => {
        this.employee = employee;
      },
      error: (Response) => {
        console.log(Response);
      }
    })
  }

}
