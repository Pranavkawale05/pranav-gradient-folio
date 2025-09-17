import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code, Database, Globe, Brain } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Java", level: 75, description: "Intermediate" },
        { name: "Python", level: 75, description: "Intermediate" },
        { name: "JavaScript", level: 45, description: "Beginner" }
      ]
    },
    {
      title: "Web Technologies",
      icon: Globe,
      skills: [
        { name: "HTML/CSS", level: 75, description: "Intermediate" },
        { name: "Node.js", level: 45, description: "Beginner" },
        { name: "React", level: 50, description: "Learning" }
      ]
    },
    {
      title: "Database & Data",
      icon: Database,
      skills: [
        { name: "MySQL", level: 75, description: "Intermediate" },
        { name: "Data Preprocessing", level: 70, description: "Intermediate" },
        { name: "NumPy/Pandas", level: 65, description: "Intermediate" }
      ]
    },
    {
      title: "Core Concepts",
      icon: Brain,
      skills: [
        { name: "OOP", level: 80, description: "Proficient" },
        { name: "Computer Networks", level: 70, description: "Intermediate" },
        { name: "Machine Learning", level: 60, description: "Learning" }
      ]
    }
  ];

  const getSkillColor = (level: number) => {
    if (level >= 70) return "bg-primary";
    if (level >= 50) return "bg-accent";
    return "bg-muted-foreground";
  };

  return (
    <section id="skills" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={categoryIndex} 
              className="bg-gradient-card border-0 shadow-lg hover-lift hover-glow transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${categoryIndex * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-lg bg-gradient-accent mr-4">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-lg">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">
                          {skill.description}
                        </span>
                      </div>
                      <div className="relative">
                        <Progress 
                          value={skill.level} 
                          className="h-3 bg-muted/50"
                        />
                        <div 
                          className={`absolute top-0 left-0 h-3 rounded-full transition-all duration-1000 ${getSkillColor(skill.level)}`}
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${(categoryIndex * 3 + skillIndex) * 200}ms`
                          }}
                        ></div>
                      </div>
                      <div className="text-right text-sm text-muted-foreground">
                        {skill.level}%
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;