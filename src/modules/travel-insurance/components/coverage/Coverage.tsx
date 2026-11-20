import React, { useState } from 'react';
import {
    FiPlus,
    FiChevronUp,
    FiChevronDown,
    FiStar,
    FiCheck,
    FiX,
    FiArrowRight,
    FiSmartphone,
    FiTruck,
    FiDroplet,
    FiWind,
    FiHeart,
    FiXCircle,
    FiAlertTriangle,
    FiCheckCircle,
} from 'react-icons/fi';
import {
    PiSteeringWheelBold,
    PiAirplaneTiltBold,
    PiWrenchBold,
    PiSuitcaseBold,
    PiSnowflakeBold,
    PiMountainsBold,
    PiFlagBold,
    PiAnchorBold,
    PiLaptopBold,
    PiPawPrintBold,
    PiBriefcaseBold,
    PiSparkleBold,
} from 'react-icons/pi';
import './Coverage.scss';
import { IoMdTrendingDown } from 'react-icons/io';
import { AiFillStar } from 'react-icons/ai';
import { FaRegCircleCheck } from 'react-icons/fa6';

// ==========================================================================
// Static data
// ==========================================================================

const ADD_ONS = [
    {
        id: 'winter',
        icon: <PiSnowflakeBold />,
        title: 'Winter Sports',
        desc: 'Skiing, snowboarding cover',
        price: '+RM 15/pax',
        defaultOn: true,
    },
    {
        id: 'adventure',
        icon: <PiMountainsBold />,
        title: 'Adventure Sports',
        desc: 'Trekking, diving, bungee',
        price: '+RM 20/pax',
        defaultOn: true,
    },
    {
        id: 'golf',
        icon: <PiFlagBold />,
        title: 'Golf Equipment',
        desc: 'Clubs & equipment up to RM 5k',
        price: '+RM 10/pax',
        defaultOn: false,
    },
    {
        id: 'cruise',
        icon: <PiAnchorBold />,
        title: 'Cruise Cover',
        desc: 'Onboard medical & missed port',
        price: '+RM 25/pax',
        defaultOn: true,
    },
    {
        id: 'rental',
        icon: <FiTruck />,
        title: 'Rental Car Excess',
        desc: 'Excess waiver up to RM 2,500',
        price: '+RM 12/pax',
        defaultOn: false,
    },
    {
        id: 'electronics',
        icon: <PiLaptopBold />,
        title: 'Electronic Gadgets',
        desc: 'Phone, laptop, camera cover',
        price: '+RM 18/pax',
        defaultOn: false,
    },
    {
        id: 'pet',
        icon: <PiPawPrintBold />,
        title: 'Pet Travel',
        desc: 'Vet fees & boarding cover',
        price: '+RM 8/pax',
        defaultOn: false,
    },
    {
        id: 'business',
        icon: <PiBriefcaseBold />,
        title: 'Business Equipment',
        desc: 'Professional gear up to RM 10k',
        price: '+RM 22/pax',
        defaultOn: false,
    },
];

const HIGHLIGHT_ICONS:any = {
    'Flood Coverage': <FiDroplet />,
    'Unlimited Driver': <PiSteeringWheelBold />,
    Windscreen: <FiWind />,
    'Digital Claims': <FiSmartphone />,
    'Free Towing': <FiTruck />,
    'Roadside Assist': <PiWrenchBold />,
    'Emergency Evacuation': <PiAirplaneTiltBold />,
    'Passenger Coverage': <FiHeart />,
    'Medical Coverage': <FiHeart />,
    'Trip Cancel': <FiXCircle />,
    'Personal Accident': <FiAlertTriangle />,
    Baggage: <PiSuitcaseBold />,
    'Evacuation Unlimited': <PiAirplaneTiltBold />,
};

