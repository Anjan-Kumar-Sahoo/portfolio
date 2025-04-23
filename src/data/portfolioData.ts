import { SkillType, ProjectType, InternshipType, EducationType } from '../types';

export const userData = {
  name: "Anjan Kumar Sahoo",
  profession: "Java Developer",
  bio: "Passionate Java developer with proficiency in Spring Boot and Angular. I enjoy building scalable web applications and solving complex problems through efficient code.",
  resumeUrl: "https://drive.google.com/file/d/1g076OnX6lt0pa-bRlOl6jvtnh4DXza7L/view?usp=sharing",
  image: "Passport size photo.jpg",
  email: "askmraks@gmail.com",
  github: "https://github.com/Anjan-Kumar-Sahoo",
  linkedin: "https://linkedin.com/in/aks1097",
};

export const technicalSkills: SkillType[] = [
  { name: "Java", backgroundUrl: "https://img2.wallspic.com/previews/8/0/3/3/6/163308/163308-java-graphic_design-logo-text-graphics-550x310.jpg" },
  { name: "Spring Boot", backgroundUrl: "https://cdn.prod.website-files.com/622642781cd7e96ac1f66807/676217e30d0d80d17b203f32_BLOG-SpringBoot%402x.png" },
  { name: "Spring Security", backgroundUrl: "https://media.licdn.com/dms/image/v2/D4D12AQE007MhfHxo8w/article-cover_image-shrink_720_1280/B4DZWT6tRhG8AI-/0/1741943396442?e=2147483647&v=beta&t=KiNVcR0iNUo4dK4kFag--JiSPL8tD7BPzLvHB5WtYXQ" },
  { name: "Git+GitHub", backgroundUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9CSlu9qcKt1pBmHgesvuDwEyfEdvdwnDSRA&s" },
  { name: "Postman", backgroundUrl: "https://www.postman.com/_ar-assets/images/postman-api-platform-social-preview-9420276277ad8d4e67e53ee548409999.jpg" },
  { name: "Angular", backgroundUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdQ6w85by15yXR06lXWOYndETDD_XrrmQ7lOpKjBvXhfnI6O7NayrOxSwxCWGZedvko60&usqp=CAU" },
  { name: "React", backgroundUrl: "https://miro.medium.com/v2/resize:fit:1400/1*MF5V_dkybUTcfzwHFh0VSw.jpeg" },
  { name: "JavaScript", backgroundUrl: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fryjtqvr29xjynue53o0o.jpg" },
  { name: "HTML/CSS", backgroundUrl: "https://wellcreator.com/blog/wp-content/uploads/2022/02/html-css-750x375.jpg" },
  { name: "C++", backgroundUrl: "https://media.licdn.com/dms/image/v2/C5612AQFbHPw4gOrSyg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1544386832292?e=2147483647&v=beta&t=0dL7w7H8WWdVfFjqyZIL83y54fjoR4mIyBC5kc_pcHk" },
  { name: "Python", backgroundUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvm8puJRD2pSCSrgB9kje9gxsfbwCDj5tQfQ&s" },
  { name: "MySQL", backgroundUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT21QLILKsh-EOuzfl2Hpek1Z91tDkKusNL8w&s" },
  { name: "MongoDB", backgroundUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8tDqWuNdv2HpKkd-LQ1o0M4r0fguN2kB1Pw&s" },
  { name: "Windows", backgroundUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUos1au9_2Dcz8d3IvnjX0bmBDs0juMaRGwg&s" },
  { name: "Docker", backgroundUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStlTMmf_hRf8FPGEKC67Dk10vwH9NE_HS2YQ&s" },
];
export const softSkills: SkillType[] = [
  { name: "Communication", backgroundUrl: "https://thumbs.dreamstime.com/b/corporate-communication-group-people-flat-vector-illustration-ratio-depicting-diverse-business-engaged-conversation-298179904.jpg" },
  { name: "Problem Solving", backgroundUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSttyz7POz0tIxmCtSOfoCEyABBRZoK5XSGkvU8Ml5pRvvAXGnQ8AjcgFAQ6p9KgavhSQ&usqp=CAU" },
  { name: "Teamwork", backgroundUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCGFKCJjs7mCi2TZJAIyem0SV_mJeSRoTueuZhwEj6n2m_MkRce5edcoGO2zBPV6V7HsI&usqp=CAU" },
  { name: "Leadership", backgroundUrl: "https://media.licdn.com/dms/image/v2/D4D12AQGd-FMc9vfG9w/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1676180972972?e=2147483647&v=beta&t=vgYhn2Zd6JTQskvPsgZNMI2w7gS6s-I_-EkmIq82RQw" },
  { name: "Time Management", backgroundUrl: "https://static.vecteezy.com/system/resources/thumbnails/009/948/144/small_2x/hand-holding-wooden-blocks-with-text-time-management-time-concept-photo.jpg" },
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