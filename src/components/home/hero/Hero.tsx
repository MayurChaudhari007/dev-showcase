import BackgroundGlow from "./BackgroundGlow";
import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <BackgroundGlow />

      <div className="mx-auto flex min-h-[calc(100vh-72px)] max-w-7xl items-center px-5 sm:px-6 lg:px-8">
        <div className="grid w-full items-center gap-20 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Left */}

          <HeroContent />

          {/* Right */}

          <HeroVisual />
        </div>
      </div>
    </section>
  );
}