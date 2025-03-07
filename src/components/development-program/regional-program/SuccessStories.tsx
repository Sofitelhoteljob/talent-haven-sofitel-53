
import { User } from "lucide-react";
import { SuccessStory } from "./types";

interface SuccessStoriesProps {
  stories: SuccessStory[];
}

export const SuccessStories = ({ stories }: SuccessStoriesProps) => {
  return (
    <div>
      <h4 className="font-medium text-lg mb-2">Success Stories</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {stories.map((story, index) => (
          <div key={index} className="bg-white p-3 rounded-md shadow-sm">
            <div className="flex items-center mb-2">
              <div className="h-8 w-8 bg-secondary/20 rounded-full flex items-center justify-center mr-2">
                <User className="h-4 w-4 text-secondary" />
              </div>
              <h5 className="font-medium">{story.name}</h5>
            </div>
            <div className="space-y-1 text-sm text-muted-foreground">
              <p><span className="font-medium">Background:</span> {story.background}</p>
              <p><span className="font-medium">Journey:</span> {story.journey}</p>
              <p><span className="font-medium">Outcome:</span> {story.outcome}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
