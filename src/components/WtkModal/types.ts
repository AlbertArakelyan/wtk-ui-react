import type { DialogHTMLAttributes, PropsWithChildren, ReactNode } from 'react';

export type WtkModalSizeType = 'sm' | 'md' | 'lg' | 'xl';

// `open` is omitted on purpose: showModal() is what makes the dialog modal, and
// setting the attribute through the spread would render a non-modal one instead
export interface IWtkModalProps
  extends PropsWithChildren<Omit<DialogHTMLAttributes<HTMLDialogElement>, 'open'>> {
  isOpen: boolean;
  title: string;
  onClose: () => void;
  size?: WtkModalSizeType;
  footer?: ReactNode;
  showCloseButton?: boolean;
  closeOnEscape?: boolean;
  closeOnBackdropClick?: boolean;
  headerClassName?: string;
  titleClassName?: string;
  bodyClassName?: string;
  footerClassName?: string;
  closeButtonClassName?: string;
}
