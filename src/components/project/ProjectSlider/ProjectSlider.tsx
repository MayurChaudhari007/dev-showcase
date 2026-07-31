import { useEffect, useState } from "react";

import SliderControls from "./SliderControls";
import SliderDots from "./SliderDots";

interface ProjectSliderProps {
  images: string[];
  title: string;
}

export default function ProjectSlider({
  images,
  title,
}: ProjectSliderProps) {
  const [current, setCurrent] = useState(0);

  const previous = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") previous();

      if (event.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () =>
      window.removeEventListener("keydown", handleKeyDown);
  }, [images.length]);

  if (!images.length) return null;

  return (
    <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950">
      <img
        src={images[current]}
        alt={`${title} ${current + 1}`}
        className="aspect-video w-full object-cover"
      />

      {images.length > 1 && (
        <>
          <SliderControls
            onPrevious={previous}
            onNext={next}
          />

          <SliderDots
            total={images.length}
            current={current}
            onSelect={setCurrent}
          />

          <div className="absolute right-5 top-5 rounded-full bg-black/60 px-3 py-1 text-sm backdrop-blur">
            {current + 1} / {images.length}
          </div>
        </>
      )}
    </div>
  );
}