import { Component, OnInit } from '@angular/core';
import { leave } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-leaves',
  templateUrl: './leaves.component.html',
  styleUrls: ['./leaves.component.css']
})
export class LeavesComponent implements OnInit {

  leaves:leave[] = [];
  constructor(
    private employeeService: EmployeesService,
    private titleService : Title) {
      this.titleService.setTitle('Leave | List')
     }

  ngOnInit(): void {
    this.employeeService.getAllLeave().subscribe({
      next: response => {
        this.leaves = response;
      },
      error: response => {
        console.log(response);
      }
    })
  }
}
