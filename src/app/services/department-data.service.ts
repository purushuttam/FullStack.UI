import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Department, JobMaster } from '../models/department.model';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DepartmentDataService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http : HttpClient) { }

  getAllDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(this.baseApiUrl + 'api/Department/GetAllDepartment');
  }

  saveDepartment(department:Department): Observable<any> {
    return this.http.post<Department>(this.baseApiUrl + 'api/Department/AddDepartmentAPI', department);
  }

  deleteDepartment(department_id:any): Observable<any> {
    return this.http.delete<any>(this.baseApiUrl + 'api/Department/DeleteDepartment/' + department_id);
  }

  getDepartment(department_id:any):Observable<Department> {
    return this.http.get<Department>(this.baseApiUrl + 'api/Department/GetDepartment/' + department_id);
  }

  updateDepartment(department: Department): Observable<Department> {
    return this.http.put<Department>(this.baseApiUrl + 'api/Department/updateDepartment' , department);
  }

  saveJob(JobMaster:JobMaster) : Observable<JobMaster> {
    return this.http.post<JobMaster>(this.baseApiUrl + 'api/Job/SaveJob', JobMaster);
  }

  getAllJobs() : Observable<JobMaster[]> {
    return this.http.get<JobMaster[]>(this.baseApiUrl + 'api/Job/GetAllJob');
  }
  getAllJob(department_id:string) : Observable<JobMaster[]> {
    return this.http.get<JobMaster[]>(this.baseApiUrl + 'api/Job/GetAllJobByDId/' + department_id );
  }
}
