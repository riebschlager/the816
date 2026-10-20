import React from "react";
import { SocialLinks } from "./SocialLinks.jsx";

const NAV = ["Home", "Projects", "Blog", "About"];

function NavLink({ label, active, onClick, href }) {
  const [hover, setHover] = React.useState(false);
  return (
    <a
      href={href}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      aria-current={active ? "page" : undefined}
      style={{
        position: "relative",
        padding: "8px 2px",
        fontSize: 15,
        fontWeight: 500,
        textDecoration: "none",
        color: active ? "var(--text-primary)" : hover ? "var(--neon-pink)" : "var(--text-muted)",
        transition: "color var(--dur-base)",
      }}
    >
      {label}
      <span
        style={{
          position: "absolute", left: 0, right: 0, bottom: 0, height: 2, borderRadius: 2,
          background: "var(--neon-pink)",
          boxShadow: "0 0 10px var(--neon-pink)",
          transform: active ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "left",
          transition: "transform var(--dur-base) var(--ease-out)",
        }}
      />
    </a>
  );
}

export function SiteHeader({ active = "Home", onNavigate, showSocials = true }) {
  const go = (label) => (e) => { if (onNavigate) { e.preventDefault(); onNavigate(label); } };
  return (
    <header
      style={{
        position: "sticky", top: 0, zIndex: 10,
        background: "var(--header-bg)",
        backdropFilter: "var(--blur-header)",
        WebkitBackdropFilter: "var(--blur-header)",
        borderBottom: "1px solid var(--border-subtle)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--gutter)",
          minHeight: "var(--header-height)", display: "flex", alignItems: "center", gap: "var(--space-6)", flexWrap: "wrap",
        }}
      >
        <a
          href="/"
          onClick={go("Home")}
          style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 22, letterSpacing: "-0.04em", color: "var(--text-primary)", textDecoration: "none" }}
        >
          The816
        </a>
        <nav style={{ display: "flex", gap: "var(--space-5)", flex: 1 }}>
          {NAV.map((n) => (
            <NavLink key={n} label={n} active={n === active} href={n === "Home" ? "/" : "/" + n.toLowerCase()} onClick={go(n)} />
          ))}
        </nav>
        {showSocials && <SocialLinks size={17} />}
      </div>
    </header>
  );
}
