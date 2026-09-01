/*
 * Public API of the package.
 *
 * This is the one file in the repo allowed to re-export, per CLAUDE.md. Inside
 * src, always import from the file that defines the thing, never from here.
 *
 * The stylesheet is imported so the build emits dist/styles.css. It is not
 * injected into the consumer's page: they import 'wtk-ui/styles.css' themselves.
 */

import './styles/style.css';

export { default as WtkButton } from './components/WtkButton/WtkButton';
export type {
  IWtkButtonProps,
  WtkButtonIconPositionType,
  WtkButtonSizeType,
  WtkButtonVariantType,
} from './components/WtkButton/types';

export { default as WtkCheckbox } from './components/WtkCheckbox/WtkCheckbox';
export type { IWtkCheckboxProps } from './components/WtkCheckbox/types';

export { default as WtkInput } from './components/WtkInput/WtkInput';
export type {
  IWtkInputProps,
  WtkInputIconPositionType,
  WtkInputSizeType,
} from './components/WtkInput/types';

export { default as WtkRadio } from './components/WtkRadio/WtkRadio';
export type { IWtkRadioProps } from './components/WtkRadio/types';

export { default as WtkSwitch } from './components/WtkSwitch/WtkSwitch';
export type { IWtkSwitchProps, WtkSwitchLabelPositionType } from './components/WtkSwitch/types';

export { default as WtkTextarea } from './components/WtkTextarea/WtkTextarea';
export type {
  IWtkTextareaProps,
  WtkTextareaResizableType,
  WtkTextareaSizeType,
} from './components/WtkTextarea/types';
