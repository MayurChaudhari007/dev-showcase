// import { ArrowUpRight } from "lucide-react";

// interface Props {
//   github: string;
//   live: string;
// }

// export default function ProjectCardActions({ github, live }: Props) {
//   return (
//     <div className="mt-6 flex items-center justify-between">
//       <a
//         href={live} 
//         target="_blank"
//         rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}
//         className="text-sm font-medium hover:text-white text-zinc-400"
//       >
//         Live Demo
//       </a>

//       <a
//         href={github}
//         target="_blank" onClick={(e) => e.stopPropagation()}
//         rel="noopener noreferrer"
//         className="flex items-center gap-1 text-sm font-medium hover:text-white text-zinc-400"
//       >
//         GitHub
//         <ArrowUpRight size={16} />
//       </a>
//     </div>
//   );
// }


import { ArrowUpRight } from "lucide-react";

interface Props {
  github: string;
  live?: string;
}

export default function ProjectCardActions({ github, live }: Props) {
  return (
    <div className="mt-6 flex items-center justify-between">
      {live && (
        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="text-sm font-medium text-zinc-400 hover:text-white"
        >
          Live Demo
        </a>
      )}

      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        className={`flex items-center gap-1 text-sm font-medium text-zinc-400 hover:text-white ${
          !live ? "ml-auto" : ""
        }`}
      >
        GitHub
        <ArrowUpRight size={16} />
      </a>
    </div>
  );
}