import { Mail, Phone, Linkedin, Github, MapPin, LucideIcon } from "lucide-react";

export interface ContactInfo {
  id: string;
  icon: LucideIcon;
  label: string;
  value: string;
  href: string | null;
  color: string;
}

export const contactInfo: ContactInfo[] = [
  {
    id: "email",
    icon: Mail,
    label: "Email",
    value: "Pranavlkawale1@gmail.com",
    href: "mailto:Pranavlkawale1@gmail.com",
    color: "text-red-500"
  },
  {
    id: "phone",
    icon: Phone,
    label: "Phone",
    value: "+91 7022018900",
    href: "tel:7022018900",
    color: "text-green-500"
  },
  {
    id: "linkedin",
    icon: Linkedin,
    label: "LinkedIn",
    value: "pranav-kawale-aa4a622b8",
    href: "https://www.linkedin.com/in/pranav-kawale-aa4a622b8",
    color: "text-blue-500"
  },
  {
    id: "github",
    icon: Github,
    label: "GitHub",
    value: "Pranavkawale05",
    href: "https://github.com/Pranavkawale05",
    color: "text-purple-500"
  },
  {
    id: "location",
    icon: MapPin,
    label: "Location",
    value: "Bangalore, India",
    href: null,
    color: "text-orange-500"
  }
];

export const socialLinks = [
  {
    id: "email",
    icon: Mail,
    href: "mailto:Pranavlkawale1@gmail.com",
    label: "Email"
  },
  {
    id: "linkedin",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/pranav-kawale-aa4a622b8",
    label: "LinkedIn"
  },
  {
    id: "github",
    icon: Github,
    href: "https://github.com/Pranavkawale05",
    label: "GitHub"
  },
  {
    id: "phone",
    icon: Phone,
    href: "tel:7022018900",
    label: "Phone"
  }
];