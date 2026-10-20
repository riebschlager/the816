/** One entry in the About page work history: lime mono year, display org name, prose body. */
export interface ExperienceItemProps {
  org: string;
  /** Year started, e.g. "2015". */
  year: string;
  children?: React.ReactNode;
}
export function ExperienceItem(props: ExperienceItemProps): JSX.Element;
