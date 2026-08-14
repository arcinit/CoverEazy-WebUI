import React, { useState } from 'react';
import {
    FiMapPin,
    FiShield,
    FiCalendar,
    FiUsers,
    FiCheck,
    FiCheckCircle,
    FiCreditCard,
    FiGlobe,
    FiSmartphone,
    FiLock,
} from 'react-icons/fi';
import { HiOutlineShieldCheck } from 'react-icons/hi';
import { MdPayment } from 'react-icons/md';
import { BiWallet } from 'react-icons/bi';
import './Checkout.scss';

/** Trip overview summary items. */
const TRIP_OVERVIEW = [
    { id: 'destination', icon: FiMapPin, label: 'Destination', value: 'Japan' },
    { id: 'coverage', icon: FiShield, label: 'Coverage Plan', value: 'Premium Plan' },
    { id: 'period', icon: FiCalendar, label: 'Travel Period', value: '25 Jun – 2 Jul 2026' },
    { id: 'travellers', icon: FiUsers, label: 'Total Travellers', value: '2 pax (2A)' },
];

/** Insured traveller records. */
const TRAVELLERS = [
    {
        id: 'traveller-1',
        initials: 'AR',
        name: 'Ahmad Rizal bin Ismail',
        primary: true,
        type: 'Adult',
        passport: 'A12345678',
        dob: '15 Mar 1985',
        nationality: 'Malaysian',
        medical: 'None',
    },
    {
        id: 'traveller-2',
        initials: 'AD',
        name: 'Siti Rahimah binti Ismail',
        primary: false,
        type: 'Adult',
        passport: 'A12345679',
        dob: '22 Aug 1987',
        nationality: 'Malaysian',
        medical: 'None',
    },
];

/** Selectable payment methods. */
const PAYMENT_METHODS = [
    {
        id: 'card',
        icon: FiCreditCard,
        title: 'Credit / Debit Card',
        subtitle: 'Visa, Mastercard, Amex',
    },
    {
        id: 'fpx',
        icon: FiGlobe,
        title: 'FPX Online Banking',
        subtitle: '50+ Malaysian banks',
    },
    {
        id: 'apple-pay',
        icon: FiSmartphone,
        title: 'Apple Pay',
        subtitle: 'Face ID · Touch ID',
    },
    {
        id: 'google-pay',
        icon: MdPayment,
        title: 'Google Pay',
        subtitle: 'Fingerprint · PIN',
    },
    {
        id: 'e-wallet',
        icon: BiWallet,
        title: 'E-Wallet',
        subtitle: "Touch 'n Go, GrabPay, Boost",
    },
];

/** Trust badges shown under the card form. */
const TRUST_BADGES = [
    { id: 'pci', icon: FiLock, label: 'PCI-DSS' },
    { id: 'ssl', icon: HiOutlineShieldCheck, label: 'SSL Secured' },
    { id: 'fraud', icon: FiCheckCircle, label: 'Fraud Protection' },
];

const BASE_PREMIUM = 290;
const SST_RATE = 0.08;

