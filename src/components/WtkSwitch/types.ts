import type { InputHTMLAttributes } from 'react';

export type WtkSwitchLabelPositionType = 'left' | 'right';

export interface IWtkSwitchProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  labelPosition?: WtkSwitchLabelPositionType;
  error?: string;
  wrapperClassName?: string;
  rowClassName?: string;
  trackClassName?: string;
  thumbClassName?: string;
  labelClassName?: string;
  errorClassName?: string;
}
