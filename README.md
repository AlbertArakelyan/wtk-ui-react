# wtk-ui-react

React components that reproduce the look and density of a GTK3 desktop toolkit. Built for apps that
run inside a desktop wrapper such as Tauri or Electron, where web defaults look out of place.

Plain hand-written CSS driven by custom properties. No CSS framework, no runtime style engine, no
third-party component dependencies.

## Install

```sh
yarn add wtk-ui-react
```

React 19 or later is a peer dependency, so it resolves from your project rather than shipping a
second copy.

## Usage

Import the stylesheet once, at the entry point of your app.

```tsx
import { WtkButton, WtkInput, WtkSwitch } from 'wtk-ui-react';
import 'wtk-ui-react/styles.css';

const Settings = () => (
  <form>
    <WtkInput label="Project name" placeholder="untitled" />
    <WtkSwitch label="Enable telemetry" labelPosition="left" />
    <WtkButton variant="suggested">Apply</WtkButton>
  </form>
);
```

If your TypeScript setup does not already declare CSS modules, add `declare module '*.css';` to a
`.d.ts` file. Vite provides this through `vite/client`, and Next.js through `next-env.d.ts`.

## Components

| Component | Notes |
| --- | --- |
| `WtkButton` | `normal`, `suggested`, `destructive`, `flat`; `sm`/`md`/`lg` and `square-icon`; icon slot either side |
| `WtkInput` | label, icon either side, error text; `inputSize` rather than `size`, which the DOM already uses |
| `WtkTextarea` | `resizable` accepts `vertical`, `horizontal`, `bidirectional`; omit it for a fixed field |
| `WtkCheckbox` | supports the indeterminate state through `isIndeterminate` |
| `WtkRadio` | group with the native `name` attribute; arrow keys move the selection |
| `WtkSwitch` | pill track with embedded state glyphs; `labelPosition` for settings rows |

Every component forwards the native attributes of its underlying element, and takes a `className`
prop per structural part, appended after the built-in classes so yours win.

## Theming

Light and dark are the same token names with different values. Set `data-theme` on the root element
to choose, or leave it unset to follow the operating system.

```ts
document.documentElement.dataset.theme = 'dark';
delete document.documentElement.dataset.theme; // back to following the OS
```

Override any token in your own stylesheet:

```css
:root {
  --wtk-accent: #7a4fd0;
  --wtk-font-size-base: 14px;
}
```

## Development

```sh
yarn dev          # playground with hot reload
yarn build        # typecheck, bundle the library, emit declarations
yarn build:demo   # build the playground into dist-demo
yarn preview      # serve the built playground
yarn lint
```

`yarn build` also runs from `prepare`, so `npm publish` and `npm pack` always package a fresh
`dist`.

## License

MIT
