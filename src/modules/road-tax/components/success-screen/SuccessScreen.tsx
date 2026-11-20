import React from 'react';
import {
    FiCheck,
    FiDownload,
    FiShare2,
    FiClock,
    FiRefreshCw,
    FiArrowRight,
    FiSend,
} from 'react-icons/fi';
import { HiOutlineShieldCheck } from 'react-icons/hi';
import {
    PiFileTextBold,
    PiGlobeBold,
    PiWalletBold,
    PiCreditCardBold,
} from 'react-icons/pi';
import './SuccessScreen.scss';
import { FaCheck } from 'react-icons/fa';
import { BsPatchCheck } from 'react-icons/bs';
import { CiDeliveryTruck } from 'react-icons/ci';

const STATUS_PILLS = [
    { id: 'reference', label: 'Reference Generated', tone: 'green',icon:FaCheck },
    { id: 'renewal', label: 'Renewal Activated', tone: 'blue', icon: BsPatchCheck },
    { id: 'dispatch', label: 'Dispatching Soon', tone: 'orange', icon: CiDeliveryTruck },
];

const RECEIPT_FIELDS = [
    { label: 'Vehicle', value: 'WXD 1234' },
    { label: 'Duration', value: '12 Months' },
    { label: 'Amount Paid', value: 'RM 95.00' },
    { label: 'Exp. Delivery', value: '25-26 Jun 2026' },
    { label: 'Valid Until', value: '31 Jul 2026' },
    { label: 'JPJ Status', value: 'Activated' },
];

const TRACKING_FIELDS = [
    { label: 'Courier Partner', value: 'PosLaju Malaysia' },
    { label: 'Tracking Number', value: 'EX123456789MY' },
    { label: 'Expected Delivery', value: '25-26 Jun 2026' },
    { label: 'Current Status', value: 'Printing in progress' },
    { label: 'Delivery Address', value: 'Jalan Kenanga 5/2, Subang Jaya' },
];

const JOURNEY_STEPS = [
    { id: 'submitted', label: 'Submitted', status: 'done' },
    { id: 'approved', label: 'Approved', status: 'done' },
    { id: 'jpj', label: 'JPJ Processing', status: 'done' },
    { id: 'printing', label: 'Printing', status: 'done' },
    { id: 'packed', label: 'Packed', status: 'active' },
    { id: 'dispatched', label: 'Dispatched', status: 'pending' },
    { id: 'out', label: 'Out for Delivery', status: 'pending' },
    { id: 'delivered', label: 'Delivered', status: 'pending' },
];

const QUICK_ACTIONS = [
    { id: 'download', icon: <FiDownload />, label: 'Download Receipt' },
    { id: 'track', icon: <FiSend />, label: 'Track Delivery' },
    { id: 'share', icon: <FiShare2 />, label: 'Share Receipt' },
    { id: 'wallet', icon: <PiCreditCardBold />, label: 'Add to Wallet' },
    { id: 'history', icon: <FiClock />, label: 'View History' },
];

const SERVICES = [
    {
        id: 'motor',
        icon: <HiOutlineShieldCheck />,
        tone: 'blue',
        title: 'Motor Insurance Renewal',
        desc: 'Policy expires in 5 months',
    },
    {
        id: 'claims',
        icon: <PiFileTextBold />,
        tone: 'orange',
        title: 'Claims Assistance',
        desc: 'File or track a claim',
    },
    {
        id: 'travel',
        icon: <PiGlobeBold />,
        tone: 'green',
        title: 'Travel Insurance',
        desc: 'Explore travel plans',
    },
    {
        id: 'policy',
        icon: <PiWalletBold />,
        tone: 'green',
        title: 'Policy Wallet',
        desc: 'View all active policies',
    },
];

