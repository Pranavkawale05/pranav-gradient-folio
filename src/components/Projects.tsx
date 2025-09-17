import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Github, Calendar } from "lucide-react";
import { experience, projects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";

const Projects = () => {
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
                  <h4 className="text-xl font-semibold text-primary">{experience[0].company}</h4>
                  <h5 className="text-lg font-medium mb-2">{experience[0].role}</h5>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{experience[0].duration}</span>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">{experience[0].description}</p>
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
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;