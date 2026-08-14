import React, { useState } from 'react'
import './Moters.scss'
import {
    IoArrowBack,
    IoArrowForward,
    IoCheckmarkCircle,
    IoChevronUp,
    IoChevronDown,
    IoStar,
    IoDocumentTextOutline,
    IoWaterOutline,
    IoPersonOutline,
    IoCarSportOutline,
    IoCarOutline,
    IoConstructOutline,
    IoMedkitOutline,
    IoPeopleOutline,
    IoCheckmark,
    IoClose,
    IoAdd,
    IoWalletOutline,
    IoTrendingUpOutline,
    IoFlashOutline,
    IoShieldCheckmarkOutline,
    IoPencilOutline,
    IoSparkles,
} from 'react-icons/io5'
import { BiSolidMessageSquareEdit } from "react-icons/bi";
import { GoCheckCircleFill } from 'react-icons/go';
import Header from '../../../../shared/layouts/header/Header';

// ---------------------------------------------------------------
// Static data
// ---------------------------------------------------------------
const steps: any = [
    { id: 1, label: 'Vehicle Details', status: 'done' },
    { id: 2, label: 'Coverage', status: 'active' },
    { id: 3, label: 'Add-ons', status: 'pending' },
    { id: 4, label: 'Contact Details', status: 'pending' },
    { id: 5, label: 'Checkout', status: 'pending' },
]

const addonsData: any = [
    { id: 'windscreen', title: 'Windscreen Cover', desc: 'Repair or replace windscreen, sunroof and windows.', price: '+RM 65 /yr', enabled: true },
    { id: 'flood-disasters', title: 'Flood & Natural Disasters', desc: 'Repair or replace windscreen, sunroof and windows.', price: '+RM 110 /yr', enabled: true },
    { id: 'unlimited-drivers', title: 'Unlimited Drivers', desc: 'Anyone with a valid licence can drive your car.', price: '+RM 45 /yr', enabled: false },
    { id: 'roadside', title: '24/7 Roadside Assist', desc: 'Towing, jumpstart and on-the-spot help anywhere.', price: '+RM 38 /yr', enabled: true },
    { id: 'key-replacement', title: 'Key Replacement', desc: 'Lost or stolen key replacement, up to RM1,500.', price: '+RM 22 /yr', enabled: false },
    { id: 'flood-protection', title: 'Flood Protection', desc: 'Lost or stolen key replacement, up to RM1,500.', price: '+RM 22 /yr', enabled: false },
]

const highlightIcons: any = {
    'Flood Coverage': IoWaterOutline,
    'Unlimited Driver': IoPersonOutline,
    'Windscreen': IoCarSportOutline,
    'Digital Claims': IoDocumentTextOutline,
    'Free Towing': IoCarOutline,
    'Roadside Assist': IoConstructOutline,
    'Emergency Evacuation': IoMedkitOutline,
    'Passenger Coverage': IoPeopleOutline,
}

const highlightsFull: any = ['Flood Coverage', 'Unlimited Driver', 'Windscreen', 'Digital Claims', 'Free Towing', 'Roadside Assist', 'Emergency Evacuation', 'Passenger Coverage']

const plansData: any = [
    {
        id: 'allianz',
        name: 'Allianz General',
        logo: 'Allianz',
        badge: { type: 'best-match', label: 'BEST MATCH' },
        rating: 4.8,
        reviews: '12,480',
        workshops: '320 panel workshops',
        highlights: highlightsFull,
        price: '1,497',
        oldPrice: 'RM 1,693',
        save: 'SAVE RM 196',
        monthly: 'RM 125/mo · incl. add-ons',
    },
    {
        id: 'etiqa',
        name: 'Etiqa Insurance',
        logo: 'etiqa',
        badge: { type: 'best-value', label: 'BEST VALUE' },
        rating: 4.8,
        reviews: '12,480',
        workshops: '320 panel workshops',
        highlights: highlightsFull,
        price: '1,369',
        oldPrice: 'RM 1,693',
        save: 'SAVE RM 196',
        monthly: 'RM 114/mo · incl. policy benefits',
    },
    {
        id: 'tokio',
        name: 'Tokio Marine',
        logo: 'TOKIOMARINE',
        badge: { type: 'most-picked', label: 'MOST PICKED' },
        rating: 4.8,
        reviews: '12,480',
        workshops: '320 panel workshops',
        highlights: highlightsFull,
        price: '1,555',
        monthly: 'RM 130/mo · incl. add-ons',
    },
    {
        id: 'zurich',
        name: 'Zurich Malaysia',
        logo: 'ZURICH',
        badge: null,
        rating: 4.8,
        reviews: '12,480',
        workshops: '320 panel workshops',
        highlights: highlightsFull,
        price: '1,621',
        monthly: 'RM 135/mo · incl. add-ons',
    },
]

