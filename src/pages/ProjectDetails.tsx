
import {
  ArrowLeft,
  Calendar,
  Check,
  ExternalLink,
  FolderOpen,
  GitBranch,
  Play,
} from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";

import { projects } from "@/data/projects";

import ProjectSlider from "@/components/project/ProjectSlider";
import Badge from "@/components/ui/Badge";
import Section from "@/components/ui/Section";

export default function ProjectDetails() {
  const { slug } = useParams();

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  return (
    <Section className="py-14 lg:py-20">
      <div className="mx-auto max-w-6xl">
        {/* Back */}

        <Link
          to="/projects"
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-4 py-2 text-sm text-zinc-300 transition-all hover:border-zinc-700 hover:bg-zinc-800 hover:text-white"
        >
          <ArrowLeft size={18} />
          Back to Projects
        </Link>

        {/* Slider */}

        <ProjectSlider
          images={project.images}
          title={project.title}
        />

        {/* Hero */}

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_320px]">
          {/* Left */}

          <div>
            <div className="mb-5 flex flex-wrap gap-3">
              <Badge>{project.status}</Badge>

              <Badge>{project.category}</Badge>

              <Badge>
                <span className="inline-flex items-center gap-1">
                  <Calendar size={12} />
                  {project.year}
                </span>
              </Badge>
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>

            <p className="mt-5 text-xl leading-8 text-zinc-300">
              {project.shortDescription}
            </p>

            <p className="mt-8 leading-8 text-zinc-400">
              {project.description}
            </p>
          </div>

          {/* Right */}

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6">
            <h3 className="mb-6 text-lg font-semibold">
              Project Links
            </h3>

            <div className="flex flex-col gap-4">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-medium text-black transition hover:scale-[1.02]"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-700 px-5 py-3 transition hover:border-zinc-500 hover:bg-zinc-800"
                >
                  <GitBranch size={18} />
                  GitHub
                </a>
              )}

              {project.youtube && (
                <a
                  href={project.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-700 px-5 py-3 transition hover:border-zinc-500 hover:bg-zinc-800"
                >
                  <Play size={18} />
                  YouTube
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Technologies */}

        <div className="mt-20 rounded-3xl border border-zinc-800 bg-zinc-900/30 p-8">
          <div className="mb-8 flex items-center gap-3">
            <FolderOpen className="text-zinc-400" size={22} />

            <h2 className="text-2xl font-semibold">
              Technologies Used
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
        </div>

        {/* Features */}

        <div className="mt-20">
          <h2 className="mb-8 text-3xl font-bold">
            Key Features
          </h2>

          <div className="grid gap-5 sm:grid-cols-2">
            {project.features.map((feature) => (
              <div
                key={feature}
                className="group rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-700 hover:bg-zinc-900"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                  <Check size={20} />
                </div>

                <p className="leading-7 text-zinc-300">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}