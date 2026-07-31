import FloatingTechCard from "./FloatingTechCard";

export default function HeroVisual() {
  return (
    <div className="relative hidden h-[620px] lg:block">
      {/* Center Orb */}

      <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-gradient-to-br from-zinc-900 via-zinc-800 to-black shadow-[0_0_120px_rgba(255,255,255,0.08)]" />

      {/* Inner Ring */}

      <div className="absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-zinc-800" />

      {/* Outer Ring */}

      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-zinc-900" />

      <FloatingTechCard
        title="React"
        animation="fast"
        className="left-12 top-10"
      />

      <FloatingTechCard
        title="TypeScript"
        animation="slow"
        className="right-6 top-24"
      />

      <FloatingTechCard
        title="Tailwind CSS"
        animation="normal"
        className="left-0 top-64"
      />

      <FloatingTechCard
        title="Next.js"
        animation="fast"
        className="right-0 top-72"
      />

      <FloatingTechCard
        title="GSAP"
        animation="slow"
        className="left-20 bottom-24"
      />

      <FloatingTechCard
        title="Three.js"
        animation="normal"
        className="right-12 bottom-12"
      />

      <FloatingTechCard
        title="Framer Motion"
        animation="fast"
        className="left-1/2 top-2 -translate-x-1/2"
      />

      <FloatingTechCard
        title="Node.js"
        animation="slow"
        className="left-1/2 bottom-0 -translate-x-1/2"
      />

      {/* Center Text */}

      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
        <div className="text-center text-5xl font-black tracking-tight">
          DEV
        </div>

        <div className="mt-2 text-sm uppercase tracking-[0.4em] text-zinc-500">
          SHOWCASE
        </div>
      </div>
    </div>
  );
}
