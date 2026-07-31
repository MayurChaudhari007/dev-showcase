
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

    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "GSAP",
    ],

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
];

export const projects: Project[] = projectData.map((project) => ({
  ...project,
  ...getProjectAssets(project.slug),
}));