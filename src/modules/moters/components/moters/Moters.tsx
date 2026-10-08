import React, { useState } from 'react'
import './Moters.scss'
import {
    IoArrowForward,
    IoCheckmarkCircle,
    IoCheckmarkCircleOutline,
    IoChevronUp,
    IoChevronDown,
    IoStar,
    IoWaterOutline,
    IoPeopleOutline,
    IoCheckmark,
    IoClose,
    IoAdd,
    IoTrendingUpOutline,
    IoFlashOutline,
    IoSparkles,
    IoTicket,
    IoRibbonOutline,
} from 'react-icons/io5'
import { LuWind, LuTruck, LuWrench, LuUsers, LuKeyRound, LuLifeBuoy, LuCarFront } from 'react-icons/lu'
import { BiSolidMessageSquareEdit } from 'react-icons/bi'
import carImg from './images/vehicle-thumb.png'
import allianzLogo from './images/allianz-logo.png'
import etiqaLogo from './images/etiqa-logo.png'
import tokioLogo from './images/tokio-logo.png'
import zurichLogo from './images/zurich-logo.png'
import VasModal from '../vas-modal/VasModal'

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
    { id: 'windscreen', title: 'Windscreen Cover', desc: 'Repair or replace windscreen, sunroof and windows.', price: '65', enabled: true, icon: LuWind },
    { id: 'flood-disasters', title: 'Flood & Natural Disasters', desc: 'Repair or replace windscreen, sunroof and windows.', price: '110', enabled: true, icon: LuWind },
    { id: 'unlimited-drivers', title: 'Unlimited Drivers', desc: 'Anyone with a valid licence can drive your car.', price: '45', enabled: false, icon: LuUsers },
    { id: 'roadside', title: '24/7 Roadside Assist', desc: 'Towing, jumpstart and on-the-spot help anywhere.', price: '38', enabled: true, icon: LuLifeBuoy },
    { id: 'key-replacement', title: 'Key Replacement', desc: 'Lost or stolen key replacement, up to RM1,500.', price: '22', enabled: false, icon: LuKeyRound },
    { id: 'flood-protection', title: 'Flood Protection', desc: 'Lost or stolen key replacement, up to RM1,500.', price: '22', enabled: false, icon: LuCarFront },
]

const highlights: any = [
    { label: 'Flood Coverage', icon: IoWaterOutline },
    { label: 'Windscreen', icon: LuWind },
    { label: 'Free Towing', icon: LuTruck },
]

const plansData: any = [
    { id: 'allianz', name: 'Allianz General', short: 'Allianz', logo: 'allianz', color: '#0b3a8c', badge: { type: 'best-match', label: 'BEST MATCH' }, rating: 4.8, reviews: '12,480', digital: true, workshops: '19 Cashless Garages', price: '1,497', monthly: '125' },
    { id: 'etiqa', name: 'Etiqa Insurance', short: 'Etiqa', logo: 'etiqa', color: '#fcc200', badge: { type: 'best-value', label: 'BEST VALUE' }, rating: 4.8, reviews: '12,480', digital: true, workshops: '320 panel workshops', price: '1,369', monthly: '114' },
    { id: 'tokio', name: 'Tokio Marine', short: 'Tokio', logo: 'tokio', color: '#0aa0c8', badge: { type: 'most-picked', label: 'MOST PICKED' }, rating: 4.8, reviews: '12,480', digital: true, workshops: '320 panel workshops', price: '1,555', monthly: '130' },
    { id: 'zurich', name: 'Zurich Malaysia', short: 'Zurich', logo: 'zurich', color: '#0a6fb5', badge: null, rating: 4.8, reviews: '12,480', digital: false, workshops: '320 panel workshops', price: '1,621', monthly: '135' },
]

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

const GiftIcon = () => (
    <svg width="36" height="36" viewBox="0 0 36 36" className="icon" aria-hidden="true">
        <defs>
            <linearGradient id="giftg" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#2f6fe0" />
                <stop offset="1" stopColor="#e0359c" />
            </linearGradient>
        </defs>
        <path d="M18 9c-1-4-6-6-8-3s1 5 8 5zm0 0c1-4 6-6 8-3s-1 5-8 5z" fill="none" stroke="url(#giftg)" strokeWidth="2.4" />
        <rect x="3" y="11" width="30" height="7" rx="1.5" fill="url(#giftg)" />
        <rect x="5" y="19" width="26" height="14" rx="1.5" fill="url(#giftg)" />
        <rect x="16.5" y="11" width="3" height="22" fill="#fff" opacity="0.85" />
    </svg>
)

const PlanLogo = ({ id }: any) => {
    const src: any = { allianz: allianzLogo, etiqa: etiqaLogo, tokio: tokioLogo, zurich: zurichLogo }
    return <img className={`plan-card__logo-img plan-card__logo-img--${id}`} src={src[id]} alt={id} />
}

const MIN_VALUE = 45200
const MAX_VALUE = 59900
const fmt = (n: number) => 'RM ' + n.toLocaleString('en-US')

