import { Sparkles } from "lucide-react";

import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";

export default function HeroContent() {
  return (
    <div className="relative z-10 max-w-3xl">
      {/* Badge */}

      <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/70 px-4 py-2 text-sm text-zinc-300 backdrop-blur">
        <Sparkles size={16} />

        Premium Developer Portfolio
      </div>

      {/* Heading */}

      <h1 className="mt-8 text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
        Crafting

        <br />

        <span className="bg-gradient-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
          Modern Digital
        </span>

        <br />

        Experiences.
      </h1>

      {/* Description */}

      <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
        Passionate about building beautiful, responsive and high-performance
        web experiences using React, TypeScript, Three.js, GSAP and modern
        frontend technologies.
      </p>

      <HeroButtons />

      <HeroStats />
    </div>
  );
}