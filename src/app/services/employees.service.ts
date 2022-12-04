import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employees } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }

  getAllEmployees() : Observable<Employees[]>{
    return this.http.get<Employees[]>(this.baseApiUrl + 'api/employees');
  }

  addEmployee(addEmployeeRequest: Employees): Observable<Employees> {
    addEmployeeRequest.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Employees>(this.baseApiUrl + 'api/employees' , addEmployeeRequest);
  }
}
