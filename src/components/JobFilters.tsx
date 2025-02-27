
import { Department, EmploymentType, Location } from "@/types/job";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Search } from "lucide-react";

interface JobFiltersProps {
  searchQuery: string;
  department: Department | 'All';
  location: Location | 'All';
  employmentType: EmploymentType | 'All';
  onSearchChange: (value: string) => void;
  onDepartmentChange: (value: Department | 'All') => void;
  onLocationChange: (value: Location | 'All') => void;
  onEmploymentTypeChange: (value: EmploymentType | 'All') => void;
}

export const JobFilters = ({
  searchQuery,
  department,
  location,
  employmentType,
  onSearchChange,
  onDepartmentChange,
  onLocationChange,
  onEmploymentTypeChange,
}: JobFiltersProps) => {
  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search positions..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-9"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Select value={department} onValueChange={onDepartmentChange}>
          <SelectTrigger>
            <SelectValue placeholder="Department" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All Departments</SelectItem>
            <SelectItem value="Food & Beverage">Food & Beverage</SelectItem>
            <SelectItem value="Housekeeping">Housekeeping</SelectItem>
            <SelectItem value="Front Office">Front Office</SelectItem>
            <SelectItem value="Sales & Marketing">Sales & Marketing</SelectItem>
            <SelectItem value="Administration">Administration</SelectItem>
          </SelectContent>
        </Select>

        <Select value={location} onValueChange={onLocationChange}>
          <SelectTrigger>
            <SelectValue placeholder="Location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All Locations</SelectItem>
            <SelectItem value="Frankfurt Main">Frankfurt Main</SelectItem>
            <SelectItem value="Remote">Remote</SelectItem>
            <SelectItem value="Hybrid">Hybrid</SelectItem>
          </SelectContent>
        </Select>

        <Select value={employmentType} onValueChange={onEmploymentTypeChange}>
          <SelectTrigger>
            <SelectValue placeholder="Employment Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All Types</SelectItem>
            <SelectItem value="Full-time">Full-time</SelectItem>
            <SelectItem value="Part-time">Part-time</SelectItem>
            <SelectItem value="Temporary">Temporary</SelectItem>
            <SelectItem value="Internship">Internship</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
