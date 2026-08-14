import React, { useState } from 'react';
import {
    FiCheck,
    FiArrowRight,
    FiMapPin,
    FiShield,
    FiClock,
} from 'react-icons/fi';
import {
    PiCarProfileBold,
    PiPackageBold,
    PiLightningBold,
    PiBuildingsBold,
} from 'react-icons/pi';
import './OptionsDelivery.scss';
import carImage from './images/car.png';
import { LuCar } from 'react-icons/lu';

const VEHICLE = {
    name: 'Toyota Camry',
    year: '2022',
    transmission: 'Automatic',
    fuel: 'Petrol',
};

const VEHICLE_CELLS = [
    { label: 'Road Tax Expiry', value: '31 Jul 2026' },
    { label: 'JPJ Verified', value: 'Confirmed', tone: 'green' },
    { label: 'Ownership', value: 'Verified', tone: 'green' },
    { label: 'Renewal Status', value: 'Ready', tone: 'green' },
];

const DURATIONS = [
    {
        id: '3m',
        label: '3 Months',
        govFee: 'RM 22.50',
        serviceFee: 'RM 5.00',
        validUntil: '31 Oct 2027',
        perMonth: '9.17',
    },
    {
        id: '6m',
        label: '6 Months',
        govFee: 'RM 45.00',
        serviceFee: 'RM 5.00',
        validUntil: '31 Oct 2027',
        perMonth: '8.33',
        save: 'Save RM 5',
    },
    {
        id: '12m',
        label: '12 Months',
        govFee: 'RM 90.00',
        serviceFee: 'RM 5.00',
        validUntil: '31 Oct 2027',
        perMonth: '7.92',
        save: 'Save RM 22.50',
        recommended: true,
    },
];

const DELIVERY_METHODS = [
    {
        id: 'standard',
        icon: <PiPackageBold />,
        title: 'Standard Delivery',
        badge: { text: 'Free', tone: 'neutral' },
        subtitle: '3-5 Business Days',
        tags: ['Full tracking', 'Signature required'],
        price: 'Free',
    },
    {
        id: 'express',
        icon: <PiLightningBold />,
        title: 'Express Delivery',
        badge: { text: 'Fast', tone: 'orange' },
        subtitle: '1-2 Business Days',
        tags: ['Priority processing', 'Live tracking', 'SMS updates'],
        price: 'RM 10.00',
    },
    {
        id: 'office',
        icon: <PiBuildingsBold />,
        title: 'Office Collection',
        badge: { text: 'Instant', tone: 'neutral' },
        subtitle: 'Ready in 4 Hours',
        tags: ['Collect from branch', 'No waiting', 'Immediate pickup'],
        price: 'Free',
    },
];

