import type { PropsWithChildren, ButtonHTMLAttributes, ReactNode } from 'react';

export type WtkButtonSizeType = 'sm' | 'md' | 'lg' | 'square-icon';
export type WtkButtonVariantType = 'normal' | 'suggested' | 'destructive' | 'flat';
export type WtkButtonIconPositionType = 'left' | 'right';

export interface IWtkButtonProps extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
  size?: WtkButtonSizeType;
  variant?: WtkButtonVariantType;
  icon?: ReactNode;
  iconPosition?: WtkButtonIconPositionType;
  // visual toggle state, matching the --wtk-btn-bg-checked token
  isChecked?: boolean;
  containerClassName?: string;
  contentClassName?: string;
}
