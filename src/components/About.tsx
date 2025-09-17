import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";

const About = () => {
  const education = [
    {
      institution: "Nitte Meenakshi Institute of Technology, Bangalore",
      degree: "B.E. Artificial Intelligence and Data Science",
      year: "2026",
      status: "Current"
    },
    {
      institution: "Expert Pre-University College, Mangalore",
      degree: "Class 12",
      year: "2022",
      status: "Completed"
    },
    {
      institution: "Appa Public School",
      degree: "Class 10",
      year: "2020", 
      status: "Completed"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="space-y-6 animate-slide-up">
            <Card className="bg-gradient-card border-0 shadow-lg hover-lift">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-gradient">My Story</h3>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Aspiring software engineer with a passion for developing innovative, efficient, and user-focused solutions. 
                  Skilled in problem-solving and adapting to new technologies, with a commitment to delivering impactful and 
                  scalable projects.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground mt-4">
                  Eager to contribute to dynamic teams and tackle complex challenges with creativity and precision. 
                  Currently pursuing my Bachelor's degree in Artificial Intelligence and Data Science, where I'm honing 
                  my skills in cutting-edge technologies and methodologies.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Education Timeline */}
          <div className="space-y-6 animate-slide-up delay-200">
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <GraduationCap className="w-8 h-8 mr-3 text-primary" />
              Education Journey
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="bg-gradient-card border-0 shadow-lg hover-lift hover-glow transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-4 h-4 bg-gradient-accent rounded-full mt-2"></div>
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-semibold text-lg mb-2">{edu.institution}</h4>
                        <p className="text-primary font-medium mb-1">{edu.degree}</p>
                        <div className="flex items-center text-muted-foreground">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{edu.year}</span>
                          <span className={`ml-3 px-3 py-1 rounded-full text-xs font-medium ${
                            edu.status === 'Current' 
                              ? 'bg-primary/20 text-primary' 
                              : 'bg-muted text-muted-foreground'
                          }`}>
                            {edu.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;