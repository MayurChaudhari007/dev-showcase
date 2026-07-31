import type { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-medium transition-all duration-200",
        variant === "primary"
          ? "bg-white text-black hover:opacity-90"
          : "border border-zinc-700 bg-zinc-900 text-white hover:bg-zinc-800",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}