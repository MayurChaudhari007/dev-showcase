// const projectImages = import.meta.glob(
//   "/src/assets/projects/**/*.{png,jpg,jpeg,webp,avif}",
//   {
//     eager: true,
//     import: "default",
//   }
// ) as Record<string, string>;

// interface ProjectAssets {
//   cover: string;
//   screenshots: string[];
// }

// export function getProjectAssets(slug: string): ProjectAssets {
//   const folder = `/src/assets/projects/${slug}/`;

//   const files = Object.entries(projectImages)
//     .filter(([path]) => path.startsWith(folder))
//     .sort(([a], [b]) => a.localeCompare(b));

//   let cover = "";

//   const screenshots: string[] = [];

//   files.forEach(([path, image]) => {
//     const fileName = path.split("/").pop()?.toLowerCase() ?? "";

//     if (fileName.startsWith("cover.")) {
//       cover = image;
//     } else {
//       screenshots.push(image);
//     }
//   });

//   return {
//     cover,
//     screenshots,
//   };
// }


// src/utils/projectAssets.ts

const projectImages = import.meta.glob(
  "/src/assets/projects/**/*.{png,jpg,jpeg,webp,avif}",
  {
    eager: true,
    import: "default",
  }
) as Record<string, string>;

interface ProjectAssets {
  images: string[];
}

export function getProjectAssets(slug: string): ProjectAssets {
  const folder = `/src/assets/projects/${slug}/`;

  const images = Object.entries(projectImages)
    .filter(([path]) => path.startsWith(folder))
    .sort(([a], [b]) => {
      const fileA = a.split("/").pop() ?? "";
      const fileB = b.split("/").pop() ?? "";

      return fileA.localeCompare(fileB, undefined, {
        numeric: true,
        sensitivity: "base",
      });
    })
    .map(([, image]) => image);

  return {
    images,
  };
}