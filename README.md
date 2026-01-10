# the816.com

Portfolio site for Chris Riebschlager - Interactive experiences, real-time graphics, and creative technology.

## Tech Stack

- **Astro** - Static site generation with component islands
- **Tailwind CSS** - Utility-first styling
- **Three.js** - WebGL/canvas interactive elements (to be implemented)
- **TypeScript** - Type-safe development

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
/
├── src/
│   ├── pages/           # Route pages
│   │   ├── index.astro              # Homepage
│   │   ├── work/
│   │   │   ├── index.astro          # Project grid
│   │   │   └── [slug].astro         # Project detail
│   │   ├── writing/
│   │   │   ├── index.astro          # Blog list
│   │   │   └── [slug].astro         # Blog post
│   │   ├── about.astro
│   │   └── resources.astro
│   ├── components/      # Reusable components
│   │   ├── Navigation.astro
│   │   ├── Footer.astro
│   │   └── HomeCanvas.jsx           # Three.js interactive (to be implemented)
│   ├── layouts/         # Page layouts
│   │   └── Layout.astro
│   ├── content/         # Markdown content
│   │   ├── projects/                # Project case studies
│   │   └── posts/                   # Blog posts
│   └── styles/
│       └── global.css               # Global styles + Tailwind
├── public/
│   ├── images/                      # Project images
│   └── resume.pdf                   # Resume/CV
└── astro.config.mjs
```

## Adding Content

### Projects

Create a new markdown file in `src/content/projects/` with frontmatter:

```markdown
---
title: "Project Name"
client: "Client Name"
year: 2024
role: "Technical Lead"
tags: ["led", "touchdesigner", "real-time"]
featured_image: "/images/project-hero.jpg"
---

## The Challenge
...

## The Approach
...

## Technical Highlights
...

## Outcome/Impact
...
```

### Blog Posts

Create a new markdown file in `src/content/posts/` with frontmatter:

```markdown
---
title: "Post Title"
date: 2024-01-15
tags: ["touchdesigner", "tutorial"]
excerpt: "Brief description for listings"
---

Post content...
```

## Development

Visit `http://localhost:4321` to see the site during development. Changes will hot-reload automatically.

## Next Steps

- [ ] Implement HomeCanvas.jsx with Three.js geometric grid and Perlin noise
- [ ] Add real project content and images
- [ ] Port blog posts from Medium
- [ ] Add actual resume PDF
- [ ] Configure deployment (Netlify/Vercel)
- [ ] Optimize images and performance
- [ ] Add @astrojs/react integration for Three.js components
