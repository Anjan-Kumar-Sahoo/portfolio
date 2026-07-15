# 👨‍💻 Anjan Kumar Sahoo - Portfolio

A premium, interactive, and responsive developer portfolio website built with **React 18**, **TypeScript**, and **Tailwind CSS**, powered by **Vite** for lightning-fast speeds and **Framer Motion** for state-of-the-art animations. 

This website showcases my professional background as a Software Engineer, emphasizing my expertise in building scalable Spring Boot microservices, high-performance RESTful APIs, and robust front-end user interfaces.

---

## 🌟 Live Demos & Quick Links

- **Portfolio URL**: [portfolio.mraks.dev](https://github.com/Anjan-Kumar-Sahoo/portfolio) *(Deploy link / local repository)*
- **LinkedIn Profile**: [linkedin.com/in/aks1097](https://linkedin.com/in/aks1097)
- **GitHub Profile**: [github.com/Anjan-Kumar-Sahoo](https://github.com/Anjan-Kumar-Sahoo)
- **Email Contact**: [askmraks@gmail.com](mailto:askmraks@gmail.com)
- **Resume**: [Download / View Resume](https://drive.google.com/file/d/1tHcqKDcxUBka_Ptl6Fz7_4M4-LNYDtYG/view?usp=sharing)

---

## 📸 Interactive Showcase & Design Features

- **🌓 Sleek Dark & Light Mode**: Seamless transition between dark and light themes with state persistence (ThemeContext & LocalStorage) and automatic system theme detection.
- **✨ Micro-Animations**: Smooth, premium scroll animations, floating particles, card hover effects, and fade-ins powered by **Framer Motion**.
- **📱 Fluid Responsiveness**: Designed using a mobile-first approach with Tailwind CSS grid & flex layouts, featuring a custom responsive navbar.
- **✉️ Direct Message Delivery**: Live contact form powered by **EmailJS** for instant, client-side email transmission with validation.
- **📊 Interactive Project Cards**: Dynamic project showcasing featuring GitHub repositories, description tooltips, and live deployment links.

---

## 🛠️ Tech Stack & Dependencies

### Core Architecture
- **Framework**: React 18.2.0
- **Build Tool**: Vite 6.3.3
- **Language**: TypeScript 5.3.3
- **Styling**: Tailwind CSS 3.4.1 (with PostCSS & Autoprefixer)

### Packages & Libraries
- **Animations**: Framer Motion 10.16.4
- **Icons**: Lucide React 0.344.0 & React Icons 5.6.0
- **Form Utility**: EmailJS Browser 4.1.0
- **Navigation**: React Scroll 1.8.9 for smooth page offsets

---

## 🚀 Projects Showcased

### 1. SkillSync – Peer-to-Peer Learning Platform
*Architected a production-grade peer-to-peer mentoring platform.*
- **Backend Architecture**: Designed and orchestrated 9 Spring Boot microservices deployed on AWS EC2.
- **Frontend Layer**: Built role-based dashboards (Learner, Mentor, Admin) using React 18 and Redux Toolkit.
- **Data & Workflows**: Implemented CQRS pattern, Redis query caching, and RabbitMQ asynchronous messaging.
- **Security**: Secured API gateways and endpoints with stateless JWTs, OAuth2, and OTP verification.
- **Links**: [GitHub Repository](https://github.com/Anjan-Kumar-Sahoo/SkillSync) | [Live Demo](https://skillsync.mraks.dev)

### 2. Godamm – Inventory Command Center
*A multi-tenant inventory control system optimized for concurrent traffic.*
- **API Engine**: Built 23+ RESTful APIs with strict validation, running on Spring Boot and Spring Data JPA.
- **Database Optimization**: Developed atomic transaction processing on MySQL with Redis caching on high-frequency read paths to prevent race conditions.
- **Analytics Dashboard**: Custom analytics board rendering profit charts, low-stock notifications, and inventory CRUD interfaces.
- **DevOps & CI/CD**: Automated deployment flows using Docker Compose, Nginx reverse proxy, and GitHub Actions.
- **Links**: [GitHub Repository](https://github.com/Anjan-Kumar-Sahoo/Inventory-Management) | [Live Demo](https://godamm.mraks.dev)

### 3. Garage Management System
*End-to-end platform handling invoices, vehicle service queues, and operational trends.*
- **Features**: Customer service tracking, invoice generation with payment status workflows, and interactive metrics dashboards.
- **Tech Stack**: Spring Boot, React, MySQL, Spring Data JPA, Spring Security.
- **Links**: [GitHub Repository](https://github.com/Anjan-Kumar-Sahoo/GarageMS)

---

## 📋 Skill Set Profile

### 💻 Technical Competencies
- **Languages**: Java, TypeScript, JavaScript, Python, C++
- **Frameworks & Libraries**: Spring Framework, Spring Boot, React, Redux Toolkit, Angular, Next.js, Django
- **Databases & Caches**: MySQL, PostgreSQL, MongoDB, Redis
- **DevOps & Infrastructure**: Docker, AWS (EC2, S3), GitHub Actions, Nginx, Linux
- **Tools & Methods**: RabbitMQ, REST APIs, microservices architecture, Git, Postman, Jest

### 🧠 Soft Skills & Achievements
- **Analytical Prowess**: Over 250+ LeetCode milestones resolved with optimized data structure and algorithm architectures.
- **Interpersonal & Team Competencies**: Problem Solving, Teamwork, Technical Leadership, Effective Communication, and agile Scrum collaboration.

---

## 📁 Repository Structure

```text
portfolio/
├── public/                     # Static assets (portraits, icons, netlify.toml)
├── src/
│   ├── components/             # Reusable UI elements (Navbar, Footer, ContactForm, etc.)
│   ├── context/                # Theme management state provider
│   ├── data/                   # Centralized portfolio content database (portfolioData.ts)
│   ├── sections/               # Modular landing page sections (Home, TechnicalSkills, Projects, etc.)
│   ├── types/                  # Global TypeScript typings
│   ├── App.tsx                 # Core component tree and styling layout
│   ├── main.tsx                # Client-side render target & React entrypoint
│   └── index.css               # Design tokens, variables, & Tailwind base layers
├── eslint.config.js            # Linter rules
├── tailwind.config.js          # Tailwind theme parameters
├── tsconfig.json               # TypeScript compiler config
└── vite.config.ts              # Vite configurations
```

---

## 🚀 Getting Started & Local Setup

Follow these steps to run the portfolio website on your local development environment.

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v18.0.0 or higher) and [npm](https://www.npmjs.com/) installed.

### 1. Clone the Codebase
```bash
git clone https://github.com/Anjan-Kumar-Sahoo/portfolio.git
cd portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
To get the contact form working, create a `.env` file in the root directory:
```env
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

### 4. Fire Up the Dev Server
```bash
npm run dev
```
The application will launch locally. Open [http://localhost:5173](http://localhost:5173) in your web browser.

---

## ⚙️ Available npm Scripts

- `npm run dev`: Starts the local development environment using Vite.
- `npm run build`: Compiles and optimizes assets into production bundles in the `dist/` directory.
- `npm run preview`: Locally previews the production build in a Node environment.
- `npm run lint`: Analyzes workspace code style and errors using ESLint.

---

## 🤝 Contribution & License

Contributions, issues, and feature requests are welcome! Feel free to raise issues in the [Issues tab](https://github.com/Anjan-Kumar-Sahoo/portfolio/issues).

Distributed under the **Apache License 2.0**. See the [LICENSE](LICENSE) file for more information.

---

*Made with ❤️ by [Anjan Kumar Sahoo](https://github.com/Anjan-Kumar-Sahoo)*