const badgeIcon: any = {
    'best-match': IoStar,
    'best-value': IoWalletOutline,
    'most-picked': IoTrendingUpOutline,
}

// ---------------------------------------------------------------
// Sub components
// ---------------------------------------------------------------
export const Stepper = () => (
    <div className="stepper">
        {steps.map((step: any, i: any) => (
            <React.Fragment key={step.id}>
                <div className={`stepper__step stepper__step--${step.status}`}>
                    <span className="stepper__index">
                        {step.status === 'done' ? <IoCheckmarkCircle className="icon" /> : step.id}
                    </span>
                    <span className="stepper__label">{step.label}</span>
                </div>
                {i < steps.length - 1 && <span className="stepper__divider" />}
            </React.Fragment>
        ))}
    </div>
)

const VehicleCard = () => (
    <div className="vehicle-card">
        <div className="vehicle-card__top">
            <div className="vehicle-card__thumb">
                <IoCarSportOutline className="icon" />
            </div>
            <div className="vehicle-card__info">
                <h3 className="vehicle-card__name">Toyota Camry</h3>
                <p className="vehicle-card__meta">2022 · Automatic · Petrol</p>
            </div>
        </div>
        <div className="vehicle-card__stats">
            <div className="vehicle-card__stat">
                <span className="vehicle-card__stat-label">
                    SUM INSURED <BiSolidMessageSquareEdit className="icon" />
                </span>
                <span className="vehicle-card__stat-value">RM 142,800</span>
            </div>
            <div className="vehicle-card__stat">
                <span className="vehicle-card__stat-label">NCD</span>
                <span className="vehicle-card__stat-value">30%</span>
            </div>
        </div>
    </div>
)

