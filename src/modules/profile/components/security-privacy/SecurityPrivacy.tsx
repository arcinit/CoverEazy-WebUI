import React, { useState } from 'react';
import { FiShield, FiEye, FiEyeOff, FiChevronRight, FiLogOut } from 'react-icons/fi';
import { LuFingerprint } from 'react-icons/lu';
import './SecurityPrivacy.scss';

interface ToggleItem {
    id: string;
    icon: React.ElementType;
    title: string;
    subtitle: string;
    enabled: boolean;
}

const INITIAL_TOGGLES: ToggleItem[] = [
    { id: '2fa', icon: FiShield, title: 'Two-Factor Authentication', subtitle: 'SMS OTP is active', enabled: true },
    { id: 'biometric', icon: LuFingerprint, title: 'Biometric Login', subtitle: 'Face ID enabled on iPhone 15 Pro', enabled: true },
];

interface SettingItem {
    label: string;
    subtitle: string;
    value?: string;
    badge?: string;
    tall?: boolean;
}

const PREFERENCES: SettingItem[] = [
    { label: 'Language', subtitle: 'English (Malaysia)', tall: true },
    { label: 'Currency', subtitle: 'Malaysian Ringgit (RM)', value: 'RM (MYR)' },
    { label: 'Notifications', subtitle: 'Push, SMS, Email', badge: 'All On' },
];

const SUPPORT_ITEMS: SettingItem[] = [
    { label: 'Help Center', subtitle: 'FAQs, guides, and tutorials' },
    { label: 'Contact Support', subtitle: '1800-88-POLIS · support@CoverEazy.my' },
    { label: 'About CoverEazy', subtitle: 'Version 1.4.2 · Build 2026.06' },
];

const PASSWORD_FIELDS = [
    { id: 'current', label: 'Current Password' },
    { id: 'new', label: 'New Password' },
    { id: 'confirm', label: 'Confirm Password' },
];

const SecuritySettings: React.FC = () => {
    const [toggles, setToggles] = useState<ToggleItem[]>(INITIAL_TOGGLES);
    const [values, setValues] = useState<Record<string, string>>({ current: '', new: '', confirm: '' });
    const [shown, setShown] = useState<Record<string, boolean>>({});

    const handleToggle = (id: string) =>
        setToggles((prev) => prev.map((t) => (t.id === id ? { ...t, enabled: !t.enabled } : t)));

    return (
        <div className="sp-root">
            <div className="sp-root__heading">
                <h2 className="sp-root__title">Security &amp; Privacy</h2>
                <p className="sp-root__subtitle">Protect your account with advanced privacy &amp; security features.</p>
            </div>

            <section className="sp-card sp-card--toggles">
                {toggles.map(({ id, icon: Icon, title, subtitle, enabled }) => (
                    <div className="sp-toggle-row" key={id}>
                        <span className="sp-toggle-row__icon"><Icon /></span>
                        <div className="sp-toggle-row__text">
                            <span className="sp-toggle-row__title">{title}</span>
                            <span className="sp-toggle-row__subtitle">{subtitle}</span>
                        </div>
                        <button
                            type="button"
                            role="switch"
                            aria-checked={enabled}
                            aria-label={title}
                            onClick={() => handleToggle(id)}
                            className={`sp-switch${enabled ? ' sp-switch--on' : ''}`}
                        >
                            <span className="sp-switch__knob" />
                        </button>
                    </div>
                ))}
            </section>

            <section className="sp-card sp-card--password">
                <h3 className="sp-card__head">Change Password</h3>
                <div className="sp-card__pw-body">
                    {PASSWORD_FIELDS.map(({ id, label }) => (
                        <div className="sp-pw" key={id}>
                            <label className="sp-pw__label" htmlFor={`sp-pw-${id}`}>{label}</label>
                            <div className="sp-pw__wrap">
                                <input
                                    id={`sp-pw-${id}`}
                                    type={shown[id] ? 'text' : 'password'}
                                    className="sp-pw__input"
                                    value={values[id]}
                                    onChange={(e) => setValues((p) => ({ ...p, [id]: e.target.value }))}
                                    placeholder="••••••••••"
                                />
                                <button
                                    type="button"
                                    className="sp-pw__eye"
                                    onClick={() => setShown((p) => ({ ...p, [id]: !p[id] }))}
                                    aria-label={`Toggle ${label} visibility`}
                                >
                                    {shown[id] ? <FiEyeOff /> : <FiEye />}
                                </button>
                            </div>
                        </div>
                    ))}
                    <button type="button" className="sp-card__update">Update Password</button>
                </div>
            </section>

            <div className="sp-root__heading sp-root__heading--settings">
                <h2 className="sp-root__title">Settings</h2>
                <p className="sp-root__subtitle">Manage your app preferences and account settings.</p>
            </div>

            <section className="sp-card sp-card--group">
                <h3 className="sp-card__head">Preferences</h3>
                {PREFERENCES.map(({ label, subtitle, value, badge, tall }) => (
                    <div className={`sp-row${tall ? ' sp-row--tall' : ''}`} key={label}>
                        <div className="sp-row__text">
                            <span className="sp-row__title">{label}</span>
                            <span className="sp-row__subtitle">{subtitle}</span>
                        </div>
                        {value && <span className="sp-row__value">{value}</span>}
                        {badge && <span className="sp-row__badge">{badge}</span>}
                    </div>
                ))}
            </section>

            <section className="sp-card sp-card--group sp-card--support">
                <h3 className="sp-card__head">Support</h3>
                {SUPPORT_ITEMS.map(({ label, subtitle }) => (
                    <button type="button" className="sp-row sp-row--action" key={label}>
                        <div className="sp-row__text">
                            <span className="sp-row__title">{label}</span>
                            <span className="sp-row__subtitle">{subtitle}</span>
                        </div>
                        <FiChevronRight className="sp-row__chevron" />
                    </button>
                ))}
            </section>

            <button type="button" className="sp-signout">
                <FiLogOut />
                Sign Out of CoverEazy
            </button>
        </div>
    );
};

export default SecuritySettings;
