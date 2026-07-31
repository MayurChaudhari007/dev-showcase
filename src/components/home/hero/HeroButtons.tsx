import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroButtons() {
  return (
    <div className="mt-10 flex flex-col gap-4 sm:flex-row">
      <Link
        to="/projects"
        className="
          group
          inline-flex
          items-center
          justify-center
          gap-2
          rounded-2xl
          bg-white
          px-7
          py-4
          font-semibold
          text-black
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-[0_15px_40px_rgba(255,255,255,0.18)]
        "
      >
        View Projects

        <ArrowRight
          size={18}
          className="transition-transform group-hover:translate-x-1"
        />
      </Link>

      <a
        href="https://github.com/MayurChaudhari007"
        target="_blank"
        rel="noopener noreferrer"
        className="
          group
          inline-flex
          items-center
          justify-center
          gap-2
          rounded-2xl
          border
          border-zinc-800
          bg-zinc-900/60
          px-7
          py-4
          backdrop-blur
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-zinc-600
          hover:bg-zinc-800
        "
      >
        GitHub

        <ExternalLink
          size={18}
          className="
            transition-transform
            group-hover:translate-x-1
            group-hover:-translate-y-1
          "
        />
      </a>
    </div>
  );
}