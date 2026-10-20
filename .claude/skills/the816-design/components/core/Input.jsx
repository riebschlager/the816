import React from "react";

export function Input({
  label,
  placeholder,
  value,
  defaultValue,
  onChange,
  type = "text",
  hint,
  error,
  multiline = false,
  rows = 4,
  id,
  style,
}) {
  const [focus, setFocus] = React.useState(false);
  const fid =
    id ||
    (label
      ? "in-" + String(label).toLowerCase().replace(/\W+/g, "-")
      : undefined);
  const Field = multiline ? "textarea" : "input";
  const ring = error
    ? "var(--danger)"
    : focus
      ? "var(--focus-ring)"
      : "var(--border-strong)";
  return (
    <label
      htmlFor={fid}
      style={{ display: "flex", flexDirection: "column", gap: 8, ...style }}
    >
      {label && (
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 12,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: focus ? "var(--neon-cyan)" : "var(--text-muted)",
            transition: "color var(--dur-base)",
          }}
        >
          {label}
        </span>
      )}
      <Field
        id={fid}
        type={multiline ? undefined : type}
        rows={multiline ? rows : undefined}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{
          width: "100%",
          minHeight: multiline ? undefined : 48,
          padding: multiline ? "12px 16px" : "0 16px",
          fontFamily: "var(--font-body)",
          fontSize: 16,
          lineHeight: 1.5,
          color: "var(--text-primary)",
          background: "var(--surface-sunken)",
          border: "1px solid " + ring,
          borderRadius: "var(--radius-md)",
          outline: "none",
          resize: multiline ? "vertical" : undefined,
          boxShadow:
            focus && !error
              ? "0 0 0 3px var(--tint-cyan), 0 0 20px rgba(41,240,255,0.15)"
              : "none",
          transition:
            "border-color var(--dur-base), box-shadow var(--dur-base)",
        }}
      />
      {(error || hint) && (
        <span
          style={{
            fontSize: 13,
            color: error ? "var(--danger)" : "var(--text-muted)",
          }}
        >
          {error || hint}
        </span>
      )}
    </label>
  );
}
