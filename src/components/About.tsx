import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import { personalInfo } from "@/data/personalInfo";
import { education } from "@/data/education";
import EducationCard from "@/components/ui/EducationCard";

const About = () => {
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
                  {personalInfo.bio}
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground mt-4">
                  {personalInfo.extendedBio}
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
                <EducationCard key={edu.id} education={edu} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;