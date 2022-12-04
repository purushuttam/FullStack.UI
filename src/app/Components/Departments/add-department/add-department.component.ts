import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/models/department.model';
import { DepartmentDataService } from 'src/app/services/department-data.service';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {

  constructor(private DepartmentDataService : DepartmentDataService) { }

  ngOnInit(): void {
  }

  onSubmit(DData:Department){
    console.log(DData);
    this.DepartmentDataService.saveDepartment(DData).subscribe((response:any) => {
      console.log(response);
    });
  }
}
