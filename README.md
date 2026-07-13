# The816

The source for [the816.com](https://the816.com), Chris Riebschlager's portfolio
and blog. The site is built with [Astro](https://astro.build/) and generated as
static HTML.

## Requirements

- Node.js 22.12.0 or newer (use an even-numbered release supported by Astro)
- npm

Install the locked dependency versions:

```sh
npm ci
```

## Development

The repository's development server must run in the background. Start it through
the local Astro installation:

```sh
npm run astro -- dev --background
```

Astro serves the site at `http://localhost:4321` by default. Manage the server
with:

```sh
npm run astro -- dev status
npm run astro -- dev logs
npm run astro -- dev stop
```

Use the other project scripts to validate and preview a production build:

| Command                | Purpose                                         |
| ---------------------- | ----------------------------------------------- |
| `npm run check`        | Run Astro and TypeScript diagnostics            |
| `npm run format`       | Format supported repository files with Prettier |
| `npm run format:check` | Check formatting without changing files         |
| `npm run build`        | Generate the production site in `dist/`         |
| `npm run preview`      | Serve the most recent production build locally  |

Before submitting a change, run `npm run check`, `npm run format:check`, and
`npm run build`.

## Authoring content

Blog posts and projects are Astro content collections. Entries can be Markdown
or MDX files; their frontmatter is validated by `src/content.config.ts`.

### Blog posts

Add posts to `src/content/blog/`. The file path becomes the URL below `/blog/`.
For example, `src/content/blog/my-post.md` is published at `/blog/my-post/`.

```yaml
---
title: "Post title"
description: "A concise summary used in listings and page metadata."
pubDate: 2026-07-12
updatedDate: 2026-07-13 # optional
heroImage: "./heroes/my-post.jpg" # optional, relative to this file
---
```

`title`, `description`, and `pubDate` are required. Dates must be values that
JavaScript can parse as dates. Put hero images in
`src/content/blog/heroes/` (or elsewhere under `src/`) so Astro validates and
optimizes them during the build.

### Projects

Add projects to `src/content/projects/`. The file name becomes the URL below
`/projects/`.

```yaml
---
title: "Project title"
description: "A concise project summary."
order: 5
status: "In progress"
---
```

All four fields are required. `order` must be a positive integer and controls
the project's display order. `status` must be either `In progress` or
`Complete`.

## Assets

- Put images, fonts, and other files that Astro should validate, optimize, or
  bundle under `src/`. Blog hero images belong beside the blog collection in
  `src/content/blog/heroes/`; shared site assets belong in `src/assets/`.
- Put files that must be copied unchanged or keep a stable public URL under
  `public/`. Reference them from content with a root-relative URL such as
  `/images/blog/my-post/photo.jpg`. Favicons and the existing in-article media
  use this approach.

Prefer `src/` for new images unless the file specifically needs passthrough
behavior.

## Deployment

The site uses Astro's default static output and has no server adapter. Run
`npm run build` and publish the generated `dist/` directory from the repository
root. The canonical production origin is configured as
`https://the816.com` in `astro.config.mjs`; it is used for canonical URLs, the
sitemap, and feed metadata.

No deployment-provider configuration is stored in this repository. Configure
the hosting platform to install with `npm ci`, build with `npm run build`, and
publish `dist/`.
