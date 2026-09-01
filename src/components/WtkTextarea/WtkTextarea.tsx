import { type FC, useId, useMemo } from 'react';

import type { IWtkTextareaProps, WtkTextareaResizableType, WtkTextareaSizeType } from './types';

const WtkTextarea: FC<IWtkTextareaProps> = ({
  size = 'md',
  label,
  error,
  resizable,
  id,
  disabled,
  wrapperClassName = '',
  labelClassName = '',
  errorClassName = '',
  className = '',
  ...props
}) => {
  const generatedId = useId();
  const textareaId = id ?? generatedId;

  const textareaSize = useMemo(() => {
    const sizeMapping: Record<WtkTextareaSizeType, string> = {
      sm: 'wtk-textarea--sm',
      md: 'wtk-textarea--md',
      lg: 'wtk-textarea--lg',
    };

    return sizeMapping[size] || sizeMapping.md;
  }, [size]);

  const resizeClass = useMemo(() => {
    if (!resizable) {
      return '';
    }

    const resizeMapping: Record<WtkTextareaResizableType, string> = {
      bidirectional: 'wtk-textarea--resize-both',
      horizontal: 'wtk-textarea--resize-horizontal',
      vertical: 'wtk-textarea--resize-vertical',
    };

    return resizeMapping[resizable] || '';
  }, [resizable]);

  const errorClass = error ? 'wtk-textarea--error' : '';

  return (
    <div className={`wtk-textarea-wrapper ${wrapperClassName}`}>
      {label && (
        <label className={`wtk-textarea__label ${labelClassName}`} htmlFor={textareaId}>
          {label}
        </label>
      )}
      <textarea
        id={textareaId}
        className={`wtk-textarea ${textareaSize} ${resizeClass} ${errorClass} ${className}`}
        disabled={disabled}
        {...props}
      />
      {error && <p className={`wtk-textarea__error ${errorClassName}`}>{error}</p>}
    </div>
  );
};

export default WtkTextarea;
