import React from "react";

const TONES = {
  pink: ["var(--neon-pink)", "var(--tint-pink)"],
  cyan: ["var(--neon-cyan)", "var(--tint-cyan)"],
  lime: ["var(--neon-lime)", "var(--tint-lime)"],
  orange: ["var(--neon-orange)", "var(--tint-orange)"],
  neutral: ["var(--ink-300)", "var(--ink-850)"],
};

export function Tag({ children, tone = "neutral", dot = false, style }) {
  const [fg, bg] = TONES[tone] || TONES.neutral;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        height: 26,
        padding: "0 10px",
        fontFamily: "var(--font-mono)",
        fontSize: 11.5,
        fontWeight: 500,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color: fg,
        background: bg,
        border: "1px solid",
        borderColor: tone === "neutral" ? "var(--border-strong)" : "color-mix(in srgb, " + fg + " 45%, transparent)",
        borderRadius: "var(--radius-pill)",
        whiteSpace: "nowrap",
        ...style,
      }}
    >
      {dot && <span style={{ width: 6, height: 6, borderRadius: 99, background: fg, boxShadow: "0 0 8px " + fg }} />}
      {children}
    </span>
  );
}
