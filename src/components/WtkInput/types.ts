import type { InputHTMLAttributes, ReactNode } from 'react';

export type WtkInputSizeType = 'sm' | 'md' | 'lg';
export type WtkInputIconPositionType = 'left' | 'right';

export interface IWtkInputProps extends InputHTMLAttributes<HTMLInputElement> {
  // not `size`: InputHTMLAttributes already uses that for the native character width
  inputSize?: WtkInputSizeType;
  label?: string;
  icon?: ReactNode;
  iconPosition?: WtkInputIconPositionType;
  error?: string;
  wrapperClassName?: string;
  labelClassName?: string;
  fieldClassName?: string;
  iconClassName?: string;
  errorClassName?: string;
}
