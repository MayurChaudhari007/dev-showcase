

// import Hero from "@/components/home/Hero";
import ProjectCard from "@/components/project/ProjectCard";
import Hero from "@/components/home/hero/Hero";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";

import { projects } from "@/data/projects";

export default function Home() {
  return (
    <>
      {/* <Hero /> */}
    <Hero />
      <Section>
        <Heading
          title="Featured Projects"
          description="A selection of projects showcasing my work."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </Section>
    </>
  );
}