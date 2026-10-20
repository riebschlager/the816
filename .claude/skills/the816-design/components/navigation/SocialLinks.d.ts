/** Row of icon-only social links (LinkedIn, Instagram, YouTube, GitHub, Email). Pink on hover. */
export interface SocialItem {
  icon: string;
  label: string;
  href: string;
}
export interface SocialLinksProps {
  /** Defaults to Chris's five profiles. */
  items?: SocialItem[];
  /** Icon size. Default 18. */
  size?: number;
}
export function SocialLinks(props: SocialLinksProps): JSX.Element;
