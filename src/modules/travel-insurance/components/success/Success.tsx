import React from 'react';
import {
    LuCheck as FiCheck,
    LuZap as FiZap,
    LuGlobe as FiGlobe,
    LuReceiptText as FiReceipt,
    LuPhone as FiPhone,
    LuDownload as FiDownload,
    LuShare2 as FiShare2,
    LuWallet as FiWallet,
    LuBuilding2 as FiBuilding,
    LuNavigation as FiNavigation,
} from 'react-icons/lu';
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
    { id: 'wallet', icon: FiWallet, tone: 'green', label: 'Add to Wallet' },
    { id: 'hotline', icon: FiPhone, tone: 'orange', label: 'Emergency Hotline' },
    { id: 'embassy', icon: FiBuilding, tone: 'purple', label: 'Nearest Embassy' },
];

const Success = ({ onReturnHome }:any) => {
    return (
        <div className="tr-done">
            {/* Headline */}
            <header className="tr-done__header">
                <span className="tr-done__check-badge">
                    <FiCheck />
                </span>
                <h1 className="tr-done__title">
                    Congratulations!{' '}
                    <span className="tr-done__title-accent">You&apos;re Covered.</span>
                </h1>
                <p className="tr-done__subtitle">
                    Travel Insurance policy issued · Have a wonderful trip! ✈️
                </p>
                <div className="tr-done__badges">
                    {HEADLINE_BADGES.map((badge) => {
                        const Icon = badge.icon;
                        return (
                            <span className={`tr-done__badge ${badge.id}`} key={badge.id}>
                                <Icon />
                                {badge.label}
                            </span>
                        );
                    })}
                </div>
            </header>

            {/* Policy + emergency contacts */}
            <div className="tr-done__top-grid">
                <section className="tr-done-policy">
                    <div className="tr-done-policy__header">
                        <div>
                            <span className="tr-done-policy__label">Travel Policy</span>
                            <span className="tr-done-policy__number">TRV-2026-44821</span>
                        </div>
                        <span className="tr-done-policy__icon">
                            <FiReceipt />
                        </span>
                    </div>

                    <div className="tr-done-policy__details">
                        {POLICY_DETAILS.map((detail) => (
                            <div className="tr-done-policy__detail" key={detail.label}>
                                <span className="tr-done-policy__detail-label">
                                    {detail.label}
                                </span>
                                <span className="tr-done-policy__detail-value">
                                    {detail.value}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="tr-done-policy__actions">
                        <button className="tr-done-policy__action-btn" type="button">
                            <FiDownload />
                            Download
                        </button>
                        <button className="tr-done-policy__action-btn" type="button">
                            <FiShare2 />
                            Share
                        </button>
                        <button className="tr-done-policy__action-btn" type="button">
                            <FiWallet />
                            Add to Wallet
                        </button>
                    </div>
                </section>

                <section className="tr-done-contacts">
                    <div className="tr-done-contacts__header">
                        <FiPhone className="tr-done-contacts__header-icon" />
                        <h2 className="tr-done-contacts__title">Emergency Contacts</h2>
                        <span className="tr-done-contacts__badge">24/7</span>
                    </div>

                    <div className="tr-done-contacts__list">
                        {EMERGENCY_CONTACTS.map((contact) => (
                            <div className="tr-done-contact" key={contact.id}>
                                <div className="tr-done-contact__copy">
                                    <span className="tr-done-contact__name">{contact.name}</span>
                                    <span
                                        className={`tr-done-contact__number tr-done-contact__number--${contact.tone}`}
                                    >
                                        {contact.number}
                                    </span>
                                </div>
                                <span
                                    className={`tr-done-contact__phone-btn tr-done-contact__phone-btn--${contact.tone}`}
                                >
                                    <FiPhone />
                                </span>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            {/* Pre-departure checklist */}
            <section className="tr-done-checklist">
                <h2 className="tr-done-checklist__title">Pre-Departure Checklist</h2>
                <div className="tr-done-checklist__grid">
                    {CHECKLIST_ITEMS.map((item) => (
                        <div className="tr-done-check" key={item}>
                            <span className="tr-done-check__check">
                                <FiCheck />
                            </span>
                            {item}
                        </div>
                    ))}
                </div>
            </section>

            {/* Quick actions */}
            <section className="tr-done__quick">
                <h2 className="tr-done__section-title">Quick Actions</h2>
                <div className="tr-done__quick-grid">
                    {QUICK_ACTIONS.map((action) => {
                        const Icon = action.icon;
                        return (
                            <button
                                className="tr-done-qa"
                                type="button"
                                key={action.id}
                            >
                                <span
                                    className={`tr-done-qa__icon tr-done-qa__icon--${action.tone}`}
                                >
                                    <Icon />
                                </span>
                                <span className="tr-done-qa__label">{action.label}</span>
                            </button>
                        );
                    })}
                </div>
            </section>

            <div className="tr-done__footer">
                <button
                    className="tr-done__home-btn"
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