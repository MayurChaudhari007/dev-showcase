// interface FloatingTechCardProps {
//   title: string;
//   className?: string;
// }

// export default function FloatingTechCard({
//   title,
//   className = "",
// }: FloatingTechCardProps) {
//   return (
//     <div
//       className={`
//         absolute
//         rounded-2xl
//         border
//         border-zinc-800
//         bg-zinc-900/70
//         px-5
//         py-3
//         backdrop-blur-xl
//         shadow-xl
//         transition-all
//         duration-500
//         hover:-translate-y-2
//         hover:border-zinc-600
//         hover:bg-zinc-800
//         ${className}
//       `}
//     >
//       <span className="font-medium text-zinc-200">
//         {title}
//       </span>
//     </div>
//   );
// }

interface FloatingTechCardProps {
  title: string;
  className?: string;
  animation?: "fast" | "normal" | "slow";
}

export default function FloatingTechCard({
  title,
  className = "",
  animation = "normal",
}: FloatingTechCardProps) {
  const animationClass =
    animation === "fast"
      ? "animate-float-fast"
      : animation === "slow"
      ? "animate-float-slow"
      : "animate-float";

  return (
    <div
      className={`
        absolute
        ${animationClass}
        rounded-2xl
        border
        border-zinc-800
        bg-zinc-900/70
        px-5
        py-3
        backdrop-blur-xl
        shadow-xl
        transition-all
        duration-300
        hover:scale-105
        hover:border-zinc-600
        hover:bg-zinc-800
        ${className}
      `}
    >
      <span className="font-medium text-zinc-200">
        {title}
      </span>
    </div>
  );
}