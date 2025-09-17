import { Code, Database, Globe, Brain, LucideIcon } from "lucide-react";

export interface Skill {
  name: string;
  level: number;
  description: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: LucideIcon;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    title: "Programming Languages",
    icon: Code,
    skills: [
      { name: "Java", level: 75, description: "Intermediate" },
      { name: "Python", level: 75, description: "Intermediate" },
      { name: "JavaScript", level: 45, description: "Beginner" }
    ]
  },
  {
    id: "web",
    title: "Web Technologies",
    icon: Globe,
    skills: [
      { name: "HTML/CSS", level: 75, description: "Intermediate" },
      { name: "Node.js", level: 45, description: "Beginner" },
      { name: "React", level: 50, description: "Learning" }
    ]
  },
  {
    id: "database",
    title: "Database & Data",
    icon: Database,
    skills: [
      { name: "MySQL", level: 75, description: "Intermediate" },
      { name: "Data Preprocessing", level: 70, description: "Intermediate" },
      { name: "NumPy/Pandas", level: 65, description: "Intermediate" }
    ]
  },
  {
    id: "concepts",
    title: "Core Concepts",
    icon: Brain,
    skills: [
      { name: "OOP", level: 80, description: "Proficient" },
      { name: "Computer Networks", level: 70, description: "Intermediate" },
      { name: "Machine Learning", level: 60, description: "Learning" }
    ]
  }
];

export const getSkillColor = (level: number): string => {
  if (level >= 70) return "bg-primary";
  if (level >= 50) return "bg-accent";
  return "bg-muted-foreground";
};