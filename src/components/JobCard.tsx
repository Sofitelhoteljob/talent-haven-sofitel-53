
import { Job } from "@/types/job";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Calendar, MapPin, Timer } from "lucide-react";

interface JobCardProps {
  job: Job;
  onApply: (jobId: string) => void;
}

export const JobCard = ({ job, onApply }: JobCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-shadow animate-fade-in">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div>
            <CardTitle className="font-playfair text-xl mb-2">{job.title}</CardTitle>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                {job.location}
              </Badge>
              <Badge variant="outline" className="flex items-center gap-1">
                <Timer className="h-3 w-3" />
                {job.employmentType}
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {job.postedDate}
              </Badge>
            </div>
          </div>
          <div className="text-right">
            <p className="text-secondary font-semibold">{job.salaryRange}</p>
            <p className="text-sm text-muted-foreground">{job.department}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Requirements:</h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              {job.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>
          <p className="text-muted-foreground">{job.description}</p>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={() => onApply(job.id)}
          className="w-full bg-secondary hover:bg-secondary/90"
        >
          Apply Now
        </Button>
      </CardFooter>
    </Card>
  );
};
