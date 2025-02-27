
export type Department = 'Food & Beverage' | 'Housekeeping' | 'Front Office' | 'Sales & Marketing' | 'Administration';
export type EmploymentType = 'Full-time' | 'Part-time' | 'Temporary' | 'Internship';
export type Location = 'Frankfurt Main' | 'Remote' | 'Hybrid';

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
}
