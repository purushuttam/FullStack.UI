export interface Employees{
  id: string;
  name: string;
  email: string;
  phone : number;
  salary: number;
  department : string;
}

export interface DashboardIndex {
  SNo:number;
  Name:string;
  Total:number;
}

export interface Status{
  Id:string;
  Status: boolean;
}
export interface Employee {
  employee_id: string
  first_name: string
  last_name: string
  gender: string
  dob: Date
  jd: Date
  department_id: string
  department_name: string
  is_active: boolean
  created_on: Date
  created_by: string
  updated_on: Date
  updated_by: string
  employee_Qualification: EmployeeQualification[]
  employee_Contact_Details: EmployeeContactDetail[]
}

export interface EmployeeQualification {
  employee_qualification_id: string
  employee_id: string
  qualification_year: number
  course_name: string
  last_qualification_university: string
  last_qualification_marks: number
  is_active: boolean
  created_on: Date
  created_by: string
  updated_on: Date
  updated_by: string
}

export interface EmployeeContactDetail {
  employee_contact_details_id: string
  employee_id: string
  mobile_no: string
  email_id: string
  address: string
  city_id: string
  state_id: string
  country_id: string
  is_active: boolean
  created_on: Date
  created_by: string
  updated_on: Date
  updated_by: string
}
