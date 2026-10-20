import React from "react";

export function PostCard({
  image,
  alt = "",
  title,
  date,
  excerpt,
  href = "#",
  tone = "cyan",
  onClick,
}) {
  const [hover, setHover] = React.useState(false);
  const glow = tone === "pink" ? "var(--glow-pink)" : "var(--glow-cyan)";
  const c = tone === "pink" ? "var(--neon-pink)" : "var(--neon-cyan)";
  return (
    <a
      href={href}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-4)",
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <div
        style={{
          aspectRatio: "16 / 10",
          borderRadius: "var(--radius-md)",
          overflow: "hidden",
          background: "var(--surface-raised)",
          border: "1px solid var(--border-default)",
          boxShadow: hover ? glow : "none",
          transition: "box-shadow var(--dur-base) var(--ease-out)",
        }}
      >
        {!image && (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 24,
              textAlign: "center",
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              color: "var(--text-faint)",
            }}
          >
            {alt || "Image"}
          </div>
        )}
        {image && (
          <img
            src={image}
            alt={alt}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              transform: hover ? "scale(1.03)" : "none",
              transition: "transform var(--dur-slow) var(--ease-out)",
            }}
          />
        )}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {date && (
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
            }}
          >
            {date}
          </span>
        )}
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: 24,
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            color: hover ? c : "var(--text-primary)",
            transition: "color var(--dur-base)",
            textWrap: "balance",
          }}
        >
          {title}
        </span>
        {excerpt && (
          <span
            style={{
              fontSize: 15,
              lineHeight: 1.5,
              color: "var(--text-muted)",
            }}
          >
            {excerpt}
          </span>
        )}
      </div>
    </a>
  );
}
