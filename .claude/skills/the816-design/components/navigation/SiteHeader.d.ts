/**
 * Sticky blurred header: "The816" wordmark in type, four nav links with neon underline, social icons.
 * @startingPoint section="Navigation" subtitle="Site header with nav + socials" viewport="1100x80"
 */
export interface SiteHeaderProps {
  /** Active nav label. Default "Home". */
  active?: "Home" | "Projects" | "Blog" | "About";
  /** If set, nav clicks call this instead of navigating. */
  onNavigate?: (label: string) => void;
  /** Default true. */
  showSocials?: boolean;
}
export function SiteHeader(props: SiteHeaderProps): JSX.Element;
