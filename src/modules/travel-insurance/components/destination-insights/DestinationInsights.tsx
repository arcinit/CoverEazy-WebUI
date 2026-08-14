import React from 'react';
import {
    FiWind,
    FiGlobe,
    FiDollarSign,
    FiPhone,
    FiActivity,
    FiArrowRight,
    FiCheck,
    FiSmartphone,
    FiCreditCard,
} from 'react-icons/fi';
import { HiOutlineShieldCheck } from 'react-icons/hi';
import { HiSparkles } from 'react-icons/hi2';
import { TbLanguage } from 'react-icons/tb';
import { FaBriefcaseMedical } from 'react-icons/fa';
import { MdAccountBalance } from 'react-icons/md';
import './DestinationInsights.scss';
import bankIcon from "./images/bank.png";
import cardIcon from "./images/card.png";
import phoneIcon from "./images/phone.png"

/** Config for the eight destination-fact cards. */
const DESTINATION_FACTS = [
    {
        id: 'weather',
        icon: FiWind,
        tone: 'blue',
        label: 'Weather',
        value: '28°C · Partly Cloudy',
        caption: 'Jun–Aug: Warm & humid',
    },
    {
        id: 'visa',
        icon: FiGlobe,
        tone: 'orange',
        label: 'Visa Status',
        value: 'Visa Required',
        caption: 'Apply 3–4 weeks before',
    },
    {
        id: 'safety',
        icon: HiOutlineShieldCheck,
        tone: 'green',
        label: 'Safety Index',
        value: '76/100 · Safe',
        caption: 'Low crime, tourist-friendly',
    },
    {
        id: 'currency',
        icon: FiDollarSign,
        tone: 'green',
        label: 'Currency',
        value: 'JPY · ¥1 = RM 0.031',
        caption: 'Cash preferred in rural areas',
    },
    {
        id: 'language',
        icon: TbLanguage,
        tone: 'purple',
        label: 'Language',
        value: 'Japanese',
        caption: 'English in tourist areas',
    },
    {
        id: 'emergency',
        icon: FiPhone,
        tone: 'red',
        label: 'Emergency',
        value: '110 · Police',
        caption: '119 Fire/Ambulance',
    },
    {
        id: 'medical-cost',
        icon: FiActivity,
        tone: 'red',
        label: 'Medical Cost',
        value: 'RM 2,000+/day',
        caption: 'High-quality but expensive',
    },
    {
        id: 'hospitals',
        icon: FaBriefcaseMedical,
        tone: 'green',
        label: 'Hospitals',
        value: '4 near your hotel',
        caption: 'Intl. hospitals available',
    },
];

/** AI-generated travel tips. */
const AI_TIPS = [
    {
        id: 'insurance-docs',
        icon: phoneIcon,
        text: 'Carry travel insurance documents digitally and have offline access.',
    },
    {
        id: 'embassy',
        icon: bankIcon,
        text: 'Register with Malaysian Embassy before departure for emergency assistance.',
    },
    {
        id: 'bank',
        icon: cardIcon,
        text: 'Inform your bank of travel dates to avoid card blocks abroad.',
    },
];

/** Recommended vaccinations. */
const VACCINATIONS = [
    'Hepatitis A',
    'Hepatitis B',
    'Typhoid',
    'Japanese Encephalitis',
    'COVID-19 (up to date)',
    'Influenza',
];

const DestinationInsights = ({ onContinue }:any) => {
    return (
        <div className="destination-insights">
            <header className="destination-insights__header">
                <h1 className="destination-insights__title">
                    Destination <span className="destination-insights__title-accent">insights</span>
                </h1>
                <p className="destination-insights__subtitle">
                    Everything you need to know about your destination before you travel.
                </p>
            </header>

            {/* Destination facts grid */}
            <section className="destination-insights__facts-grid">
                {DESTINATION_FACTS.map((fact) => {
                    const Icon = fact.icon;
                    return (
                        <div className="fact-card" key={fact.id}>
                            <span className={`fact-card__icon fact-card__icon--${fact.tone}`}>
                                <Icon />
                            </span>
                            <span className="fact-card__label">{fact.label}</span>
                            <span className="fact-card__value">{fact.value}</span>
                            <span className="fact-card__caption">{fact.caption}</span>
                        </div>
                    );
                })}
            </section>

            {/* AI travel tips */}
            <section className="destination-insights__tips">
                <span className="destination-insights__eyebrow">
                    <HiSparkles className="destination-insights__eyebrow-icon" />
                    AI Travel Tips for Your Trip
                </span>
                <div className="destination-insights__tips-grid">
                    {AI_TIPS.map((tip) => {
                        return (
                            <div className="tip-card" key={tip.id}>
                                <span className="tip-card__icon-img">
                                    <img src={tip.icon} alt={tip.id} />
                                </span>
                                <p className="tip-card__text">{tip.text}</p>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Recommended vaccinations */}
            <section className="destination-insights__vaccinations">
                <h3 className="destination-insights__vaccinations-title">
                    Recommended Vaccinations
                </h3>
                <div className="destination-insights__vaccinations-list">
                    {VACCINATIONS.map((vaccine) => (
                        <span className="vaccine-pill" key={vaccine}>
                            <FiCheck className="vaccine-pill__icon" />
                            {vaccine}
                        </span>
                    ))}
                </div>
            </section>

            <div className="destination-insights__footer">
                <button
                    className="destination-insights__proceed-btn"
                    type="button"
                    onClick={onContinue}
                >
                    Proceed to Checkout
                    <FiArrowRight />
                </button>
            </div>
        </div>
    );
};


export default DestinationInsights;