# Astro codebase review

Reviewed July 12, 2026 against Astro 7.0.7 and the current official Astro documentation.

## Executive summary

The site has a sound foundation: it is statically generated, uses strict TypeScript, models its blog and project data with content collections, uses Astro's image and font tooling for imported assets, and builds successfully. Its small size also means the most valuable improvements can be made incrementally.

The highest-value next step is to introduce one site-wide layout and compose the existing blog/project layouts around it. This removes repeated document structure and gives metadata, navigation, footer, global styles, and future site-wide features one clear home. After that, tighten content schemas and image handling, extract the few repeated UI/style patterns, and add automated checks.

## What is already working well

- The repository follows Astro's conventional `src/pages`, `src/layouts`, `src/components`, `src/content`, `src/assets`, and `public` organization.
- Blog posts and projects are content collections with schemas, rather than ad hoc Markdown pages.
- Dynamic content routes use `getStaticPaths()`, `getCollection()`, and `render()` in the intended way.
- `astro.config.mjs` defines `site`, enabling canonical URLs, RSS, and sitemap generation.
- The project extends `astro/tsconfigs/strict` and declares a supported Node engine.
- Imported `src/assets` images use Astro's `<Image />`; local fonts use Astro's font API and `Font` component.
- Components are server-rendered Astro components, so the shipped site has no unnecessary client-side framework runtime.
- The July 12 production build completed successfully and generated 14 pages, RSS, sitemap, optimized local images, and font assets.

## Recommended roadmap

### 1. Add a site-wide base layout ✅

**Priority: high**

**Status: Complete — July 12, 2026**

Implemented `BaseLayout.astro` as the shared document shell and composed the blog and project layouts around it. Added a neutral `ContentLayout.astro` for the evergreen About page so it no longer uses blog-post semantics or a synthetic publication date.

Create `src/layouts/BaseLayout.astro` to own the full document shell:

- `<!doctype html>`, `<html lang="en">`, `<head>`, and `<body>`
- `BaseHead`
- `Header`
- `<main>` and a default slot
- `Footer`

Give it typed props such as `title`, `description`, `image`, and optionally `type`. Then use it in every page. `BlogPost.astro` can become a nested content layout, and a parallel `Project.astro` layout can hold project-specific presentation.

At present, the same shell is repeated in the home, blog index, projects index, project detail, and blog layout. That makes a future skip link, analytics tag, theme control, metadata field, or accessibility fix a multi-file change. Astro explicitly recommends layouts for shared page structure and supports nested layouts for this exact case.

Related opportunity: `about.astro` currently uses `BlogPost.astro` and supplies a synthetic publication date. A neutral base/content layout would let an evergreen About page avoid pretending to be a blog post.

