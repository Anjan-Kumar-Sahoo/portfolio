import { SkillType, ProjectType, EducationType } from '../types';

export const userData = {
  name: "Anjan Kumar Sahoo",
  profession: "Java Developer",
  bio: "Passionate Java developer with proficiency in Spring Boot and Angular. I enjoy building scalable web applications and solving complex problems through efficient code.",
  resumeUrl: "https://drive.google.com/file/d/1LUh3fsjBEPIl8SDdmiThoHHE4GoddBY0/view?usp=sharing",
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
  { name: "Python", backgroundUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvm8puJRD2pSCSrgB9kje9gxsfbwCDj5tQfQ&s" },
  { name: "Django", backgroundUrl: "https://www.devopsschool.com/blog/wp-content/uploads/2022/02/DjangoFeaturedImage.jpeg" },
  { name: "Postman", backgroundUrl: "https://www.postman.com/_ar-assets/images/postman-api-platform-social-preview-9420276277ad8d4e67e53ee548409999.jpg" },
  { name: "React", backgroundUrl: "https://miro.medium.com/v2/resize:fit:1400/1*MF5V_dkybUTcfzwHFh0VSw.jpeg" },
  { name: "JavaScript", backgroundUrl: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fryjtqvr29xjynue53o0o.jpg" },
  { name: "HTML/CSS", backgroundUrl: "https://wellcreator.com/blog/wp-content/uploads/2022/02/html-css-750x375.jpg" },
  { name: "C++", backgroundUrl: "https://media.licdn.com/dms/image/v2/C5612AQFbHPw4gOrSyg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1544386832292?e=2147483647&v=beta&t=0dL7w7H8WWdVfFjqyZIL83y54fjoR4mIyBC5kc_pcHk" },
  { name: "MySQL", backgroundUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT21QLILKsh-EOuzfl2Hpek1Z91tDkKusNL8w&s" },
  { name: "MongoDB", backgroundUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8tDqWuNdv2HpKkd-LQ1o0M4r0fguN2kB1Pw&s" },
  { name: "Windows", backgroundUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUos1au9_2Dcz8d3IvnjX0bmBDs0juMaRGwg&s" },
  { name: "Malware Analysis", backgroundUrl: "https://virtualcyberlabs.com/wp-content/uploads/2024/12/Blog-Thumbnails-8-1.png" },
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
    title: "Inventory Management System",
    description: "Built a full-stack web app to efficiently manage suppliers, products, inventory, and track sales transactions. Developed backend services with Spring Boot, JPA, and MySQL exposing REST APIs for smooth data handling. Designed React frontend to display suppliers, products, and their relationships dynamically in real time. Added a sell function to automatically update stock levels, ensuring accurate inventory after every transaction. Optimized API handling and resolved cyclic dependencies, improving data consistency and query execution performance.",
    technologies: ["Spring Boot", "React", "MySQL", "JPA", "REST API"],
  github: "https://github.com/Anjan-Kumar-Sahoo/Inventory-Management",
  live: "https://inventorymanagement.mraks.me"
  },
  {
    title: "Carbon Footprint Tracker",
    description: "Developed a full-stack web app enabling users to calculate, track, and forecast commute-based carbon emissions. Created secure authentication with registration, login/logout, and profile management using Django’s auth framework. Engineered commute tracking with dynamic vehicle selection and ML-powered CO2 emission predictions using Scikit-learn. Designed dashboards with Matplotlib charts allowing users to visualize and compare their carbon footprint effectively. Streamlined data storage using SQLite for development and PostgreSQL for production to scale user commute data. Integrated responsive Bootstrap UI to enhance usability, accessibility, and engagement across desktop and mobile devices.",
    technologies: ["Django", "Python", "SQLite", "Scikit-learn", "Bootstrap", "Matplotlib"],
  github: "https://github.com/Anjan-Kumar-Sahoo/Carbon-Footprint-Tracker",
  live: "https://carbontracker.mraks.me"
  },
];

// internships removed
export const trainings: import('../types').TrainingType[] = [
  {
    title: "Python Full Stack Training",
    organization: "CipherSchools",
    duration: "Jun 2025",
    points: [
      "Gained hands-on expertise in Python Full Stack, building Django apps with dynamic UI and database support.",
      "Applied Python frameworks to construct web apps, integrating databases and responsive interface components."
    ],
    certificate: "https://cipher-other-assets.s3.ap-south-1.amazonaws.com/certificates/TC_aksahoo1097%40gmail.com_CS2025-14504"
  },
  {
    title: "Competitive Programming Training",
    organization: "Programing Pathshala",
    duration: "Mar 2025",
    points: [
      "Enhanced problem-solving and algorithmic thinking through rigorous coding challenges and competitive exercises.",
      "Refined debugging and logical reasoning, optimizing performance in complex programming tasks and contests."
    ],
    certificate: null
  },
  {
    title: "Java Backend Development",
    organization: "Hitbullseye",
    duration: "Jan 2025",
    points: [
      "Acquired practical knowledge of Java backend, designing REST APIs and integrating databases in structured apps.",
      "Implemented backend solutions using microservices architecture, MySQL databases, and CRUD operations efficiently."
    ],
    certificate: null
  },
  {
    title: "Logic Building & Programming Training",
    organization: "SkillDev LPU",
    duration: "Aug 2024",
    points: [
      "Strengthened analytical problem-solving using Java and DSA concepts with focus on optimized algorithms.",
      "Adopted advanced coding strategies to deliver solutions that improve performance and streamline logic."
    ],
    certificate: "https://files.lpu.in/umsweb/skilldevcourse/SkillDevelopmentCertificates/12216014_459_08_15_2024.pdf?_gl=1*t43zh3*_gcl_au*Nzg0ODE0OTgyLjE3NTI1NzMxNjUuNzkzMDk1OTU5LjE3NTI1NzMxNzcuMTc1MjU3MzIzMw.."
  }
];

export const education: EducationType[] = [
  {
    institution: "Lovely Professional University (LPU)",
    degree: "B.Tech in Computer Science Engineering",
    duration: "2022 - 2026",
    score: "CGPA: 7.30",
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