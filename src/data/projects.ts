import { getProjectAssets } from "../utils/projectAssets";
import type { Project } from "../types/project";

const projectData = [
  {
    id: 1,

    slug: "spiderman-portfolio",

    title: "Spider-Man Portfolio",

    shortDescription: "A premium Spider-Man themed developer portfolio.",

    description:
      "A premium portfolio built using React, TypeScript, Tailwind CSS and GSAP with smooth animations, responsive layouts, and a modern user experience inspired by Spider-Man.",

    category: "Portfolio",

    featured: true,

    technologies: ["React", "TypeScript", "Tailwind CSS", "GSAP"],

    github: "https://github.com/MayurChaudhari007/Spiderman-Portfolio",

    live: "https://spiderman-portfolio-eta.vercel.app/",

    youtube: "https://www.youtube.com/shorts/VTptRGQdIBs",

    features: [
      "Responsive Design",
      "Smooth Animations",
      "Dark Theme",
      "Modern UI",
    ],

    status: "Completed" as const,

    year: 2026,
  },
  {
    id: 2,

    slug: "disease-prediction",

    title: "AI Disease Prediction System",

    shortDescription:
      "An AI & Machine Learning powered healthcare platform for disease prediction, medical reports, and intelligent doctor-like consultations.",

    description:
      "A full-stack healthcare web application built with Flask, Machine Learning, and Google Gemini AI. The platform predicts diseases using an SVM model trained on a medical dataset and also provides AI-powered disease analysis, chatbot consultations, downloadable medical reports, and secure report history for authenticated users.",

    category: "AI / Machine Learning",

    featured: true,

    technologies: [
      "Python",
      "Flask",
      "Machine Learning",
      "Scikit-learn",
      "Google Gemini API",
      "Bootstrap",
      "HTML",
      "CSS",
      "JavaScript",
      "Pandas",
      "NumPy",
    ],

    github: "https://github.com/MayurChaudhari007/Online_Health_Center",

    live: "",

    youtube: "https://www.youtube.com/watch?v=VoNoRRUEahM&t=67s",

    features: [
      "Machine Learning Disease Prediction",
      "Google Gemini AI Integration",
      "AI Medical Chatbot",
      "Medical Report Generation",
      "Medical Report Storage",
      "Hospital-style PDF Reports",
      "User Authentication",
      "Disease Description & Precautions",
      "Medication Recommendations",
      "Diet & Workout Suggestions",
      "Responsive Dashboard",
      "Feedback System",
    ],

    status: "Completed" as const,

    year: 2025,
  },
  {
    id: 3,

    slug: "ai-powered-learning-assistant",

    title: "AI-Powered Learning Assistant",

    shortDescription:
      "An AI-driven educational platform that transforms PDFs into an interactive learning experience using RAG and Google Gemini.",

    description:
      "A full-stack AI learning platform that enables students to upload PDFs, ask intelligent questions, generate flashcards, create summaries, and perform semantic search using Retrieval-Augmented Generation (RAG). Built with React, Node.js, Python, ChromaDB, MongoDB Atlas, Cloudinary, and Google Gemini to deliver a personalized knowledge base and AI-powered study assistant.",

    category: "AI / RAG",

    featured: true,

    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "Python",
      "Google Gemini API",
      "ChromaDB",
      "MongoDB Atlas",
      "JWT",
      "Cloudinary",
    ],

    github:
      "https://github.com/MayurChaudhari007/AI-Powered-Learning-Assistant-New",

    live: "",

    youtube: "https://youtu.be/NWyluvLuTVU?si=bTi532ksK-GW8M2C",

    features: [
      "AI Question Answering",
      "Retrieval-Augmented Generation (RAG)",
      "Smart PDF Upload",
      "Semantic Search",
      "AI Flashcard Generator",
      "AI Document Summarization",
      "Personal Knowledge Base",
      "Google Gemini Integration",
      "Vector Search with ChromaDB",
      "JWT Authentication",
      "Cloudinary File Storage",
      "Responsive Dashboard",
    ],

    status: "Completed" as const,

    year: 2026,
  },
  {
    id: 4,

    slug: "marvel-studios-cinematic-experience",

    title: "Marvel Studios Cinematic Experience",

    shortDescription:
      "A premium cinematic Marvel-inspired web experience featuring immersive 3D environments, advanced animations, and award-quality interactions.",

    description:
      "A high-end Marvel-inspired interactive web experience designed to deliver a cinematic journey through the Marvel universe. Built with React, TypeScript, Three.js, React Three Fiber, GSAP, Framer Motion, and Lenis, the project combines immersive 3D scenes, smooth scrolling, dynamic lighting, cinematic galleries, and premium UI/UX to create an Awwwards-style experience optimized for performance and responsiveness.",

    category: "3D Experience",

    featured: true,

    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Three.js",
      "React Three Fiber",
      "Drei",
      "Postprocessing",
      "GSAP",
      "ScrollTrigger",
      "Framer Motion",
      "Lenis",
      "React Router",
    ],

    github: "https://github.com/MayurChaudhari007/Marvel",

    live: "https://marvel-murex-omega.vercel.app/",

    youtube: "",

    features: [
      "Interactive 3D Infinity Chamber",
      "React Three Fiber Rendering",
      "Dynamic Lighting & Volumetric Effects",
      "Cinematic Hero & Villain Showcase",
      "Interactive Masonry Gallery",
      "Draggable Lightbox",
      "Horizontal GSAP Timeline",
      "Lenis Smooth Scrolling",
      "Framer Motion Animations",
      "Responsive Premium UI",
      "Performance Optimized",
      "Spatial Audio Effects",
    ],

    status: "Completed" as const,

    year: 2026,
  },
  {
    id: 5,

    slug: "devverse",

    title: "DevVerse (Developer Playground)",

    shortDescription:
      "A premium Vanilla JavaScript playground featuring 60 interactive experiments in algorithms, physics, generative art, WebGL, audio, and classic games.",

    description:
      "DevVerse is a large-scale Single Page Application (SPA) built entirely with Vanilla JavaScript, HTML5, and CSS3. It showcases 60 handcrafted interactive experiments covering computer science, mathematics, digital art, browser APIs, and game development. Every rendering engine, animation loop, physics simulation, and algorithm visualization was developed from scratch without using frontend frameworks, demonstrating deep knowledge of browser technologies and modern JavaScript.",

    category: "JavaScript",

    featured: true,

    technologies: [
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Canvas API",
      "WebGL",
      "Web Audio API",
      "requestAnimationFrame",
      "CSS Variables",
      "Algorithms",
      "Physics Simulation",
    ],

    github: "https://github.com/MayurChaudhari007/DevVerse",

    live: "https://dev-verse-iota.vercel.app/",

    youtube: "https://www.youtube.com/shorts/HAgtinzbed0",

    features: [
      "60 Interactive Experiments",
      "Single Page Application (SPA)",
      "Algorithm Visualizations",
      "Physics Simulation Engine",
      "Generative Art Collection",
      "WebGL Shader Experiments",
      "Audio Visualizers",
      "Classic Retro Games",
      "Glassmorphism UI",
      "Fullscreen Experiment Mode",
      "Dynamic Light & Dark Themes",
      "Zero Runtime UI Frameworks",
    ],

    status: "Completed" as const,

    year: 2026,
  },
];

export const projects: Project[] = projectData.map((project) => ({
  ...project,
  ...getProjectAssets(project.slug),
}));
