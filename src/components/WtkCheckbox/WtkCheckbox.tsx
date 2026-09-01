import { type FC, useEffect, useRef } from 'react';

import type { IWtkCheckboxProps } from './types';

const WtkCheckbox: FC<IWtkCheckboxProps> = ({
  label,
  error,
  isIndeterminate = false,
  disabled,
  wrapperClassName = '',
  rowClassName = '',
  indicatorClassName = '',
  labelClassName = '',
  errorClassName = '',
  className = '',
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = isIndeterminate;
    }
  }, [isIndeterminate]);

  const errorClass = error ? 'wtk-checkbox--error' : '';

  return (
    <div className={`wtk-checkbox-wrapper ${wrapperClassName}`}>
      <label className={`wtk-checkbox ${errorClass} ${rowClassName}`}>
        <input
          ref={inputRef}
          type="checkbox"
          className={`wtk-checkbox__input ${className}`}
          disabled={disabled}
          {...props}
        />
        <span className={`wtk-checkbox__indicator ${indicatorClassName}`}>
          <svg className="wtk-checkbox__mark" viewBox="0 0 16 16" fill="none" stroke="currentColor">
            <path d="M3.5 8.5l3 3 6-6.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <svg className="wtk-checkbox__dash" viewBox="0 0 16 16" fill="none" stroke="currentColor">
            <path d="M4 8h8" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </span>
        {label && <span className={`wtk-checkbox__label ${labelClassName}`}>{label}</span>}
      </label>
      {error && <p className={`wtk-checkbox__error ${errorClassName}`}>{error}</p>}
    </div>
  );
};

export default WtkCheckbox;
