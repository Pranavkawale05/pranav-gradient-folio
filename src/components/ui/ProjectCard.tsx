import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Project, getTypeColor } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <Card 
      className="bg-gradient-card border-0 shadow-lg hover-lift hover-glow transition-all duration-300 animate-scale-in group"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between mb-2">
          <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
            {project.title}
          </CardTitle>
          <Badge className={`${getTypeColor(project.type)} transition-colors`}>
            {project.type}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-muted-foreground leading-relaxed">
          {project.description}
        </p>
        
        <div>
          <h5 className="font-medium mb-2">Key Features:</h5>
          <ul className="text-sm text-muted-foreground space-y-1">
            {project.features.map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-center">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h5 className="font-medium mb-2">Technologies:</h5>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, techIndex) => (
              <Badge 
                key={techIndex} 
                variant="outline" 
                className="text-xs border-muted-foreground/30 hover:border-primary/50 transition-colors"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
        
        <div className="flex gap-3 pt-4">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1 hover:bg-primary/10 hover:border-primary/50"
            onClick={() => project.githubUrl && window.open(project.githubUrl, '_blank')}
          >
            <Github className="w-4 h-4 mr-2" />
            Code
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1 hover:bg-accent/10 hover:border-accent/50"
            onClick={() => project.demoUrl && window.open(project.demoUrl, '_blank')}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Demo
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;