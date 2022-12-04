import { Component, OnInit } from '@angular/core';
import { Employees } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  employees: Employees[] = [
    {id:'1',name:'Shiva Nishad',email:'Shiva@infohybrid.com',phone:82102728111,salary:52000,department:'IT'},
    {id:'2',name:'Rakesh Kumar',email:'Rakesh@infohybrid.com',phone:12546845733,salary:42000,department:'Finance'},
    {id:'3',name:'Ravi Lal',email:'Ravi@infohybrid.com',phone:21546584521,salary:32000,department:'HR'},
    {id:'4',name:'Subham Nishad',email:'Subham@infohybrid.com',phone:12354521454,salary:12000,department:'Business development'},
    {id:'5',name:'Purushuttam Kumar',email:'purushuttam@infohybrid.com',phone:45456256525,salary:222000,department:'Payment'}
  ];

  constructor(private employeeService: EmployeesService) { }


  ngOnInit(): void {
    this.employeeService.getAllEmployees()
    .subscribe({
      next: (employees) => {
        this.employees = employees;
      },
      error: (Response) => {
        console.log(Response);
      }
    })
  }

}
