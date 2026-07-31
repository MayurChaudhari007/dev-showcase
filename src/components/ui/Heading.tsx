import type { ReactNode } from "react";
import clsx from "clsx";

interface HeadingProps {
  title: ReactNode;
  description?: ReactNode;
  className?: string;
}

export default function Heading({
  title,
  description,
  className,
}: HeadingProps) {
  return (
    <div className={clsx("mb-12", className)}>
      <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 max-w-2xl text-zinc-400">
          {description}
        </p>
      )}
    </div>
  );
}