import { ChevronLeft, ChevronRight } from "lucide-react";

interface SliderControlsProps {
  onPrevious: () => void;
  onNext: () => void;
}

export default function SliderControls({
  onPrevious,
  onNext,
}: SliderControlsProps) {
  return (
    <>
      <button
        type="button"
        onClick={onPrevious}
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-zinc-700 bg-black/60 p-3 backdrop-blur transition hover:bg-zinc-900"
      >
        <ChevronLeft size={22} />
      </button>

      <button
        type="button"
        onClick={onNext}
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-zinc-700 bg-black/60 p-3 backdrop-blur transition hover:bg-zinc-900"
      >
        <ChevronRight size={22} />
      </button>
    </>
  );
}