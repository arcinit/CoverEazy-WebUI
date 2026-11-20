import React, { useState } from 'react';
import {
    FiChevronUp,
    FiChevronDown,
    FiCheck,
    FiCalendar,
    FiUserPlus,
    FiGlobe,
    FiArrowRight,
} from 'react-icons/fi';
import './TravellerDetails.scss';

const INITIAL_TRAVELLERS = [
    {
        id: 1,
        initials: 'AR',
        tone: 'blue',
        name: 'Ahmad Rizal bin Ismail',
        isPrimary: true,
        isVerified: true,
        meta: 'Adult · Malaysian · Passport: A12345678',
        expanded: true,
        fullName: 'Ahmad Rizal bin Ismail',
        dob: '',
        passport: 'A12345678',
        nationality: 'Malaysian',
        frequentTraveller: true,
        preExistingCondition: false,
    },
    {
        id: 2,
        initials: 'T2',
        tone: 'green',
        name: 'Traveller 2',
        isPrimary: false,
        isVerified: false,
        meta: 'Adult · Click to fill details',
        expanded: false,
        fullName: '',
        dob: '',
        passport: '',
        nationality: '',
        frequentTraveller: false,
        preExistingCondition: false,
    },
];

const TRIP_OVERVIEW = [
    { label: 'Destination', value: 'Japan' },
    { label: 'Travellers', value: '2 pax' },
    { label: 'Departure', value: '2026-06-26' },
    { label: 'Return', value: '2026-06-30' },
];

