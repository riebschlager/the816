export interface IconProps {
  /** Lucide icon name, kebab-case (e.g. "arrow-up-right", "github"). */
  name: string;
  /** Pixel size. Default 20. */
  size?: number;
  /** CSS color. Default currentColor. */
  color?: string;
  /** Accessible label. Omit for decorative icons. */
  label?: string;
  style?: React.CSSProperties;
}
export function Icon(props: IconProps): JSX.Element;
