import type { InputHTMLAttributes } from 'react';

export interface IWtkCheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  // indeterminate is a DOM property with no attribute, so it is applied through a ref
  isIndeterminate?: boolean;
  wrapperClassName?: string;
  rowClassName?: string;
  indicatorClassName?: string;
  labelClassName?: string;
  errorClassName?: string;
}