const AddonsCard = () => {
    const [open, setOpen] = useState(true)
    const [addons, setAddons] = useState(addonsData)

    const toggle = (id: any) => {
        setAddons((prev: any) => prev.map((a: any) => (a.id === id ? { ...a, enabled: !a.enabled } : a)))
    }

    const selectedCount = addons.filter((a: any) => a.enabled).length

    return (
        <div className="addons-card">
            <button type="button" className="addons-card__header" onClick={() => setOpen((o) => !o)}>
                <span className="addons-card__header-left">
                    <span className="addons-card__plus"><IoAdd className="icon" /></span>
                    <span>
                        <span className="addons-card__title">Add-ons</span>
                        <span className="addons-card__subtitle">{selectedCount} selected · RM 213/yr</span>
                    </span>
                </span>
                {open ? <IoChevronUp className="icon" /> : <IoChevronDown className="icon" />}
            </button>

            {open && (
                <div className="addons-card__list">
                    {addons.map((a: any) => (
                        <div className="addons-card__row" key={a.id}>
                            <div className="addons-card__row-icon">
                                <IoShieldCheckmarkOutline className="icon" />
                            </div>
                            <div className="addons-card__row-body">
                                <p className="addons-card__row-title">{a.title}</p>
                                <p className="addons-card__row-desc">{a.desc}</p>
                                <p className="addons-card__row-price">{a.price}</p>
                            </div>
                            <button
                                type="button"
                                className={`addons-card__toggle${a.enabled ? ' active' : ''}`}
                                onClick={() => toggle(a.id)}
                                aria-pressed={a.enabled}
                            >
                                <span className="addons-card__toggle-knob" />
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

const BestMatchBanner = ({ plan }: any) => (
    <div className="best-match-banner">
        <div className="best-match-banner__icon">
            <IoSparkles className="icon" />
        </div>
        <div className="best-match-banner__body">
            <p className="best-match-banner__eyebrow">
                <span>POLIS AI</span>  ·  Personalised for SL
            </p>
            <h3 className="best-match-banner__title">
                Best match for you — <span>{plan.name}</span>
            </h3>
            <div className="best-match-banner__tags">
                <span className="best-match-banner__tag best-match-banner__tag--blue"><IoShieldCheckmarkOutline className="icon" /> 98% coverage match</span>
                <span className="best-match-banner__tag best-match-banner__tag--green"><IoTrendingUpOutline className="icon" /> Lowest premium</span>
                <span className="best-match-banner__tag"><IoPeopleOutline className="icon" /> Unlimited drivers</span>
                <span className="best-match-banner__tag"><IoFlashOutline className="icon" /> Fast claims · 24h</span>
            </div>
        </div>
        <div className="best-match-banner__price">
            <div className='best-match-banner__price-labels'>
                <div className="best-match-banner__price-label">FROM</div>
                <div className="best-match-banner__price-value">RM 1,284</div>
            </div>
            <IoArrowForward className="best-match-banner__arrow icon" />
        </div>
    </div>
)

const PlanCard = ({ plan, compared, onToggleCompare }: any) => {
    const BadgeIcon = plan.badge ? badgeIcon[plan.badge.type] : null

    return (
        <div className="plan-card">
            <div className="plan-card__main">
                <div className="plan-card__head">
                    <div className="plan-card__head-left">
                        <h4 className="plan-card__name">{plan.name}</h4>
                        {plan.badge && (
                            <span className={`plan-card__badge plan-card__badge--${plan.badge.type}`}>
                                {BadgeIcon && <BadgeIcon className="icon" />}
                                {plan.badge.label}
                            </span>
                        )}
                    </div>
                    <div className="plan-card__logo">{plan.logo}</div>
                </div>

                <div className="plan-card__meta">
                    <span className="plan-card__meta-item"><IoStar className="icon plan-card__star" /> {plan.rating} ({plan.reviews})</span>
                    <span className="plan-card__meta-item"><IoDocumentTextOutline className="icon" /> Digital claims</span>
                    <span className="plan-card__meta-item"><IoConstructOutline className="icon" /> {plan.workshops}</span>
                </div>

                <p className="plan-card__section-label">COVERAGE HIGHLIGHTS</p>
                <div className="plan-card__highlights">
                    {plan.highlights.slice(0, 6).map((h: any) => {
                        const Icon = highlightIcons[h]
                        return (
                            <span className="plan-card__highlight" key={h}>
                                {Icon && <Icon className="icon" />} {h}
                            </span>
                        )
                    })}
                    <button type="button" className="plan-card__view-all">View All</button>
                </div>

                <div className="plan-card__links">
                    <a href="#!" className="plan-card__link">View details <IoArrowForward className="icon" /></a>
                    <a href="#!" className="plan-card__link"><IoDocumentTextOutline className="icon" /> Certificate Wording</a>
                    <a href="#!" className="plan-card__link"><IoDocumentTextOutline className="icon" /> Product Disclosure Sheet</a>
                    <button
                        type="button"
                        className={`plan-card__compare-btn${compared ? ' active' : ''}`}
                        onClick={() => onToggleCompare(plan.id)}
                    >
                        {compared ? <><GoCheckCircleFill className="icon" /> Added to compare</> : 'Compare'}
                    </button>
                </div>
            </div>

            <div className="plan-card__aside">
                {plan.save && <span className="plan-card__save">{plan.save}</span>}
                <span className="plan-card__price">
                    <span className="plan-card__price-currency">RM</span> {plan.price}
                </span>
                <span className="plan-card__monthly">{plan.monthly}</span>
                {plan.oldPrice && <span className="plan-card__old-price">{plan.oldPrice}</span>}
                <button type="button" className="plan-card__select-btn">
                    Select Plan <IoArrowForward className="icon" />
                </button>
            </div>
        </div>
    )
}

const CompareBar = ({ compared, plans, onRemove, onClear,onCompare }: any) => {
    if (compared.length === 0) return null
    const comparedPlans = plans.filter((p: any) => compared.includes(p.id))

    return (
        <div className="compare-bar">
            <div className="compare-bar__left">
                <span className="compare-bar__icon"><IoTrendingUpOutline className="icon" /></span>
                <span>
                    <span className="compare-bar__title">Compare plans</span>
                    <span className="compare-bar__subtitle">Pick up to 3 · {compared.length}/3 selected</span>
                </span>
            </div>

            <div className="compare-bar__chips">
                {comparedPlans.map((p: any) => (
                    <span className="compare-bar__chip" key={p.id}>
                        <span className="compare-bar__chip-avatar">{p.name.charAt(0)}</span>
                        {p.name.split(' ')[0]}
                        <IoClose className="icon" onClick={() => onRemove(p.id)} />
                    </span>
                ))}
                {compared.length < 3 && (
                    <span className="compare-bar__chip compare-bar__chip--add">
                        <IoAdd className="icon" /> Add plan
                    </span>
                )}
            </div>

            <div className="compare-bar__actions">
                <button type="button" className="compare-bar__clear" onClick={onClear}>Clear</button>
                <button type="button" className="compare-bar__cta" onClick={() => onCompare()}>
                    Compare now <IoArrowForward className="icon" />
                </button>
            </div>
        </div>
    )
}

// ---------------------------------------------------------------
// Page
// ---------------------------------------------------------------
const Moters = ({onContinue}:any) => {
    const [sortBy, setSortBy] = useState('Best match')
    const [compared, setCompared] = useState(['allianz', 'etiqa'])

    const toggleCompare = (id: any) => {
        setCompared((prev) =>
            prev.includes(id) ? prev.filter((c) => c !== id) : prev.length < 3 ? [...prev, id] : prev
        )
    }

    return <>
        
        <div className="quotes-page">
            
            <div className="quotes-page__body">
                <aside className="quotes-page__sidebar">
                    <VehicleCard />
                    <AddonsCard />
                </aside>

                <main className="quotes-page__main">
                    <div className="quotes-page__main-head">
                        <div>
                            <p className="quotes-page__match-note">
                                <IoCheckmarkCircle className="icon" /> 12 plans matched in 0.8s
                            </p>
                            <h1 className="quotes-page__title">
                                Your quotes, <span>tailored.</span>
                            </h1>
                            <p className="quotes-page__subtitle">
                                We compared 12 live policies against your driving profile. Pick a plan, adjust add-ons, checkout in minutes.
                            </p>
                        </div>

                        <div className="quotes-page__sort">
                            <span className="quotes-page__sort-label">Sort by:</span>
                            {['Best match', 'Lowest price', 'Top rated'].map((opt) => (
                                <button
                                    type="button"
                                    key={opt}
                                    className={`quotes-page__sort-btn${sortBy === opt ? ' active' : ''}`}
                                    onClick={() => setSortBy(opt)}
                                >
                                    {opt}
                                </button>
                            ))}
                        </div>
                    </div>

                    <BestMatchBanner plan={plansData[0]} />

                    <div className="quotes-page__plans">
                        {plansData.map((plan: any) => (
                            <PlanCard
                                key={plan.id}
                                plan={plan}
                                compared={compared.includes(plan.id)}
                                onToggleCompare={toggleCompare}
                            />
                        ))}
                    </div>
                </main>
            </div>

            <CompareBar
                compared={compared}
                plans={plansData}
                onRemove={toggleCompare}
                onClear={() => setCompared([])}
                onCompare={onContinue}
            />
        </div>
    </>
}

export default Moters