import { Component, OnInit } from '@angular/core';
import { Title} from '@angular/platform-browser'
import { JobMaster } from 'src/app/models/department.model';
import { DepartmentDataService } from 'src/app/services/department-data.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {

  jobs:JobMaster[] = [];
  constructor(
    private titleService: Title,
    private departmentService: DepartmentDataService
  ) {
    this.titleService.setTitle('Jobs | Job List')
    this.departmentService.getAllJobs().subscribe({
      next: response => {
        console.log(response);
        this.jobs = response;
      },
      error: (response:any) => {
        console.log(response);
      }
    })
  }

  ngOnInit(): void {
  }

}
