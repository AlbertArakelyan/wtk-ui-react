import { type FC, useEffect, useState } from 'react';

import WtkButton from './WtkButton/WtkButton';
import WtkCheckbox from './WtkCheckbox/WtkCheckbox';
import WtkInput from './WtkInput/WtkInput';
import WtkRadio from './WtkRadio/WtkRadio';
import WtkSwitch from './WtkSwitch/WtkSwitch';
import WtkTextarea from './WtkTextarea/WtkTextarea';

// playground layout only, kept out of style.css so it never reaches the package
import '../styles/preview.css';

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

const SearchIcon: FC = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="7" cy="7" r="4.25" />
    <path d="M10.2 10.2L13.5 13.5" />
  </svg>
);

const ChevronIcon: FC = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M6 4l4 4-4 4" />
  </svg>
);

const Playground = () => {
  const [theme, setTheme] = useState<ThemeChoiceType>('system');
  const [isPinned, setIsPinned] = useState(false);
  const [isTelemetryOn, setIsTelemetryOn] = useState(false);
  const [zone, setZone] = useState('center');
  const [isDarkPreferred, setIsDarkPreferred] = useState(false);

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

        <section className="preview-component">
          <h1 className="preview-component-title">WtkInput</h1>

          <section className="preview-section">
            <h2 className="preview-section-title">Sizes</h2>
            <div className="preview-row">
              <WtkInput inputSize="sm" placeholder="Small" wrapperClassName="preview-field" />
              <WtkInput inputSize="md" placeholder="Medium" wrapperClassName="preview-field" />
              <WtkInput inputSize="lg" placeholder="Large" wrapperClassName="preview-field" />
            </div>
          </section>

          <section className="preview-section">
            <h2 className="preview-section-title">Labels</h2>
            <div className="preview-row">
              <WtkInput label="Name" placeholder="Enter a name" wrapperClassName="preview-field" />
              <WtkInput label="Port" defaultValue="8080" wrapperClassName="preview-field" />
            </div>
          </section>

          <section className="preview-section">
            <h2 className="preview-section-title">Icons</h2>
            <div className="preview-row">
              <WtkInput icon={<SearchIcon />} placeholder="Search" wrapperClassName="preview-field" />
              <WtkInput
                icon={<SearchIcon />}
                iconPosition="left"
                placeholder="Icon on the left"
                wrapperClassName="preview-field"
              />
            </div>
          </section>

          <section className="preview-section">
            <h2 className="preview-section-title">States</h2>
            <div className="preview-row">
              <WtkInput placeholder="Default" wrapperClassName="preview-field" />
              <WtkInput defaultValue="Disabled" disabled wrapperClassName="preview-field" />
              <WtkInput defaultValue="Read only" readOnly wrapperClassName="preview-field" />
            </div>
            <div className="preview-row">
              <WtkInput
                label="Port"
                defaultValue="not-a-number"
                error="Must be a number between 1 and 65535"
                wrapperClassName="preview-field"
              />
            </div>
          </section>
        </section>

        <section className="preview-component">
          <h1 className="preview-component-title">WtkTextarea</h1>

          <section className="preview-section">
            <h2 className="preview-section-title">Sizes</h2>
            <div className="preview-row">
              <WtkTextarea size="sm" rows={2} placeholder="Small" wrapperClassName="preview-field" />
              <WtkTextarea size="md" rows={2} placeholder="Medium" wrapperClassName="preview-field" />
              <WtkTextarea size="lg" rows={2} placeholder="Large" wrapperClassName="preview-field" />
            </div>
          </section>

          <section className="preview-section">
            <h2 className="preview-section-title">Resizable</h2>
            <div className="preview-row">
              <WtkTextarea
                label="Not resizable"
                rows={3}
                placeholder="resize: none"
                wrapperClassName="preview-field"
              />
              <WtkTextarea
                label="Vertical"
                resizable="vertical"
                rows={3}
                placeholder="Drag the bottom edge"
                wrapperClassName="preview-field"
              />
              <WtkTextarea
                label="Horizontal"
                resizable="horizontal"
                rows={3}
                placeholder="Drag the side"
                wrapperClassName="preview-field"
              />
              <WtkTextarea
                label="Bidirectional"
                resizable="bidirectional"
                rows={3}
                placeholder="Drag the corner"
                wrapperClassName="preview-field"
              />
            </div>
          </section>

          <section className="preview-section">
            <h2 className="preview-section-title">States</h2>
            <div className="preview-row">
              <WtkTextarea rows={3} placeholder="Default" wrapperClassName="preview-field preview-field--wide" />
              <WtkTextarea
                rows={3}
                defaultValue="Disabled"
                disabled
                wrapperClassName="preview-field preview-field--wide"
              />
              <WtkTextarea
                rows={3}
                defaultValue="Read only"
                readOnly
                wrapperClassName="preview-field preview-field--wide"
              />
            </div>
            <div className="preview-row">
              <WtkTextarea
                label="Description"
                rows={3}
                defaultValue="Too short"
                error="Must be at least 20 characters"
                wrapperClassName="preview-field preview-field--wide"
              />
            </div>
          </section>
        </section>

        <section className="preview-component">
          <h1 className="preview-component-title">WtkCheckbox</h1>

          <section className="preview-section">
            <h2 className="preview-section-title">States</h2>
            <div className="preview-row">
              <span className="preview-row-label">Enabled</span>
              <WtkCheckbox label="Unchecked" />
              <WtkCheckbox label="Checked" defaultChecked />
              <WtkCheckbox label="Indeterminate" isIndeterminate />
            </div>
            <div className="preview-row">
              <span className="preview-row-label">Disabled</span>
              <WtkCheckbox label="Unchecked" disabled />
              <WtkCheckbox label="Checked" defaultChecked disabled />
              <WtkCheckbox label="Indeterminate" isIndeterminate disabled />
            </div>
            <div className="preview-row">
              <span className="preview-row-label">No label</span>
              <WtkCheckbox />
              <WtkCheckbox defaultChecked />
              <WtkCheckbox isIndeterminate />
            </div>
          </section>

          <section className="preview-section">
            <h2 className="preview-section-title">Controlled</h2>
            <div className="preview-row">
              <WtkCheckbox
                label={isTelemetryOn ? 'Telemetry enabled' : 'Telemetry disabled'}
                checked={isTelemetryOn}
                onChange={(event) => setIsTelemetryOn(event.target.checked)}
              />
            </div>
          </section>

          <section className="preview-section">
            <h2 className="preview-section-title">Error</h2>
            <div className="preview-row">
              <WtkCheckbox label="Accept the terms" error="You must accept to continue" />
            </div>
          </section>
        </section>

        <section className="preview-component">
          <h1 className="preview-component-title">WtkRadio</h1>

          <section className="preview-section">
            <h2 className="preview-section-title">Group</h2>
            <div className="preview-row">
              <span className="preview-row-label">Enabled</span>
              <WtkRadio name="preview-align" value="left" label="Left" defaultChecked />
              <WtkRadio name="preview-align" value="center" label="Center" />
              <WtkRadio name="preview-align" value="right" label="Right" />
            </div>
            <div className="preview-row">
              <span className="preview-row-label">Disabled</span>
              <WtkRadio name="preview-align-disabled" value="left" label="Left" defaultChecked disabled />
              <WtkRadio name="preview-align-disabled" value="center" label="Center" disabled />
            </div>
            <div className="preview-row">
              <span className="preview-row-label">No label</span>
              <WtkRadio name="preview-bare" value="a" defaultChecked />
              <WtkRadio name="preview-bare" value="b" />
            </div>
          </section>

          <section className="preview-section">
            <h2 className="preview-section-title">Controlled</h2>
            <div className="preview-row">
              {['left', 'center', 'right'].map((value) => (
                <WtkRadio
                  key={value}
                  name="preview-zone"
                  value={value}
                  label={value}
                  checked={zone === value}
                  onChange={(event) => setZone(event.target.value)}
                />
              ))}
              <span className="preview-row-label">selected: {zone}</span>
            </div>
          </section>

          <section className="preview-section">
            <h2 className="preview-section-title">Error</h2>
            <div className="preview-row">
              <WtkRadio name="preview-plan" value="free" label="Pick a plan" error="A selection is required" />
            </div>
          </section>
        </section>

        <section className="preview-component">
          <h1 className="preview-component-title">WtkSwitch</h1>

          <section className="preview-section">
            <h2 className="preview-section-title">States</h2>
            <div className="preview-row">
              <span className="preview-row-label">Enabled</span>
              <WtkSwitch label="Off" />
              <WtkSwitch label="On" defaultChecked />
            </div>
            <div className="preview-row">
              <span className="preview-row-label">Disabled</span>
              <WtkSwitch label="Off" disabled />
              <WtkSwitch label="On" defaultChecked disabled />
            </div>
            <div className="preview-row">
              <span className="preview-row-label">No label</span>
              <WtkSwitch />
              <WtkSwitch defaultChecked />
            </div>
          </section>

          <section className="preview-section">
            <h2 className="preview-section-title">Label position</h2>
            <div className="preview-row">
              <WtkSwitch label="Label on the right" defaultChecked />
            </div>
            <div className="preview-row">
              <WtkSwitch
                label="Label on the left, switch pinned right"
                labelPosition="left"
                defaultChecked
                wrapperClassName="preview-field preview-field--wide"
              />
            </div>
          </section>

          <section className="preview-section">
            <h2 className="preview-section-title">Controlled</h2>
            <div className="preview-row">
              <WtkSwitch
                label={isDarkPreferred ? 'Dark theme preferred' : 'Light theme preferred'}
                checked={isDarkPreferred}
                onChange={(event) => setIsDarkPreferred(event.target.checked)}
              />
            </div>
          </section>

          <section className="preview-section">
            <h2 className="preview-section-title">Error</h2>
            <div className="preview-row">
              <WtkSwitch label="Enable syncing" error="Sign in before enabling this" />
            </div>
          </section>
        </section>
      </div>
    </div>
  );
};

export default Playground;
