/**
 * Pill-shaped action. Neon fill (primary), outline (secondary) or text (ghost). Glows on hover.
 * @startingPoint section="Core" subtitle="Neon pill buttons" viewport="700x260"
 */
export interface ButtonProps {
  children?: React.ReactNode;
  /** Default "primary". */
  variant?: "primary" | "secondary" | "ghost";
  /** Default "md". */
  size?: "sm" | "md" | "lg";
  /** Neon color used for fill / hover. Default "pink". */
  tone?: "pink" | "cyan" | "lime" | "orange";
  /** Lucide icon name before the label. */
  icon?: string;
  /** Lucide icon name after the label (nudges up-right on hover — use "arrow-up-right" for outbound). */
  iconRight?: string;
  /** Renders an <a> when set. */
  href?: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  type?: "button" | "submit" | "reset";
  style?: React.CSSProperties;
}
export function Button(props: ButtonProps): JSX.Element;
