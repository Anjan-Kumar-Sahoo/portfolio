# Personal Portfolio

A modern, responsive personal portfolio website built with React, TypeScript, and Tailwind CSS. This portfolio showcases my projects, skills, education, and professional experience with a sleek dark/light theme toggle.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works seamlessly across all devices
- **Dark/Light Theme**: Toggle between dark and light modes with smooth transitions
- **Smooth Scrolling**: Elegant section navigation with react-scroll
- **Interactive Animations**: Powered by Framer Motion for smooth, eye-catching animations
- **Contact Form**: Integrated with EmailJS for direct messaging
- **Modern UI**: Built with Tailwind CSS for a clean, professional look
- **Type-Safe**: Fully typed with TypeScript for better development experience

## 🚀 Live Demo

Check out the live portfolio: [Portfolio Website](https://yourportfolio.com)

## 📸 Screenshots

### Light Mode
![Light Mode](screenshots/light-mode.png)

### Dark Mode
![Dark Mode](screenshots/dark-mode.png)

## 🛠️ Built With

- **Frontend Framework**: [React](https://react.dev/) 18.2.0
- **Language**: [TypeScript](https://www.typescriptlang.org/) 5.3.3
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) 3.4.1
- **Build Tool**: [Vite](https://vitejs.dev/) 6.3.3
- **Animations**: [Framer Motion](https://www.framer.com/motion/) 10.16.4
- **Icons**: [Lucide React](https://lucide.dev/) 0.344.0
- **Email Service**: [EmailJS](https://www.emailjs.com/) 4.1.0
- **Smooth Scrolling**: [React Scroll](https://github.com/fisshy/react-scroll) 1.8.9

## 📁 Project Structure

```
portfolio/
├── public/
│   └── netlify.toml          # Netlify deployment configuration
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── ContactForm.tsx
│   │   ├── EducationCard.tsx
│   │   ├── Footer.tsx
│   │   ├── InternshipCard.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── SectionTitle.tsx
│   │   └── SkillCard.tsx
│   ├── context/              # React Context for theme management
│   │   └── ThemeContext.tsx
│   ├── data/                 # Portfolio data and content
│   │   └── portfolioData.ts
│   ├── sections/             # Main page sections
│   │   ├── Contact.tsx
│   │   ├── Education.tsx
│   │   ├── Home.tsx
│   │   ├── InternshipTraining.tsx
│   │   ├── Projects.tsx
│   │   ├── SoftSkills.tsx
│   │   └── TechnicalSkills.tsx
│   ├── types/                # TypeScript type definitions
│   │   └── index.ts
│   ├── App.tsx               # Main application component
│   ├── main.tsx              # Application entry point
│   └── index.css             # Global styles
├── eslint.config.js          # ESLint configuration
├── index.html                # HTML entry point
├── package.json              # Dependencies and scripts
├── postcss.config.js         # PostCSS configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
├── vite.config.ts            # Vite configuration
└── README.md                 # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables (if using EmailJS)
```bash
# Create a .env file in the root directory
# Add your EmailJS credentials
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

4. Start the development server
```bash
npm run dev
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 🎨 Customization

### Update Personal Information

Edit the `src/data/portfolioData.ts` file to update:
- Personal details (name, profession, bio)
- Projects
- Skills (technical and soft)
- Education
- Internships and trainings
- Contact information

### Modify Theme Colors

Update Tailwind configuration in `tailwind.config.js` to customize colors and styling.

### Add New Sections

1. Create a new component in `src/sections/`
2. Import and add it to `App.tsx`
3. Update navigation in `src/components/Navbar.tsx`

## 🌐 Deployment

### Deploy to Netlify

This project includes a `netlify.toml` configuration file for easy deployment:

1. Push your code to GitHub
2. Connect your repository to [Netlify](https://www.netlify.com/)
3. Netlify will automatically detect the build settings
4. Your site will be live!

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

## 📱 Sections

- **Home**: Introduction and hero section
- **Internships & Training**: Professional experiences and certifications
- **Projects**: Portfolio of development projects with live demos
- **Technical Skills**: Programming languages, frameworks, and tools
- **Soft Skills**: Professional competencies and personal strengths
- **Education**: Academic background
- **Contact**: Get in touch via contact form

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! 

Please read our [Contributing Guidelines](CONTRIBUTING.md) and [Code of Conduct](CODE_OF_CONDUCT.md) before contributing.

Feel free to check the [issues page](https://github.com/Anjan-Kumar-Sahoo/portfolio/issues).

## 📝 License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Anjan Kumar Sahoo**

- GitHub: [@Anjan-Kumar-Sahoo](https://github.com/Anjan-Kumar-Sahoo)
- LinkedIn: [@aks1097](https://linkedin.com/in/aks1097)
- Email: askmraks@gmail.com

## ⭐ Show Your Support

Give a ⭐️ if you like this project!

## 📸 Features Showcase

### Responsive Navigation
- Smooth scrolling navigation
- Mobile-friendly hamburger menu
- Active section highlighting

### Theme Toggle
- Persistent theme preference
- Smooth color transitions
- System preference detection

### Interactive Components
- Animated skill cards with hover effects
- Project cards with live demo links
- Working contact form with validation

### Performance Optimized
- Fast page loads with Vite
- Optimized images and assets
- Code splitting for better performance

---

Made with ❤️ by Anjan Kumar Sahoo
