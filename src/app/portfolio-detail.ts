export interface PortfolioDetailExperienceItem {
  id: string;
  field: string;
  company: string;
  from: string;
  to: string;
  description: string;
  tasks: string[];
}

export interface PortfolioDetailEducationItem {
  id: string;
  degree: string;
  school: string;
  year: string;
  competencies: string[];
}