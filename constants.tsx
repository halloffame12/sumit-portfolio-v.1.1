
import React from 'react';
import { Project, Achievement, SkillCategory, Service } from './types';
import { Code, Smartphone, Database, Brain, Globe, Shield, Zap, Layout, Layers, Cpu } from 'lucide-react';

export const SKILLS_DATA: (SkillCategory & { icon: React.ReactNode, description: string })[] = [
  {
    title: "Systems Programming",
    icon: <Cpu size={24} />,
    description: "Building low-level systems, OS kernels, and WebAssembly applications with Rust.",
    skills: ["Rust", "WebAssembly", "wasm-bindgen", "OS Concepts", "Process Management", "Virtual File Systems"]
  },
  {
    title: "Mobile Development",
    icon: <Smartphone size={24} />,
    description: "Architecting high-performance cross-platform applications with a single codebase.",
    skills: ["Flutter", "Dart", "React Native", "Kotlin", "Swift", "Provider/Riverpod State Management"]
  },
  {
    title: "Frontend Engineering",
    icon: <Globe size={24} />,
    description: "Building immersive, lightning-fast user interfaces with pixel-perfect precision.",
    skills: ["React.js", "Next.js 14", "TypeScript", "Tailwind CSS", "SASS", "Redux/Zustand"]
  },
  {
    title: "AI & Machine Learning",
    icon: <Brain size={24} />,
    description: "Integrating intelligent decision-making and computer vision into modern software.",
    skills: ["Python", "TensorFlow", "PyTorch", "OpenCV", "NLP", "Scikit-learn"]
  },
  {
    title: "Backend & Systems",
    icon: <Shield size={24} />,
    description: "Designing robust, secure server-side logic and scalable microservices.",
    skills: ["Node.js", "Express.js", "NestJS", "FastAPI", "GraphQL", "REST APIs"]
  },
  {
    title: "Cloud & DevOps",
    icon: <Zap size={24} />,
    description: "Deploying and managing scalable infrastructure in the cloud.",
    skills: ["AWS", "GCP", "Docker", "Kubernetes", "GitHub Actions", "Nginx"]
  },
  {
    title: "Database & Performance",
    icon: <Database size={24} />,
    description: "Optimizing data storage and retrieval for maximum throughput and reliability.",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Prisma ORM", "Query Optimization", "Database Design"]
  }
];

