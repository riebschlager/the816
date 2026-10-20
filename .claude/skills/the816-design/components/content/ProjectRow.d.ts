/**
 * Numbered, oversized project link for the Projects index. Title lights up neon on hover.
 * @startingPoint section="Content" subtitle="Numbered project list" viewport="700x340"
 */
export interface ProjectRowProps {
  /** 1-based position; rendered zero-padded ("01"). */
  index: number;
  title: string;
  /** Optional one-line description under the title. */
  summary?: string;
  href?: string;
  /** Hover neon. Default "pink". Rotate tones down a list for rhythm. */
  tone?: "pink" | "cyan" | "lime" | "orange";
  onClick?: (e: React.MouseEvent) => void;
}
export function ProjectRow(props: ProjectRowProps): JSX.Element;
