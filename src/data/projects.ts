export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  description: string;
  type: "internship" | "job" | "freelance";
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  type: "Web Application" | "Machine Learning" | "Mobile App" | "Desktop App";
  githubUrl?: string;
  demoUrl?: string;
}

export const experience: Experience[] = [
  {
    id: "myjobgrow",
    company: "My Job Grow",
    role: "Data Preprocessing & Model Development Intern",
    duration: "2 months",
    description: "Worked on data preprocessing pipelines and machine learning model development, gaining hands-on experience with real-world datasets and industry best practices.",
    type: "internship"
  }
];

export const projects: Project[] = [
  {
    id: "job-queue",
    title: "Job Queue Management System",
    description: "Interactive FCFS (First Come First Serve) simulator with visual job tracking and real-time queue management. Features intuitive UI for adding, processing, and monitoring jobs with detailed statistics.",
    technologies: ["HTML", "CSS", "JavaScript", "DOM Manipulation"],
    features: ["Real-time job tracking", "Visual queue simulation", "Performance statistics", "Interactive controls"],
    type: "Web Application"
  },
  {
    id: "stock-prediction",
    title: "Stock Price Prediction",
    description: "Machine learning model for forecasting stock prices using regression algorithms. Includes comprehensive data analysis, feature engineering, and model evaluation with visualization of prediction accuracy.",
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    features: ["Regression modeling", "Data visualization", "Prediction accuracy metrics", "Historical data analysis"],
    type: "Machine Learning"
  },
  {
    id: "college-chatbot",
    title: "College Enquiry Chatbot",
    description: "Responsive chatbot system designed to answer frequently asked questions about college admissions, courses, and facilities. Features real-time typing simulation and comprehensive FAQ database.",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    features: ["Real-time chat simulation", "FAQ database", "Responsive design", "Interactive UI"],
    type: "Web Application"
  }
];

export const getTypeColor = (type: string): string => {
  switch (type) {
    case "Machine Learning":
      return "bg-accent/20 text-accent hover:bg-accent/30";
    case "Web Application":
      return "bg-primary/20 text-primary hover:bg-primary/30";
    case "Mobile App":
      return "bg-green-500/20 text-green-500 hover:bg-green-500/30";
    case "Desktop App":
      return "bg-orange-500/20 text-orange-500 hover:bg-orange-500/30";
    default:
      return "bg-muted/20 text-muted-foreground hover:bg-muted/30";
  }
};