/** Text field with mono label; cyan focus glow. Set multiline for a textarea. */
export interface InputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  type?: string;
  hint?: string;
  error?: string;
  multiline?: boolean;
  rows?: number;
  id?: string;
  style?: React.CSSProperties;
}
export function Input(props: InputProps): JSX.Element;
