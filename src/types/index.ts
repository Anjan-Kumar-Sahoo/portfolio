export interface TrainingType {
  title: string;
  organization: string;
  duration: string;
  points: string[];
  certificate?: string | null;
}
export interface SkillType {
  name: string;
  backgroundUrl: string;
}

export interface ProjectType {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  live?: string;
}

export interface InternshipType {
  title: string;
  company?: string;
  duration: string;
  description: string;
}

export interface EducationType {
  institution: string;
  degree: string;
  duration: string;
  score: string;
  imageUrl: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  phone: string;
  message: string;
}

export type ThemeMode = 'light' | 'dark';