import type { TextareaHTMLAttributes } from 'react';

export type WtkTextareaSizeType = 'sm' | 'md' | 'lg';
export type WtkTextareaResizableType = 'bidirectional' | 'horizontal' | 'vertical';

export interface IWtkTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  size?: WtkTextareaSizeType;
  label?: string;
  error?: string;
  // omitted means not resizable, so there is no 'none' member and no default
  resizable?: WtkTextareaResizableType;
  wrapperClassName?: string;
  labelClassName?: string;
  errorClassName?: string;
}
