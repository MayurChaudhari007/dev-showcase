import { Link } from "react-router-dom";

import type { Project } from "@/types/project";

import Card from "@/components/ui/Card";

import ProjectCardActions from "./ProjectCardActions";
import ProjectCardContent from "./ProjectCardContent";
import ProjectCardImage from "./ProjectCardImage";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <Card
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border-zinc-800
        bg-zinc-950
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-zinc-700
        hover:shadow-2xl
        hover:shadow-white/5
      "
    >
      {/* Entire card clickable */}
      <Link
        to={`/projects/${project.slug}`}
        className="absolute inset-0 z-10"
        aria-label={`View ${project.title}`}
      />

      {/* Image */}
      <div className="overflow-hidden">
        <ProjectCardImage
          image={project.images[0]}
          title={project.title}
        />
      </div>

      {/* Content */}
      <div className="relative z-20">
        <ProjectCardContent
          title={project.title}
          description={project.shortDescription}
          tech={project.technologies}
        />

        <div className="px-6 pb-6">
          <ProjectCardActions
            github={project.github}
            live={project.live}
          />
        </div>
      </div>

      {/* Hover glow */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      >
        <div className="absolute inset-0 bg-gradient-to-t from-white/[0.03] via-transparent to-transparent" />
      </div>
    </Card>
  );
}