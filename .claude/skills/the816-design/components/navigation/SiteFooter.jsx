import React from "react";
import { SocialLinks } from "./SocialLinks.jsx";

export function SiteFooter({ year = 2026, email = "chris@the816.com" }) {
  return (
    <footer style={{ borderTop: "1px solid var(--border-subtle)", marginTop: "var(--space-9)" }}>
      <div
        style={{
          maxWidth: "var(--container-max)", margin: "0 auto", padding: "var(--space-6) var(--gutter)",
          display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--space-4)", flexWrap: "wrap",
        }}
      >
        <div style={{ display: "flex", gap: "var(--space-5)", flexWrap: "wrap", alignItems: "center", fontSize: 14, color: "var(--text-muted)" }}>
          <span>© {year} Chris Riebschlager. All rights reserved.</span>
          <a href={"mailto:" + email} style={{ fontFamily: "var(--font-mono)", fontSize: 13 }}>{email}</a>
        </div>
        <SocialLinks size={17} />
      </div>
    </footer>
  );
}
