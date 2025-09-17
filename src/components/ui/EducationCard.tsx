import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { Education } from "@/data/education";

interface EducationCardProps {
  education: Education;
  index: number;
}

const EducationCard = ({ education, index }: EducationCardProps) => {
  return (
    <Card 
      className="bg-gradient-card border-0 shadow-lg hover-lift hover-glow transition-all duration-300"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="w-4 h-4 bg-gradient-accent rounded-full mt-2"></div>
          </div>
          <div className="flex-grow">
            <h4 className="font-semibold text-lg mb-2">{education.institution}</h4>
            <p className="text-primary font-medium mb-1">{education.degree}</p>
            <div className="flex items-center text-muted-foreground">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{education.year}</span>
              <span className={`ml-3 px-3 py-1 rounded-full text-xs font-medium ${
                education.status === 'Current' 
                  ? 'bg-primary/20 text-primary' 
                  : 'bg-muted text-muted-foreground'
              }`}>
                {education.status}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EducationCard;