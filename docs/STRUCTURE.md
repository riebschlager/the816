# the816.com Structure

## Technical Stack
- **Framework**: Astro (static site generation with component islands)
- **Styling**: Tailwind CSS
- **Interactive Elements**: Three.js for WebGL/canvas work
- **Content Format**: Markdown with frontmatter
- **Deployment**: Static site, git-based workflow (push to deploy)
- **Hosting**: TBD (Netlify, Vercel, or similar)

## Site Architecture

### Primary Navigation
1. **Home** - Experimental canvas entry point (geometric grid with Perlin noise)
2. **Work** - Curated project showcases (max 10 projects)
3. **Writing** - Blog/thinking posts
4. **About** - Bio, contact, how to reach

### Secondary/Footer Navigation
- **Resources** - Teaching materials and course repositories
- **Resume/CV** - PDF download option

## Content Structure

### Projects
Each project as Markdown file with frontmatter:
```markdown
---
title: "Project Name"
client: "Client Name"
year: 2024
role: "Technical Lead"
tags: ["led", "touchdesigner", "real-time"]
featured_image: "/images/project-hero.jpg"
---

Project content follows...
```

**Project Page Structure:**
- Header: Title, client, year, role
- Hero Visual: Primary documentation (photo/video)
- The Challenge: Problem statement, experience goal
- The Approach: Conceptual framework, interaction model, key decisions
- Technical Highlights: 2-3 specific interesting problems/solutions
- Outcome/Impact: How it worked in the world

### Blog Posts
Standard Markdown with frontmatter:
```markdown
---
title: "Post Title"
date: 2024-01-15
tags: ["touchdesigner", "tutorial"]
excerpt: "Brief description for listings"
---

Post content...
```

### Initial Content Inventory
**Projects to include:**
- Atlas9
- THUNDERGONG (2019-2024 recurring concert visuals)
- Terra Luna (Overland Park Arboretum projection)
- LEGO Ferrari
- The Situation Room (Reagan Presidential Library)
- [5 more TBD]

**Initial blog posts to port from Medium:**
- Interactive Audio in TouchDesigner
- Super-Gooey Plastic in TouchDesigner
- [1-2 more TBD]

## File Organization
```
/
├── src/
│   ├── pages/
│   │   ├── index.astro (homepage)
│   │   ├── work/
│   │   │   ├── index.astro (project grid)
│   │   │   └── [slug].astro (project detail template)
│   │   ├── writing/
│   │   │   ├── index.astro (blog list)
│   │   │   └── [slug].astro (post template)
│   │   ├── about.astro
│   │   └── resources.astro
│   ├── components/
│   │   ├── Navigation.astro
│   │   ├── Footer.astro
│   │   ├── HomeCanvas.jsx (Three.js interactive)
│   │   └── [other components]
│   ├── content/
│   │   ├── projects/
│   │   │   └── *.md
│   │   └── posts/
│   │       └── *.md
│   └── styles/
│       └── global.css
├── public/
│   ├── images/
│   └── resume.pdf
└── astro.config.mjs
```

## Responsive Approach
- Mobile-first design
- Interactive canvas adapts gracefully (simpler on mobile if needed)
- Project images and videos optimized for performance
- Touch-friendly interactions

## Performance Targets
- Lighthouse score >90
- First Contentful Paint <1.5s
- Static generation means fast load times
- Lazy-load images and heavy interactive elements
