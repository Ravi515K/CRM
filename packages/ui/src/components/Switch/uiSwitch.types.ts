interface ISwitchProps {
  label?: string;
  checked?: boolean | undefined;
  containerClass?: string;
  className?: string;
  setChecked: () => void;
  disabled?: boolean;
}
export type { ISwitchProps };
