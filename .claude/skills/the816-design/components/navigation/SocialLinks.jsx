import React from "react";
import { Icon } from "../core/Icon.jsx";

export const DEFAULT_SOCIALS = [
  { icon: "linkedin", label: "Connect with Chris Riebschlager on LinkedIn", href: "https://www.linkedin.com/in/riebschlager/" },
  { icon: "instagram", label: "Follow Chris Riebschlager on Instagram", href: "https://www.instagram.com/riebschlager/" },
  { icon: "youtube", label: "Watch Chris Riebschlager on YouTube", href: "https://www.youtube.com/@riebschlager" },
  { icon: "github", label: "Go to Chris Riebschlager's GitHub", href: "https://github.com/riebschlager" },
  { icon: "mail", label: "Email Chris Riebschlager", href: "mailto:chris@the816.com" },
];

function SocialLink({ item, size }) {
  const [hover, setHover] = React.useState(false);
  return (
    <a
      href={item.href}
      aria-label={item.label}
      title={item.label}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        width: size + 20, height: size + 20, borderRadius: "var(--radius-pill)",
        color: hover ? "var(--neon-pink)" : "var(--text-muted)",
        background: hover ? "var(--tint-pink)" : "transparent",
        transition: "color var(--dur-base), background var(--dur-base)",
      }}
    >
      <Icon name={item.icon} size={size} />
    </a>
  );
}

export function SocialLinks({ items = DEFAULT_SOCIALS, size = 18 }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
      {items.map((it) => <SocialLink key={it.icon} item={it} size={size} />)}
    </div>
  );
}
