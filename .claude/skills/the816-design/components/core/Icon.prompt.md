Renders a Lucide icon (from the lucide-static CDN) as a color-able mask; use for every UI glyph and social icon.

```jsx
<Icon name="arrow-up-right" size={18} color="var(--neon-pink)" />
<Icon name="github" label="GitHub" />
```

- `name` is any Lucide icon name. Brand icons used on the site: `linkedin`, `instagram`, `youtube`, `github`, `mail`.
- Inherits `currentColor`, so it picks up hover colors from its parent.
