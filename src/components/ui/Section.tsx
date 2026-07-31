import type { ReactNode } from "react";
import clsx from "clsx";
import Container from "./Container";

interface SectionProps {
  children: ReactNode;
  className?: string;
}

export default function Section({
  children,
  className,
}: SectionProps) {
  return (
    <section className={clsx("py-20", className)}>
      <Container>{children}</Container>
    </section>
  );
}