const PLANS = [
    {
        id: 'allianz',
        logo: 'Allianz',
        name: 'Allianz General',
        badge: { text: 'BEST MATCH', tone: 'pink' },
        rating: '4.8',
        reviews: '12,480',
        digitalClaims: true,
        workshops: '320 panel workshops',
        highlights: [
            'Flood Coverage',
            'Unlimited Driver',
            'Windscreen',
            'Digital Claims',
            'Free Towing',
            'Roadside Assist',
            'Emergency Evacuation',
            'Passenger Coverage',
        ],
        save: 'SAVE RM 196',
        price: '1,497',
        perMonth: 'RM 125/mo',
        original: 'RM 1,693',
        ctaVariant: 'outline',
    },
    {
        id: 'etiqa',
        logo: 'eTiQa',
        name: 'Etiqa Insurance',
        badge: { text: 'BEST VALUE', tone: 'orange' },
        rating: '4.8',
        reviews: '12,480',
        digitalClaims: true,
        workshops: '320 panel workshops',
        highlights: [
            'Medical Coverage',
            'Trip Cancel',
            'Personal Accident',
            'Baggage',
            'Evacuation Unlimited',
        ],
        save: 'SAVE RM 196',
        price: '1,369',
        perMonth: 'RM 114/mo',
        original: 'RM 1,693',
        ctaVariant: 'solid',
    },
    {
        id: 'tokio',
        logo: 'TOKIO MARINE',
        name: 'Tokio Marine',
        badge: { text: 'MOST PICKED', tone: 'dark' },
        rating: '4.8',
        reviews: '12,480',
        digitalClaims: true,
        workshops: '320 panel workshops',
        highlights: [
            'Medical Coverage',
            'Trip Cancel',
            'Personal Accident',
            'Baggage',
            'Evacuation Unlimited',
        ],
        save: null,
        price: '1,555',
        perMonth: 'RM 130/mo',
        original: null,
        ctaVariant: 'solid',
    },
    {
        id: 'zurich',
        logo: 'ZURICH',
        name: 'Zurich Malaysia',
        badge: null,
        rating: '4.8',
        reviews: '12,480',
        digitalClaims: false,
        workshops: '320 panel workshops',
        highlights: [
            'Medical Coverage',
            'Trip Cancel',
            'Personal Accident',
            'Baggage',
            'Evacuation Unlimited',
        ],
        save: null,
        price: '1,621',
        perMonth: 'RM 135/mo',
        original: null,
        ctaVariant: 'solid',
    },
];

// ==========================================================================
// Sub-components
// ==========================================================================

const AddOnCard = ({ addOn, checked, onToggle }:any) => (
    <div
        className={[
            'coverage__addon',
            checked ? 'coverage__addon--active' : '',
        ].join(' ').trim()}
    >
        <span className="coverage__addon-icon">{addOn.icon}</span>
        <div className="coverage__addon-body">
            <span className="coverage__addon-title">{addOn.title}</span>
            <span className="coverage__addon-desc">{addOn.desc}</span>
            <span className="coverage__addon-price">{addOn.price}</span>
        </div>
        <button
            type="button"
            role="switch"
            aria-checked={checked}
            className={[
                'coverage__switch',
                checked ? 'coverage__switch--on' : '',
            ].join(' ').trim()}
            onClick={() => onToggle(addOn.id)}
        >
            <span className="coverage__switch-knob" />
        </button>
    </div>
);

