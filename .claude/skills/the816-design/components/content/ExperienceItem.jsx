import React from "react";

export function ExperienceItem({ org, year, children }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "88px minmax(0,1fr)",
        gap: "var(--space-5)",
        padding: "var(--space-6) 0",
        borderTop: "1px solid var(--border-default)",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 14,
          color: "var(--neon-lime)",
          paddingTop: 6,
        }}
      >
        {year}
      </span>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--space-3)",
        }}
      >
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "var(--text-h3)",
            letterSpacing: "-0.02em",
            color: "var(--text-primary)",
            margin: 0,
          }}
        >
          {org}
        </h3>
        <div
          style={{
            fontSize: "var(--text-body)",
            lineHeight: "var(--leading-relaxed)",
            color: "var(--text-secondary)",
            maxWidth: "var(--measure)",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