const VehicleCard = () => {
    const [editing, setEditing] = useState(false)
    const [value, setValue] = useState(50200)
    const pct = ((value - MIN_VALUE) / (MAX_VALUE - MIN_VALUE)) * 100

    return (
        <div className="vehicle-card">
            <div className="vehicle-card__top">
                <div className="vehicle-card__thumb">
                    <img src={carImg} alt="" />
                </div>
                <div className="vehicle-card__info">
                    <h3 className="vehicle-card__name">Toyota Camry</h3>
                    <p className="vehicle-card__meta">2022 &middot; Automatic &middot; Petrol</p>
                </div>
            </div>
            {editing ? (
                <>
                    <p className="vehicle-card__edit-label">Choose preferred market value</p>
                    <p className="vehicle-card__edit-value">{fmt(value)}</p>
                    <input
                        type="range"
                        className="vehicle-card__slider"
                        min={MIN_VALUE}
                        max={MAX_VALUE}
                        step={100}
                        value={value}
                        style={{ ['--pct' as any]: pct + '%' }}
                        onChange={(e) => setValue(Number(e.target.value))}
                        aria-label="Preferred market value"
                    />
                    <div className="vehicle-card__range">
                        <span>{fmt(MIN_VALUE)}</span>
                        <span>{fmt(MAX_VALUE)}</span>
                    </div>
                    <button type="button" className="vehicle-card__proceed" onClick={() => setEditing(false)}>
                        Proceed with {fmt(value)} <IoArrowForward className="icon" />
                    </button>
                </>
            ) : (
                <div className="vehicle-card__stats">
                    <div className="vehicle-card__stat">
                        <span className="vehicle-card__stat-label">SUM INSURED</span>
                        <button type="button" className="vehicle-card__edit" onClick={() => setEditing(true)}>
                            <span>Edit</span> <BiSolidMessageSquareEdit className="icon" />
                        </button>
                    </div>
                    <div className="vehicle-card__stat">
                        <span className="vehicle-card__stat-label">NCD</span>
                        <span className="vehicle-card__stat-value">30%</span>
                    </div>
                    <div className="vehicle-card__stat">
                        <span className="vehicle-card__stat-label">Policy Expiry</span>
                        <span className="vehicle-card__stat-value">25 Aug 2026</span>
                    </div>
                </div>
            )}
        </div>
    )
}

