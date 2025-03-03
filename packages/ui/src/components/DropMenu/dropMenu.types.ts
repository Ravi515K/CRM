type TOption = {
  id: string | number;
  [key: string]: any;
} | null;

type TSelectorProps = {
  placeholder: string;
  label?: string;
  value: any;
  options: TOption[];
  className?: string;
  accessorKey?: string;
  disabled?: boolean;
  error?: any;
  textEllipsis?: number;
  onChange: (option: any) => void;
  isRequired?: boolean;
  supportAnchor?: boolean;
};

export type { TOption, TSelectorProps };
