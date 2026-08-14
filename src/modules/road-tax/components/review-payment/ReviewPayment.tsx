import React, { useState } from 'react';
import {
    FiCalendar,
    FiMapPin,
    FiCheck,
    FiLock,
    FiCreditCard,
    FiGlobe,
    FiSmartphone,
} from 'react-icons/fi';
import { PiCarProfileBold, PiLightningBold, PiWalletBold } from 'react-icons/pi';
import { HiOutlineShieldCheck } from 'react-icons/hi';
import './ReviewPayment.scss';

const SUMMARY_CARDS = [
    {
        id: 'vehicle',
        icon: <PiCarProfileBold />,
        label: 'Vehicle',
        value: 'WXD 1234 · Toyota Camry 2.5V',
    },
    {
        id: 'duration',
        icon: <FiCalendar />,
        label: 'Duration',
        value: '12 Months · Until 31 Jul 2026',
    },
    {
        id: 'delivery',
        icon: <PiLightningBold />,
        label: 'Delivery',
        value: 'Express Delivery · 1-2 Business Days',
    },
    {
        id: 'address',
        icon: <FiMapPin />,
        label: 'Address',
        value: 'No. 12, Jalan Kenanga 5/2, Subang Jaya',
    },
];

const PAYMENT_METHODS = [
    {
        id: 'card',
        icon: <FiCreditCard />,
        title: 'Credit / Debit Card',
        subtitle: 'Visa, Mastercard, Amex',
    },
    {
        id: 'fpx',
        icon: <FiGlobe />,
        title: 'FPX Online Banking',
        subtitle: '50+ Malaysian banks',
    },
    {
        id: 'apple',
        icon: <FiSmartphone />,
        title: 'Apple Pay',
        subtitle: 'Face ID · Touch ID',
    },
    {
        id: 'google',
        icon: <FiSmartphone />,
        title: 'Google Pay',
        subtitle: 'Fingerprint · PIN',
    },
    {
        id: 'ewallet',
        icon: <PiWalletBold />,
        title: 'E-Wallet',
        subtitle: "Touch 'n Go, GrabPay, Boost",
    },
];

const ORDER_ROWS = [
    { label: 'Government Fee', value: 'RM 90.00' },
    { label: 'Service Fee', value: 'RM 5.00' },
    { label: 'Delivery Fee', value: 'RM 10.00' },
    { label: 'SST (0%)', value: 'RM 0.00' },
];

