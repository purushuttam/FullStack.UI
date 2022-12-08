import { Component, OnInit } from '@angular/core';
import { Employees } from 'src/app/models/employee.model';

import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

  Employee:Employees = {id:'1',name:'Purushuttam Kumar',email:'purushuttam@infohybrid.com',phone:8210272811,salary:12000,department:'IT'};
  constructor(private titleService: Title) {
    this.titleService.setTitle('Employee | Employee Deatils');
  }

  ngOnInit(): void {
  }

}
