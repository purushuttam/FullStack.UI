import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employees } from '../models/employee.model';
import { Employee } from '../models/employee.model';
import { Status } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }

  getAllEmployees() : Observable<Employee[]>{
    return this.http.get<Employee[]>(this.baseApiUrl + 'api/Employee/GetAllEmployee');
  }

  getEmployee(employee_id:string): Observable<any> {
    return this.http.get<any>(this.baseApiUrl + 'api/Employee/GetDetailsById' + employee_id);
  }

  saveEmployee(employee:Employee): Observable<Employee> {
    return this.http.post<Employee>(this.baseApiUrl + 'api/Employee/saveEmployee' , employee);
  }

  updateEmployee(employee:Employee): Observable<Employee> {
    return this.http.put<Employee>(this.baseApiUrl + 'api/Employee/UpdateEmployee' , employee);
  }

  deleteEmployee(employee_id:string): Observable<any> {
    return this.http.delete<any>(this.baseApiUrl + 'api/Employee/DeleteEmployee/' + employee_id);
  }

  employeeStatus(status:Status): Observable<Status> {
    return this.http.post<Status>(this.baseApiUrl + 'api/Employee/Status' , status);
  }

}
