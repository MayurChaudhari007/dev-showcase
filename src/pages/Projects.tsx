import { useMemo, useState } from "react";

import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

import ProjectCard from "@/components/project/ProjectCard";
import SearchBar from "@/components/project/SearchBar";
import CategoryFilter from "@/components/project/CategoryFilter";

import { projects } from "@/data/projects";
import { categories } from "@/data/categories";

export default function Projects() {
  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        project.title
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" ||
        project.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  return (
    <Section>
      <Heading
        title="Projects"
        description="Browse all my development projects."
      />

      <SearchBar
        value={search}
        onChange={setSearch}
      />

      <CategoryFilter
        categories={categories}
        active={category}
        onChange={setCategory}
      />

      <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>

      {!filteredProjects.length && (
        <p className="mt-20 text-center text-zinc-500">
          No projects found.
        </p>
      )}
    </Section>
  );
}