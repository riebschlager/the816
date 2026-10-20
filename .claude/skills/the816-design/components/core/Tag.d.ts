/** Small mono uppercase label for project disciplines and tools ("TouchDesigner", "Live visuals"). */
export interface TagProps {
  children?: React.ReactNode;
  /** Default "neutral". */
  tone?: "neutral" | "pink" | "cyan" | "lime" | "orange";
  /** Leading glowing dot (use for status like "In progress"). */
  dot?: boolean;
  style?: React.CSSProperties;
}
export function Tag(props: TagProps): JSX.Element;
