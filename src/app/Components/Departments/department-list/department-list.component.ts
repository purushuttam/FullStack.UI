import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/models/department.model';
import { interval} from 'rxjs'
import { DepartmentDataService } from 'src/app/services/department-data.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  Departments: Department[] = [];
  constructor(
    private departmentDataService: DepartmentDataService,
    private titleService : Title) {
      this.titleService.setTitle('Department | List')
    }

  ngOnInit(): void {
    this.departmentDataService.getAllDepartments()
    .subscribe({
      next: (department) => {
        this.Departments = department;
      },
      error: (Response) => {
        console.log(Response);
      }
    })
  }

  onDelete(department_id:string){
    console.log(department_id);
    this.departmentDataService.deleteDepartment(department_id).subscribe((response:any) => {
      console.log(response);
    });
  }
}