export const SERVICES_DATA: (Service & { icon: React.ReactNode })[] = [
  {
    id: "s1",
    title: "Web App Development",
    icon: <Layout className="text-[var(--accent)]" />,
    description: "Custom, high-performance web applications built with modern frameworks like React and specialized in ultra-responsive UI/UX.",
    features: ["SPA Architecture", "Modern State Management", "SEO Optimization"]
  },
  {
    id: "s2",
    title: "AI Integration",
    icon: <Brain className="text-[var(--accent)]" />,
    description: "Empowering businesses with intelligent features including computer vision (OpenCV), predictive modeling, and automation agents.",
    features: ["Custom ML Models", "Computer Vision", "Process Automation"]
  },
  {
    id: "s3",
    title: "Real-time Systems",
    icon: <Zap className="text-[var(--accent)]" />,
    description: "Implementing low-latency communication platforms using Socket.IO and WebRTC for seamless chat and video experiences.",
    features: ["Instant Messaging", "Video Conferencing", "Live Dashboards"]
  },
  {
    id: "s4",
    title: "Mobile Solutions",
    icon: <Smartphone className="text-[var(--accent)]" />,
    description: "Cross-platform mobile apps using Flutter that deliver native-like performance and smooth animations across Android and iOS.",
    features: ["Flutter/Dart Expert", "Native API Access", "Offline Sync"]
  },
  {
    id: "s5",
    title: "Systems & WebAssembly",
    icon: <Cpu className="text-[var(--accent)]" />,
    description: "Low-level systems programming with Rust and WebAssembly. Building performant, portable applications that run anywhere.",
    features: ["Rust Development", "WASM Compilation", "OS Kernel Research"]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'project-browser-os',
    slug: 'browser-os',
    title: 'BrowserOS – Virtual OS in WebAssembly',
    category: 'Systems Programming',
    imageUrl: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=2000&auto=format&fit=crop',
    description: 'A research-level operating system kernel written in Rust and compiled to WebAssembly (WASM), running entirely inside a web browser. Demonstrates core OS concepts: process management, virtual file systems, syscall abstraction, and cooperative multitasking.',
    problem: 'Understanding OS internals requires complex setup with emulators or bare-metal hardware. Students and researchers need an accessible way to experiment with kernel concepts.',
    solution: 'Built a complete OS kernel in Rust targeting WebAssembly. Implemented process management, inode-based virtual filesystem, syscall dispatcher, and I/O abstraction. The browser acts as hardware — JS drivers handle display, keyboard, storage, and timer.',
    role: 'Systems Engineer & Researcher',
    techStack: ['Rust', 'WebAssembly', 'JavaScript', 'wasm-bindgen', 'HTML/CSS'],
    repoUrl: 'https://browser-os-black.vercel.app'
  },
  {
    id: 'project-0',
    slug: 'forgestack-os-cli',
    title: 'ForgeStack OS CLI',
    category: 'Developer Tools',
    imageUrl: 'https://i.postimg.cc/HxyLjf4n/image.png',
    description: 'ForgeStack OS is a next-generation CLI tool that generates full-stack SaaS applications with a single command. Supports 150+ stack combinations with production-ready code.',
    problem: 'Setting up a full-stack project with authentication, database, and multi-tenancy is time-consuming and error-prone.',
    solution: 'Built a powerful CLI using TypeScript and Node.js that generates complete full-stack applications with React/Next.js frontends, Express/NestJS backends, multiple auth providers (Clerk, Supabase, JWT), and database configurations with Docker support.',
    role: 'Platform Engineer',
    techStack: ['TypeScript', 'Node.js', 'React', 'Next.js', 'NestJS', 'Prisma', 'Docker'],
    repoUrl: 'https://forgestackcli.vercel.app/'
  },
  {
    id: 'project-1',
    slug: 'anonchat-live',
    title: 'AnonChat Live',
    category: 'Web Development',
    imageUrl: 'https://i.postimg.cc/HWyk9mDZ/anonchatweb.png',
    description: 'AnonChat Live is a production-ready anonymous real-time chat platform designed for instant, private communication without any registration.',
    problem: 'Most chat platforms require sign-ups, track user data, or introduce delays that reduce real-time interaction quality.',
    solution: 'Implemented a low-latency WebSocket architecture using Node.js, Express, and Socket.IO. Built a fast React (Vite) + Tailwind UI with anonymous identities, random matchmaking, and public rooms with live participant tracking.',
    role: 'Full-Stack Developer',
    techStack: ['Node.js', 'Express', 'Socket.IO', 'React (Vite)', 'Tailwind CSS'],
    repoUrl: 'https://anonchatweb.netlify.app/'
  },
  {
    id: 'project-4',
    slug: 'CodeCraftGames',
    title: 'Ai Powered Game Dev',
    category: 'AI/Computer Vision',
    imageUrl: 'https://i.postimg.cc/k4bZhTCv/codecraft.png',
    description: 'CodeCraftGames is a Python-based gesture recognition platform that lets users control applications — and even 3D games — using hand movements.',
    problem: 'Traditional input devices like keyboards and controllers limit natural interaction. A hands-free control system was needed.',
    solution: 'Built using Python OpenCV and ML models, extended to interactive OpenGL-based 3D games controlled by gestures.',
    role: 'ML Developer',
    techStack: ['Python', 'OpenCV', 'TensorFlow', 'OpenGL'],
    repoUrl: 'https://codecraftgames.netlify.app/',
  },
  {
    id: 'project-5',
    slug: 'clearlist-todo',
    title: 'ClearList – Productivity App',
    category: 'Mobile Development',
    imageUrl: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?q=80&w=2000&auto=format&fit=crop',
    description: 'ClearList is a high-performance, minimalist to-do application designed to eliminate distractions and streamline daily tasks.',
    problem: 'Existing productivity tools often suffer from feature bloat, distracting users from their primary tasks.',
    solution: 'Built with Flutter and Dart, ClearList focuses on speed and simplicity. It features a gesture-based UI, local-first data persistence via SQLite, and a native-grade experience on Android.',
    role: 'Flutter Developer',
    techStack: ['Flutter', 'Dart', 'SQLite', 'Material 3', 'Local Notifications'],
    repoUrl: 'https://github.com/halloffame12/Todo_Android_App/releases/tag/v.1.0.0-beta',
  },
];

export const ACHIEVEMENTS_DATA: Achievement[] = [
  {
    id: "a2",
    title: "4th Place - DTC Competition",
    organization: "Delhi Technical University",
    date: "2024",
    description: "Ranked among top developers in a high-stakes competitive coding and app development challenge."
  },
  {
    id: "a4",
    title: "Published Research Paper - BrowserOS",
    organization: "OSF Preprints",
    date: "2026",
    description: "Published research on building a virtual operating system in WebAssembly using Rust, demonstrating OS concepts like process management, virtual file systems, and syscall abstraction in the browser."
  }
];
