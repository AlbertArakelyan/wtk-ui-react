import type { InputHTMLAttributes } from 'react';

export interface IWtkRadioProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  wrapperClassName?: string;
  rowClassName?: string;
  indicatorClassName?: string;
  labelClassName?: string;
  errorClassName?: string;
}
