
import React from 'react';
import { Project, Achievement, SkillCategory, Service } from './types';
import { Code, Smartphone, Database, Brain, Globe, Shield, Zap, Layout, Layers } from 'lucide-react';

export const SKILLS_DATA: (SkillCategory & { icon: React.ReactNode, description: string })[] = [
  {
    title: "Mobile Development",
    icon: <Smartphone size={24} />,
    description: "Architecting high-performance cross-platform applications with a single codebase.",
    skills: ["Flutter", "Dart", "Android SDK", "iOS Deployment", "Native Bridge Integration", "Provider/Riverpod State Management"]
  },
  {
    title: "Frontend Engineering",
    icon: <Globe size={24} />,
    description: "Building immersive, lightning-fast user interfaces with pixel-perfect precision.",
    skills: ["React.js", "TypeScript", "Tailwind CSS", "GSAP Animations", "Next.js", "Responsive Architecture", "Redux/Zustand"]
  },
  {
    title: "AI & Machine Learning",
    icon: <Brain size={24} />,
    description: "Integrating intelligent decision-making and computer vision into modern software.",
    skills: ["Python", "TensorFlow", "OpenCV", "MediaPipe", "Reinforcement Learning (DQN)", "Scikit-learn"]
  },
  {
    title: "Backend & Systems",
    icon: <Shield size={24} />,
    description: "Designing robust, secure server-side logic and scalable microservices.",
    skills: ["Node.js", "Flask", "Express.js", "RESTful API Design", "JWT Authentication", "System Security Auditing"]
  },
  {
    title: "Real-Time & Sync",
    icon: <Zap size={24} />,
    description: "Powering live interactions and synchronized state across global users.",
    skills: ["Socket.IO", "WebRTC", "Firebase Realtime", "MQTT Protocol", "Bi-directional Data Streams"]
  },
  {
    title: "Database & Performance",
    icon: <Database size={24} />,
    description: "Optimizing data storage and retrieval for maximum throughput and reliability.",
    skills: ["MySQL / PostgreSQL", "Database Design", "Query Optimization", "Redis Caching", "Lazy Loading", "CDN Implementation"]
  }
];

export const SERVICES_DATA: (Service & { icon: React.ReactNode })[] = [
  {
    id: "s1",
    title: "Web App Development",
    icon: <Layout className="text-[#00ff66]" />,
    description: "Custom, high-performance web applications built with modern frameworks like React and specialized in ultra-responsive UI/UX.",
    features: ["SPA Architecture", "Modern State Management", "SEO Optimization"]
  },
  {
    id: "s2",
    title: "AI Integration",
    icon: <Brain className="text-[#00ff66]" />,
    description: "Empowering businesses with intelligent features including computer vision (OpenCV), predictive modeling, and automation agents.",
    features: ["Custom ML Models", "Computer Vision", "Process Automation"]
  },
  {
    id: "s3",
    title: "Real-time Systems",
    icon: <Zap className="text-[#00ff66]" />,
    description: "Implementing low-latency communication platforms using Socket.IO and WebRTC for seamless chat and video experiences.",
    features: ["Instant Messaging", "Video Conferencing", "Live Dashboards"]
  },
  {
    id: "s4",
    title: "Mobile Solutions",
    icon: <Smartphone className="text-[#00ff66]" />,
    description: "Cross-platform mobile apps using Flutter that deliver native-like performance and smooth animations across Android and iOS.",
    features: ["Flutter/Dart Expert", "Native API Access", "Offline Sync"]
  }
];

export const PROJECTS_DATA: Project[] = [
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
    id: 'project-2',
    slug: 'real-time-chat-app',
    title: 'Real-Time Chat Application',
    category: 'Web Development',
    imageUrl: 'https://i.postimg.cc/W1F05qLm/nexus-cha.png',
    description: 'A feature-rich real-time chat application with global and private messaging, emoji support, and an admin panel.',
    problem: 'Most chat apps lacked customizable admin controls and lightweight real-time communication features for web users.',
    solution: 'Built using Flask, Socket.IO, and MySQL with a responsive UI (Bootstrap + Tailwind). Added global/private chat, typing indicators, dark mode, and an admin panel.',
    role: 'Full-Stack Developer',
    techStack: ['Flask', 'Socket.IO', 'MySQL', 'Bootstrap', 'Tailwind CSS', 'React', 'JavaScript'],
    repoUrl: 'https://nexuschatweb.netlify.app/',
  },
  {
    id: 'project-3',
    slug: 'Techsavvy-Personal-Blog',
    title: 'AI-Powered-Blog',
    category: 'Full-Stack',
    imageUrl: 'https://i.postimg.cc/fWStnngZ/techsavvy.png',
    description: 'A modern personal blog platform enhanced with AI features, designed to share tech content and provide real-time assistance to readers.',
    problem: 'Traditional blogs are static — readers can learn passively but can’t easily ask questions or get clarification in real time.',
    solution: 'Developed an AI chatbot using Python and integrated it with Google Colab/web for fast query responses.',
    role: 'AI Engineer',
    techStack: ['Python', 'Flask', 'FastAPI', 'LLM API', 'React'],
    repoUrl: 'https://techsavvy-insights-personal-blog.netlify.app/#/',
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
    id: "a1",
    title: "NASA Space Apps Challenge Participant",
    organization: "NASA",
    date: "2025",
    description: "Successfully developed a platform for exoplanet data analysis using advanced machine learning techniques."
  },
  {
    id: "a2",
    title: "4th Place - DTC Competition",
    organization: "Delhi Technical University",
    date: "2024",
    description: "Ranked among top developers in a high-stakes competitive coding and app development challenge."
  },
  {
    id: "a3",
    title: "Code Slayer 2k25 Participant",
    organization: "NIT Delhi",
    date: "2025",
    description: "Solved complex algorithmic challenges and optimized system designs under time pressure."
  }
];
