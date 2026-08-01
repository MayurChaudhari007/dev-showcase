
export interface Project {
  id: number;

  slug: string;

  title: string;

  shortDescription: string;

  description: string;

  category: string;

  featured: boolean;

  /**
   * All project images.
   * The first image (images[0]) is used as the thumbnail
   * and as the first slide on the project details page.
   */
  images: string[];

  technologies: string[];

  github: string;

  live: string;

  youtube?: string;

  features: string[];

  status: "Completed" | "In Progress";

  year: number;
}