const Checkout = ({ onContinue }:any) => {
    const [contact, setContact] = useState({
        name: 'Siti Rahimah binti Ismail',
        relationship: 'Spouse',
        phone: '',
        email: '',
    });
    const [selectedMethod, setSelectedMethod] = useState('card');
    const [card, setCard] = useState({
        number: '',
        holder: '',
        expiry: '',
        cvv: '',
    });
    const [promoCode, setPromoCode] = useState('');
    const [agreed, setAgreed] = useState(false);

    const sst = Math.round(BASE_PREMIUM * SST_RATE);
    const total = BASE_PREMIUM + sst;

    const handleContactChange = (field:any) => (event:any) => {
        setContact((prev) => ({ ...prev, [field]: event.target.value }));
    };

    const handleCardChange = (field:any) => (event:any) => {
        setCard((prev) => ({ ...prev, [field]: event.target.value }));
    };

    const handlePay = () => {
        if (!agreed) return;
        onContinue({ contact, selectedMethod, card, promoCode, total });
    };

    return (
        <div className="checkout">
            <header className="checkout__header">
                <h1 className="checkout__title">Checkout</h1>
                <p className="checkout__subtitle">
                    Review all details carefully before confirming your purchase.
                </p>
            </header>

            <div className="checkout__body">
                <div className="checkout__main">
                    {/* Trip overview */}
                    <section className="checkout__card">
                        <div className="checkout__card-header">
                            <h2 className="checkout__card-title">Trip Overview</h2>
                            <span className="checkout__badge checkout__badge--confirmed">
                                <FiCheck />
                                Confirmed
                            </span>
                        </div>
                        <div className="checkout__overview-grid">
                            {TRIP_OVERVIEW.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <div className="overview-item" key={item.id}>
                                        <span className="overview-item__icon">
                                            <Icon />
                                        </span>
                                        <div className="overview-item__copy">
                                            <span className="overview-item__label">
                                                {item.label}
                                            </span>
                                            <span className="overview-item__value">
                                                {item.value}
                                            </span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </section>

                    {/* Insured travellers */}
                    <section className="checkout__card">
                        <div className="checkout__card-header">
                            <h2 className="checkout__card-title">Insured Travellers</h2>
                            <span className="checkout__badge checkout__badge--muted">
                                {TRAVELLERS.length} travellers
                            </span>
                        </div>

                        <div className="travellers-table">
                            <div className="travellers-table__head">
                                <span>Traveller</span>
                                <span>Type</span>
                                <span>Passport No.</span>
                                <span>Date of Birth</span>
                                <span>Nationality</span>
                                <span>Medical</span>
                            </div>
                            {TRAVELLERS.map((traveller) => (
                                <div className="travellers-table__row" key={traveller.id}>
                                    <span className="travellers-table__traveller">
                                        <span className="travellers-table__avatar">
                                            {traveller.initials}
                                        </span>
                                        <span className="travellers-table__name-block">
                                            <span className="travellers-table__name">
                                                {traveller.name}
                                            </span>
                                            {traveller.primary && (
                                                <span className="travellers-table__primary-tag">
                                                    Primary Policyholder
                                                </span>
                                            )}
                                        </span>
                                    </span>
                                    <span>
                                        <span className="travellers-table__type-pill">
                                            {traveller.type}
                                        </span>
                                    </span>
                                    <span>{traveller.passport}</span>
                                    <span>{traveller.dob}</span>
                                    <span>{traveller.nationality}</span>
                                    <span className="travellers-table__medical">
                                        <FiCheck />
                                        {traveller.medical}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="checkout__plan-strip">
                            <span className="checkout__plan-strip-label">
                                <FiShield />
                                Premium Plan · RM 145/pax × {TRAVELLERS.length} travellers
                            </span>
                            <span className="checkout__plan-strip-value">
                                RM {BASE_PREMIUM}
                            </span>
                        </div>
                    </section>

                    {/* Emergency contact */}
                    <section className="checkout__card">
                        <div className="checkout__card-header">
                            <h2 className="checkout__card-title">Emergency Contact</h2>
                        </div>
                        <div className="checkout__form-grid">
                            <label className="form-field">
                                <span className="form-field__label">Contact Name</span>
                                <input
                                    className="form-field__input"
                                    type="text"
                                    value={contact.name}
                                    onChange={handleContactChange('name')}
                                    placeholder="Siti Rahimah binti Ismail"
                                />
                            </label>
                            <label className="form-field">
                                <span className="form-field__label">Relationship</span>
                                <input
                                    className="form-field__input"
                                    type="text"
                                    value={contact.relationship}
                                    onChange={handleContactChange('relationship')}
                                    placeholder="Spouse"
                                />
                            </label>
                            <label className="form-field">
                                <span className="form-field__label">Phone Number</span>
                                <input
                                    className="form-field__input"
                                    type="tel"
                                    value={contact.phone}
                                    onChange={handleContactChange('phone')}
                                    placeholder="+601X-XXX XXXX"
                                />
                            </label>
                            <label className="form-field">
                                <span className="form-field__label">Email</span>
                                <input
                                    className="form-field__input"
                                    type="email"
                                    value={contact.email}
                                    onChange={handleContactChange('email')}
                                    placeholder="siti@example.com"
                                />
                            </label>
                        </div>
                    </section>

                    {/* Payment method */}
                    <section className="checkout__card">
                        <div className="checkout__card-header">
                            <h2 className="checkout__card-title">Payment Method</h2>
                        </div>

                        <div className="checkout__methods-grid">
                            {PAYMENT_METHODS.map((method) => {
                                const Icon = method.icon;
                                const isSelected = method.id === selectedMethod;
                                return (
                                    <button
                                        key={method.id}
                                        type="button"
                                        className={[
                                            'method-option',
                                            isSelected ? 'method-option--selected' : '',
                                        ].join(' ').trim()}
                                        onClick={() => setSelectedMethod(method.id)}
                                    >
                                        <span className="method-option__icon">
                                            <Icon />
                                        </span>
                                        <span className="method-option__copy">
                                            <span className="method-option__title">
                                                {method.title}
                                            </span>
                                            <span className="method-option__subtitle">
                                                {method.subtitle}
                                            </span>
                                        </span>
                                        {isSelected && (
                                            <span className="method-option__check">
                                                <FiCheck />
                                            </span>
                                        )}
                                    </button>
                                );
                            })}
                        </div>

                        {selectedMethod === 'card' && (
                            <>
                                <div className="credit-card-preview">
                                    <div className="credit-card-preview__top">
                                        <span className="credit-card-preview__chip-dots">
                                            <span />
                                            <span />
                                            <span />
                                        </span>
                                        <span className="credit-card-preview__brand">VISA</span>
                                    </div>
                                    <div className="credit-card-preview__number">
                                        {card.number || '•••• •••• •••• ••••'}
                                    </div>
                                    <div className="credit-card-preview__bottom">
                                        <span>
                                            <span className="credit-card-preview__caption">
                                                CARD HOLDER
                                            </span>
                                            <span className="credit-card-preview__value">
                                                {card.holder || 'YOUR NAME'}
                                            </span>
                                        </span>
                                        <span>
                                            <span className="credit-card-preview__caption">
                                                EXPIRES
                                            </span>
                                            <span className="credit-card-preview__value">
                                                {card.expiry || 'MM/YY'}
                                            </span>
                                        </span>
                                    </div>
                                </div>

                                <div className="checkout__form-grid">
                                    <label className="form-field">
                                        <span className="form-field__label">Card Number</span>
                                        <input
                                            className="form-field__input"
                                            type="text"
                                            value={card.number}
                                            onChange={handleCardChange('number')}
                                            placeholder="1234 5678 9012 3456"
                                        />
                                    </label>
                                    <label className="form-field">
                                        <span className="form-field__label">Cardholder Name</span>
                                        <input
                                            className="form-field__input"
                                            type="text"
                                            value={card.holder}
                                            onChange={handleCardChange('holder')}
                                            placeholder="As printed on card"
                                        />
                                    </label>
                                    <label className="form-field">
                                        <span className="form-field__label">Expiry</span>
                                        <input
                                            className="form-field__input"
                                            type="text"
                                            value={card.expiry}
                                            onChange={handleCardChange('expiry')}
                                            placeholder="MM/YY"
                                        />
                                    </label>
                                    <label className="form-field">
                                        <span className="form-field__label">CVV</span>
                                        <input
                                            className="form-field__input"
                                            type="password"
                                            value={card.cvv}
                                            onChange={handleCardChange('cvv')}
                                            placeholder="•••"
                                        />
                                    </label>
                                </div>
                            </>
                        )}

                        <div className="checkout__trust-badges">
                            {TRUST_BADGES.map((badge) => {
                                const Icon = badge.icon;
                                return (
                                    <span className="trust-badge" key={badge.id}>
                                        <Icon />
                                        {badge.label}
                                    </span>
                                );
                            })}
                        </div>
                    </section>

                    {/* Terms */}
                    <label className="checkout__terms">
                        <input
                            type="checkbox"
                            checked={agreed}
                            onChange={(event) => setAgreed(event.target.checked)}
                        />
                        <span className="checkout__terms-check">
                            {agreed && <FiCheck />}
                        </span>
                        <span className="checkout__terms-text">
                            I agree to the <a href="#terms">Terms &amp; Conditions</a> and{' '}
                            <a href="#privacy">Privacy Policy</a>. I confirm all traveller
                            details are accurate.
                        </span>
                    </label>
                </div>

                {/* Payment summary sidebar */}
                <aside className="checkout__summary">
                    <h3 className="checkout__summary-title">Payment Summary</h3>

                    <div className="checkout__summary-row">
                        <span>Base Premium</span>
                        <span>RM {BASE_PREMIUM}</span>
                    </div>
                    <div className="checkout__summary-row">
                        <span>Add-ons (0)</span>
                        <span>—</span>
                    </div>
                    <div className="checkout__summary-row">
                        <span>SST (8%)</span>
                        <span>RM {sst}</span>
                    </div>
                    <div className="checkout__summary-row checkout__summary-row--total">
                        <span>Total</span>
                        <span>
                            <span className="checkout__summary-currency">RM</span>{' '}
                            {total.toFixed(2)}
                        </span>
                    </div>

                    <div className="checkout__promo">
                        <input
                            className="checkout__promo-input"
                            type="text"
                            placeholder="Promo code"
                            value={promoCode}
                            onChange={(event) => setPromoCode(event.target.value)}
                        />
                        <button className="checkout__promo-btn" type="button" onClick={onContinue}>
                            Apply
                        </button>
                    </div>

                    <button
                        className="checkout__pay-btn"
                        type="button"
                        disabled={!agreed}
                        onClick={handlePay}
                    >
                        <FiLock />
                        Pay RM {total.toFixed(0)}
                    </button>

                    <p className="checkout__summary-caption">
                        256-bit SSL · Instant policy issuance
                    </p>
                </aside>
            </div>
        </div>
    );
};

Checkout.propTypes = {
    onConfirm: () => { },
};

Checkout.defaultProps = {
    onConfirm: () => { },
};

export default Checkout;