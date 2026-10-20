Pill button for calls to action ("Watch the video", "Email me"); use primary once per view, secondary/ghost elsewhere.

```jsx
<Button iconRight="arrow-up-right" href="/projects">See the projects</Button>
<Button variant="secondary" tone="cyan" icon="youtube">Watch on YouTube</Button>
<Button variant="ghost" icon="arrow-left">All projects</Button>
```

- `tone` picks the neon (pink default). Glow appears only on hover.
- `href` renders a link. Press state scales to 0.97.