const TravellerDetails = ({ onContinue }:any) => {
    const [travellers, setTravellers] = useState(INITIAL_TRAVELLERS);

    const toggleExpanded = (id:any) => {
        setTravellers((prev) =>
            prev.map((t) => (t.id === id ? { ...t, expanded: !t.expanded } : t))
        );
    };

    const updateField = (id:any, field:any, value:any) => {
        setTravellers((prev) =>
            prev.map((t) => (t.id === id ? { ...t, [field]: value } : t))
        );
    };

    const toggleFlag = (
        id: number,
        field: "isPrimary" | "isVerified" | "frequentTraveller" | "preExistingCondition"
    ) => {
        setTravellers((prev) =>
            prev.map((t) =>
                t.id === id
                    ? { ...t, [field]: !t[field] }
                    : t
            )
        );
    };

    const addTraveller = () => {
        const nextIndex = travellers.length + 1;
        setTravellers((prev) => [
            ...prev,
            {
                id: Date.now(),
                initials: `T${nextIndex}`,
                tone: 'green',
                name: `Traveller ${nextIndex}`,
                isPrimary: false,
                isVerified: false,
                meta: 'Adult · Click to fill details',
                expanded: false,
                fullName: '',
                dob: '',
                passport: '',
                nationality: '',
                frequentTraveller: false,
                preExistingCondition: false,
            },
        ]);
    };

    return (
        <div className="traveller-details">
            <div className="traveller-details__heading">
                <h2 className="traveller-details__title">
                    Traveller{' '}
                    <span className="traveller-details__title--accent">details</span>
                </h2>
                <p className="traveller-details__subtitle">
                    Add details for each traveller. Primary traveller is pre-filled
                    from your profile.
                </p>
            </div>

            <div className="traveller-details__grid">
                {/* Left column */}
                <div className="traveller-details__main">
                    {travellers.map((traveller) => (
                        <div className="traveller-details__card" key={traveller.id}>
                            <button
                                type="button"
                                className="traveller-details__card-header"
                                onClick={() => toggleExpanded(traveller.id)}
                            >
                                <span
                                    className={[
                                        'traveller-details__avatar',
                                        `traveller-details__avatar--${traveller.tone}`,
                                    ].join(' ')}
                                >
                                    {traveller.initials}
                                </span>

                                <div className="traveller-details__card-info">
                                    <div className="traveller-details__card-name-row">
                                        <span className="traveller-details__card-name">
                                            {traveller.name}
                                        </span>
                                        {traveller.isPrimary && (
                                            <span className="traveller-details__badge traveller-details__badge--primary">
                                                Primary
                                            </span>
                                        )}
                                        {traveller.isVerified && (
                                            <span className="traveller-details__badge traveller-details__badge--verified">
                                                <FiCheck />
                                                Verified
                                            </span>
                                        )}
                                    </div>
                                    <span className="traveller-details__card-meta">
                                        {traveller.meta}
                                    </span>
                                </div>

                                <span className="traveller-details__chevron">
                                    {traveller.expanded ? <FiChevronUp /> : <FiChevronDown />}
                                </span>
                            </button>

                            {traveller.expanded && (
                                <div className="traveller-details__card-body">
                                    <div className="traveller-details__form-grid">
                                        <label className="traveller-details__field">
                                            <span className="traveller-details__field-label">
                                                Full Name
                                            </span>
                                            <input
                                                type="text"
                                                className="traveller-details__input"
                                                value={traveller.fullName}
                                                onChange={(e) =>
                                                    updateField(
                                                        traveller.id,
                                                        'fullName',
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </label>

                                        <label className="traveller-details__field">
                                            <span className="traveller-details__field-label">
                                                Date of Birth
                                            </span>
                                            <div className="traveller-details__input-wrap">
                                                <FiCalendar className="traveller-details__input-icon" />
                                                <input
                                                    type="date"
                                                    className="traveller-details__input traveller-details__input--with-icon"
                                                    value={traveller.dob}
                                                    onChange={(e) =>
                                                        updateField(traveller.id, 'dob', e.target.value)
                                                    }
                                                />
                                            </div>
                                        </label>

                                        <label className="traveller-details__field">
                                            <span className="traveller-details__field-label">
                                                Passport Number
                                            </span>
                                            <input
                                                type="text"
                                                className="traveller-details__input"
                                                value={traveller.passport}
                                                onChange={(e) =>
                                                    updateField(
                                                        traveller.id,
                                                        'passport',
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </label>

                                        <label className="traveller-details__field">
                                            <span className="traveller-details__field-label">
                                                Nationality
                                            </span>
                                            <input
                                                type="text"
                                                className="traveller-details__input"
                                                value={traveller.nationality}
                                                onChange={(e) =>
                                                    updateField(
                                                        traveller.id,
                                                        'nationality',
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </label>
                                    </div>

                                    <div className="traveller-details__divider" />

                                    <div className="traveller-details__toggles">
                                        <button
                                            type="button"
                                            className="traveller-details__toggle"
                                            onClick={() =>
                                                toggleFlag(traveller.id, 'frequentTraveller')
                                            }
                                        >
                                            <span
                                                className={[
                                                    'traveller-details__toggle-check',
                                                    traveller.frequentTraveller
                                                        ? 'traveller-details__toggle-check--on'
                                                        : '',
                                                ].join(' ').trim()}
                                            >
                                                {traveller.frequentTraveller && <FiCheck />}
                                            </span>
                                            Frequent Traveller
                                        </button>

                                        <button
                                            type="button"
                                            className="traveller-details__toggle"
                                            onClick={() =>
                                                toggleFlag(traveller.id, 'preExistingCondition')
                                            }
                                        >
                                            <span
                                                className={[
                                                    'traveller-details__toggle-check',
                                                    traveller.preExistingCondition
                                                        ? 'traveller-details__toggle-check--on'
                                                        : '',
                                                ].join(' ').trim()}
                                            >
                                                {traveller.preExistingCondition && <FiCheck />}
                                            </span>
                                            Pre-existing Medical Condition
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}

                    <button
                        type="button"
                        className="traveller-details__add-btn"
                        onClick={addTraveller}
                    >
                        <FiUserPlus />
                        Add Another Traveller
                    </button>
                </div>

                {/* Sidebar */}
                <aside className="traveller-details__sidebar">
                    <div className="traveller-details__summary-card">
                        <span className="traveller-details__summary-title">
                            Trip Overview
                        </span>

                        <div className="traveller-details__summary-list">
                            {TRIP_OVERVIEW.map((row) => (
                                <div
                                    className="traveller-details__summary-row"
                                    key={row.label}
                                >
                                    <span className="traveller-details__summary-label">
                                        {row.label}
                                    </span>
                                    <span className="traveller-details__summary-value">
                                        {row.value}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <button
                            type="button"
                            className="traveller-details__cta"
                            onClick={onContinue}
                        >
                            Continue to Travellers
                            <FiArrowRight />
                        </button>
                    </div>

                    <div className="traveller-details__ai-tip">
                        <span className="traveller-details__ai-tip-icon">
                            <FiGlobe />
                        </span>
                        <p className="traveller-details__ai-tip-text">
                            <strong>AI Tip:</strong> Japan trips in summer have higher
                            medical costs. We recommend Premium or above.
                        </p>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default TravellerDetails;