import React, { useState } from 'react';
import { FiChevronUp, FiChevronDown, FiCheck, FiArrowRight } from 'react-icons/fi';
import { FaCalendarAlt } from 'react-icons/fa';
import { LuBrain, LuUserPlus } from 'react-icons/lu';
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
        dob: '1985-03-15',
        passport: 'A12345678',
        nationality: 'Malaysian',
        frequentTraveller: true,
        preExistingCondition: false,
    },
    {
        id: 2,
        initials: 'T2',
        tone: 'green',
        name: 'Siti Rahimah binti Ismail',
        isPrimary: false,
        isVerified: false,
        meta: 'Adult · Malaysian · Passport: A87654321',
        expanded: false,
        fullName: 'Siti Rahimah binti Ismail',
        dob: '1987-08-22',
        passport: 'A87654321',
        nationality: 'Malaysian',
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
            prev.map((t) =>
                t.id === id ? { ...t, expanded: !t.expanded } : { ...t, expanded: false }
            )
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
        <div className="tr-trav">
            <div className="tr-trav__heading">
                <h2 className="tr-trav__title">
                    Traveller{' '}
                    <span className="tr-trav__title--accent">details</span>
                </h2>
                <p className="tr-trav__subtitle">
                    Add details for each traveller. Primary traveller is pre-filled
                    from your profile.
                </p>
            </div>

            <div className="tr-trav__grid">
                {/* Left column */}
                <div className="tr-trav__main">
                    {travellers.map((traveller) => (
                        <div className={`tr-trav__card${traveller.expanded ? ' tr-trav__card--open' : ''}`} key={traveller.id}>
                            <button
                                type="button"
                                className="tr-trav__card-header"
                                onClick={() => toggleExpanded(traveller.id)}
                            >
                                <span
                                    className={[
                                        'tr-trav__avatar',
                                        `tr-trav__avatar--${traveller.tone}`,
                                    ].join(' ')}
                                >
                                    {traveller.initials}
                                </span>

                                <div className="tr-trav__card-info">
                                    <div className="tr-trav__card-name-row">
                                        <span className="tr-trav__card-name">
                                            {traveller.name}
                                        </span>
                                        {traveller.isPrimary && (
                                            <span className="tr-trav__badge tr-trav__badge--primary">
                                                Primary
                                            </span>
                                        )}
                                        {traveller.isVerified && (
                                            <span className="tr-trav__badge tr-trav__badge--verified">
                                                <FiCheck />
                                                Verified
                                            </span>
                                        )}
                                    </div>
                                    <span className="tr-trav__card-meta">
                                        {traveller.meta}
                                    </span>
                                </div>

                                <span className="tr-trav__chevron">
                                    {traveller.expanded ? <FiChevronUp /> : <FiChevronDown />}
                                </span>
                            </button>

                            {traveller.expanded && (
                                <div className="tr-trav__card-body">
                                    <div className="tr-trav__form-grid">
                                        <label className="tr-trav__field">
                                            <span className="tr-trav__field-label">
                                                Full Name
                                            </span>
                                            <input
                                                type="text"
                                                className="tr-trav__input"
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

                                        <label className="tr-trav__field">
                                            <span className="tr-trav__field-label">
                                                Date of Birth
                                            </span>
                                            <div className="tr-trav__input-wrap">
                                                <FaCalendarAlt className="tr-trav__input-icon" />
                                                <input
                                                    type="date"
                                                    className={`tr-trav__input tr-trav__input--with-icon${traveller.dob ? '' : ' tr-trav__input--empty'}`}
                                                    value={traveller.dob}
                                                    onChange={(e) =>
                                                        updateField(traveller.id, 'dob', e.target.value)
                                                    }
                                                />
                                            </div>
                                        </label>

                                        <label className="tr-trav__field">
                                            <span className="tr-trav__field-label">
                                                Passport Number
                                            </span>
                                            <input
                                                type="text"
                                                className="tr-trav__input"
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

                                        <label className="tr-trav__field">
                                            <span className="tr-trav__field-label">
                                                Nationality
                                            </span>
                                            <input
                                                type="text"
                                                className="tr-trav__input"
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

                                    <div className="tr-trav__divider" />

                                    <div className="tr-trav__toggles">
                                        <button
                                            type="button"
                                            className="tr-trav__toggle"
                                            onClick={() =>
                                                toggleFlag(traveller.id, 'frequentTraveller')
                                            }
                                        >
                                            <span
                                                className={[
                                                    'tr-trav__toggle-check',
                                                    traveller.frequentTraveller
                                                        ? 'tr-trav__toggle-check--on'
                                                        : '',
                                                ].join(' ').trim()}
                                            >
                                                {traveller.frequentTraveller && <FiCheck />}
                                            </span>
                                            Frequent Traveller
                                        </button>

                                        <button
                                            type="button"
                                            className="tr-trav__toggle"
                                            onClick={() =>
                                                toggleFlag(traveller.id, 'preExistingCondition')
                                            }
                                        >
                                            <span
                                                className={[
                                                    'tr-trav__toggle-check',
                                                    traveller.preExistingCondition
                                                        ? 'tr-trav__toggle-check--on'
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
                        className="tr-trav__add-btn"
                        onClick={addTraveller}
                    >
                        <LuUserPlus />
                        Add Another Traveller
                    </button>
                </div>

                {/* Sidebar */}
                <aside className="tr-trav__sidebar">
                    <div className="tr-trav__summary-card">
                        <span className="tr-trav__summary-title">
                            Trip Overview
                        </span>

                        <div className="tr-trav__summary-list">
                            {TRIP_OVERVIEW.map((row) => (
                                <div
                                    className="tr-trav__summary-row"
                                    key={row.label}
                                >
                                    <span className="tr-trav__summary-label">
                                        {row.label}
                                    </span>
                                    <span className={`tr-trav__summary-value${row.label === 'Travellers' ? ' tr-trav__summary-value--small' : ''}`}>
                                        {row.value}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <button
                            type="button"
                            className="tr-trav__cta"
                            onClick={onContinue}
                        >
                            Continue to Travellers
                            <FiArrowRight />
                        </button>
                    </div>

                    <div className="tr-trav__ai-tip">
                        <span className="tr-trav__ai-tip-icon">
                            <LuBrain />
                        </span>
                        <p className="tr-trav__ai-tip-text">
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