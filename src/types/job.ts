
export type Department = 'Food & Beverage' | 'Housekeeping' | 'Front Office' | 'Sales & Marketing' | 'Administration';
export type EmploymentType = 'Full-time' | 'Part-time' | 'Temporary' | 'Internship';
export type Location = 'Frankfurt Main' | 'Remote' | 'Hybrid';
export type ApplicationStatus = 'pending' | 'reviewed' | 'shortlisted' | 'rejected' | 'hired';

export interface Job {
  id: string;
  title: string;
  department: Department;
  location: Location;
  employmentType: EmploymentType;
  salaryRange: string;
  requirements: string[];
  description: string;
  postedDate: string;
  is_active?: boolean;
}

export interface JobApplication {
  id?: string;
  job_id: string;
  full_name: string;
  email: string;
  phone: string;
  cover_letter: string;
  status?: ApplicationStatus;
  created_at?: string;
}

// Database-to-frontend type conversion helpers
export function isValidDepartment(value: string): value is Department {
  return ['Food & Beverage', 'Housekeeping', 'Front Office', 'Sales & Marketing', 'Administration'].includes(value);
}

export function isValidLocation(value: string): value is Location {
  return ['Frankfurt Main', 'Remote', 'Hybrid'].includes(value);
}

export function isValidEmploymentType(value: string): value is EmploymentType {
  return ['Full-time', 'Part-time', 'Temporary', 'Internship'].includes(value);
}

export function ensureDepartment(value: string): Department {
  return isValidDepartment(value) ? value : 'Administration';
}

export function ensureLocation(value: string): Location {
  return isValidLocation(value) ? value : 'Frankfurt Main';
}

export function ensureEmploymentType(value: string): EmploymentType {
  return isValidEmploymentType(value) ? value : 'Full-time';
}
