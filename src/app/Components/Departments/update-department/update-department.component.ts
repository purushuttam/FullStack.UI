import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/models/department.model';
import { DepartmentDataService } from 'src/app/services/department-data.service';
import { Title} from '@angular/platform-browser';

@Component({
  selector: 'app-update-department',
  templateUrl: './update-department.component.html',
  styleUrls: ['./update-department.component.css']
})
export class UpdateDepartmentComponent implements OnInit {


  constructor(
    private DepartmentDataService: DepartmentDataService,
    private titlteService : Title) {
      this.titlteService.setTitle('Department | Update');
    }
    
  ngOnInit(): void {
  }

  onSubmit(department:Department){
    console.log(department);
    this.DepartmentDataService.updateDepartment(department).subscribe((response:any) => {
      console.log(response);
    });
  }

  viewDepartment(department_id:string) {
    this.DepartmentDataService.getDepartment(department_id).subscribe((response:any) => {
      console.log(response);
    });
  }
}
