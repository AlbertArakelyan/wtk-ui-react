import { type FC } from 'react';

import type { IWtkSwitchProps } from './types';

const WtkSwitch: FC<IWtkSwitchProps> = ({
  label,
  labelPosition = 'right',
  error,
  disabled,
  wrapperClassName = '',
  rowClassName = '',
  trackClassName = '',
  thumbClassName = '',
  labelClassName = '',
  errorClassName = '',
  className = '',
  ...props
}) => {
  // the DOM order stays fixed, the left variant only reverses the flex direction
  const positionClass = labelPosition === 'left' ? 'wtk-switch--label-left' : 'wtk-switch--label-right';
  const errorClass = error ? 'wtk-switch--error' : '';

  return (
    <div className={`wtk-switch-wrapper ${wrapperClassName}`}>
      <label className={`wtk-switch ${positionClass} ${errorClass} ${rowClassName}`}>
        <input
          type="checkbox"
          className={`wtk-switch__input ${className}`}
          disabled={disabled}
          {...props}
        />
        <span className={`wtk-switch__track ${trackClassName}`}>
          <svg className="wtk-switch__on" viewBox="0 0 16 16" fill="none" stroke="currentColor">
            <path d="M8 4.5v7" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <svg className="wtk-switch__off" viewBox="0 0 16 16" fill="none" stroke="currentColor">
            <circle cx="8" cy="8" r="3" strokeWidth="1.5" />
          </svg>
          <span className={`wtk-switch__thumb ${thumbClassName}`} />
        </span>
        {label && <span className={`wtk-switch__label ${labelClassName}`}>{label}</span>}
      </label>
      {error && <p className={`wtk-switch__error ${errorClassName}`}>{error}</p>}
    </div>
  );
};

export default WtkSwitch;
