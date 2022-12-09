import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser'
import { Router } from '@angular/router';
import { Department, JobMaster } from 'src/app/models/department.model';
import { DepartmentDataService } from 'src/app/services/department-data.service';
import { NgForm, FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
})
export class AddJobComponent implements OnInit {

  departments:Department[] = [];
  constructor(
    private titleService: Title,
    private departmentService: DepartmentDataService,
    private router: Router
  ) {
    this.titleService.setTitle('Jobs | Add Job');
    this.departmentService.getAllDepartments().subscribe({
      next: response => {
        console.log(response);
        this.departments = response;
      },
      error: (response:any) => {
        console.log(response);
      }
    })
  }

  ngOnInit(): void {
  }

  onSubmit(Jform:JobMaster){
    console.log(Jform);
    this.departmentService.saveJob(Jform).subscribe((response:any) => {
      console.log(response);
      if(response.resp){
        this.router.navigate(['Jobs/job-list'])
      }
    }),
    console.error();

  }

}
