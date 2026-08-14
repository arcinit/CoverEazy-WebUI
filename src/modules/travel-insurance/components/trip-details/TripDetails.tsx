import React, { useState } from 'react';
import { FiGlobe, FiCalendar, FiMinus, FiPlus, FiArrowRight } from 'react-icons/fi';
import {
    PiAirplaneTiltBold,
    PiBriefcaseBold,
    PiLaptopBold,
    PiUsersThreeBold,
} from 'react-icons/pi';
import './TripDetails.scss';

const TRIP_TYPES = [
    {
        id: 'single',
        icon: <PiAirplaneTiltBold />,
        title: 'Single Trip',
        desc: 'One-time travel coverage',
    },
    {
        id: 'annual',
        icon: <FiGlobe />,
        title: 'Annual Multi-Trip',
        desc: 'Unlimited trips per year',
    },
    {
        id: 'business',
        icon: <PiBriefcaseBold />,
        title: 'Business',
        desc: 'Corporate travel protection',
    },
    {
        id: 'student',
        icon: <PiLaptopBold />,
        title: 'Student',
        desc: 'Study abroad coverage',
    },
    {
        id: 'family',
        icon: <PiUsersThreeBold />,
        title: 'Family',
        desc: 'Group family coverage',
    },
];

const TripDetails = ({ onContinue }:any) => {
    const [tripType, setTripType] = useState('single');
    const [destination, setDestination] = useState('');
    const [departureDate, setDepartureDate] = useState('');
    const [returnDate, setReturnDate] = useState('');
    const [adults, setAdults] = useState(2);
    const [children, setChildren] = useState(0);
    const [seniors, setSeniors] = useState(0);

    const totalTravellers = adults + children + seniors;

    const clamp = (value:any, min = 0, max = 20) =>
        Math.max(min, Math.min(max, value));

    return (
        <div className="trip-details">
            <div className="trip-details__heading">
                <h2 className="trip-details__title">
                    Plan your <span className="trip-details__title--accent">trip</span>
                </h2>
                <p className="trip-details__subtitle">
                    Tell us about your journey and we&apos;ll find the perfect coverage.
                </p>
            </div>

            <div className="trip-details__grid">
                {/* Left column */}
                <div className="trip-details__main">
                    {/* Trip type */}
                    <section className="trip-details__section">
                        <h4 className="trip-details__section-title">Trip Type</h4>

                        <div className="trip-details__type-grid">
                            {TRIP_TYPES.map((type) => {
                                const isActive = type.id === tripType;
                                return (
                                    <button
                                        key={type.id}
                                        type="button"
                                        onClick={() => setTripType(type.id)}
                                        className={[
                                            'trip-details__type-card',
                                            isActive ? 'trip-details__type-card--active' : '',
                                        ].join(' ').trim()}
                                    >
                                        <span
                                            className={[
                                                'trip-details__type-icon',
                                                isActive ? 'trip-details__type-icon--active' : '',
                                            ].join(' ').trim()}
                                        >
                                            {type.icon}
                                        </span>
                                        <span className="trip-details__type-title">
                                            {type.title}
                                        </span>
                                        <span className="trip-details__type-desc">
                                            {type.desc}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </section>

                    {/* Destination */}
                    <section className="trip-details__section">
                        <h4 className="trip-details__section-title">Destination</h4>
                        <div className="trip-details__input-wrap">
                            <FiGlobe className="trip-details__input-icon" />
                            <input
                                type="text"
                                className="trip-details__input"
                                placeholder="Search country or destination..."
                                value={destination}
                                onChange={(e) => setDestination(e.target.value)}
                            />
                        </div>
                    </section>

                    {/* Travel dates */}
                    <section className="trip-details__section">
                        <h4 className="trip-details__section-title">Travel Dates</h4>
                        <div className="trip-details__dates-grid">
                            <label className="trip-details__field">
                                <span className="trip-details__field-label">
                                    Departure Date
                                </span>
                                <div className="trip-details__input-wrap">
                                    <FiCalendar className="trip-details__input-icon" />
                                    <input
                                        type="date"
                                        className="trip-details__input"
                                        value={departureDate}
                                        onChange={(e) => setDepartureDate(e.target.value)}
                                    />
                                </div>
                            </label>

                            <label className="trip-details__field">
                                <span className="trip-details__field-label">
                                    Return Date
                                </span>
                                <div className="trip-details__input-wrap">
                                    <FiCalendar className="trip-details__input-icon" />
                                    <input
                                        type="date"
                                        className="trip-details__input"
                                        value={returnDate}
                                        onChange={(e) => setReturnDate(e.target.value)}
                                    />
                                </div>
                            </label>
                        </div>
                    </section>

                    {/* Travellers */}
                    <section className="trip-details__section">
                        <h4 className="trip-details__section-title">Travellers</h4>

                        <div className="trip-details__travellers-list">
                            <div className="trip-details__traveller-row">
                                <div className="trip-details__traveller-info">
                                    <span className="trip-details__traveller-title">
                                        Adults
                                    </span>
                                    <span className="trip-details__traveller-desc">
                                        Age 18-69
                                    </span>
                                </div>
                                <div className="trip-details__counter">
                                    <button
                                        type="button"
                                        className="trip-details__counter-btn"
                                        onClick={() => setAdults((v) => clamp(v - 1, 1))}
                                    >
                                        <FiMinus />
                                    </button>
                                    <span className="trip-details__counter-value">
                                        {adults}
                                    </span>
                                    <button
                                        type="button"
                                        className="trip-details__counter-btn trip-details__counter-btn--primary"
                                        onClick={() => setAdults((v) => clamp(v + 1))}
                                    >
                                        <FiPlus />
                                    </button>
                                </div>
                            </div>

                            <div className="trip-details__traveller-row">
                                <div className="trip-details__traveller-info">
                                    <span className="trip-details__traveller-title">
                                        Children
                                    </span>
                                    <span className="trip-details__traveller-desc">
                                        Age 0-17
                                    </span>
                                </div>
                                <div className="trip-details__counter">
                                    <button
                                        type="button"
                                        className="trip-details__counter-btn"
                                        onClick={() => setChildren((v) => clamp(v - 1))}
                                    >
                                        <FiMinus />
                                    </button>
                                    <span className="trip-details__counter-value">
                                        {children}
                                    </span>
                                    <button
                                        type="button"
                                        className="trip-details__counter-btn trip-details__counter-btn--primary"
                                        onClick={() => setChildren((v) => clamp(v + 1))}
                                    >
                                        <FiPlus />
                                    </button>
                                </div>
                            </div>

                            <div className="trip-details__traveller-row">
                                <div className="trip-details__traveller-info">
                                    <span className="trip-details__traveller-title">
                                        Senior Citizens
                                    </span>
                                    <span className="trip-details__traveller-desc">
                                        Age 70+
                                    </span>
                                </div>
                                <div className="trip-details__counter">
                                    <button
                                        type="button"
                                        className="trip-details__counter-btn"
                                        onClick={() => setSeniors((v) => clamp(v - 1))}
                                    >
                                        <FiMinus />
                                    </button>
                                    <span className="trip-details__counter-value">
                                        {seniors}
                                    </span>
                                    <button
                                        type="button"
                                        className="trip-details__counter-btn trip-details__counter-btn--primary"
                                        onClick={() => setSeniors((v) => clamp(v + 1))}
                                    >
                                        <FiPlus />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Sidebar */}
                <aside className="trip-details__sidebar">
                    <div className="trip-details__summary-card">
                        <span className="trip-details__summary-title">Trip Summary</span>

                        <div className="trip-details__summary-list">
                            <div className="trip-details__summary-row">
                                <span className="trip-details__summary-label">
                                    Destination
                                </span>
                                <span className="trip-details__summary-value">
                                    {destination || '—'}
                                </span>
                            </div>
                            <div className="trip-details__summary-row">
                                <span className="trip-details__summary-label">Duration</span>
                                <span className="trip-details__summary-value">—</span>
                            </div>
                            <div className="trip-details__summary-row">
                                <span className="trip-details__summary-label">
                                    Departure
                                </span>
                                <span className="trip-details__summary-value">
                                    {departureDate || '—'}
                                </span>
                            </div>
                            <div className="trip-details__summary-row">
                                <span className="trip-details__summary-label">Return</span>
                                <span className="trip-details__summary-value">
                                    {returnDate || '—'}
                                </span>
                            </div>
                            <div className="trip-details__summary-row">
                                <span className="trip-details__summary-label">
                                    Travellers
                                </span>
                                <span className="trip-details__summary-value">
                                    {totalTravellers} pax
                                </span>
                            </div>
                            <div className="trip-details__summary-row">
                                <span className="trip-details__summary-label">
                                    Trip Type
                                </span>
                                <span className="trip-details__summary-value">
                                    {tripType}
                                </span>
                            </div>
                        </div>

                        <div className="trip-details__summary-divider" />

                        <div className="trip-details__premium-row">
                            <span className="trip-details__premium-label">
                                Est. Premium
                                <span className="trip-details__premium-sublabel">
                                    Premium plan
                                </span>
                            </span>
                            <span className="trip-details__premium-value">
                                <span className="trip-details__premium-currency">RM</span>{' '}
                                <span className="trip-details__figure">290.00</span>
                            </span>
                        </div>

                        <button
                            type="button"
                            className="trip-details__cta"
                            onClick={onContinue}
                        >
                            Continue to Travellers
                            <FiArrowRight />
                        </button>
                    </div>

                    <div className="trip-details__ai-tip">
                        <span className="trip-details__ai-tip-icon">
                            <FiGlobe />
                        </span>
                        <p className="trip-details__ai-tip-text">
                            <strong>AI Tip:</strong> Japan trips in summer have higher
                            medical costs. We recommend Premium or above.
                        </p>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default TripDetails;