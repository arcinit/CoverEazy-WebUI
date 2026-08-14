import React from 'react';
import {
    FiCheck,
    FiZap,
    FiGlobe,
    FiDollarSign,
    FiPhone,
    FiDownload,
    FiShare2,
    FiCreditCard,
    FiFileText,
    FiNavigation,
} from 'react-icons/fi';
import './Success.scss';

/** Badges shown under the headline. */
const HEADLINE_BADGES = [
    { id: 'issued', icon: FiCheck, label: 'Policy Issued' },
    { id: 'instant', icon: FiZap, label: 'Instant Coverage' },
    { id: 'global', icon: FiGlobe, label: 'Global Protection' },
];

/** Policy detail rows, rendered two per row. */
const POLICY_DETAILS = [
    { label: 'Policyholder', value: 'Ahmad Rizal' },
    { label: 'Destination', value: 'Japan' },
    { label: 'Coverage', value: 'Premium Plan' },
    { label: 'Travellers', value: '2 pax' },
    { label: 'Travel Dates', value: '25 Jun 2026' },
    { label: 'Insurer', value: 'AXA Travel' },
    { label: 'Premium Paid', value: 'RM 348' },
    { label: 'Status', value: 'Active' },
];

/** Emergency contact numbers. */
const EMERGENCY_CONTACTS = [
    {
        id: 'axa',
        name: 'AXA Emergency Hotline',
        number: '+603-2170 8282',
        tone: 'green',
    },
    {
        id: 'embassy',
        name: 'Malaysian Embassy (Japan)',
        number: '+81-3-3476-3840',
        tone: 'blue',
    },
    {
        id: 'medical',
        name: 'Emergency Medical',
        number: '+81-3-5285-8181',
        tone: 'orange',
    },
    {
        id: 'claims',
        name: 'CoverEazy Claims',
        number: '1800-88-7788',
        tone: 'green',
    },
];

/** Pre-departure checklist items. */
const CHECKLIST_ITEMS = [
    'Passport (expiry > 6 months)',
    'Printed policy document',
    'Emergency contact numbers',
    'Travel adaptor',
    'Foreign currency',
    'Hotel booking confirmation',
];

/** Quick action shortcuts. */
const QUICK_ACTIONS = [
    { id: 'download', icon: FiDownload, tone: 'green', label: 'Download Policy' },
    { id: 'share', icon: FiShare2, tone: 'blue', label: 'Share Policy' },
    { id: 'wallet', icon: FiCreditCard, tone: 'green', label: 'Add to Wallet' },
    { id: 'hotline', icon: FiPhone, tone: 'orange', label: 'Emergency Hotline' },
    { id: 'embassy', icon: FiFileText, tone: 'purple', label: 'Nearest Embassy' },
];

const Success = ({ onReturnHome }:any) => {
    return (
        <div className="success">
            {/* Headline */}
            <header className="success__header">
                <span className="success__check-badge">
                    <FiCheck />
                </span>
                <h1 className="success__title">
                    Congratulations!{' '}
                    <span className="success__title-accent">You&apos;re Covered.</span>
                </h1>
                <p className="success__subtitle">
                    Travel Insurance policy issued · Have a wonderful trip! ✈️
                </p>
                <div className="success__badges">
                    {HEADLINE_BADGES.map((badge) => {
                        const Icon = badge.icon;
                        return (
                            <span className={`success__badge ${badge.id}`} key={badge.id}>
                                <Icon />
                                {badge.label}
                            </span>
                        );
                    })}
                </div>
            </header>

            {/* Policy + emergency contacts */}
            <div className="success__top-grid">
                <section className="policy-card">
                    <div className="policy-card__header">
                        <div>
                            <span className="policy-card__label">Travel Policy</span>
                            <span className="policy-card__number">TRV-2026-44821</span>
                        </div>
                        <span className="policy-card__icon">
                            <FiDollarSign />
                        </span>
                    </div>

                    <div className="policy-card__details">
                        {POLICY_DETAILS.map((detail) => (
                            <div className="policy-card__detail" key={detail.label}>
                                <span className="policy-card__detail-label">
                                    {detail.label}
                                </span>
                                <span className="policy-card__detail-value">
                                    {detail.value}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="policy-card__actions">
                        <button className="policy-card__action-btn" type="button">
                            <FiDownload />
                            Download
                        </button>
                        <button className="policy-card__action-btn" type="button">
                            <FiShare2 />
                            Share
                        </button>
                        <button className="policy-card__action-btn" type="button">
                            <FiCreditCard />
                            Add to Wallet
                        </button>
                    </div>
                </section>

                <section className="contacts-card">
                    <div className="contacts-card__header">
                        <FiPhone className="contacts-card__header-icon" />
                        <h2 className="contacts-card__title">Emergency Contacts</h2>
                        <span className="contacts-card__badge">24/7</span>
                    </div>

                    <div className="contacts-card__list">
                        {EMERGENCY_CONTACTS.map((contact) => (
                            <div className="contact-row" key={contact.id}>
                                <div className="contact-row__copy">
                                    <span className="contact-row__name">{contact.name}</span>
                                    <span
                                        className={`contact-row__number contact-row__number--${contact.tone}`}
                                    >
                                        {contact.number}
                                    </span>
                                </div>
                                <span
                                    className={`contact-row__phone-btn contact-row__phone-btn--${contact.tone}`}
                                >
                                    <FiPhone />
                                </span>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            {/* Pre-departure checklist */}
            <section className="checklist-card">
                <h2 className="checklist-card__title">Pre-Departure Checklist</h2>
                <div className="checklist-card__grid">
                    {CHECKLIST_ITEMS.map((item) => (
                        <div className="checklist-item" key={item}>
                            <span className="checklist-item__check">
                                <FiCheck />
                            </span>
                            {item}
                        </div>
                    ))}
                </div>
            </section>

            {/* Quick actions */}
            <section className="success__quick-actions">
                <h2 className="success__section-title">Quick Actions</h2>
                <div className="success__quick-actions-grid">
                    {QUICK_ACTIONS.map((action) => {
                        const Icon = action.icon;
                        return (
                            <button
                                className="quick-action"
                                type="button"
                                key={action.id}
                            >
                                <span
                                    className={`quick-action__icon quick-action__icon--${action.tone}`}
                                >
                                    <Icon />
                                </span>
                                <span className="quick-action__label">{action.label}</span>
                            </button>
                        );
                    })}
                </div>
            </section>

            <div className="success__footer">
                <button
                    className="success__home-btn"
                    type="button"
                    onClick={onReturnHome}
                >
                    <FiNavigation />
                    Return to Homepage
                </button>
            </div>
        </div>
    );
};




export default Success;