/**
 * Blog post teaser: 16:10 image, mono date, display title. Image border glows on hover.
 * @startingPoint section="Content" subtitle="Blog post teaser card" viewport="700x380"
 */
export interface PostCardProps {
  image?: string;
  alt?: string;
  title: string;
  /** Pre-formatted, e.g. "Aug 8, 2026". */
  date?: string;
  excerpt?: string;
  href?: string;
  /** Hover neon. Default "cyan". */
  tone?: "cyan" | "pink";
  onClick?: (e: React.MouseEvent) => void;
}
export function PostCard(props: PostCardProps): JSX.Element;