const AddonsCard = () => {
    const [open, setOpen] = useState(true)
    const [addons, setAddons] = useState(addonsData)

    const toggle = (id: any) => {
        setAddons((prev: any) => prev.map((a: any) => (a.id === id ? { ...a, enabled: !a.enabled } : a)))
    }

    const selectedCount = addons.filter((a: any) => a.enabled).length

    return (
        <div className="quote-addons">
            <button type="button" className="quote-addons__header" onClick={() => setOpen((o) => !o)}>
                <span className="quote-addons__header-left">
                    <span className="quote-addons__plus"><IoAdd className="icon" /></span>
                    <span>
                        <span className="quote-addons__title">Add-ons</span>
                        <span className="quote-addons__subtitle">{selectedCount} selected</span>
                    </span>
                </span>
                {open ? <IoChevronUp className="icon" /> : <IoChevronDown className="icon" />}
            </button>

            {open && (
                <div className="quote-addons__list">
                    {addons.map((a: any) => {
                        const Icon = a.icon
                        return (
                            <div className="quote-addons__row" key={a.id}>
                                <div className="quote-addons__row-icon">
                                    <Icon className="icon" />
                                </div>
                                <div className="quote-addons__row-body">
                                    <p className="quote-addons__row-title">{a.title}</p>
                                    <p className="quote-addons__row-desc">{a.desc}</p>
                                    <p className="quote-addons__row-price"><b>+RM {a.price}</b> /yr</p>
                                </div>
                                <button
                                    type="button"
                                    className={`quote-addons__toggle${a.enabled ? ' active' : ''}`}
                                    onClick={() => toggle(a.id)}
                                    aria-pressed={a.enabled}
                                    aria-label={`Toggle ${a.title}`}
                                >
                                    <span className="quote-addons__toggle-knob" />
                                </button>
                            </div>
                        )
                    })}
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
                <span>POLIS AI</span> &nbsp;&middot;&nbsp; Personalised for SL
            </p>
            <h3 className="best-match-banner__title">
                Best match for you &mdash; <span>{plan.name}</span>
            </h3>
            <div className="best-match-banner__tags">
                <span className="best-match-banner__tag best-match-banner__tag--blue"><IoRibbonOutline className="icon" /> 98% coverage match</span>
                <span className="best-match-banner__tag best-match-banner__tag--green"><IoTrendingUpOutline className="icon" /> Lowest premium</span>
                <span className="best-match-banner__tag"><IoPeopleOutline className="icon" /> Unlimited drivers</span>
                <span className="best-match-banner__tag"><IoFlashOutline className="icon" /> Fast claims &middot; 24h</span>
            </div>
        </div>
        <div className="best-match-banner__price">
            <div className="best-match-banner__price-labels">
                <div className="best-match-banner__price-label">FROM</div>
                <div className="best-match-banner__price-value">RM 1,284</div>
            </div>
            <IoArrowForward className="best-match-banner__arrow icon" />
        </div>
    </div>
)

const PlanCard = ({ plan, compared, onToggleCompare, onOpenVas }: any) => (
    <div className="plan-card">
        <div className="plan-card__main">
            <div className="plan-card__head">
                <div className="plan-card__head-left">
                    <div className="plan-card__title-row">
                        <h4 className="plan-card__name">{plan.name}</h4>
                        {plan.badge && (
                            <span className={`plan-card__badge plan-card__badge--${plan.badge.type}`}>
                                <IoSparkles className="icon" />
                                {plan.badge.label}
                            </span>
                        )}
                    </div>
                    <div className="plan-card__meta">
                        <span className="plan-card__meta-item"><IoStar className="icon plan-card__star" /> <b>{plan.rating}</b> ({plan.reviews})</span>
                        {plan.digital && (
                            <span className="plan-card__meta-item plan-card__meta-item--green"><IoCheckmarkCircleOutline className="icon" /> Digital claims</span>
                        )}
                        <span className="plan-card__meta-item plan-card__meta-item--link"><LuWrench className="icon" /> <span>{plan.workshops}</span></span>
                    </div>
                </div>
                <div className="plan-card__logo"><PlanLogo id={plan.logo} /></div>
            </div>

            <p className="plan-card__section-label">Coverage Highlights</p>
            <div className="plan-card__highlights">
                <span className="plan-card__highlight">
                    <LuLifeBuoy className="icon" /> 24/7 Roadside Assist <span className="plan-card__included">Included</span>
                </span>
                {highlights.map((h: any) => {
                    const Icon = h.icon
                    return (
                        <span className="plan-card__highlight" key={h.label}>
                            <Icon className="icon" /> {h.label}
                        </span>
                    )
                })}
                <button type="button" className="plan-card__view-all">View All</button>
            </div>

            <button type="button" className="plan-card__service" onClick={onOpenVas}>
                <GiftIcon />
                <span>
                    <span className="plan-card__service-title">Car Service Included</span>
                    <span className="plan-card__service-sub">Get free car wash &amp; oil filter check <b>+10 more service</b></span>
                </span>
            </button>

            <div className="plan-card__links">
                <a href="#!" className="plan-card__link plan-card__link--details">View details <span aria-hidden>&rsaquo;</span></a>
                <a href="#!" className="plan-card__link"><IoTicket className="icon" /> Certificate Wording</a>
                <a href="#!" className="plan-card__link"><IoTicket className="icon" /> Product Disclosure Sheet</a>
            </div>
        </div>

        <div className="plan-card__aside">
            <div className="plan-card__price-wrap">
                <span className="plan-card__price-currency">RM</span>
                <span className="plan-card__price">{plan.price}</span>
            </div>
            <span className="plan-card__monthly">or <b>RM {plan.monthly}</b>/mo &middot; incl. add-ons</span>
            <div className="plan-card__actions">
                <button
                    type="button"
                    className={`plan-card__compare-btn${compared ? ' active' : ''}`}
                    onClick={() => onToggleCompare(plan.id)}
                    aria-pressed={compared}
                >
                    <span className="plan-card__checkbox">{compared && <IoCheckmark />}</span> Add to Compare
                </button>
                <button type="button" className="plan-card__select-btn">
                    Select Plan <IoArrowForward className="icon" />
                </button>
            </div>
        </div>
    </div>
)

const CompareBar = ({ compared, plans, onRemove, onClear, onCompare }: any) => {
    const comparedPlans = compared.map((id: any) => plans.find((p: any) => p.id === id)).filter(Boolean)

    return (
        <div className="compare-bar">
            <div className="compare-bar__left">
                <span className="compare-bar__icon"><IoSparkles className="icon" /></span>
                <span>
                    <span className="compare-bar__title">Compare plans</span>
                    <span className="compare-bar__subtitle">Pick up to 3 &middot; {compared.length}/3 selected</span>
                </span>
            </div>

            <div className="compare-bar__chips">
                {comparedPlans.map((p: any) => (
                    <span className="compare-bar__chip" key={p.id}>
                        <span className="compare-bar__chip-avatar" style={{ background: p.color }}>{p.short.charAt(0)}</span>
                        {p.short}
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
const Moters = ({ onContinue }: any) => {
    const [sortBy, setSortBy] = useState('Best match')
    const [compared, setCompared] = useState<string[]>([])
    const [vasOpen, setVasOpen] = useState(false)

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
                            <p className="quotes-page__match-note">12 plans matched in 0.8s</p>
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
                                onOpenVas={() => setVasOpen(true)}
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
            <VasModal open={vasOpen} onClose={() => setVasOpen(false)} />
        </div>
    </>
}

export default Moters
