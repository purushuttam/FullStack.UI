import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';
import { country, state, city } from 'src/app/models/country.model';
import { CountryDataService } from 'src/app/services/country-data.service';
import { DepartmentDataService } from 'src/app/services/department-data.service';
import { Department, JobMaster } from 'src/app/models/department.model';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  countries:country[] = [];

  states:state[] = [];

  cities:city[] = [];

  departments: Department[] = []

  jobs: JobMaster[] = [];

  constructor(
    private employeeService:EmployeesService,
    private CountryData: CountryDataService,
    private DepartmentData: DepartmentDataService,
    private titleService: Title,
    private router :Router) {
      this.titleService.setTitle('Employee | Registration');
      this.DepartmentData.getAllDepartments().subscribe({
        next:(department) => {
          this.departments = department;
        }
      })
     }

  ngOnInit(): void {
    // this.AddNewContact();
    this.AddnewQualification();
   }

   title = 'FormArray';
   items!: FormArray;
   reactform = new FormGroup({
    employee_id: new FormControl(''),
    first_name: new FormControl('', Validators.required),
    last_name: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    dob: new FormControl('2022-12-07T09:24:08.121Z', Validators.required),
    jd: new FormControl('2022-12-07T09:24:08.121Z', Validators.required),
    department_id: new FormControl('', Validators.required),
    job_master_id: new FormControl('',Validators.required),
    is_active: new FormControl(true),
    created_on: new FormControl('2022-12-07T09:24:08.121Z'),
    created_by: new FormControl(''),
    updated_on: new FormControl('2022-12-07T09:24:08.121Z'),
    updated_by: new FormControl(''),
     employee_Qualification: new FormArray([]),
     employee_Contact_Details: new FormGroup({
      employee_contact_details_id: new FormControl(''),
      employee_id: new FormControl(''),
      mobile_no: new FormControl('', Validators.required),
      email_id: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      city_id: new FormControl('', Validators.required),
      state_id: new FormControl('', Validators.required),
      country_id: new FormControl('', Validators.required),
      is_active: new FormControl(true),
    created_on: new FormControl('2022-12-07T09:24:08.121Z'),
    created_by: new FormControl(''),
    updated_on: new FormControl('2022-12-07T09:24:08.121Z'),
    updated_by: new FormControl(''),
     }),
   });




   GenQualificationRow(): FormGroup{
    return new FormGroup({
      employee_qualification_id: new FormControl(''),
      employee_id : new FormControl(''),
      qualification_year: new FormControl(0, Validators.required),
      course_name: new FormControl('', Validators.required),
      last_qualification_university: new FormControl('', Validators.required),
      last_qualification_marks: new FormControl('', Validators.required),
      is_active: new FormControl(true),
    created_on: new FormControl('2022-12-07T09:24:08.121Z'),
    created_by: new FormControl(''),
    updated_on: new FormControl('2022-12-07T09:24:08.121Z'),
    updated_by: new FormControl(''),
    })
   }

   AddnewQualification() {
    this.items = this.reactform.get("employee_Qualification") as FormArray;
    this.items.push(this.GenQualificationRow())
  }
  RemoveQualification(index:any){
    this.items = this.reactform.get("employee_Qualification") as FormArray;
    this.items.removeAt(index)
  }

  get employee_Qualification(){
    return this.reactform.get("employee_Qualification") as FormArray;
  }

  GenContactRow():FormGroup {
    return new FormGroup({

    })
  }

  // AddNewContact() {
  //   this.items = this.reactform.get("employee_Contact_Details") as FormArray;
  //   this.items.push(this.GenContactRow())
  // }
  // RemoveContact(index:any){
  //   this.items = this.reactform.get("employee_Contact_Details") as FormArray;
  //   this.items.removeAt(index)
  // }

  // get employee_Contact_Details(){
  //   return this.reactform.get("employee_Contact_Details") as FormArray;
  // }

  // ProceedSave() {
  //   console.log(this.reactform.value);
  // }

  onCountry() {
    this.CountryData.GetAllCountries()
    .subscribe({
      next: (country) => {
        this.countries = country;
      },
      error: (Response) => {
        console.log(Response);
      }
    })
  }

  OnCountrySelect(country_code:string){
    console.log(country_code);
    this.CountryData.GetAllState(country_code).subscribe({
      next: (state) => {
        this.states = state;
      },
      error: (response) => {
        console.log(response);
      }
    })
  }
  OnSelectState(state_code:string) {
    console.log(state_code);
    this.CountryData.GetAllCities(state_code).subscribe({
      next: (city) => {
        this.cities = city;
      },
      error: (response) => {
        console.log(response);
      }
    })
  }

  onSelectJob(department_id:string){
    console.log(department_id);
    this.DepartmentData.getAllJob(department_id).subscribe({
      next: (response:any) => {
        console.log(response);
        this.jobs = response.respObj;
      },
      error: response => {
        console.log(response);
      }
    })
  }

  onSubmit(EData:Employee){
    console.log(EData);
    this.employeeService.saveEmployee(EData).subscribe((response:any) => {
      console.log(response);
      if(response.resp === true){
        this.router.navigate(['Employees/employee-list'])
      }
    });
  }
}