const AddOnsPanel = ({ addOnState, onToggle, selectedCount, addedCost }:any) => {
    const [open, setOpen] = useState(true);

    return (
        <div className="coverage__addons-panel">
            <button
                type="button"
                className="coverage__addons-header"
                onClick={() => setOpen((o) => !o)}
            >
                <span className="coverage__addons-header-icon">
                    <FiPlus />
                </span>
                <span className="coverage__addons-header-copy">
                    <span className="coverage__addons-header-title">Add-ons</span>
                    <span className="coverage__addons-header-meta">
                        {selectedCount} selected &middot; RM {addedCost}/yr
                    </span>
                </span>
                <span className="coverage__addons-header-chevron">
                    {open ? <FiChevronUp /> : <FiChevronDown />}
                </span>
            </button>

            {open && (
                <div className="coverage__addons-list">
                    {ADD_ONS.map((addOn) => (
                        <AddOnCard
                            key={addOn.id}
                            addOn={addOn}
                            checked={!!addOnState[addOn.id]}
                            onToggle={onToggle}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

const BestMatchHero = () => (
    <div className="coverage__hero">
        <span className="coverage__hero-icon">
            <PiSparkleBold />
        </span>

        <div className="coverage__hero-body">
            <span className="coverage__hero-eyebrow">
                POLIS AI <span className="coverage__hero-eyebrow-dot">&middot;</span>{' '}
                Personalised for SL
            </span>
            <h3 className="coverage__hero-title">
                Best match for you &mdash;{' '}
                <span className="coverage__hero-title-accent">Allianz General</span>
            </h3>
            <div className="coverage__hero-tags">
                <span className="coverage__hero-tag">98% coverage match</span>
                <span className="coverage__hero-tag">Lowest premium</span>
                <span className="coverage__hero-tag">Unlimited drivers</span>
                <span className="coverage__hero-tag">Fast claims &middot; 24h</span>
            </div>
        </div>

        <div className="coverage__hero-price">
            <div>
                <span className="coverage__hero-price-label">FROM</span>
                <span className="coverage__hero-price-value">RM 1,284</span>
            </div>
            <FiArrowRight className="coverage__hero-arrow" />
        </div>
    </div>
);

const PlanCard = ({ plan, isComparing, onToggleCompare }:any) => (
    <div className="coverage__plan-card">
        <div className="coverage__plan-main">
            <div className="coverage__plan-top">
                <div className="coverage__plan-name-row">
                    <span className="coverage__plan-name">{plan.name}</span>
                    {plan.badge && (
                        <span
                            className={`coverage__plan-badge coverage__plan-badge--${plan.badge.tone}`}
                        >
                           
                            {plan.badge.text}
                        </span>
                    )}
                </div>
                <span className="coverage__plan-logo">{plan.logo}</span>
            </div>

            <div className="coverage__plan-meta">
                <span className="coverage__plan-rating">
                    <AiFillStar />
                    {plan.rating}{' '}
                    <span className="coverage__plan-reviews">({plan.reviews})</span>
                </span>
                {plan.digitalClaims && (
                    <span className="coverage__plan-meta-item green">
                        <FaRegCircleCheck />
                        Digital claims
                    </span>
                )}
                <span className="coverage__plan-meta-item ">
                    <PiWrenchBold />
                    {plan.workshops}
                </span>
            </div>

            <span className="coverage__plan-highlights-label">
                COVERAGE HIGHLIGHTS
            </span>
            <div className="coverage__plan-highlights">
                {plan.highlights.map((h:any) => (
                    <span className="coverage__plan-highlight-pill" key={h}>
                        {HIGHLIGHT_ICONS[h]}
                        {h}
                    </span>
                ))}
                {plan.highlights.length > 5 && (
                    <span className="coverage__plan-highlight-pill coverage__plan-highlight-pill--link">
                        View All
                    </span>
                )}
            </div>

            <div className="coverage__plan-actions">
                <button type="button" className="coverage__plan-details-btn">
                    View details
                    <FiChevronDown />
                </button>
                <button
                    type="button"
                    className={[
                        'coverage__plan-compare-btn',
                        isComparing ? 'coverage__plan-compare-btn--added' : '',
                    ].join(' ').trim()}
                    onClick={() => onToggleCompare(plan.id)}
                >
                    {isComparing ? (
                        <>
                            <FiCheck />
                            Added to compare
                        </>
                    ) : (
                        'Compare'
                    )}
                </button>
            </div>
        </div>

        <div className="coverage__plan-side">
            {plan.save && (
                <span className="coverage__plan-save"> <IoMdTrendingDown />{plan.save}</span>
            )}
            <span className="coverage__plan-price">
                <span className="coverage__plan-price-currency">RM</span>{' '}
                <span className="coverage__plan-price-figure">{plan.price}</span>
            </span>
            <span className="coverage__plan-permonth">
                or {plan.perMonth} &middot; incl. add-ons
            </span>
            {plan.original && (
                <span className="coverage__plan-original">{plan.original}</span>
            )}

            <button
                type="button"
                className={[
                    'coverage__plan-select-btn',
                    plan.ctaVariant === 'outline'
                        ? 'coverage__plan-select-btn--outline'
                        : '',
                ].join(' ').trim()}
            >
                {plan.ctaVariant === 'outline' ? 'Select Plan' : 'Select plan'}
                <FiArrowRight />
            </button>
        </div>
    </div>
);

const CompareBar = ({ compareList, plansById, onRemove, onClear, onContinue }:any) => (
    <div className="coverage__compare-bar">
        <div className="coverage__compare-bar-left">
            <span className="coverage__compare-bar-icon">
                <PiSparkleBold />
            </span>
            <div className="coverage__compare-bar-copy">
                <span className="coverage__compare-bar-title">Compare plans</span>
                <span className="coverage__compare-bar-meta">
                    Pick up to 3 &middot; {compareList.length}/3 selected
                </span>
            </div>
        </div>

        <div className="coverage__compare-bar-chips">
            {compareList.map((id:any) => {
                const plan = plansById[id];
                return (
                    <span className="coverage__compare-chip" key={id}>
                        <span className="coverage__compare-chip-avatar">
                            {plan.name.charAt(0)}
                        </span>
                        {plan.name.split(' ')[0]}
                        <button
                            type="button"
                            className="coverage__compare-chip-remove"
                            onClick={() => onRemove(id)}
                        >
                            <FiX />
                        </button>
                    </span>
                );
            })}
            {compareList.length < 3 && (
                <span className="coverage__compare-chip coverage__compare-chip--add">
                    <FiPlus />
                    Add plan
                </span>
            )}
        </div>

        <div className="coverage__compare-bar-right">
            <button
                type="button"
                className="coverage__compare-bar-clear"
                onClick={onClear}
            >
                Clear
            </button>
            <button type="button" className="coverage__compare-bar-cta" onClick={onContinue}>
                Compare now
                <FiArrowRight />
            </button>
        </div>
    </div>
);

// ==========================================================================
// Main component
// ==========================================================================

const Coverage = ({ onContinue }:any) => {
    const [sortBy, setSortBy] = useState('best-match');
    const [addOnState, setAddOnState] = useState<any>(
        ADD_ONS.reduce(
            (acc, item) => ({ ...acc, [item.id]: item.defaultOn }),
            {}
        )
    );
    const [compareList, setCompareList] = useState(['allianz', 'etiqa']);

    const plansById = PLANS.reduce(
        (acc, p) => ({ ...acc, [p.id]: p }),
        {}
    );

    const toggleAddOn = (id:any) => {
        setAddOnState((prev:any) => ({ ...prev, [id]: !prev[id] }));
    };

    const selectedAddOns = ADD_ONS.filter((a) => addOnState[a.id]);
    const addedCost = selectedAddOns.reduce((sum, a) => {
        const num = parseInt(a.price.replace(/\D/g, ''), 10) || 0;
        return sum + num;
    }, 0);

    const toggleCompare = (id:any) => {
        setCompareList((prev) => {
            if (prev.includes(id)) return prev.filter((p) => p !== id);
            if (prev.length >= 3) return prev;
            return [...prev, id];
        });
    };

    return (
        <div className="coverage">
            <div className="coverage__top">
                <div className="coverage__top-left">
                    <span className="coverage__match-pill">
                        <span className="coverage__match-dot" />
                        12 plans matched in 0.8s
                    </span>
                    <h2 className="coverage__title">
                        Your quotes,{' '}
                        <span className="coverage__title--accent">tailored</span>.
                    </h2>
                    <p className="coverage__subtitle">
                        We compared 12 live policies against your travel profile. Pick a
                        plan, adjust add-ons, checkout in minutes.
                    </p>
                </div>

                <div className="coverage__sort">
                    <span className="coverage__sort-label">Sort by:</span>
                    {[
                        { id: 'best-match', label: 'Best match' },
                        { id: 'lowest-price', label: 'Lowest price' },
                        { id: 'top-rated', label: 'Top rated' },
                    ].map((opt) => (
                        <button
                            key={opt.id}
                            type="button"
                            className={[
                                'coverage__sort-btn',
                                sortBy === opt.id ? 'coverage__sort-btn--active' : '',
                            ].join(' ').trim()}
                            onClick={() => setSortBy(opt.id)}
                        >
                            {opt.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="coverage__grid">
                <aside className="coverage__sidebar">
                    <AddOnsPanel
                        addOnState={addOnState}
                        onToggle={toggleAddOn}
                        selectedCount={selectedAddOns.length}
                        addedCost={addedCost}
                    />
                </aside>

                <div className="coverage__main">
                    <BestMatchHero />

                    <div className="coverage__plan-list">
                        {PLANS.map((plan) => (
                            <PlanCard
                                key={plan.id}
                                plan={plan}
                                isComparing={compareList.includes(plan.id)}
                                onToggleCompare={toggleCompare}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {compareList.length > 0 && (
                <CompareBar
                    compareList={compareList}
                    plansById={plansById}
                    onRemove={(id:any) =>
                        setCompareList((prev) => prev.filter((p) => p !== id))
                    }
                    onClear={() => setCompareList([])}
                    onContinue={onContinue}
                />
            )}
        </div>
    );
};

export default Coverage;