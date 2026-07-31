import {
  Code2,
  FolderKanban,
  Globe,
  Layers3,
  Sparkles,
} from "lucide-react";

import Badge from "@/components/ui/Badge";
import Section from "@/components/ui/Section";

const skills = [
  "React",
  "TypeScript",
  "Next.js",
  "Tailwind CSS",
  "Three.js",
  "GSAP",
  "Framer Motion",
  "Node.js",
];

const values = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "I focus on scalable architecture, reusable components and maintainable code.",
  },
  {
    icon: Layers3,
    title: "Modern UI",
    description:
      "Building responsive, polished and accessible interfaces with great user experience.",
  },
  {
    icon: Sparkles,
    title: "Animations",
    description:
      "Creating smooth interactions using GSAP, Framer Motion and custom effects.",
  },
  {
    icon: Globe,
    title: "Performance",
    description:
      "Optimized applications with fast loading, SEO and excellent Core Web Vitals.",
  },
];

export default function About() {
  return (
    <Section className="py-16 lg:py-24">
      <div className="mx-auto max-w-6xl">
        {/* Hero */}

        <div className="text-center">
          <Badge>About Me</Badge>

          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Building Modern Digital
            <br />
            Experiences.
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
            I'm a passionate frontend developer who enjoys creating premium,
            responsive and interactive web experiences using modern JavaScript
            technologies. I love transforming ideas into beautiful, performant
            products that users enjoy using.
          </p>
        </div>

        {/* Skills */}

        <div className="mt-20">
          <div className="mb-8 flex items-center gap-3">
            <FolderKanban size={22} />

            <h2 className="text-2xl font-semibold">
              Tech Stack
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <Badge key={skill}>{skill}</Badge>
            ))}
          </div>
        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-6 md:grid-cols-2">
          {values.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-700"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                  <Icon size={22} />
                </div>

                <h3 className="text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-zinc-400">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom */}

        <div className="mt-24 rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-black p-10 text-center">
          <h2 className="text-3xl font-bold">
            Always Learning.
            <br />
            Always Building.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-zinc-400">
            I enjoy exploring new technologies, building side projects,
            contributing to open source and continuously improving my skills as
            a frontend developer.
          </p>
        </div>
      </div>
    </Section>
  );
}