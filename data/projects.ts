import type { Project } from '../types';

export const CURATED_PROJECTS: Project[] = [
  {
    id: 'project-1',
    slug: 'anonchat-live',
    title: 'AnonChat Live',
    category: 'Real-time Platform',
    imageUrl: 'https://i.postimg.cc/HWyk9mDZ/anonchatweb.png',
    description:
      'Production-ready anonymous real-time chat platform. No sign-ups, instant connections, live participant tracking.',
    problem: 'Most chat platforms require sign-ups, track user data, or introduce delays.',
    solution:
      'Low-latency WebSocket architecture with Socket.IO, anonymous identities, random matchmaking, and public rooms.',
    role: 'Full-Stack Developer',
    techStack: ['Node.js', 'Express', 'Socket.IO', 'React', 'Tailwind CSS'],
    repoUrl: 'https://anonchatweb.netlify.app/',
    source: 'curated',
    featured: true,
    priority: 100,
    status: 'active',
    demoUrl: 'https://anonchatweb.netlify.app/',
  },
  {
    id: 'project-2',
    slug: 'ai-powered-blog',
    title: 'AI-Powered Blog',
    category: 'AI Integration',
    imageUrl: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=2000&auto=format&fit=crop',
    description:
      'LLM-assisted blogging platform with AI-powered content generation, smart editing, and automated publishing.',
    problem: 'Content creation is time-consuming and lacks intelligent assistance.',
    solution:
      'Integrated LLM APIs for content generation, smart editing suggestions, and automated publishing workflows.',
    role: 'Full-Stack Developer',
    techStack: ['React', 'Node.js', 'OpenAI API', 'Tailwind CSS', 'MongoDB'],
    repoUrl: 'https://github.com/halloffame12',
    source: 'curated',
    featured: true,
    priority: 90,
    status: 'maintained',
  },
  {
    id: 'project-3',
    slug: 'clearlist',
    title: 'ClearList',
    category: 'Mobile App',
    imageUrl: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?q=80&w=2000&auto=format&fit=crop',
    description:
      'Minimalist Flutter task manager. Gesture-based UI, local-first data, native-grade performance on Android.',
    problem: 'Existing productivity tools suffer from feature bloat and distraction.',
    solution:
      'Built with Flutter/Dart, focusing on speed and simplicity with SQLite local persistence.',
    role: 'Flutter Developer',
    techStack: ['Flutter', 'Dart', 'SQLite', 'Material 3', 'Local Notifications'],
    repoUrl: 'https://github.com/halloffame12/Todo_Android_App/releases/tag/v.1.0.0-beta',
    source: 'curated',
    featured: true,
    priority: 85,
    status: 'stable',
  },
  {
    id: 'project-4',
    slug: 'codecraftgames',
    title: 'CodeCraftGames',
    category: 'AI / Computer Vision',
    imageUrl: 'https://i.postimg.cc/k4bZhTCv/codecraft.png',
    description:
      'Gesture-controlled gaming platform using computer vision. Control 3D games with hand movements via webcam.',
    problem: 'Traditional input devices limit natural interaction with digital content.',
    solution:
      'Python + OpenCV + TensorFlow pipeline for real-time hand tracking, mapped to OpenGL game controls.',
    role: 'ML Developer',
    techStack: ['Python', 'OpenCV', 'TensorFlow', 'OpenGL'],
    repoUrl: 'https://codecraftgames.netlify.app/',
    source: 'curated',
    featured: true,
    priority: 80,
    status: 'stable',
    demoUrl: 'https://codecraftgames.netlify.app/',
  },
];