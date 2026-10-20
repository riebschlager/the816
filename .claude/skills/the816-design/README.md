# The816 Design System

Design system for **the816.com**, the portfolio and blog of Chris Riebschlager (Director of Creative Technology at Dimensional Innovations, Kansas City). The site covers interactive installations, live show visuals, TouchDesigner tutorials, and a short career history.

Direction: **dark, clean, casual, with bright neon-inspired accents.** Near-black ink surfaces, plain readable type, and four neon colors used sparingly for links, labels, and hover states.

## Sources

- Live site: https://the816.com
- Repo: https://github.com/riebschlager/the816 (Astro 7, static). Key files: `src/styles/global.css` (original palette: `#121212` bg, `#ff0099` pink, `#00ff85` green, `#1e90ff` blue, Atkinson Hyperlegible), `src/components/*.astro`, `src/layouts/*.astro`, `src/pages/*.astro`, `src/consts.ts` (nav, social icon paths).
- User-uploaded photos in `uploads/` (Thundergong show photography), copied to `assets/images/`.

The system extends the site: the original pink is kept, green → lime, blue → cyan, orange is added, and Bricolage Grotesque is added for display type. The original variable names (`--background`, `--accent`, `--accent-dark`, `--accent-blue`, `--surface`, `--text`, `--border`) are kept as aliases so the site's CSS ports over directly.

## Index

- `styles.css`: entry point (imports only)
- `tokens/`: `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `base.css` (element defaults)
- `guidelines/`: foundation specimen cards (Colors, Type, Spacing, Brand)
- `components/core/`: Button, Tag, Input, Icon
- `components/content/`: ProjectRow, PostCard, ExperienceItem
- `components/navigation/`: SiteHeader, SiteFooter, SocialLinks
- `ui_kits/site/`: click-through recreation of the816.com (Home, Projects, Project, Blog, Post, About)
- `assets/`: fonts, `favicon.svg`, photography
- `SKILL.md`: agent-skill entry point

**Intentional additions** (not on the live site): Button, Input, Tag tones, and Icon (Lucide), so new pages such as contact forms and CTAs have parts to build from.

## Content fundamentals

- **Voice:** first person, warm, plain-spoken, a bit self-deprecating. "I learned to code before LLMs were a thing. Even before Stack Overflow was a thing. Yes, I am old."
- **Person:** "I" for Chris, "my team" / "we" for group work, and "you" in tutorials ("Rotate the environment map until he's looking supa hot.").
- **Casing:** Title Case for post titles ("Make Milhouse Gorgeous in TouchDesigner"). Sentence case for UI copy ("A few things taking shape. More to come."). Mono eyebrows are UPPERCASE ("SELECTED WORK", "PROJECT 01").
- **Punctuation:** contractions, parenthetical asides, the occasional exclamation ("Thundergong 2024!"). Italic one-line captions under media.
- **Emphasis:** one bold sentence per section for the line to remember ("I learned from generous mentors. I try to be one.").
- **Credits:** names collaborators and links to them (Micah Smith, Loud Productions, intern Jake).
- **No emoji.** Arrows (↗ ←) are the only symbols used in UI copy.
- **Numbers:** project order is zero-padded ("01"). Dates read "Nov 17, 2024".

## Visual foundations

- **Color:** violet-tinted ink neutrals (`--ink-1000 #0a0a0f` up to `--ink-50 #f5f4f9`). Neons: pink `#ff0099` (links, primary actions, eyebrows), cyan `#29f0ff` (focus, info), lime `#c8ff2e` (hover, success, code), orange `#ff8a2b` (warning, rare tag tone). Use one or two neons per view, never all four as decoration. `-hi` variants are for small text, and `--tint-*` washes (12–14%) are for tag and hover fills.
- **Type:** Bricolage Grotesque 800 for display and headings, with tight tracking (−0.035em) and 0.95 leading on big sizes. Atkinson Hyperlegible for body (18px / 1.7), carried over from the live site. Atkinson Hyperlegible Mono for eyebrows, dates, numbers, and code.
- **Backgrounds:** flat ink plus `--bg-atmosphere`, a faint cyan haze top-left and pink haze top-right. No full-bleed gradients, patterns, or textures. The photography supplies the color.
- **Imagery:** real photos of stages, projection, LED walls, and workshops. Saturated stage light in dark rooms, warm-to-magenta. No stock photos and no illustration.
- **Layout:** prose column 720px inside a 1120px container. Gutters clamp 20–40px. Header 64px, translucent (`--header-bg`) with a 14px backdrop blur, the only use of blur. Lists are separated by 1px rules, not boxed.
- **Corners:** 4 / 6 / 10 / 16px; pills (999) for buttons and tags. Media uses 10–16px.
- **Cards:** mostly unboxed (image + title + date). When boxed: `--surface-card`, 1px `--border-default`, radius 10–16. Never a colored left-border accent.
- **Shadows:** plain black depth only (`--shadow-sm` header, `--shadow-lg` media). Color comes from **glows** (`--glow-*`, `--text-glow-*`), which appear on hover and focus only, never at rest.
- **Hover:** links go pink → lime. Project rows light up their number and title in a neon with a text glow. Images zoom about 3% over `--dur-slow`. Buttons gain a glow.
- **Press:** a slight scale (0.97). No color inversion.
- **Focus:** 2px cyan outline, 3px offset.
- **Motion:** quick and functional: 120ms color, 200ms glow, 420ms image zoom; `--ease-out`, plus `--ease-snap` for arrow nudges. No bounces or page transitions. Respect `prefers-reduced-motion`.
- **Transparency:** limited to the header and tint washes.

## Iconography

- The live site uses five filled 16px-grid social glyphs (LinkedIn, Instagram, YouTube, GitHub, Email), inlined from `src/consts.ts` and rendered at 32px. `SocialLinks` reproduces them exactly.
- UI icons (arrows, external, play) use **Lucide** from CDN (`lucide-static@0.469.0`) through `<Icon name="…">`, a CSS mask that takes `currentColor`. The site has no icon set of its own, so Lucide is a stand-in (1.5–2px stroke, rounded joins).
- The unicode arrows ↗ and ← appear in copy and list rows. No emoji, no icon fonts.
- **Logo:** none exists. The wordmark is "The816" set in Bricolage 800 (−0.04em). `assets/favicon.svg` (pink "816" on a dark tile) is the only mark.

## Caveats

- The `Atkinson Hyperlegible Mono` and `Bricolage Grotesque` fonts load from Google Fonts. The Atkinson Hyperlegible body woffs are local copies from the repo.
