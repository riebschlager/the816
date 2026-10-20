import React from "react";
import { Icon } from "../core/Icon.jsx";

const NEON = {
  pink: "var(--neon-pink)",
  cyan: "var(--neon-cyan)",
  lime: "var(--neon-lime)",
  orange: "var(--neon-orange)",
};
const GLOW = {
  pink: "var(--text-glow-pink)",
  cyan: "var(--text-glow-cyan)",
  lime: "0 0 14px rgba(200,255,46,.55)",
  orange: "0 0 14px rgba(255,138,43,.55)",
};

export function ProjectRow({
  index,
  title,
  summary,
  href = "#",
  tone = "pink",
  onClick,
}) {
  const [hover, setHover] = React.useState(false);
  const c = NEON[tone] || NEON.pink;
  return (
    <a
      href={href}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "grid",
        gridTemplateColumns: "56px minmax(0,1fr) auto",
        alignItems: "center",
        gap: "var(--space-5)",
        padding: "var(--space-5) 0",
        borderTop: "1px solid var(--border-default)",
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 14,
          color: hover ? c : "var(--text-faint)",
          transition: "color var(--dur-base)",
        }}
      >
        {String(index).padStart(2, "0")}
      </span>
      <span
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 4,
          minWidth: 0,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "var(--text-display-md)",
            lineHeight: 1,
            letterSpacing: "var(--tracking-tight)",
            color: hover ? c : "var(--text-primary)",
            textShadow: hover ? GLOW[tone] : "none",
            transition:
              "color var(--dur-base) var(--ease-out), text-shadow var(--dur-base) var(--ease-out)",
          }}
        >
          {title}
        </span>
        {summary && (
          <span style={{ fontSize: 15, color: "var(--text-muted)" }}>
            {summary}
          </span>
        )}
      </span>
      <Icon
        name="arrow-up-right"
        size={32}
        color={hover ? c : "var(--text-faint)"}
        style={{
          transition:
            "transform var(--dur-base) var(--ease-snap), background-color var(--dur-base)",
          transform: hover ? "translate(4px,-4px)" : "none",
        }}
      />
    </a>
  );
}
