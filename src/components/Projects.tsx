import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Briefcase, Calendar } from "lucide-react";

const Projects = () => {
  const experience = {
    company: "My Job Grow",
    role: "Data Preprocessing & Model Development Intern",
    duration: "2 months",
    description: "Worked on data preprocessing pipelines and machine learning model development, gaining hands-on experience with real-world datasets and industry best practices."
  };

  const projects = [
    {
      title: "Job Queue Management System",
      description: "Interactive FCFS (First Come First Serve) simulator with visual job tracking and real-time queue management. Features intuitive UI for adding, processing, and monitoring jobs with detailed statistics.",
      technologies: ["HTML", "CSS", "JavaScript", "DOM Manipulation"],
      features: ["Real-time job tracking", "Visual queue simulation", "Performance statistics", "Interactive controls"],
      type: "Web Application"
    },
    {
      title: "Stock Price Prediction",
      description: "Machine learning model for forecasting stock prices using regression algorithms. Includes comprehensive data analysis, feature engineering, and model evaluation with visualization of prediction accuracy.",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
      features: ["Regression modeling", "Data visualization", "Prediction accuracy metrics", "Historical data analysis"],
      type: "Machine Learning"
    },
    {
      title: "College Enquiry Chatbot",
      description: "Responsive chatbot system designed to answer frequently asked questions about college admissions, courses, and facilities. Features real-time typing simulation and comprehensive FAQ database.",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      features: ["Real-time chat simulation", "FAQ database", "Responsive design", "Interactive UI"],
      type: "Web Application"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Machine Learning":
        return "bg-accent/20 text-accent hover:bg-accent/30";
      case "Web Application":
        return "bg-primary/20 text-primary hover:bg-primary/30";
      default:
        return "bg-muted/20 text-muted-foreground hover:bg-muted/30";
    }
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Experience & <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
        </div>

        {/* Experience Section */}
        <div className="mb-16 animate-slide-up">
          <h3 className="text-2xl font-semibold mb-8 flex items-center">
            <Briefcase className="w-8 h-8 mr-3 text-primary" />
            Professional Experience
          </h3>
          
          <Card className="bg-gradient-card border-0 shadow-lg hover-lift hover-glow transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h4 className="text-xl font-semibold text-primary">{experience.company}</h4>
                  <h5 className="text-lg font-medium mb-2">{experience.role}</h5>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{experience.duration}</span>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">{experience.description}</p>
            </CardContent>
          </Card>
        </div>

        {/* Projects Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 flex items-center">
            <Github className="w-8 h-8 mr-3 text-primary" />
            Featured Projects
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
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
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 hover:bg-accent/10 hover:border-accent/50"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;