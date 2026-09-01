import { type FC, useId, useMemo } from 'react';

import type { IWtkInputProps, WtkInputSizeType } from './types';

const WtkInput: FC<IWtkInputProps> = ({
  inputSize = 'md',
  label,
  icon,
  iconPosition = 'right',
  error,
  id,
  disabled,
  wrapperClassName = '',
  labelClassName = '',
  fieldClassName = '',
  iconClassName = '',
  errorClassName = '',
  className = '',
  ...props
}) => {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  const inputSizeClass = useMemo(() => {
    const sizeMapping: Record<WtkInputSizeType, string> = {
      sm: 'wtk-input--sm',
      md: 'wtk-input--md',
      lg: 'wtk-input--lg',
    };

    return sizeMapping[inputSize] || sizeMapping.md;
  }, [inputSize]);

  const iconSideClass = icon ? `wtk-input--icon-${iconPosition}` : '';
  const errorClass = error ? 'wtk-input--error' : '';

  return (
    <div className={`wtk-input-wrapper ${wrapperClassName}`}>
      {label && (
        <label className={`wtk-input__label ${labelClassName}`} htmlFor={inputId}>
          {label}
        </label>
      )}
      <div className={`wtk-input__field ${fieldClassName}`}>
        <input
          id={inputId}
          className={`wtk-input ${inputSizeClass} ${iconSideClass} ${errorClass} ${className}`}
          disabled={disabled}
          {...props}
        />
        {icon && (
          <span className={`wtk-input__icon wtk-input__icon--${iconPosition} ${iconClassName}`}>
            {icon}
          </span>
        )}
      </div>
      {error && <p className={`wtk-input__error ${errorClassName}`}>{error}</p>}
    </div>
  );
};

export default WtkInput;