const OptionsDelivery = ({ onContinue }: any) => {
    const [duration, setDuration] = useState('12m');
    const [delivery, setDelivery] = useState('express');

    const selectedDuration = DURATIONS.find((d) => d.id === duration);
    const deliveryFee = delivery === 'express' ? 10.0 : 0;
    const govServiceFee = 5.0;
    const govFee = 90.0;
    const total = govFee + govServiceFee + deliveryFee;

    return (
        <div className="options-delivery">
            <div className="options-delivery__grid">
                {/* Left column */}
                <div className="options-delivery__main">
                    {/* Vehicle summary — lives in the left column */}
                    <div className="options-delivery__vehicle-card">
                        <div className="options-delivery__vehicle-info">
                            <div className="options-delivery__vehicle-image">
                                <img src={carImage} alt="car" />
                            </div>
                            <div className="options-delivery__info">
                                <span className="options-delivery__vehicle-tag">
                                    <LuCar className='icon' />
                                    Your Vehicle
                                </span>
                                <h3 className="options-delivery__vehicle-name">{VEHICLE.name}</h3>
                                <p className="options-delivery__vehicle-specs">
                                    {VEHICLE.year}
                                    <span className="options-delivery__dot">&middot;</span>
                                    {VEHICLE.transmission}
                                    <span className="options-delivery__dot">&middot;</span>
                                    {VEHICLE.fuel}
                                </p>
                            </div>
                        </div>

                        <div className="options-delivery__vehicle-flags">
                            <span className="options-delivery__flag options-delivery__flag--green">
                                <FiCheck />
                                Insurance Active
                            </span>
                            <span className="options-delivery__flag options-delivery__flag--orange">
                                <FiClock />
                                Tax Expiring
                            </span>
                        </div>

                        <div className="options-delivery__vehicle-grid">
                            {VEHICLE_CELLS.map((cell) => (
                                <div className="options-delivery__vehicle-cell" key={cell.label}>
                                    <span className="options-delivery__vehicle-cell-label">
                                        {cell.label}
                                    </span>
                                    <span
                                        className={[
                                            'options-delivery__vehicle-cell-value',
                                            cell.tone === 'green'
                                                ? 'options-delivery__vehicle-cell-value--green'
                                                : '',
                                        ].join(' ').trim()}
                                    >
                                        {cell.value}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Renewal duration */}
                    <section className="options-delivery__section">
                        <h4 className="options-delivery__section-title">
                            Renewal Duration
                        </h4>
                        <p className="options-delivery__section-desc">
                            Choose how long you&apos;d like to renew your road tax.
                        </p>

                        <div className="options-delivery__duration-grid">
                            {DURATIONS.map((d) => {
                                const isActive = d.id === duration;
                                return (
                                    <button
                                        key={d.id}
                                        type="button"
                                        onClick={() => setDuration(d.id)}
                                        className={[
                                            'options-delivery__duration-card',
                                            isActive ? 'options-delivery__duration-card--active' : '',
                                        ].join(' ').trim()}
                                    >
                                        {d.recommended && (
                                            <span className="options-delivery__duration-recommended">
                                                Recommended
                                            </span>
                                        )}
                                        <div className="options-delivery__duration-top">
                                            <span className="options-delivery__duration-label">
                                                {d.label}
                                            </span>
                                            {isActive && (
                                                <span className="options-delivery__duration-check">
                                                    <FiCheck />
                                                </span>
                                            )}
                                        </div>

                                        <div className="options-delivery__duration-row">
                                            <span className="options-delivery__duration-key">
                                                Gov. Fee
                                            </span>
                                            <span className="options-delivery__duration-val">
                                                {d.govFee}
                                            </span>
                                        </div>
                                        <div className="options-delivery__duration-row">
                                            <span className="options-delivery__duration-key">
                                                Service Fee
                                            </span>
                                            <span className="options-delivery__duration-val">
                                                {d.serviceFee}
                                            </span>
                                        </div>

                                        <div className="options-delivery__duration-bottom">
                                            <div className="options-delivery__duration-valid">
                                                <span className="options-delivery__duration-valid-label">
                                                    Valid Until
                                                </span>
                                                <span className="options-delivery__duration-valid-value">
                                                    {d.validUntil}
                                                </span>
                                            </div>
                                            {d.save && (
                                                <span className="options-delivery__duration-save">
                                                    {d.save}
                                                </span>
                                            )}
                                            <div className="options-delivery__duration-price">
                                                <span className="options-delivery__duration-price-value">
                                                    RM{' '}
                                                    <span className="options-delivery__figure">
                                                        {d.perMonth}
                                                    </span>{' '}
                                                    /mo
                                                </span>
                                            </div>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </section>

                    {/* Delivery method */}
                    <section className="options-delivery__section">
                        <h4 className="options-delivery__section-title">
                            Delivery Method
                        </h4>
                        <p className="options-delivery__section-desc">
                            Select how you&apos;d like to receive your road tax sticker.
                        </p>

                        <div className="options-delivery__delivery-list">
                            {DELIVERY_METHODS.map((m) => {
                                const isActive = m.id === delivery;
                                return (
                                    <button
                                        key={m.id}
                                        type="button"
                                        onClick={() => setDelivery(m.id)}
                                        className={[
                                            'options-delivery__delivery-card',
                                            isActive ? 'options-delivery__delivery-card--active' : '',
                                        ].join(' ').trim()}
                                    >
                                        <span className="options-delivery__delivery-icon">
                                            {m.icon}
                                        </span>

                                        <div className="options-delivery__delivery-body">
                                            <div className="options-delivery__delivery-title-row">
                                                <span className="options-delivery__delivery-title">
                                                    {m.title}
                                                </span>
                                                <span
                                                    className={[
                                                        'options-delivery__delivery-badge',
                                                        m.badge.tone === 'orange'
                                                            ? 'options-delivery__delivery-badge--orange'
                                                            : '',
                                                    ].join(' ').trim()}
                                                >
                                                    {m.badge.text}
                                                </span>
                                            </div>
                                            <p className="options-delivery__delivery-subtitle">
                                                {m.subtitle}
                                            </p>
                                            <div className="options-delivery__delivery-tags">
                                                {m.tags.map((tag) => (
                                                    <span
                                                        className="options-delivery__delivery-tag-pill"
                                                        key={tag}
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="options-delivery__delivery-right">
                                            <span className="options-delivery__delivery-price">
                                                {m.price}
                                            </span>
                                            {isActive && (
                                                <span className="options-delivery__delivery-check">
                                                    <FiCheck />
                                                </span>
                                            )}
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </section>

                    {/* Delivery address */}
                    <section className="options-delivery__section">
                        <h4 className="options-delivery__section-title">
                            Delivery Address
                        </h4>

                        <div className="options-delivery__address-card">
                            <span className="options-delivery__address-icon">
                                <FiMapPin />
                            </span>

                            <div className="options-delivery__address-body">
                                <div className="options-delivery__address-top">
                                    <span className="options-delivery__address-name">
                                        Ahmad Rizal bin Ismail
                                    </span>
                                </div>
                                <p className="options-delivery__address-lines">
                                    No. 12, Jalan Kenanga 5/2, Taman Kenanga,
                                    <br />
                                    47500 Subang Jaya, Selangor
                                </p>
                                <div className="options-delivery__address-footer">
                                    <span className="options-delivery__address-confidence">
                                        &#8599; Delivery Confidence: 98%
                                    </span>
                                    <span className="options-delivery__address-eta">
                                        Est. Delivery: 25-26 Jun
                                    </span>
                                </div>
                            </div>

                            <div className='options-delivery__top-right'>
                                <span className="options-delivery__address-verified">
                                    <FiCheck />
                                    Verified
                                </span>
                                <button
                                    type="button"
                                    className="options-delivery__address-change"
                                >
                                    Change
                                </button>
                            </div>

                        </div>
                    </section>
                </div>

                {/* Sidebar */}
                <aside className="options-delivery__sidebar">
                    <div className="options-delivery__summary-card">
                        <span className="options-delivery__summary-title">
                            Order Summary
                        </span>

                        <div className="options-delivery__summary-list">
                            <div className="options-delivery__summary-row">
                                <span className="options-delivery__summary-label">
                                    Government Fee
                                </span>
                                <span className="options-delivery__summary-value">
                                    RM {govFee.toFixed(2)}
                                </span>
                            </div>
                            <div className="options-delivery__summary-row">
                                <span className="options-delivery__summary-label">
                                    Service Fee
                                </span>
                                <span className="options-delivery__summary-value">
                                    RM {govServiceFee.toFixed(2)}
                                </span>
                            </div>
                            <div className="options-delivery__summary-row">
                                <span className="options-delivery__summary-label">
                                    Delivery Fee
                                </span>
                                <span className="options-delivery__summary-value">
                                    RM {deliveryFee.toFixed(2)}
                                </span>
                            </div>
                        </div>

                        <div className="options-delivery__summary-divider" />

                        <div className="options-delivery__summary-total-row">
                            <span className="options-delivery__summary-total-label">
                                Total
                            </span>
                            <span className="options-delivery__summary-total-value">
                                RM{' '}
                                <span className="options-delivery__figure">
                                    {total.toFixed(2)}
                                </span>
                            </span>
                        </div>

                        <div className="options-delivery__summary-divider" />

                        <div className="options-delivery__summary-list">
                            <div className="options-delivery__summary-row">
                                <span className="options-delivery__summary-label">
                                    Renewal Period
                                </span>
                                <span className="options-delivery__summary-value">
                                    {selectedDuration?.label}
                                </span>
                            </div>
                            <div className="options-delivery__summary-row">
                                <span className="options-delivery__summary-label">
                                    Est. Delivery
                                </span>
                                <span className="options-delivery__summary-value">
                                    1-2 Days
                                </span>
                            </div>
                            <div className="options-delivery__summary-row">
                                <span className="options-delivery__summary-label">
                                    Valid Until
                                </span>
                                <span className="options-delivery__summary-value">
                                    {selectedDuration?.validUntil}
                                </span>
                            </div>
                        </div>

                        <button
                            type="button"
                            className="options-delivery__cta"
                            onClick={onContinue}
                        >
                            Continue to Review
                            <FiArrowRight />
                        </button>
                    </div>

                    <div className="options-delivery__protection-card">
                        <span className="options-delivery__protection-icon">
                            <FiShield />
                        </span>
                        <div>
                            <span className="options-delivery__protection-title">
                                Renewal Protection
                            </span>
                            <p className="options-delivery__protection-desc">
                                Your renewal is backed by our 100% money-back guarantee if
                                JPJ processing fails.
                            </p>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default OptionsDelivery;