interface Props {
  categories: string[];
  active: string;
  onChange: (value: string) => void;
}

export default function CategoryFilter({
  categories,
  active,
  onChange,
}: Props) {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={`rounded-full border px-4 py-2 text-sm transition ${
            active === category
              ? "border-white bg-white text-black"
              : "border-zinc-800 text-zinc-400 hover:text-white"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}