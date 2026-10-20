import React from "react";
import { Icon } from "./Icon.jsx";

const SIZES = {
  sm: { height: 34, padding: "0 14px", fontSize: 14, gap: 6, icon: 16 },
  md: { height: 44, padding: "0 20px", fontSize: 16, gap: 8, icon: 18 },
  lg: { height: 54, padding: "0 26px", fontSize: 18, gap: 10, icon: 20 },
};

const GLOW = {
  pink: "var(--glow-pink)",
  cyan: "var(--glow-cyan)",
  lime: "var(--glow-lime)",
  orange: "var(--glow-orange)",
};
const NEON = {
  pink: "var(--neon-pink)",
  cyan: "var(--neon-cyan)",
  lime: "var(--neon-lime)",
  orange: "var(--neon-orange)",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  tone = "pink",
  icon,
  iconRight,
  href,
  disabled = false,
  onClick,
  type = "button",
  style,
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const neon = NEON[tone] || NEON.pink;
  const on = hover && !disabled;

  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: s.gap,
    height: s.height,
    padding: s.padding,
    fontFamily: "var(--font-body)",
    fontSize: s.fontSize,
    fontWeight: 600,
    letterSpacing: "-0.005em",
    borderRadius: "var(--radius-pill)",
    border: "1px solid transparent",
    textDecoration: "none",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.4 : 1,
    transform: press && !disabled ? "scale(0.97)" : "none",
    transition:
      "background var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out), transform var(--dur-fast) var(--ease-out)",
    whiteSpace: "nowrap",
  };

  const variants = {
    primary: {
      background: neon,
      color: "var(--text-on-neon)",
      boxShadow: on ? GLOW[tone] : "none",
    },
    secondary: {
      background: on ? "var(--surface-hover)" : "transparent",
      color: on ? neon : "var(--text-primary)",
      borderColor: on ? neon : "var(--border-strong)",
      boxShadow: on ? GLOW[tone] : "none",
    },
    ghost: {
      background: on ? "var(--surface-raised)" : "transparent",
      color: on ? neon : "var(--text-secondary)",
      padding: "0 " + (parseInt(s.padding.split(" ")[1]) - 6) + "px",
    },
  };

  const Tag = href && !disabled ? "a" : "button";
  return (
    <Tag
      href={Tag === "a" ? href : undefined}
      type={Tag === "button" ? type : undefined}
      disabled={Tag === "button" ? disabled : undefined}
      onClick={disabled ? undefined : onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false);
        setPress(false);
      }}
      onMouseDown={() => setPress(true)}
      onMouseUp={() => setPress(false)}
      style={{ ...base, ...variants[variant], ...style }}
    >
      {icon && <Icon name={icon} size={s.icon} />}
      {children}
      {iconRight && (
        <Icon
          name={iconRight}
          size={s.icon}
          style={{
            transition: "transform var(--dur-base) var(--ease-snap)",
            transform: on ? "translate(2px,-2px)" : "none",
          }}
        />
      )}
    </Tag>
  );
}
