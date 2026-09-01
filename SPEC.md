# WTK (Web Toolkit) - Framework Specification

## 1. Project Overview
WTK is a lightweight, web-native UI component framework designed for desktop wrappers (Tauri, Electron). The primary objective is to faithfully replicate the visual language, spatial density, and control layout of classic Linux desktop environments—specifically GTK3 / Cinnamon (resembling the Mint-Y theme).

**Target Audience for this Document:** Human contributors and AI coding agents (Claude, Gemini, Cursor) generating components, styles, and layouts within this repository.

---

## 2. Global AI Directives & Constraints
When writing code for this project, AI agents MUST adhere to the following rules:

*   **No Modern Web Paradigms:** Do NOT use Material Design, Tailwind default spacing, oversized touch-friendly targets, or heavy drop shadows.
*   **Desktop Density First:** Padding and margins must remain tight. Desktop applications rely on compact information density. 
*   **Zero Web-Specific Behaviors:** Disable text selection on UI controls (`user-select: none`), prevent image dragging, and disable default focus outlines in favor of native-looking focus rings.
*   **No Framework Lock-in:** Output clean HTML/CSS/JS (or the specific JS framework configured in the project root). Do not introduce heavy third-party component libraries.

---

## 3. Namespace & Naming Conventions
To prevent trademark conflicts with the GNOME Foundation and avoid developer confusion, the prefix `Gtk` is strictly prohibited. 

*   **Component Prefix:** `Wtk` (e.g., `WtkButton`, `WtkSwitch`)
*   **CSS Class Prefix:** `.wtk-` (e.g., `.wtk-panel`, `.wtk-combo-box`)
*   **Design Tokens:** `--wtk-` (e.g., `--wtk-color-bg`, `--wtk-border-radius`)
*   **Event Names:** Emitted custom events should be prefixed (e.g., `wtk-value-changed`, `wtk-toggled`)

---

## 4. Design System & CSS Variables (Theming Engine)
All components must consume these base CSS variables to allow seamless switching between Light and Dark desktop themes. Agents must not hardcode hex values in component CSS.

### 4.1 Typography
*   `--wtk-font-family`: `Ubuntu, Cantarell, "Segoe UI", system-ui, sans-serif;`
*   `--wtk-font-size-base`: `13px` (Standard GTK text size)
*   `--wtk-font-size-small`: `11px` (Used for metadata or subtitle text)
*   `--wtk-font-weight-normal`: `400`
*   `--wtk-font-weight-bold`: `600`

### 4.2 Spacing & Radii
*   `--wtk-spacing-xs`: `2px`
*   `--wtk-spacing-sm`: `4px`
*   `--wtk-spacing-md`: `8px`
*   `--wtk-spacing-lg`: `12px`
*   `--wtk-border-radius`: `4px` (Subtle rounding, never fully rounded "pill" shapes unless it is a Switch)
*   `--wtk-border-width`: `1px`

### 4.3 Base Colors (Light Theme Example)
*   `--wtk-bg-window`: `#f2f2f2` (Main application background)
*   `--wtk-bg-base`: `#ffffff` (Input fields, text areas)
*   `--wtk-color-text`: `#2c2c2c`
*   `--wtk-color-text-muted`: `#888888`
*   `--wtk-border-color`: `#d1d1d1`
*   `--wtk-border-color-focus`: `#3584e4` (Standard GTK blue focus state)
*   `--wtk-bg-selected`: `#3584e4`

---

## 5. Core Component Blueprints

### 5.1 `WtkHeaderBar`
*   **Purpose:** Replaces the native OS window title bar.
*   **Structure:** Flex container, horizontally aligned, vertically centered.
*   **Behavior:** Must include `app-region: drag` (Electron) or `data-tauri-drag-region` (Tauri) on empty space to allow window dragging. Controls inside (buttons) must have `app-region: no-drag`.

### 5.2 `WtkSwitch`
*   **Purpose:** Boolean toggle (resembling `GtkSwitch`).
*   **Visuals:** A pill-shaped track with a circular/rounded-square thumb.
*   **Details:** Must include subtle embedded indicators (`I` for on, `O` or `x` for off) visible inside the track, transitioning opacity based on state.

### 5.3 `WtkSpinButton`
*   **Purpose:** Numeric input for exact values (`GtkSpinButton`).
*   **Structure:** A standard text input joined directly with two buttons (`-` and `+`) on the right side.
*   **CSS Requirements:** Use `border-collapse` techniques (e.g., negative margins) to merge the borders of the input and the buttons. The left side of the input has a `border-radius`, but the right side has `0`.

### 5.4 `WtkComboBox`
*   **Purpose:** Dropdown selection (`GtkComboBox`).
*   **Visuals:** Looks like a standard button but text is left-aligned, accompanied by a right-aligned down arrow icon (`▾`).
*   **Behavior:** When clicked, it spawns a native-looking popover menu (`WtkPopover`) attached to the bottom of the button, constrained by the window bounds.

### 5.5 `WtkScale`
*   **Purpose:** Range slider (`GtkScale`).
*   **Visuals:** A very thin horizontal track (e.g., 4px height) with a slightly larger, circular or pill-shaped thumb.
*   **State:** The track to the left of the thumb should use the `--wtk-bg-selected` color to indicate the filled level.

### 5.6 `WtkSegmentedButton` (Linked Buttons)
*   **Purpose:** Mutually exclusive options or grouped actions (e.g., Left/Center/Right zone selection).
*   **Structure:** A flex row of `WtkButton` elements.
*   **CSS Requirements:** Middle buttons have a border-radius of `0`. The first button rounds only the left corners; the last button rounds only the right corners. Interior borders must not double up (use `margin-left: -1px` or border-left manipulation).

---

## 6. Layout & Window Management
Desktop applications handle layouts fundamentally differently than scrolling websites.
*   **Fixed Viewports:** The `<body>` should have `width: 100vw; height: 100vh; overflow: hidden;`.
*   **Scrollable Regions:** Only specific inner components (like a `WtkScrolledWindow` or `WtkSidebar`) should dictate their own overflow behavior (`overflow-y: auto`).
*   **Grid/Flex Focus:** Rely heavily on CSS Grid for complex layouts (like settings panes) to ensure strict vertical and horizontal alignment, mimicking native grid packing.