import { ChangeEvent } from "react";

type TSelectorProps<T> = {
  placeholder: string;
  label?: string;
  value: any;
  options: T[];
  className?: string;
  accessorKey?: string;
  disabled?: boolean;
  error?: any;
  textEllipsis?: number;
  onChange: (option: T) => void;
  isRequired?: boolean;
  supportAnchor?: boolean;
  isLoading?: boolean;
  containerClass?: string;
  emptyText?: string;
  settingUrl?: string;
  settingActionText?: string;
};

type TSearchSelectorProps<T> = {
  placeholder?: string;
  label?: string;
  value?: T | null;
  onChange: (value: T) => void;
  options: T[];
  error?: any;
  disabled?: boolean;
  className?: string;
  accessorKey?: string;
  textEllipsis?: number;
  query: string;
  isRequired?: boolean;
  validateQuery?: (event: ChangeEvent<HTMLInputElement>) => void;
  setQuery: (value: string) => void;
  redirectionPath?: string;
  isSearching?: boolean;
  emptyText?: string;
  containerClass?: string;
  settingUrl?: string;
  settingActionText?: string;
};

interface IUiMultiSearchSelectorProps<T> {
  placeholder?: string;
  label?: string;
  selectedValues?: T[];
  onChange: (value: T[]) => void;
  options: T[];
  error?: any;
  disabled?: boolean;
  className?: string;
  accessorKey?: string;
  textEllipsis?: number;
  query: string;
  isRequired?: boolean;
  validateQuery?: (event: ChangeEvent<HTMLInputElement>) => void;
  setQuery: (value: string) => void;
  redirectionPath?: string;
  isSearching?: boolean;
  emptyText?: string;
  showCount?: number;
  settingUrl?: string;
  settingActionText?: string;
}

export type {
  TSelectorProps,
  TSearchSelectorProps,
  IUiMultiSearchSelectorProps,
};
