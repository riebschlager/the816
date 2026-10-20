Big numbered project link ("01 Atlas9 ↗"); stack inside a list, each row draws its own top border.

```jsx
{
  projects.map((p, i) => (
    <ProjectRow
      key={p.slug}
      index={i + 1}
      title={p.title}
      href={p.href}
      tone={["pink", "cyan", "lime", "orange"][i % 4]}
    />
  ));
}
```
