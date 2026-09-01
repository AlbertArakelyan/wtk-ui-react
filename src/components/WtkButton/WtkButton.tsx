import { type FC, useMemo } from 'react';

import type { IWtkButtonProps, WtkButtonSizeType, WtkButtonVariantType } from './types';

const WtkButton: FC<IWtkButtonProps> = ({
  children,
  size = 'md',
  variant = 'normal',
  icon,
  iconPosition = 'left',
  isChecked = false,
  type = 'button',
  disabled,
  containerClassName = '',
  contentClassName = '',
  className = '',
  ...rest
}) => {
  const btnSize = useMemo(() => {
    const sizeMapping: Record<WtkButtonSizeType, string> = {
      sm: 'wtk-btn--sm',
      md: 'wtk-btn--md',
      lg: 'wtk-btn--lg',
      'square-icon': 'wtk-btn--square-icon',
    };

    return sizeMapping[size] || sizeMapping.md;
  }, [size]);

  const btnVariant = useMemo(() => {
    const variantMapping: Record<WtkButtonVariantType, string> = {
      normal: 'wtk-btn--normal',
      suggested: 'wtk-btn--suggested',
      destructive: 'wtk-btn--destructive',
      flat: 'wtk-btn--flat',
    };

    return variantMapping[variant] || variantMapping.normal;
  }, [variant]);

  const btnChecked = isChecked ? 'wtk-btn--checked' : '';

  return (
    <button
      className={`wtk-btn ${btnSize} ${btnVariant} ${btnChecked} ${className}`}
      type={type}
      disabled={disabled}
      {...rest}
    >
      <div className={`wtk-btn__container ${containerClassName}`}>
        {icon ? (
          <>
            {iconPosition === 'left' && icon}
            <div className={`wtk-btn__content ${contentClassName}`}>{children}</div>
            {iconPosition === 'right' && icon}
          </>
        ) : (
          children
        )}
      </div>
    </button>
  );
};

export default WtkButton;
