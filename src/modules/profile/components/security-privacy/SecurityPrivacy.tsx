import React, { useState } from 'react';
import {
    FiShield, FiSmartphone, FiEye, FiEyeOff, FiChevronRight,
    FiHelpCircle, FiHeadphones, FiInfo, FiLogOut,
} from 'react-icons/fi';
import './SecurityPrivacy.scss';

// ---------------------------------------------------------------------
// Static data
// ---------------------------------------------------------------------
interface ToggleItem {
    id: string;
    icon: React.ElementType;
    title: string;
    subtitle: string;
    enabled: boolean;
}

const INITIAL_TOGGLES: ToggleItem[] = [
    {
        id: '2fa',
        icon: FiShield,
        title: 'Two-Factor Authentication',
        subtitle: 'SMS OTP is active',
        enabled: true,
    },
    {
        id: 'biometric',
        icon: FiSmartphone,
        title: 'Biometric Login',
        subtitle: 'Face ID enabled on iPhone 15 Pro',
        enabled: true,
    },
];

interface PreferenceItem {
    label: string;
    subtitle: string;
    value?: string;
    badge?: string;
}

const PREFERENCES: PreferenceItem[] = [
    { label: 'Language', subtitle: 'English (Malaysia)' },
    { label: 'Currency', subtitle: 'Malaysian Ringgit (RM)', value: 'RM (MYR)' },
    { label: 'Notifications', subtitle: 'Push, SMS, Email', badge: 'All On' },
];

interface SupportItem {
    icon: React.ElementType;
    label: string;
    subtitle: string;
}

const SUPPORT_ITEMS: SupportItem[] = [
    { icon: FiHelpCircle, label: 'Help Center', subtitle: 'FAQs, guides, and tutorials' },
    { icon: FiHeadphones, label: 'Contact Support', subtitle: '1800-88-POLIS · support@CoverEazy.my' },
    { icon: FiInfo, label: 'About CoverEazy', subtitle: 'Version 1.4.2 · Build 2026.06' },
];

// ---------------------------------------------------------------------
// SecuritySettings
// ---------------------------------------------------------------------
const SecuritySettings: React.FC = () => {
    const [toggles, setToggles] = useState<ToggleItem[]>(INITIAL_TOGGLES);

    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showCurrent, setShowCurrent] = useState(false);
    const [showNew, setShowNew] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const handleToggle = (id: string) => {
        setToggles((prev) =>
            prev.map((item) => (item.id === id ? { ...item, enabled: !item.enabled } : item)),
        );
    };

    const securityScore = 88;

    return (
        <div className="security-settings">
            {/* ---------- Security & Privacy ---------- */}
            <div className="security-settings__heading">
                <h2 className="security-settings__title">Security &amp; Privacy</h2>
                <p className="security-settings__subtitle">
                    Protect your account with advanced privacy &amp; security features.
                </p>
            </div>

            <section className="security-settings__card">
                <div className="security-score">
                    <div className="security-score__ring">
                        <span className="security-score__value">{securityScore}</span>
                    </div>
                    <div className="security-score__text">
                        <span className="security-score__title">Security Score: Strong</span>
                        <span className="security-score__hint">Enable 2FA app to reach 100%</span>
                    </div>
                </div>

                <div className="toggle-list">
                    {toggles.map(({ id, icon: Icon, title, subtitle, enabled }) => (
                        <div className="toggle-row" key={id}>
                            <span className="toggle-row__icon">
                                <Icon />
                            </span>
                            <div className="toggle-row__text">
                                <span className="toggle-row__title">{title}</span>
                                <span className="toggle-row__subtitle">{subtitle}</span>
                            </div>
                            <button
                                type="button"
                                role="switch"
                                aria-checked={enabled}
                                onClick={() => handleToggle(id)}
                                className={`toggle-switch${enabled ? ' toggle-switch--on' : ''}`}
                            >
                                <span className="toggle-switch__knob" />
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* ---------- Change Password ---------- */}
            <section className="security-settings__card">
                <h3 className="security-settings__card-title">Change Password</h3>

                <div className="password-field">
                    <label className="password-field__label">Current Password</label>
                    <div className="password-field__input-wrap">
                        <input
                            type={showCurrent ? 'text' : 'password'}
                            className="password-field__input"
                            value={currentPassword}
                            onChange={(event) => setCurrentPassword(event.target.value)}
                            placeholder="••••••••••"
                        />
                        <button
                            type="button"
                            className="password-field__toggle"
                            onClick={() => setShowCurrent((prev) => !prev)}
                            aria-label="Toggle current password visibility"
                        >
                            {showCurrent ? <FiEyeOff /> : <FiEye />}
                        </button>
                    </div>
                </div>

                <div className="password-field">
                    <label className="password-field__label">New Password</label>
                    <div className="password-field__input-wrap">
                        <input
                            type={showNew ? 'text' : 'password'}
                            className="password-field__input"
                            value={newPassword}
                            onChange={(event) => setNewPassword(event.target.value)}
                            placeholder="••••••••••"
                        />
                        <button
                            type="button"
                            className="password-field__toggle"
                            onClick={() => setShowNew((prev) => !prev)}
                            aria-label="Toggle new password visibility"
                        >
                            {showNew ? <FiEyeOff /> : <FiEye />}
                        </button>
                    </div>
                </div>

                <div className="password-field">
                    <label className="password-field__label">Confirm Password</label>
                    <div className="password-field__input-wrap">
                        <input
                            type={showConfirm ? 'text' : 'password'}
                            className="password-field__input"
                            value={confirmPassword}
                            onChange={(event) => setConfirmPassword(event.target.value)}
                            placeholder="••••••••••"
                        />
                        <button
                            type="button"
                            className="password-field__toggle"
                            onClick={() => setShowConfirm((prev) => !prev)}
                            aria-label="Toggle confirm password visibility"
                        >
                            {showConfirm ? <FiEyeOff /> : <FiEye />}
                        </button>
                    </div>
                </div>

                <button type="button" className="security-settings__update-btn">
                    Update Password
                </button>
            </section>

            {/* ---------- Settings ---------- */}
            <div className="security-settings__heading">
                <h2 className="security-settings__title security-settings__title--sm">Settings</h2>
                <p className="security-settings__subtitle">
                    Manage your app preferences and account settings.
                </p>
            </div>

            <section className="settings-group">
                <span className="settings-group__label">Preferences</span>
                <div className="settings-group__rows">
                    {PREFERENCES.map(({ label, subtitle, value, badge }) => (
                        <div className="settings-row" key={label}>
                            <div className="settings-row__text">
                                <span className="settings-row__title">{label}</span>
                                <span className="settings-row__subtitle">{subtitle}</span>
                            </div>
                            {value && <span className="settings-row__value">{value}</span>}
                            {badge && <span className="settings-row__badge">{badge}</span>}
                        </div>
                    ))}
                </div>
            </section>

            <section className="settings-group">
                <span className="settings-group__label">Support</span>
                <div className="settings-group__rows">
                    {SUPPORT_ITEMS.map(({ label, subtitle }) => (
                        <button type="button" className="settings-row settings-row--action" key={label}>
                            <div className="settings-row__text">
                                <span className="settings-row__title">{label}</span>
                                <span className="settings-row__subtitle">{subtitle}</span>
                            </div>
                            <FiChevronRight className="settings-row__chevron" />
                        </button>
                    ))}
                </div>
            </section>

            <button type="button" className="security-settings__signout">
                <FiLogOut />
                Sign Out of CoverEazy
            </button>
        </div>
    );
};

export default SecuritySettings;