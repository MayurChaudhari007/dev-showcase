import type { ReactNode } from "react";
import clsx from "clsx";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({
  children,
  className,
}: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-3xl border border-zinc-800 bg-zinc-950 p-6 transition-all duration-300 hover:border-zinc-700",
        className
      )}
    >
      {children}
    </div>
  );
}