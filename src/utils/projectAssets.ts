
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