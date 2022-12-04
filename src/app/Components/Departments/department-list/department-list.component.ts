import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/models/department.model';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  Departments:Department[] =[
    {department_id:'1',department_name:'IT',manager_name:'Suraj Sharma',location:'Mumbai'},
    {department_id:'2',department_name:'FINANCE',manager_name:'Binod Kumar',location:'Delhi'},
    {department_id:'3',department_name:'HR',manager_name:'Ravi Lal',location:'Hydrabad'},
    {department_id:'4',department_name:'PAYMENT',manager_name:'Rakesh Verma',location:'Chennai'},
    {department_id:'5',department_name:'ELECTRICAL',manager_name:'Shiva Nishad',location:'Jamshedpur'},
    {department_id:'6',department_name:'BUSINESS DEVELOPMENT',manager_name:'Subham Nishad',location:'Hydrabad'},
    {department_id:'7',department_name:'CLIENT SIDE',manager_name:'Niraj Sharma',location:'Kanpur'},
    {department_id:'8',department_name:'TAX',manager_name:'Suraj Sharma',location:'Ranchi'}
  ] ;
  constructor() { }

  ngOnInit(): void {
  }

}