const ReviewPayment = ({ onContinue }:any) => {
    const [method, setMethod] = useState('card');
    const [cardNumber, setCardNumber] = useState('');
    const [cardHolder, setCardHolder] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvv, setCvv] = useState('');

    const digits = cardNumber.replace(/\D/g, '').padEnd(16, '•');
    const cardNumberGroups = [
        digits.slice(0, 4),
        digits.slice(4, 8),
        digits.slice(8, 12),
        digits.slice(12, 16),
    ];

    return (
        <div className="review-payment">
            <div className="review-payment__heading">
                <h2 className="review-payment__title">
                    Review your{' '}
                    <span className="review-payment__title--accent">renewal</span>
                </h2>
                <p className="review-payment__subtitle">
                    Confirm the details before payment.
                </p>
            </div>

            <div className="review-payment__grid">
                {/* Left column */}
                <div className="review-payment__main">
                    {/* Summary info cards */}
                    <div className="review-payment__info-grid">
                        {SUMMARY_CARDS.map((card) => (
                            <div className="review-payment__info-card" key={card.id}>
                                <span className="review-payment__info-icon">{card.icon}</span>
                                <div className="review-payment__info-body">
                                    <span className="review-payment__info-label">
                                        {card.label}
                                    </span>
                                    <span className="review-payment__info-value">
                                        {card.value}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Payment method */}
                    <section className="review-payment__section">
                        <h4 className="review-payment__section-title">Payment Method</h4>

                        <div className="review-payment__methods-grid">
                            {PAYMENT_METHODS.map((m) => {
                                const isActive = m.id === method;
                                return (
                                    <button
                                        key={m.id}
                                        type="button"
                                        onClick={() => setMethod(m.id)}
                                        className={[
                                            'review-payment__method-card',
                                            isActive ? 'review-payment__method-card--active' : '',
                                        ].join(' ').trim()}
                                    >
                                        <span className="review-payment__method-icon">
                                            {m.icon}
                                        </span>
                                        <div className="review-payment__method-body">
                                            <span className="review-payment__method-title">
                                                {m.title}
                                            </span>
                                            <span className="review-payment__method-subtitle">
                                                {m.subtitle}
                                            </span>
                                        </div>
                                        {isActive && (
                                            <span className="review-payment__method-check">
                                                <FiCheck />
                                            </span>
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                    </section>

                    {/* Card preview + form (only relevant for card payment, kept visible per design) */}
                    <section className="review-payment__card-panel">
                        <div className="review-payment__card-preview">
                            <div className="review-payment__card-preview-top">
                                <span className="review-payment__card-dots">
                                    <span />
                                    <span />
                                    <span />
                                </span>
                                <span className="review-payment__card-brand">VISA</span>
                            </div>

                            <div className="review-payment__card-number">
                                {cardNumberGroups.map((chunk, i) => (
                                    <span key={i}>{chunk}</span>
                                ))}
                            </div>

                            <div className="review-payment__card-preview-bottom">
                                <div className="review-payment__card-field">
                                    <span className="review-payment__card-field-label">
                                        Card Holder
                                    </span>
                                    <span className="review-payment__card-field-value">
                                        {cardHolder || 'YOUR NAME'}
                                    </span>
                                </div>
                                <div className="review-payment__card-field review-payment__card-field--right">
                                    <span className="review-payment__card-field-label">
                                        Expires
                                    </span>
                                    <span className="review-payment__card-field-value">
                                        {expiry || 'MM/YY'}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="review-payment__form-grid">
                            <label className="review-payment__field">
                                <span className="review-payment__field-label">
                                    Card Number
                                </span>
                                <input
                                    type="text"
                                    className="review-payment__field-input"
                                    placeholder="1234 5678 9012 3456"
                                    value={cardNumber}
                                    onChange={(e) => setCardNumber(e.target.value)}
                                />
                            </label>

                            <label className="review-payment__field">
                                <span className="review-payment__field-label">
                                    Cardholder Name
                                </span>
                                <input
                                    type="text"
                                    className="review-payment__field-input"
                                    placeholder="As printed on card"
                                    value={cardHolder}
                                    onChange={(e) => setCardHolder(e.target.value)}
                                />
                            </label>

                            <label className="review-payment__field">
                                <span className="review-payment__field-label">Expiry</span>
                                <input
                                    type="text"
                                    className="review-payment__field-input"
                                    placeholder="MM/YY"
                                    value={expiry}
                                    onChange={(e) => setExpiry(e.target.value)}
                                />
                            </label>

                            <label className="review-payment__field">
                                <span className="review-payment__field-label">CVV</span>
                                <input
                                    type="password"
                                    className="review-payment__field-input"
                                    placeholder="•••"
                                    maxLength={4}
                                    value={cvv}
                                    onChange={(e) => setCvv(e.target.value)}
                                />
                            </label>
                        </div>

                        <div className="review-payment__trust-row">
                            <span className="review-payment__trust-item">
                                <FiLock />
                                PCI-DSS
                            </span>
                            <span className="review-payment__trust-item">
                                <FiCheck />
                                SSL Secured
                            </span>
                            <span className="review-payment__trust-item">
                                <HiOutlineShieldCheck />
                                Fraud Protection
                            </span>
                        </div>
                    </section>
                </div>

                {/* Sidebar */}
                <aside className="review-payment__sidebar">
                    <div className="review-payment__summary-card">
                        <span className="review-payment__summary-title">
                            Order Summary
                        </span>

                        <div className="review-payment__summary-list">
                            {ORDER_ROWS.map((row) => (
                                <div className="review-payment__summary-row" key={row.label}>
                                    <span className="review-payment__summary-label">
                                        {row.label}
                                    </span>
                                    <span className="review-payment__summary-value">
                                        {row.value}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="review-payment__summary-divider" />

                        <div className="review-payment__summary-total-row">
                            <span className="review-payment__summary-total-label">
                                Total
                            </span>
                            <span className="review-payment__summary-total-value">
                                <span className="review-payment__summary-total-currency">
                                    RM
                                </span>{' '}
                                <span className="review-payment__figure">105.00</span>
                            </span>
                        </div>

                        <button
                            type="button"
                            className="review-payment__cta"
                            onClick={onContinue}
                        >
                            <FiLock />
                            Proceed to Payment
                        </button>

                        <p className="review-payment__ssl-note">
                            256-bit SSL encryption &middot; Powered by Stripe
                        </p>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default ReviewPayment;