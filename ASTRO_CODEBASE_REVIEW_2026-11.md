# Astro codebase review — November 2026

Reviewed November 27, 2026 against the installed Astro 7.0.7 and the current
release, Astro 7.4.13. This replaces the July 12, 2026 review, which has been
retired.

## Status of the July review

Eight of the nine July recommendations are complete and verified in the current
code: the base layout, stricter schemas with build-managed hero images,
consistent metadata, shared presentation components, foundational global CSS,
type checking with formatting and CI, README documentation, and the
accessibility cleanups.

One item was never done: **removing unused dependencies** (July item 8). It is
carried forward below as item 3.

## What changed since July

**In this codebase.** The site went from 14 to 20 pages. New work includes
project timelines and post series, the Rock Facts page, `llms.txt` and Markdown
page output, JSON-LD structured data, per-entry social image overrides, a draft
flag, pre-commit and pre-push hooks, and newer CI actions. `npm run verify`
(format check, `astro check`, build) passes with 0 errors, 0 warnings, and
2 hints.

**In Astro.** There have been four minor releases, 7.1 through 7.4. The ones
that matter for this site:

- **7.4 raises the minimum Node.js version to 22.22.0.** The project still
  declares `>=22.12.0`.
- **7.4 fixes the `glob()` loader silently swallowing rendering errors.** On
  7.0.7, `astro build` can exit successfully even when a remark or rehype step
  fails during content sync.
- **7.2 adds `astro preview --background`**, which pairs with the background
  dev-server workflow this repository already requires.
- `@astrojs/mdx` 8.0 is a major release that moves MDX processing onto the
  Markdown processors.

## Recommended roadmap

### 1. Upgrade Astro to 7.4 and raise the Node floor ✅

**Priority: high**

**Status: Complete — November 27, 2026**

`npm update` moved Astro to 7.4.13, `@astrojs/sitemap` to 3.7.6, `sharp` to
0.35.5, and `@astrojs/mdx` to 7.0.8 (still within 7.x). `@astrojs/check` is
pinned exactly, so its pin was moved from 0.9.9 to 0.9.12 by hand.
`engines.node` and the README now require Node 22.22.0 or newer, and CI stays
on `node-version: 22`. `npm run verify` passes, and `astro check` now reports
1 hint instead of 2 (see item 4). The new build has the same 20 pages, and the
RSS feed, sitemaps, `llms.txt`, and all Markdown page output are byte-identical
to the 7.0.7 build. The HTML differences are cosmetic: whitespace kept inside
`Button` links, empty `srcset=""` attributes dropped, `>` escaped as `&gt;` in
highlighted code, and inch marks after numbers (`22"`) now rendered as closing
rather than opening curly quotes. The build also no longer emits unreferenced
copies of original hero images.

Astro 7.4.13 is within the existing `^7.0.7` range, so `npm update` installs it
along with the patch releases of `@astrojs/sitemap`, `sharp`, and
`@astrojs/check`. Without the upgrade, the site misses the `glob()`
error-reporting fix, a performance improvement for builds that pull pages from
many modules, and about four months of patches.

In the same change:

- Set `engines.node` in `package.json` to `>=22.22.0` and update the Node
  requirement in the README.
- Keep CI on `node-version: 22`; `setup-node` resolves that to the latest 22.x,
  which meets the new minimum. Check local Node with `node --version`.
- Run `npm run verify` and compare a few representative pages, the RSS feed, the
  sitemap, and `llms.txt` against the current output.

Reference: [astro@7.4.0 release notes](https://github.com/withastro/astro/releases/tag/astro%407.4.0)

### 2. Make in-body editorial images build-managed

**Priority: high**

The July review moved hero images into the content pipeline, but images inside
post and project bodies still live in `public/images/blog` and
`public/images/project`. Markdown references them 71 times. That is 70 JPEG and
PNG files totaling about 30 MB, and some PNGs are close to 3 MB each. Files in
`public` are copied without processing, so readers download full-size originals
with no WebP or AVIF conversion, no responsive sizes, no width or height
attributes, and no build-time check for broken references.

Colocate each entry's images with its Markdown file (for example
`src/content/blog/slapchop/` holding `index.md` plus its images) and reference
them with relative paths such as `![Alt text](./loops-ui.png)`. Astro optimizes
relative Markdown images in content collections automatically, and the build
fails if a referenced file is missing.

Keep the 15 MP4 files (about 26 MB) in `public`; Astro does not process video.
Migrate one post at a time, starting with the posts that have the largest PNGs
(`collage-o-tron-5000`, `slapchop`).

Reference: [Images in Markdown files](https://docs.astro.build/en/guides/images/#images-in-markdown-files)

### 3. Remove the unused MDX integration (carried over from July)

**Priority: medium**

There are still no `.mdx` files in `src/content`, but `@astrojs/mdx` is
installed, registered in `astro.config.mjs`, and accepted by both collection
loaders' `**/*.{md,mdx}` patterns. Version 8 is now a major release behind,
which turns this unused dependency into upgrade work with no payoff.

Remove `@astrojs/mdx`, drop `mdx()` from the integrations, and change both glob
patterns to `**/*.md`. If interactive components are needed in content later,
reinstall the current major version at that point.

The July note on `sharp` still applies: keep it as a direct dependency unless
you have tested image builds in the real deployment environment without it.

### 4. Clear the two `astro check` hints

**Priority: low**

After the item 1 upgrade, `astro check` no longer reports the `BaseHead.astro`
hint; only the `rockfacts.astro` hint remains. Adding `is:inline` is still
reasonable for clarity.

- `src/components/BaseHead.astro:134`: the JSON-LD `<script>` is already treated
  as inline because it has a `type` attribute. Add `is:inline` to make that
  explicit and silence the hint.
- `src/pages/rockfacts.astro:19`: `firstMonth` (and the `first` value it is
  derived from) is computed but never used, apparently left over when the stats
  section was removed. Delete it.

A clean `astro check` makes new warnings easy to spot in CI.

### 5. Handle the remaining major-version updates on purpose

**Priority: low**

These are outside the current version ranges. Update each one in its own change
rather than together:

- **`prettier-plugin-astro` 0.14 → 1.x** (and `prettier` 3.9 → 3.10): this will
  probably reformat many `.astro` files. Do it in a dedicated formatting-only
  commit so later diffs stay readable.
- **TypeScript 6 → 7**: wait until `@astrojs/check` and the Astro language tools
  officially support it. Until then, `astro check` results may be unreliable.

### 6. Document `astro preview --background`

**Priority: low**

The README and `AGENTS.md` require the dev server to run in the background.
After the item 1 upgrade, `astro preview --background` lets the same
non-blocking workflow apply to checking production builds. Add it next to the
dev-server commands.

## Astro features considered and not recommended

- **`experimental.incrementalBuild` and parallel prerendering:** the full build
  takes about a second, so the experimental risk is not worth it.
- **`session: false`:** the site is fully static with no adapter, so sessions
  are not in use.
- **`glob()` `deferRender`, CSP directive `kind`, and `paginate` `format()`:**
  these solve problems this site does not have.
- **`astro build --timings`:** worth trying only if build time becomes a
  problem.

## Verification baseline

At the time of review, on Astro 7.0.7:

- `npm run verify` passes: formatting clean, `astro check` reports 0 errors,
  0 warnings, and 2 hints, and the build succeeds.
- Astro generates 20 static pages plus RSS, sitemap, and `llms.txt` output.
- No application changes were made as part of this review.
