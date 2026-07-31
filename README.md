# 🚀 Dev Showcase

A premium developer portfolio and project showcase built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS v4**.

Designed with a modern UI, responsive layout, reusable components, and an architecture that's easy to extend.

---

## ✨ Features

- Modern responsive UI
- Premium landing page
- Dynamic project system
- Automatic project image loading
- Project detail pages
- Image slider
- Technology badges
- Mobile responsive navigation
- Modular component architecture
- Built with TypeScript
- Easy to add new projects

---

## 🛠️ Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS v4
- React Router
- Lucide React

---

## 📂 Project Structure

```
src/
│
├── assets/
│   └── projects/
│
├── components/
│   ├── home/
│   ├── layout/
│   ├── project/
│   └── ui/
│
├── data/
│   └── projects.ts
│
├── pages/
│
├── types/
│
└── utils/
```

---

# 🚀 Getting Started

## Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/dev-showcase.git
```

Go inside the project.

```bash
cd dev-showcase
```

Install dependencies.

```bash
npm install
```

Start the development server.

```bash
npm run dev
```

Open your browser.

```
http://localhost:5173
```

---

# 📦 Build

```bash
npm run build
```

Preview production build.

```bash
npm run preview
```

---

# ➕ Adding a New Project

This project is designed so you don't need to manually import images.

## Step 1

Create a folder inside:

```
src/assets/projects/
```

Example:

```
src/assets/projects/my-awesome-project/
```

---

## Step 2

Add project screenshots.

Example:

```
1.png
2.png
3.png
```

Images are automatically loaded.

---

## Step 3

Open

```
src/data/projects.ts
```

Add a new object.

Example:

```ts
{
  id: 5,

  slug: "my-awesome-project",

  title: "My Awesome Project",

  shortDescription:
    "Short description",

  description:
    "Long project description",

  category: "Portfolio",

  featured: true,

  technologies: [
    "React",
    "TypeScript",
    "Tailwind CSS"
  ],

  github:
    "https://github.com/...",

  live:
    "https://...",

  youtube:
    "https://...",

  status: "Completed",

  year: 2026,

  features: [
    "Responsive Design",
    "Dark Mode",
    "SEO Optimized"
  ]
}
```

---

## Important

The project folder name **must match** the project slug.

Correct:

```
slug: "spiderman-portfolio"

↓

src/assets/projects/spiderman-portfolio/
```

Incorrect:

```
slug: "spiderman-portfolio"

↓

src/assets/projects/demo/
```

Otherwise images won't load.

---

# 📸 Image Loading

Project images are loaded automatically using Vite's `import.meta.glob()`.

No manual imports are required.

Simply add images to the correct folder.

---

# 🎨 Customization

You can easily customize:

- Hero Section
- Navbar
- About Page
- Project Cards
- Technologies
- Colors
- Typography

---

# 📄 License

This project is licensed under the MIT License.

Feel free to use it for learning and personal portfolio projects.

---

# ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.

Happy Coding! 🚀