
export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  problem: string;
  solution: string;
  role: string;
  techStack: string[];
  repoUrl: string;
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
}
