import { type FC, type MouseEvent, type SyntheticEvent, useEffect, useMemo, useRef } from 'react';

import WtkButton from '../WtkButton/WtkButton';
import type { IWtkModalProps, WtkModalSizeType } from './types';

const CloseIcon: FC = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M4 4l8 8M12 4l-8 8" strokeLinecap="round" />
  </svg>
);

const WtkModal: FC<IWtkModalProps> = ({
  children,
  isOpen,
  title,
  onClose,
  size = 'md',
  footer,
  showCloseButton = true,
  closeOnEscape = true,
  closeOnBackdropClick = true,
  headerClassName = '',
  titleClassName = '',
  bodyClassName = '',
  footerClassName = '',
  closeButtonClassName = '',
  className = '',
  ...rest
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const modalSize = useMemo(() => {
    const sizeMapping: Record<WtkModalSizeType, string> = {
      sm: 'wtk-modal--sm',
      md: 'wtk-modal--md',
      lg: 'wtk-modal--lg',
      xl: 'wtk-modal--xl',
    };

    return sizeMapping[size] || sizeMapping.md;
  }, [size]);

  // showModal() throws if the dialog is already open, and close() on a closed one
  // fires a stray close event, so both calls are guarded on the element's state.
  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) {
      return;
    }

    if (isOpen && !dialog.open) {
      dialog.showModal();
    }

    if (!isOpen && dialog.open) {
      dialog.close();
    }
  }, [isOpen]);

  // Escape reaches us as the native cancel event. Always prevent it so the element
  // never closes itself behind React's back and isOpen stays the only source of
  // truth, then let the caller decide by calling onClose.
  const handleCancel = (event: SyntheticEvent<HTMLDialogElement>) => {
    event.preventDefault();

    if (!closeOnEscape) {
      return;
    }

    onClose();
  };

  // A backdrop click reports the dialog itself as the target, which is why
  // .wtk-modal carries no padding: any padding would become a strip around the
  // panel that closes it. mousedown rather than click so dragging a selection out
  // of the body does not dismiss.
  const handleBackdropMouseDown = (event: MouseEvent<HTMLDialogElement>) => {
    if (!closeOnBackdropClick || event.target !== event.currentTarget) {
      return;
    }

    onClose();
  };

  return (
    <dialog
      ref={dialogRef}
      className={`wtk-modal ${modalSize} ${className}`}
      onCancel={handleCancel}
      onMouseDown={handleBackdropMouseDown}
      {...rest}
    >
      <div className={`wtk-modal__header ${headerClassName}`}>
        <h2 className={`wtk-modal__title ${titleClassName}`}>{title}</h2>
        {showCloseButton && (
          <WtkButton
            variant="flat"
            size="square-icon"
            icon={<CloseIcon />}
            className={closeButtonClassName}
            onClick={onClose}
          />
        )}
      </div>
      <div className={`wtk-modal__body ${bodyClassName}`}>{children}</div>
      {footer && <div className={`wtk-modal__footer ${footerClassName}`}>{footer}</div>}
    </dialog>
  );
};

export default WtkModal;
