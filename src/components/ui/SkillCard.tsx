import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { SkillCategory, getSkillColor } from "@/data/skills";

interface SkillCardProps {
  category: SkillCategory;
  index: number;
}

const SkillCard = ({ category, index }: SkillCardProps) => {
  return (
    <Card 
      className="bg-gradient-card border-0 shadow-lg hover-lift hover-glow transition-all duration-300 animate-scale-in"
      style={{ animationDelay: `${index * 100}ms` }}
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
                    animationDelay: `${(index * 3 + skillIndex) * 200}ms`
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
  );
};

export default SkillCard;