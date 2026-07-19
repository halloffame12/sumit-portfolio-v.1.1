
import React from 'react';
import { Project, Achievement, SkillCategory } from './types';
import { Smartphone, Database, Brain, Globe, Shield, Zap } from 'lucide-react';

export const SKILLS_DATA: (SkillCategory & { icon: React.ReactNode; description: string })[] = [
  {
    title: 'Mobile Development',
    icon: <Smartphone size={20} />,
    description: 'Cross-platform apps with native performance.',
    skills: ['Flutter', 'Dart', 'React Native', 'Kotlin', 'Swift', 'Material 3'],
  },
  {
    title: 'Frontend Engineering',
    icon: <Globe size={20} />,
    description: 'Immersive, fast user interfaces with pixel-perfect precision.',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'GSAP'],
  },
  {
    title: 'Backend & APIs',
    icon: <Shield size={20} />,
    description: 'Robust server-side logic and scalable microservices.',
    skills: ['Node.js', 'Express', 'Flask', 'FastAPI', 'GraphQL', 'REST APIs'],
  },
  {
    title: 'AI & Computer Vision',
    icon: <Brain size={20} />,
    description: 'Intelligent features: vision, prediction, automation.',
    skills: ['Python', 'OpenCV', 'TensorFlow', 'MediaPipe', 'PyTorch', 'NLP'],
  },
  {
    title: 'Real-time Systems',
    icon: <Zap size={20} />,
    description: 'Low-latency communication and live data platforms.',
    skills: ['Socket.IO', 'WebSockets', 'WebRTC', 'Redis Pub/Sub', 'Event-Driven'],
  },
  {
    title: 'Cloud & DevOps',
    icon: <Database size={20} />,
    description: 'Deploying and managing scalable cloud infrastructure.',
    skills: ['AWS', 'GCP', 'Docker', 'GitHub Actions', 'Nginx', 'PostgreSQL'],
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'project-1',
    slug: 'anonchat-live',
    title: 'AnonChat Live',
    category: 'Real-time Platform',
    imageUrl: 'https://i.postimg.cc/HWyk9mDZ/anonchatweb.png',
    description: 'Production-ready anonymous real-time chat platform. No sign-ups, instant connections, live participant tracking.',
    problem: 'Most chat platforms require sign-ups, track user data, or introduce delays.',
    solution: 'Low-latency WebSocket architecture with Socket.IO, anonymous identities, random matchmaking, and public rooms.',
    role: 'Full-Stack Developer',
    techStack: ['Node.js', 'Express', 'Socket.IO', 'React', 'Tailwind CSS'],
    repoUrl: 'https://anonchatweb.netlify.app/',
  },
  {
    id: 'project-2',
    slug: 'ai-powered-blog',
    title: 'AI-Powered Blog',
    category: 'AI Integration',
    imageUrl: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=2000&auto=format&fit=crop',
    description: 'LLM-assisted blogging platform with AI-powered content generation, smart editing, and automated publishing.',
    problem: 'Content creation is time-consuming and lacks intelligent assistance.',
    solution: 'Integrated LLM APIs for content generation, smart editing suggestions, and automated publishing workflows.',
    role: 'Full-Stack Developer',
    techStack: ['React', 'Node.js', 'OpenAI API', 'Tailwind CSS', 'MongoDB'],
    repoUrl: 'https://github.com/halloffame12',
  },
  {
    id: 'project-3',
    slug: 'clearlist',
    title: 'ClearList',
    category: 'Mobile App',
    imageUrl: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?q=80&w=2000&auto=format&fit=crop',
    description: 'Minimalist Flutter task manager. Gesture-based UI, local-first data, native-grade performance on Android.',
    problem: 'Existing productivity tools suffer from feature bloat and distraction.',
    solution: 'Built with Flutter/Dart, focusing on speed and simplicity with SQLite local persistence.',
    role: 'Flutter Developer',
    techStack: ['Flutter', 'Dart', 'SQLite', 'Material 3', 'Local Notifications'],
    repoUrl: 'https://github.com/halloffame12/Todo_Android_App/releases/tag/v.1.0.0-beta',
  },
  {
    id: 'project-4',
    slug: 'codecraftgames',
    title: 'CodeCraftGames',
    category: 'AI / Computer Vision',
    imageUrl: 'https://i.postimg.cc/k4bZhTCv/codecraft.png',
    description: 'Gesture-controlled gaming platform using computer vision. Control 3D games with hand movements via webcam.',
    problem: 'Traditional input devices limit natural interaction with digital content.',
    solution: 'Python + OpenCV + TensorFlow pipeline for real-time hand tracking, mapped to OpenGL game controls.',
    role: 'ML Developer',
    techStack: ['Python', 'OpenCV', 'TensorFlow', 'OpenGL'],
    repoUrl: 'https://codecraftgames.netlify.app/',
  },
];

export const ACHIEVEMENTS_DATA: Achievement[] = [
  { id: 'a1', title: '4th Place — DTC Competition', organization: 'Delhi Technical University', date: '2024', description: 'Ranked among top developers in a competitive coding and app development challenge.' },
  { id: 'a2', title: 'Published Research Paper', organization: 'OSF Preprints', date: '2026', description: 'BrowserOS: A Web-Based Operating System Simulation — published research on building a virtual OS in WebAssembly using Rust.' },
];

export const MARQUEE_ITEMS = [
  'REACT', 'FLUTTER', 'NODE.JS', 'PYTHON', 'SOCKET.IO',
  'OPENCV', 'TENSORFLOW', 'TAILWIND', 'TYPESCRIPT', 'DOCKER',
];

export const ALL_TECH_TAGS = Array.from(new Set(PROJECTS_DATA.flatMap(p => p.techStack))).sort();
