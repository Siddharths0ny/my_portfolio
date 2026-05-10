// ============================================
// PORTFOLIO DATA — Siddharth Sony
// All content is centralized here for easy updates
// ============================================

export const personalInfo = {
  name: "Siddharth Sony",
  firstName: "Siddharth",
  role: "Full Stack Developer",
  tagline: "Building the future, one commit at a time.",
  email: "siddharthsoni8840@gmail.com",
  phone: "+91-8840822316",
  location: "Greater Noida, UP, India",
  github: "https://github.com/Siddharths0ny",
  linkedin: "https://www.linkedin.com/in/siddharth-soni-2ab8b4235/",
  resumeUrl: "/resume.pdf",
  profileImage: "/profile.png",
};

export const roles = [
  "Full Stack Web Developer",
  "MERN Stack Enthusiast",
  "AI & ML Student",
  "Problem Solver",
];

export const aboutText = {
  intro: `I'm a final-year B.Tech student in Computer Science (AI & ML) at Greater Noida Institute of Technology, with a deep passion for building things that live on the internet.`,
  story: `My journey into tech started with curiosity — tinkering with code to see what I could make a computer do. That curiosity evolved into a genuine love for full-stack development, where I found the sweet spot between designing beautiful interfaces and architecting robust backend systems.`,
  current: `Today, I specialize in the MERN stack and enjoy working with React, Node.js, and modern frontend technologies. I'm equally fascinated by AI/ML and love exploring how intelligent systems can solve real-world problems — from resume analyzers to personalized learning platforms.`,
  passion: `When I'm not coding, you'll find me leading tech operations at the Technovation Club, mentoring peers, or contributing to Google Developer Groups. I believe in learning by building, and every project I take on is an opportunity to push my limits.`,
};

export const skills = {
  frontend: [
    { name: "React.js", icon: "SiReact" },
    { name: "JavaScript", icon: "SiJavascript" },
    { name: "HTML5", icon: "SiHtml5" },
    { name: "CSS3", icon: "SiCss3" },
    { name: "Tailwind CSS", icon: "SiTailwindcss" },
  ],
  backend: [
    { name: "Node.js", icon: "SiNodedotjs" },
    { name: "Express.js", icon: "SiExpress" },
    { name: "REST APIs", icon: "TbApi" },
    { name: "MongoDB", icon: "SiMongodb" },
    { name: "MySQL", icon: "SiMysql" },
  ],
  languages: [
    { name: "JavaScript", icon: "SiJavascript" },
    { name: "Python", icon: "SiPython" },
    { name: "C++", icon: "SiCplusplus" },
    { name: "C", icon: "SiC" },
  ],
  tools: [
    { name: "Git", icon: "SiGit" },
    { name: "GitHub", icon: "SiGithub" },
    { name: "VS Code", icon: "SiVisualstudiocode" },
    { name: "Postman", icon: "SiPostman" },
    { name: "Firebase", icon: "SiFirebase" },
    { name: "Vercel", icon: "SiVercel" },
    { name: "Netlify", icon: "SiNetlify" },
    { name: "AWS", icon: "SiAmazonwebservices" },
  ],
};

export const projects = [
  {
    id: "codelearn",
    title: "CodeLearn — Learning Path Dashboard",
    description:
      "A full-featured dashboard that helps users track skill progress, manage study goals, and monitor course completion with personalized recommendations and milestone tracking.",
    techStack: ["React", "Tailwind CSS", "Framer Motion", "Firebase"],
    github: "https://github.com/Siddharths0ny/CodeLearn-Learning-Path-Dashboard-for-Enhancing-Skills",
    liveDemo: "https://code-learn-app-theta.vercel.app",
    year: "2026",
    highlights: [
      "Personalized learning recommendations",
      "Progress analytics and milestone tracking",
      "Responsive UI with modern web tech",
    ],
  },
  {
    id: "ai-resume",
    title: "AI Resume Analyzer",
    description:
      "A MERN-stack web app that analyzes resumes using AI, provides ATS scores, improvement suggestions, and recruiter-level feedback with secure authentication and PDF processing.",
    techStack: ["React", "Firebase", "Gemini AI", "Tailwind CSS"],
    github: "https://github.com/Siddharths0ny/ai-resume-analyser",
    liveDemo: "https://ai-resume-analyser-black.vercel.app/",
    year: "2026",
    highlights: [
      "AI-powered resume scoring via Gemini",
      "Secure auth + PDF upload pipeline",
      "Dashboard with actionable analytics",
    ],
  },
  {
    id: "image-classification",
    title: "Multi-Class Image Classification",
    description:
      "A CNN-based deep learning model for multi-category image classification, achieving 97% accuracy through advanced preprocessing and data augmentation techniques.",
    techStack: ["Python", "TensorFlow", "CNN", "Deep Learning"],
    github: "https://github.com/Siddharths0ny",
    liveDemo: null,
    year: "2024–2025",
    highlights: [
      "97% accuracy on testing dataset",
      "Advanced data augmentation pipeline",
      "Optimized CNN architecture",
    ],
  },
];

export const experience = [
  {
    type: "leadership",
    title: "Head of Tech Support",
    organization: "Technovation Club",
    period: "Sep 2023 – Present",
    description:
      "Leading technical operations including orientation programs, mentor sessions, and guest lectures. Coordinating event execution and tech support for large-scale college activities.",
    icon: "leadership",
  },
  {
    type: "leadership",
    title: "Committee Member",
    organization: "Google Developer Groups (GDG)",
    period: "Jan 2024 – Present",
    description:
      "Providing technical support and operational assistance for workshops and GDG campus events, fostering developer community growth.",
    icon: "community",
  },
];

export const education = [
  {
    degree: "B.Tech — Computer Science Engineering (AI & ML)",
    institution: "Greater Noida Institute of Technology",
    period: "Expected June 2026",
    current: true,
  },
  {
    degree: "Intermediate Education — PCM",
    institution: "Savitri Vidya Vihar Intermediate College, Basti",
    period: "2020",
    current: false,
  },
];

export const certifications = [
  {
    title: "IIT Kanpur C++ Training",
    issuer: "IIT Kanpur",
    icon: "cert",
  },
  {
    title: "Google Cloud Study Jam",
    issuer: "Google Cloud",
    icon: "cloud",
  },
  {
    title: "AWS Cloud Skills Training",
    issuer: "Amazon Web Services",
    icon: "cloud",
  },
];

export const navLinks = [
  { name: "Home", to: "hero" },
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Projects", to: "projects" },
  { name: "Experience", to: "experience" },
  { name: "Contact", to: "contact" },
];