Reference: [Astro layouts](https://docs.astro.build/en/basics/layouts/)

### 2. Strengthen content schemas and make media build-managed ✅

**Priority: high**

**Status: Complete — July 12, 2026**

Project status is now a constrained enum, project ordering is stored as a positive integer and formatted for display, and blog hero images are colocated with the content collection and validated with Astro's `image()` helper. The production build now optimizes these editorial images and fails during content sync when a referenced hero image is invalid.

Tighten `src/content.config.ts` so invalid content fails early and its types communicate intent:

- Replace `status: z.string()` with an enum such as `z.enum(['Planned', 'In progress', 'Complete'])` if those are the supported states.
- Store `number` as a numeric ordering field (for example, `order: z.number().int().positive()`) and format it with `padStart()` in the UI. This separates sorting semantics from display formatting.
- Consider shared fields such as `draft`, `featured`, `tags`, and `ogImage` only when the site needs them; do not add speculative schema.
- If hero images are moved beside content under `src/`, define the schema with the collection `image()` helper. This produces `ImageMetadata`, catches broken references during content sync, and lets Astro optimize the images.

Blog hero images currently live in `public/images` and are passed as string paths. This works, but `public` assets are copied without processing. Moving important editorial images into `src/assets` or colocating them with collection entries would give the build pipeline optimization and stronger validation. Keep truly passthrough files—favicons, downloadable files, and assets that must preserve their names—in `public`.

References: [Content collections](https://docs.astro.build/en/guides/content-collections/), [Images in Astro](https://docs.astro.build/en/guides/images/), [Project structure and `public`](https://docs.astro.build/en/basics/project-structure/)

### 3. Make metadata consistent and page-specific

**Priority: high**

Keep `BaseHead.astro` as the metadata component, but clarify and extend its contract:

- Use consistent titles such as `Page | The816`; the blog index currently uses the same title and description as the home page.
- Add the missing Twitter title, description, and image tags, and consider `og:site_name`.
- Allow `og:type="article"` for blog posts and emit publication/modified dates there.
- Build the Open Graph image URL from the canonical site origin, not the request URL, and ensure all image inputs are either absolute URLs or typed local image metadata.
- Decide whether the placeholder image is intentionally the default social preview for every non-post page. A dedicated site-wide OG image will be easier to reason about.

Also centralize navigation and social profile data in a small typed data module. Header and footer currently duplicate social URLs, labels, and large inline SVG paths; that invites drift (for example, the GitHub links omit `rel="noreferrer"` while the other new-tab links include it).

### 4. Extract repeated presentation patterns, but keep page-specific CSS local

**Priority: medium**

Astro's scoped component styles are already a good fit here. Preserve that approach and extract only patterns with demonstrated reuse:

- Create a reusable `SocialLinks.astro` used by both header and footer; place individual icons in small components or a typed icon map.
- Create one responsive media/embed component or shared prose stylesheet. The `.video-embed` rules are duplicated in `BlogPost.astro` and the project detail page.
- Create a `Prose.astro` wrapper or a shared `prose.css` for Markdown typography rather than relying on global `.prose` selectors plus layout-local selectors.
- Consider a small `PageIntro.astro` only if the eyebrow/title/description pattern appears on additional pages.

Avoid turning every small element into a component. The home portrait and project-list styles are specific, readable, and appropriately colocated today.

Reference: [Astro components](https://docs.astro.build/en/basics/astro-components/)

### 5. Keep global CSS foundational

**Priority: medium**

Limit `src/styles/global.css` to design tokens, reset/base element rules, accessibility utilities, and genuinely global prose defaults.

The current `.text-*` and `.mt-*` utilities are used sparsely and make editorial markup carry presentation details (`about.astro` is the main example). Prefer semantic classes within a page/content component, or establish a deliberate utility system if utility classes are meant to be a project-wide convention. Remove unused utilities after confirming they are not referenced by generated Markdown.

Other small CSS maintenance wins:

- Add a reduced-motion rule for transitions.
- Update `.sr-only` to a concise modern visually-hidden pattern unless legacy browser support is an explicit requirement.
- Introduce tokens for repeated radii, spacing, and transition durations only as repetition grows; the current color tokens are already useful.
- Run a formatter to eliminate mixed tabs/spaces, quote styles, and minor whitespace inconsistencies.

### 6. Add type checking, formatting, and CI

**Priority: high**

The production build is healthy, but `astro build` is not a complete substitute for Astro diagnostics. Add `@astrojs/check` and `typescript`, then scripts along these lines:

```json
{
  "scripts": {
    "check": "astro check",
    "format": "prettier --write .",
    "format:check": "prettier --check ."
  }
}
```

Use Prettier with `prettier-plugin-astro`, and run `npm run check`, `npm run format:check`, and `npm run build` in CI. This gives `.astro` templates the same early feedback that strict TypeScript provides to `.ts` files.

Reference: [Astro CLI: `astro check`](https://docs.astro.build/en/reference/cli-reference/#astro-check)

### 7. Document the development contract

**Priority: medium**

Expand the one-line `README.md` with:

- the supported Node version and `npm install` setup
- `npm run dev`, build, preview, check, and formatting commands
- the content authoring workflow and required frontmatter for each collection
- where processed (`src/assets`) versus passthrough (`public`) assets belong
- deployment assumptions and the canonical production URL
- the repository-specific background dev-server commands from `AGENTS.md`

This documentation is especially valuable before more contributors or automation begin adding content and pages.

### 8. Remove dependencies that do not represent current intent

**Priority: low**

All current collection entries are `.md`, but the MDX integration is installed and each loader accepts `.mdx`. Keep it if interactive/custom-component content is planned; otherwise remove `@astrojs/mdx`, the integration, and the `.mdx` glob until it is needed. Fewer capabilities mean fewer upgrade and security surfaces.

Review whether `sharp` needs to be a direct dependency for the deployment target or can remain Astro-managed. Do not remove it without testing the production image pipeline in the real deployment environment.

### 9. Apply small correctness and accessibility cleanups during the refactor

**Priority: medium**

- Add a skip link in the base layout and a stable target on `<main>`.
- Add explicit `width`/`height` or reliable aspect ratios to editorial images whenever possible to avoid layout shift.
- Use descriptive hero-image alt text when an image conveys content; keep `alt=""` only for intentionally decorative images. A `heroImageAlt` schema field makes this an editorial decision rather than a template default.
- Add `aria-current="page"` to the active navigation link, in addition to its visual class.
- Ensure every `target="_blank"` link uses the same `rel` policy; `rel="noopener noreferrer"` is explicit and consistent.
- Use valid heading hierarchy in the About page. Jumping from its page title to `h3` and then repeated `h5` headings makes the outline harder to navigate; use `h2` for the section and `h3` for roles.
- Sort RSS items newest-first, matching the blog index, and consider including full post content only if that is the desired feed experience.

## Suggested implementation sequence

1. Add `BaseLayout.astro`, migrate each page, and separate the About page from blog-post semantics.
2. Improve `BaseHead` and centralize navigation/social data.
3. Tighten content schemas and decide on the editorial image location strategy.
4. Extract shared social, prose, and embed presentation.
5. Add `astro check`, formatting, and CI.
6. Expand the README and remove confirmed-unused dependencies/utilities.
7. Apply the accessibility and metadata polish, then verify representative pages and the generated RSS/sitemap.

Each step can be a small, independently reviewable change. The site does not need a framework layer, state-management library, or generalized design system at its current scale.

## Verification baseline

At the time of review:

- `npm run build` passes.
- Astro generates 14 static pages plus RSS and sitemap output.
- No application changes were made as part of this review; this document is the only intentional source change.
