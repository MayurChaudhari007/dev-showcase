interface SliderDotsProps {
  total: number;
  current: number;
  onSelect: (index: number) => void;
}

export default function SliderDots({
  total,
  current,
  onSelect,
}: SliderDotsProps) {
  return (
    <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-2">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          type="button"
          onClick={() => onSelect(index)}
          className={`h-2.5 w-2.5 rounded-full transition-all ${
            current === index
              ? "w-8 bg-white"
              : "bg-white/40 hover:bg-white/70"
          }`}
        />
      ))}
    </div>
  );
}