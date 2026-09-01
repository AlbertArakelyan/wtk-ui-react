import { type FC, useEffect, useState } from 'react';

import WtkButton from './components/WtkButton/WtkButton';

type ThemeChoiceType = 'system' | 'light' | 'dark';

const PlusIcon: FC = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M8 3.5v9M3.5 8h9" />
  </svg>
);

const TrashIcon: FC = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4">
    <path d="M3 5h10M6.5 5V3.5h3V5M4.5 5l.5 8h6l.5-8M6.5 7.5v3.5M9.5 7.5v3.5" />
  </svg>
);

const ChevronIcon: FC = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M6 4l4 4-4 4" />
  </svg>
);

const App = () => {
  const [theme, setTheme] = useState<ThemeChoiceType>('system');
  const [isPinned, setIsPinned] = useState(false);

  useEffect(() => {
    if (theme === 'system') {
      delete document.documentElement.dataset.theme;
      return;
    }

    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return (
    <div className="preview">
      <header className="preview-header">
        <span className="preview-title">WTK component preview</span>
        <div className="preview-theme">
          <span className="preview-theme-label">Theme</span>
          <WtkButton size="sm" variant="flat" isChecked={theme === 'light'} onClick={() => setTheme('light')}>
            Light
          </WtkButton>
          <WtkButton size="sm" variant="flat" isChecked={theme === 'dark'} onClick={() => setTheme('dark')}>
            Dark
          </WtkButton>
          <WtkButton size="sm" variant="flat" isChecked={theme === 'system'} onClick={() => setTheme('system')}>
            System
          </WtkButton>
        </div>
      </header>

      <div className="preview-body">
        <section className="preview-component">
          <h1 className="preview-component-title">WtkButton</h1>

          <section className="preview-section">
            <h2 className="preview-section-title">Variants</h2>
            <div className="preview-row">
              <WtkButton>Normal</WtkButton>
              <WtkButton variant="suggested">Suggested</WtkButton>
              <WtkButton variant="destructive">Destructive</WtkButton>
              <WtkButton variant="flat">Flat</WtkButton>
            </div>
          </section>

          <section className="preview-section">
            <h2 className="preview-section-title">Sizes</h2>
            <div className="preview-row">
              <WtkButton size="sm">Small</WtkButton>
              <WtkButton size="md">Medium</WtkButton>
              <WtkButton size="lg">Large</WtkButton>
            </div>
            <div className="preview-row">
              <WtkButton size="sm" variant="suggested">Small</WtkButton>
              <WtkButton size="md" variant="suggested">Medium</WtkButton>
              <WtkButton size="lg" variant="suggested">Large</WtkButton>
            </div>
          </section>

          <section className="preview-section">
            <h2 className="preview-section-title">States</h2>
            <div className="preview-row">
              <span className="preview-row-label">Normal</span>
              <WtkButton>Default</WtkButton>
              <WtkButton isChecked>Checked</WtkButton>
              <WtkButton disabled>Disabled</WtkButton>
            </div>
            <div className="preview-row">
              <span className="preview-row-label">Suggested</span>
              <WtkButton variant="suggested">Default</WtkButton>
              <WtkButton variant="suggested" disabled>Disabled</WtkButton>
            </div>
            <div className="preview-row">
              <span className="preview-row-label">Destructive</span>
              <WtkButton variant="destructive">Default</WtkButton>
              <WtkButton variant="destructive" disabled>Disabled</WtkButton>
            </div>
            <div className="preview-row">
              <span className="preview-row-label">Flat</span>
              <WtkButton variant="flat">Default</WtkButton>
              <WtkButton variant="flat" isChecked>Checked</WtkButton>
              <WtkButton variant="flat" disabled>Disabled</WtkButton>
            </div>
            <div className="preview-row">
              <span className="preview-row-label">Toggle</span>
              <WtkButton isChecked={isPinned} onClick={() => setIsPinned(!isPinned)}>
                {isPinned ? 'Pinned' : 'Not pinned'}
              </WtkButton>
            </div>
          </section>

          <section className="preview-section">
            <h2 className="preview-section-title">Icons</h2>
            <div className="preview-row">
              <WtkButton icon={<PlusIcon />}>Add</WtkButton>
              <WtkButton icon={<ChevronIcon />} iconPosition="right">Next</WtkButton>
              <WtkButton variant="destructive" icon={<TrashIcon />}>Delete</WtkButton>
              <WtkButton variant="suggested" icon={<PlusIcon />} iconPosition="right">Create</WtkButton>
            </div>
            <div className="preview-row">
              <span className="preview-row-label">Icon only</span>
              <WtkButton size="square-icon" icon={<PlusIcon />} />
              <WtkButton size="square-icon" variant="flat" icon={<ChevronIcon />} />
              <WtkButton size="square-icon" variant="destructive" icon={<TrashIcon />} />
              <WtkButton size="square-icon" icon={<PlusIcon />} disabled />
            </div>
          </section>
        </section>
      </div>
    </div>
  );
};

export default App;
