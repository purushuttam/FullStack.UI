import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Employee, EmployeeSearch, leave } from 'src/app/models/employee.model';
import { Title } from '@angular/platform-browser';
import { EmployeesService } from 'src/app/services/employees.service';


@Component({
  selector: 'app-add-leave',
  templateUrl: './add-leave.component.html',
  styleUrls: ['./add-leave.component.css']
})
export class AddLeaveComponent implements OnInit {



  employees: EmployeeSearch[] = [];
  newTitle = 'leave';
  constructor(
    private titleService: Title,
    private employeeService: EmployeesService,
    private router: Router)
    {
    this.titleService.setTitle('Employee | Leave');
    this.employeeService.getAllEmployees().subscribe({
      next: employee => {
        this.employees = employee;
      },
      error :response => {
        console.log(response);
      }
    })
  }

  ngOnInit(): void {

  }

  leaveForm = new FormGroup({
    leaves_id : new FormControl(''),
    employee_id : new FormControl(''),
    start_date : new FormControl(''),
    end_date : new FormControl(''),
    reason : new FormControl('')
  })

  onSubmit(lform:leave){
    console.log(lform);
    this.employeeService.addLeave(lform).subscribe({
      next: (response:any) => {
        console.log(response);
        if(response.resp === true){
          this.router.navigate(['Employees/leaves'])
        }
      },
      error: response => {
        console.log(response);
      }
    })
  }


}
