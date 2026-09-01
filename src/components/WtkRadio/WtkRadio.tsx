import { type FC } from 'react';

import type { IWtkRadioProps } from './types';

const WtkRadio: FC<IWtkRadioProps> = ({
  label,
  error,
  disabled,
  wrapperClassName = '',
  rowClassName = '',
  indicatorClassName = '',
  labelClassName = '',
  errorClassName = '',
  className = '',
  ...props
}) => {
  const errorClass = error ? 'wtk-radio--error' : '';

  return (
    <div className={`wtk-radio-wrapper ${wrapperClassName}`}>
      <label className={`wtk-radio ${errorClass} ${rowClassName}`}>
        <input
          type="radio"
          className={`wtk-radio__input ${className}`}
          disabled={disabled}
          {...props}
        />
        <span className={`wtk-radio__indicator ${indicatorClassName}`}>
          <svg className="wtk-radio__dot" viewBox="0 0 16 16">
            <circle cx="8" cy="8" r="3.25" fill="currentColor" />
          </svg>
        </span>
        {label && <span className={`wtk-radio__label ${labelClassName}`}>{label}</span>}
      </label>
      {error && <p className={`wtk-radio__error ${errorClassName}`}>{error}</p>}
    </div>
  );
};

export default WtkRadio;
