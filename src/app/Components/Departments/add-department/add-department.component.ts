
import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { country, state , city} from 'src/app/models/country.model';
import { Department } from 'src/app/models/department.model';
import { CountryDataService } from 'src/app/services/country-data.service';
import { DepartmentDataService } from 'src/app/services/department-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {

  countries:country[] = [];
  states:state[] = [];
  cities:city[] = [];
  constructor(
    private DepartmentDataService : DepartmentDataService,
    private CountryData : CountryDataService,
    private titleService: Title,
    private router : Router
    ) {
      this.titleService.setTitle('Department | Add Department')
    }

  ngOnInit(): void {

  }


  onSubmit(DData:Department){
    this.DepartmentDataService.saveDepartment(DData)
    .subscribe((response:any) => {
      console.log(response);
      if(response.resp === true){
        this.router.navigate(['Department/department-list']);
      }
    });
  }

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
    this.CountryData.GetAllState(country_code)
    .subscribe({
      next: (state) => {
        this.states = state;
      },
      error: (response) => {
        console.log(response);
      }
    })
  }
  OnSelectState(state_code:string) {
    this.CountryData.GetAllCities(state_code).subscribe({
      next: (city) => {
        this.cities = city;
      },
      error: (response) => {
        console.log(response);
      }
    })
  }
}
