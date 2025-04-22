import { SkillType, ProjectType, InternshipType, EducationType } from '../types';

export const userData = {
  name: "Anjan Kumar Sahoo",
  profession: "Java Developer",
  bio: "Passionate Java developer with proficiency in Spring Boot and Angular. I enjoy building scalable web applications and solving complex problems through efficient code.",
  resumeUrl: "https://drive.google.com/file/d/1g076OnX6lt0pa-bRlOl6jvtnh4DXza7L/view?usp=sharing", // Replace with actual resume URL
  image: "Passport size photo.jpg", // Professional headshot  
  email: "askmraks@gmail.com",
  github: "https://github.com/Anjan-Kumar-Sahoo",
  linkedin: "https://linkedin.com/in/aks1097",
};

export const technicalSkills: SkillType[] = [
  { name: "Java", level: 90 },
  { name: "Spring Boot", level: 85 },
  { name: "Angular", level: 80 },
  { name: "React", level: 75 },
  { name: "JavaScript", level: 85 },
  { name: "HTML/CSS", level: 90 },
  { name: "C++", level: 70 },
  { name: "C", level: 65 },
  { name: "Python", level: 60 },
  { name: "MySQL", level: 80 },
  { name: "MongoDB", level: 75 },
  { name: "Linux", level: 70 },
  { name: "Windows", level: 85 },
];

export const softSkills: SkillType[] = [
  { name: "Communication", level: 90 },
  { name: "Teamwork", level: 95 },
  { name: "Leadership", level: 80 },
  { name: "Time Management", level: 85 },
  { name: "Adaptability", level: 90 },
];

export const projects: ProjectType[] = [
  {
    title: "Employee Management System",
    description: "A comprehensive employee management system with features including employee records, attendance tracking, and performance evaluation. Built with Spring Boot backend and MySQL database.",
    technologies: ["Java", "Spring Boot", "MySQL", "REST API", "JPA/Hibernate"],
  },
  {
    title: "Personal Finance Manager",
    description: "An application to help users track income, expenses, and savings goals. Features include expense categorization, budget planning, and financial insights with intuitive visualization tools.",
    technologies: ["Java", "Spring Boot", "MySQL", "JPA/Hibernate", "Spring Security"],
  },
];

export const internships: InternshipType[] = [
  {
    title: "PR Intern",
    company: "Promise Solution",
    duration: "May 2023 - August 2023",
    description: "Worked on company branding and public relations initiatives. Developed content for social media and assisted in event organization.",
  },
  {
    title: "Spring Boot Training Program",
    duration: "January 2025 - March 2025",
    description: "Completed intensive training in Spring Boot framework with focus on building RESTful APIs, data persistence, and security implementation.",
  },
  {
    title: "Logic Building & DSA Training Program",
    duration: "June 2024 - July 2024",
    description: "Focused on building strong algorithmic thinking and data structure implementation skills through various coding challenges and projects.",
  },
];

export const education: EducationType[] = [
  {
    institution: "Lovely Professional University (LPU)",
    degree: "B.Tech in Computer Science Engineering",
    duration: "2022 - 2026",
    score: "CGPA: 6.93",
    imageUrl: "https://graduatesdaily.com/wp-content/uploads/2024/05/Lovely-Professional-University-Punjab.jpg",
  },
  {
    institution: "St. Paul's School",
    degree: "12th & 10th",
    duration: "2008 - 2022",
    score: "12th: 72% ;  10th: 82%",
    imageUrl: "https://skoodos.com/public/uploads/optimized/1651746437.png",
  },
];