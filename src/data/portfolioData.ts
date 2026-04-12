import { SkillType, ProjectType, EducationType } from '../types';

export const userData = {
  name: "Anjan Kumar Sahoo",
  profession: "Software Engineer",
  bio: "Software Engineer specializing in scalable Spring Boot microservices and RESTful APIs. Passionate about writing clean code, optimizing performance, and solving complex problems with 250+ LeetCode milestones.",
  resumeUrl: "https://drive.google.com/file/d/1vaJqPzATORphG-wPwdYD92V1OCCrEtqy/view?usp=sharing",
  image: "img3.jpg",
  email: "askmraks@gmail.com",
  github: "https://github.com/Anjan-Kumar-Sahoo",
  linkedin: "https://linkedin.com/in/aks1097",
};

export const technicalSkills: SkillType[] = [
  { name: "Java", backgroundUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
  { name: "Spring Framework", backgroundUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" },
  { name: "Microservices", backgroundUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg" },
  { name: "React + Redux", backgroundUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "TypeScript", backgroundUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "Docker", backgroundUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  { name: "AWS EC2", backgroundUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "MySQL", backgroundUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
  { name: "PostgreSQL", backgroundUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { name: "MongoDB", backgroundUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
  { name: "Redis & RabbitMQ", backgroundUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" },
  { name: "Git+GitHub / CI/CD", backgroundUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
  { name: "Postman", backgroundUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
  { name: "Python", backgroundUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "C++ & Core CS", backgroundUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
  { name: "HTML5/CSS3", backgroundUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
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
    title: "SkillSync \u2013 Peer-to-Peer \u2013 Learning Platform",
    description: "Architected a production-grade platform with 9 Spring Boot microservices on AWS EC2 and a React 18 + TypeScript frontend on Vercel. Enabled role-based dashboards for Learner, Mentor, and Admin supporting mentor discovery and session workflows. Designed RESTful APIs across User, Auth, Payment, Session, and Notification services. Implemented CQRS with Redis caching and event-driven architecture using RabbitMQ for asynchronous workflows. Secured platform using JWT, OAuth, and OTP authentication.",
    technologies: ["Spring Boot 3", "Microservices", "React", "TypeScript", "Redux", "MySQL", "Redis", "RabbitMQ", "Docker", "AWS EC2", "Vercel"],
    github: "https://github.com/Anjan-Kumar-Sahoo/SkillSync",
    live: "https://skillsync.mraks.dev"
  },
  {
    title: "Inventory Management System",
    description: "Engineered a full-stack inventory platform enabling real-time stock tracking, supplier management, and seamless sales workflow. Designed RESTful APIs connecting frontend and backend for products, suppliers, orders, and transactions. Implemented automated sell logic updating stock levels and calculating profit and revenue dynamically. Built an interactive dashboard with charts and forms for inventory updates, sales handling, and insights. Enforced data validation rules preventing inconsistent states across entities.",
    technologies: ["Spring Boot", "React", "MySQL", "JPA", "REST API"],
    github: "https://github.com/Anjan-Kumar-Sahoo/Inventory-Management"
  },
  {
    title: "Garage Management System",
    description: "Developed an end-to-end garage management platform handling customers, vehicles, services, invoices, and payments. Architected REST API layer supporting vehicle servicing and billing operations. Integrated Spring Security authentication with protected endpoints and session management. Designed an analytics dashboard showing revenue trends, customer insights, and operational metrics. Implemented invoice payment lifecycle supporting multiple payment modes and automatic status updates.",
    technologies: ["Spring Boot", "React", "MySQL", "Spring Data JPA", "Spring Security", "REST API"],
    github: "https://github.com/Anjan-Kumar-Sahoo/GarageMS",
  },
];

// internships removed
export const trainings: import('../types').TrainingType[] = [
  {
    title: "Java Backend Development",
    organization: "Hitbullseye",
    duration: "Jan 2025",
    points: [
      "Designed REST APIs and integrated MySQL using microservices concepts and enterprise-grade CRUD architecture.",
      "Acquired practical knowledge of Java backend designing and integration of databases in structured apps."
    ],
    certificate: null
  },
  {
    title: "Python Full Stack Development",
    organization: "CipherSchools",
    duration: "Jun 2025",
    points: [
      "Built end-to-end Django applications integrating databases, user authentication, and responsive UI components.",
      "Applied Python frameworks to construct web apps, integrating databases and responsive interface components."
    ],
    certificate: "https://cipher-other-assets.s3.ap-south-1.amazonaws.com/certificates/TC_aksahoo1097%40gmail.com_CS2025-14504"
  },
  {
    title: "Competitive Programming",
    organization: "Programming Pathshala",
    duration: "Mar 2025",
    points: [
      "Strengthened algorithmic thinking and debugging through structured challenges and optimised solution design.",
      "Refined debugging and logical reasoning, optimizing performance in complex programming tasks and contests."
    ],
    certificate: null
  },
  {
    title: "Logic Building & DSA with Java",
    organization: "SkillDev, LPU",
    duration: "Aug 2024",
    points: [
      "Mastered DSA in Java with focus on time/space complexity and optimised implementations.",
      "Strengthened analytical problem-solving using Java and DSA concepts with focus on optimized algorithms."
    ],
    certificate: "https://files.lpu.in/umsweb/skilldevcourse/SkillDevelopmentCertificates/12216014_459_08_15_2024.pdf?_gl=1*t43zh3*_gcl_au*Nzg0ODE0OTgyLjE3NTI1NzMxNjUuNzkzMDk1OTU5LjE3NTI1NzMxNzcuMTc1MjU3MzIzMw.."
  }
];

export const education: EducationType[] = [
  {
    institution: "Lovely Professional University",
    degree: "B.Tech \u2014 Computer Science & Engineering",
    duration: "Aug 2022 \u2014 Present",
    score: "CGPA: 7.5",
    imageUrl: "https://graduatesdaily.com/wp-content/uploads/2024/05/Lovely-Professional-University-Punjab.jpg",
  },
  {
    institution: "St. Paul's School",
    degree: "Intermediate (I.S.C) & Matriculation (I.C.S.E)",
    duration: "May 2022 & May 2020",
    score: "12th: 72% ; 10th: 82%",
    imageUrl: "https://skoodos.com/public/uploads/optimized/1651746437.png",
  },
];
