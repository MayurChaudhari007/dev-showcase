import { Code2, FolderKanban, Trophy } from "lucide-react";

import { projects } from "@/data/projects";

export default function HeroStats() {
  const featuredProjects = projects.length;

  const completedProjects = projects.filter(
    (project) => project.status === "Completed"
  ).length;

  const technologies = new Set(
    projects.flatMap((project) => project.technologies)
  ).size;

  const stats = [
    {
      icon: FolderKanban,
      value: featuredProjects,
      label: "Projects",
    },
    {
      icon: Trophy,
      value: completedProjects,
      label: "Completed",
    },
    {
      icon: Code2,
      value: technologies,
      label: "Technologies",
    },
  ];

  return (
    <div className="mt-14 grid grid-cols-3 gap-4">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.label}
            className="
              rounded-2xl
              border
              border-zinc-800
              bg-zinc-900/50
              p-5
              backdrop-blur
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-zinc-700
            "
          >
            <Icon
              size={22}
              className="mb-5 text-zinc-300"
            />

            <div className="text-3xl font-bold">
              {item.value}
            </div>

            <p className="mt-1 text-sm text-zinc-500">
              {item.label}
            </p>
          </div>
        );
      })}
    </div>
  );
}