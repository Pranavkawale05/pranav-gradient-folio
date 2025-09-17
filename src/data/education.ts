export interface Education {
  id: string;
  institution: string;
  degree: string;
  year: string;
  status: "Current" | "Completed";
}

export const education: Education[] = [
  {
    id: "nittemit",
    institution: "Nitte Meenakshi Institute of Technology, Bangalore",
    degree: "B.E. Artificial Intelligence and Data Science",
    year: "2026",
    status: "Current"
  },
  {
    id: "expert-puc",
    institution: "Expert Pre-University College, Mangalore",
    degree: "Class 12",
    year: "2022", 
    status: "Completed"
  },
  {
    id: "appa-school",
    institution: "Appa Public School",
    degree: "Class 10",
    year: "2020",
    status: "Completed"
  }
];