const SuccessScreen = ({ onStartNewRenewal }:any) => {
    return (
        <div className="success-screen">
            <div className="success-screen__hero">
                <span className="success-screen__hero-icon">
                    <FiCheck />
                </span>
                <h2 className="success-screen__hero-title">
                    Road Tax{' '}
                    <span className="success-screen__hero-title--accent">
                        Renewed!
                    </span>
                </h2>
                <p className="success-screen__hero-subtitle">
                    Your sticker is on its way &middot; Delivered to your door
                </p>

                <div className="success-screen__pills">
                    {STATUS_PILLS.map((pill) => {
                        const Icon = pill.icon;

                        return (
                            <span
                                key={pill.id}
                                className={`success-screen__pill success-screen__pill--${pill.tone}`}
                            >
                                <Icon />
                                {pill.label}
                            </span>
                        );
                    })}
                </div>
            </div>

            <div className="success-screen__top-grid">
                <div className="success-screen__receipt-card">
                    <div className="success-screen__receipt-top">
                        <div>
                            <span className="success-screen__receipt-label">
                                Digital Receipt
                            </span>
                            <span className="success-screen__receipt-id">
                                RTX-2026-88421
                            </span>
                        </div>
                        <span className="success-screen__receipt-icon">
                            <PiCreditCardBold />
                        </span>
                    </div>

                    <div className="success-screen__receipt-grid">
                        {RECEIPT_FIELDS.map((f) => (
                            <div className="success-screen__receipt-field" key={f.label}>
                                <span className="success-screen__receipt-field-label">
                                    {f.label}
                                </span>
                                <span className="success-screen__receipt-field-value">
                                    {f.value}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="success-screen__tracking-card">
                    <div className="success-screen__tracking-top">
                        <span className="success-screen__tracking-title">
                            Delivery Tracking
                        </span>
                        <span className="success-screen__tracking-status">
                            <FiClock />
                            In Progress
                        </span>
                    </div>

                    <div className="success-screen__tracking-list">
                        {TRACKING_FIELDS.map((f) => (
                            <div className="success-screen__tracking-row" key={f.label}>
                                <span className="success-screen__tracking-row-label">
                                    {f.label}
                                </span>
                                <span className="success-screen__tracking-row-value">
                                    {f.value}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="success-screen__journey-card">
                <h4 className="success-screen__journey-title">Delivery Journey</h4>

                <div className="success-screen__journey-track">
                    {JOURNEY_STEPS.map((step, index) => (
                        <React.Fragment key={step.id}>
                            <div className="success-screen__journey-step">
                                <span
                                    className={[
                                        'success-screen__journey-dot',
                                        `success-screen__journey-dot--${step.status}`,
                                    ].join(' ')}
                                >
                                    {step.status === 'done' && <FiCheck />}
                                    {step.status === 'active' && (
                                        <span className="success-screen__journey-dot-pulse" />
                                    )}
                                </span>
                                <span
                                    className={[
                                        'success-screen__journey-label',
                                        `success-screen__journey-label--${step.status}`,
                                    ].join(' ')}
                                >
                                    {step.label}
                                </span>
                            </div>
                            {index < JOURNEY_STEPS.length - 1 && (
                                <span
                                    className={[
                                        'success-screen__journey-connector',
                                        step.status === 'done'
                                            ? 'success-screen__journey-connector--done'
                                            : '',
                                    ].join(' ').trim()}
                                />
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>

            <div className="success-screen__section">
                <h4 className="success-screen__section-title">Quick Actions</h4>
                <div className="success-screen__actions-grid">
                    {QUICK_ACTIONS.map((action) => (
                        <button
                            key={action.id}
                            type="button"
                            className="success-screen__action-card"
                        >
                            <span className={`success-screen__action-icon ${action.id} `}>
                                {action.icon}
                            </span>
                            <span className="success-screen__action-label">
                                {action.label}
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            <div className="success-screen__section">
                <h4 className="success-screen__section-title">Explore More Services</h4>
                <p className="success-screen__section-desc">
                    Stay protected across all your insurance needs.
                </p>

                <div className="success-screen__services-grid">
                    {SERVICES.map((service) => (
                        <div className="success-screen__service-card" key={service.id}>
                            <span
                                className={`success-screen__service-icon success-screen__service-icon--${service.tone}`}
                            >
                                {service.icon}
                            </span>
                            <h5 className="success-screen__service-title">
                                {service.title}
                            </h5>
                            <p className="success-screen__service-desc">{service.desc}</p>
                            <a
                                href="#explore"
                                className={`success-screen__service-link success-screen__service-link--${service.tone}`}
                            >
                                Explore
                                <FiArrowRight />
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            <div className="success-screen__footer">
                <button
                    type="button"
                    className="success-screen__restart-btn"
                    onClick={onStartNewRenewal}
                >
                    <FiRefreshCw />
                    Start New Renewal
                </button>
            </div>
        </div>
    );
};

export default SuccessScreen;