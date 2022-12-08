export interface Department{
  department_id: string
  department_name: string
  manager_name: string
  city_id: string
  state_id: string
  country_id: string
  is_active: boolean
  created_on: string
  created_by: string
  updated_on: string
  updated_by: string
}

export interface JobMaster {
  job_master_id: string
  department_id: string
  designation_name: string
  designation_code: string
  job_description: string
  min_salary: number
  max_salary: number
  is_active: boolean
  created_on: string
  created_by: string
  updated_on: string
  updated_by: string
}
