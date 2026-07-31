interface Props {
  title: string;
  description: string;
  tech: string[];
}

export default function ProjectCardContent({
  title,
  description,
  tech,
}: Props) {
  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-3 line-clamp-2 text-sm leading-6 text-zinc-400">
        {description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {tech.slice(0, 3).map((item) => (
          <span
            key={item}
            className="rounded-full border border-zinc-800 px-3 py-1 text-xs text-zinc-300"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}