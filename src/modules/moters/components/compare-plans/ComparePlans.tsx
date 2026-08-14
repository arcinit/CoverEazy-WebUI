import React, { useMemo, useState } from 'react'
import './ComparePlans.scss'
import {
    IoCheckmarkCircle,
    IoCarSportOutline,
    IoCalendarOutline,
    IoSpeedometerOutline,
    IoWaterOutline,
    IoStar,
    IoSparkles,
    IoArrowForward,
    IoCashOutline,
    IoPeopleOutline,
    IoPersonOutline,
    IoConstructOutline,
    IoCarOutline,
    IoMedkitOutline,
    IoPhonePortraitOutline,
    IoFlashOutline,
    IoPricetagOutline,
    IoShieldCheckmarkOutline,
    IoClose,
    IoCheckmark,
    IoInformationCircleOutline,
} from 'react-icons/io5'
import carImage from "./images/car.png"
import { FaCheck } from 'react-icons/fa'
import allianzPlanLogo from "./images/plans-images/allianz.png";
import zurkPlanLogo from "./images/plans-images/zurk.png";
import tokioPlanLogo from "./images/plans-images/tokio.png";
import PlanDetailsModal from '../plan-details-modal/PlanDetailsModal'

// ---------------------------------------------------------------
// Static data
// ---------------------------------------------------------------
const vehicle: any = {
    name: 'Toyota Camry',
    year: '2022',
    transmission: 'Automatic',
    fuel: 'Petrol',
    sumInsured: 'RM 142,800',
    ncd: '30%',
    renewal: '12 Aug 2026',
}

const plans: any = [
    {
        id: 'allianz',
        badge: 'RECOMMENDED',
        logo: allianzPlanLogo,
        name: 'Allianz General',
        plan: 'Comprehensive Plus',
        price: '1,284',
        oldPrice: '1,480',
        save: '196',
        monthly: '107',
        score: 98,
        rating: 4.8,
        reviews: '12.5k',
        digital: 'Yes Digital',
        workshops: '320+ Workshops',
        highlight: true,
    },
    {
        id: 'tokio',
        logo: tokioPlanLogo,
        name: 'Tokio Marine',
        plan: 'Comprehensive Plus',
        price: '1,156',
        oldPrice: '1,480',
        save: '196',
        monthly: '107',
        score: 98,
        rating: 4.8,
        reviews: '12.5k',
        digital: 'Yes Digital',
        workshops: '320+ Workshops',
        highlight: false,
    },
    {
        id: 'zurich',
        logo: zurkPlanLogo,
        name: 'Zurich Takaful',
        plan: 'Takaful Premier',
        price: '1,342',
        oldPrice: '1,480',
        save: '196',
        monthly: '107',
        score: 98,
        rating: 4.8,
        reviews: '12.5k',
        digital: 'Yes Digital',
        workshops: '320+ Workshops',
        highlight: false,
    },
]

const RECOMMENDED_PLAN_ID = 'allianz'

const sections: any = [
    {
        title: null,
        rows: [
            { label: 'Sum Insured', icon: IoCashOutline, values: ['RM 142.8K', 'RM 142.8K', 'RM 142.8K'] },
        ],
    },
    {
        title: 'COVERAGE',
        rows: [
            { label: 'Flood Protection', icon: IoWaterOutline, values: [{ type: 'tag', color: 'blue', text: 'Full Cover' }, { type: 'tag', color: 'blue', text: 'Full Cover' }, { type: 'cross' }] },
            { label: 'Windscreen Protection', icon: IoCarSportOutline, values: ['RM 3K', 'RM 2K', 'RM 1.5K'] },
            { label: 'Passenger Coverage', icon: IoPeopleOutline, values: ['RM 50K', 'RM 30K', 'RM 25K'] },
            { label: 'Unlimited Drivers', icon: IoPersonOutline, values: [{ type: 'tag', color: 'green', text: 'Unlimited' }, '+RM 45', { type: 'cross' }] },
        ],
    },
    {
        title: 'ASSISTANCE',
        rows: [
            { label: '24/7 Roadside Assist', icon: IoConstructOutline, values: [{ type: 'check' }, { type: 'check' }, { type: 'check' }] },
            { label: 'Emergency Towing', icon: IoCarOutline, values: ['Unlimited', '200 KM', '150 KM'] },
            { label: 'Emergency Evacuation', icon: IoMedkitOutline, values: [{ type: 'check' }, { type: 'cross' }, { type: 'check' }] },
        ],
    },
    {
        title: 'CLAIMS',
        rows: [
            { label: 'Digital Claims', icon: IoPhonePortraitOutline, values: [{ type: 'tag', color: 'blue', text: 'App + Web' }, { type: 'tag', color: 'gray', text: 'App Only' }, { type: 'cross' }] },
            { label: 'Panel Workshops', icon: IoConstructOutline, values: ['320+', '280+', '195+'] },
            { label: 'Average Claim Time', icon: IoFlashOutline, values: [{ type: 'tag', color: 'green', text: '24 hrs' }, '48 hrs', '72 hrs'] },
        ],
    },
    {
        title: 'BENEFITS',
        rows: [
            { label: 'Cashback Benefits', icon: IoPricetagOutline, values: ['RM 196', 'RM 134', { type: 'cross' }] },
            { label: 'Courtesy Car', icon: IoCarSportOutline, values: [{ type: 'tag', color: 'blue', text: '5 Days' }, { type: 'cross' }, '3 Days'] },
            { label: 'No-Claim Discount', icon: IoShieldCheckmarkOutline, values: [{ type: 'tag', color: 'green', text: 'Protected' }, { type: 'tag', color: 'green', text: 'Protected' }, { type: 'cross' }] },
        ],
    },
]

const topBenefits: any = ['Full Flood Cover', 'Unlimited Drivers', '24h Claims', '320+ Workshops', 'RM196 Cashback', 'Courtesy Car']

// ---------------------------------------------------------------
// Sub components
// ---------------------------------------------------------------
const VehicleBar = () => (
    <div className="vehicle-bar">
        <div className="vehicle-bar__left">
            <div className="vehicle-bar__car-image">
                <img src={carImage} alt="car" />
            </div>
            <div className="vehicle-bar__info">
                <span className="vehicle-bar__label">Your Vehicle</span>
                <h3 className="vehicle-bar__name">{vehicle.name}</h3>
                <p className="vehicle-bar__meta">
                    <span>{vehicle.year}</span>
                    <span><IoSpeedometerOutline className="icon" /> {vehicle.transmission}</span>
                    <span><IoWaterOutline className="icon" /> {vehicle.fuel}</span>
                </p>
            </div>
        </div>
        <div className="vehicle-bar__stats">
            <div className="vehicle-bar__stat">
                <span className="vehicle-bar__stat-label">Sum Insured</span>
                <span className="vehicle-bar__stat-value">{vehicle.sumInsured}</span>
            </div>
            <div className="vehicle-bar__stat">
                <span className="vehicle-bar__stat-label">NCD</span>
                <span className="vehicle-bar__stat-value">{vehicle.ncd}</span>
            </div>
            <div className="vehicle-bar__stat">
                <span className="vehicle-bar__stat-label"><IoCalendarOutline className="icon" /> Renewal</span>
                <span className="vehicle-bar__stat-value">{vehicle.renewal}</span>
            </div>
        </div>
    </div>
)

// `isSelected`/`onSelect` are now driven by real state instead of a hardcoded
// `plan.cta` string, so clicking "Select Plan" on any card actually works.
const PlanCompareCard = ({ plan, isSelected, onSelect }: any) => (
    <div className={`plan-compare-card${plan.highlight ? ' plan-compare-card--highlight' : ''}`}>
        {plan.badge && (
            <span className="plan-compare-card__badge">
                <IoSparkles className="icon" /> {plan.badge}
            </span>
        )}

        <div className="plan-compare-card__head">
            <span className="plan-compare-card__logo">
                <img src={plan.logo} alt="" />
            </span>
            <div className='plan-compare-card__plan-info'>
                <h4 className="plan-compare-card__name">{plan.name}</h4>
                <p className="plan-compare-card__plan">{plan.plan}</p>
            </div>
        </div>

        <div className="plan-compare-card__price">
            <span className="plan-compare-card__price-value"> <span>RM</span> {plan.price}</span>
            <span className="plan-compare-card__price-unit">/yr</span>
            <span className="plan-compare-card__price-old">RM {plan.oldPrice}</span>
            <span className="plan-compare-card__price-save">Save RM {plan.save}</span>
        </div>
        <p className="plan-compare-card__monthly">or RM {plan.monthly}/mo</p>

        <div className="plan-compare-card__badges">
            <span className="plan-compare-card__pill plan-compare-card__pill--blue">
                <IoShieldCheckmarkOutline className="icon" /> {plan.score} Score
            </span>
            <span className="plan-compare-card__pill plan-compare-card__pill--yellow">
                <IoStar className="icon plan-compare-card__star" /> {plan.rating} · {plan.reviews}
            </span>
            <span className="plan-compare-card__pill plan-compare-card__pill--green">
                <IoCheckmark className="icon" /> {plan.digital}
            </span>
            <span className="plan-compare-card__pill">
                <IoConstructOutline className="icon" /> {plan.workshops}
            </span>
        </div>

        {isSelected ? (
            <button type="button" className="plan-compare-card__cta plan-compare-card__cta--selected" onClick={onSelect}>
                <FaCheck className="icon" /> Selected
            </button>
        ) : (
            <button type="button" className="plan-compare-card__cta" onClick={onSelect}>
                Select Plan <IoArrowForward className="icon" />
            </button>
        )}
    </div>
)

const renderValue = (value: any) => {
    if (value == null) return <IoClose className="icon compare-grid__cross" />
    if (typeof value === 'string') return <span className="compare-grid__text">{value}</span>
    if (value.type === 'check') return <span className="compare-grid__mark compare-grid__mark--check"><IoCheckmark className="icon" /></span>
    if (value.type === 'cross') return <span className="compare-grid__mark compare-grid__mark--cross"><IoClose className="icon" /></span>
    if (value.type === 'tag') return <span className={`compare-grid__tag compare-grid__tag--${value.color}`}>{value.text}</span>
    return null
}

const CompareGrid = ({ selectedPlanId, onSelectPlan }: any) => (
    <div className="compare-grid">
        <div className="compare-grid__row compare-grid__row--cards">
            <div className="compare-grid__label-cell">
                <span className="compare-grid__features-label">Features</span>
                <span className="compare-grid__features-count">14 compared</span>
            </div>
            {plans.map((plan: any) => (
                <div className="compare-grid__cell" key={plan.id}>
                    <PlanCompareCard
                        plan={plan}
                        isSelected={selectedPlanId === plan.id}
                        onSelect={() => onSelectPlan(plan.id)}
                    />
                </div>
            ))}
        </div>

        {sections.map((section: any, sIdx: any) => (
            <React.Fragment key={sIdx}>
                {section.title && (
                    <div className="compare-grid__section-title">{section.title}</div>
                )}
                {section.rows.map((row: any, rIdx: any) => {
                    const Icon = row.icon
                    return (
                        <div className="compare-grid__row compare-grid__row--feature" key={rIdx}>
                            <div className="compare-grid__feature-label">
                                <Icon className="icon" /> {row.label}
                            </div>
                            {row.values.map((v: any, i: any) => (
                                <div
                                    className={`compare-grid__value-cell${i === 0 ? ' compare-grid__value-cell--highlight' : ''}`}
                                    key={i}
                                >
                                    {renderValue(v)}
                                </div>
                            ))}
                        </div>
                    )
                })}
            </React.Fragment>
        ))}
    </div>
)

const RecommendedCard = ({ onViewBenefits, onChooseRecommended }: any) => (
    <div className="recommended-card">
        <div className="recommended-card__main">
            <p className="recommended-card__eyebrow">
                <IoSparkles className="icon" /> Recommended Choice
            </p>
            <h2 className="recommended-card__title">Allianz General</h2>
            <p className="recommended-card__subtitle">Best Value Plan · Comprehensive Plus</p>

            <div className="recommended-card__stats">
                <div className="recommended-card__stat">
                    <span className="recommended-card__stat-label">Coverage Score</span>
                    <span className="recommended-card__stat-value">98/100</span>
                </div>
                <div className="recommended-card__stat">
                    <span className="recommended-card__stat-label">Estimated Savings</span>
                    <span className="recommended-card__stat-value">RM 196</span>
                </div>
                <div className="recommended-card__stat">
                    <span className="recommended-card__stat-label">Customer Rating</span>
                    <span className="recommended-card__stat-value"><IoStar className="icon recommended-card__star" /> 4.8</span>
                </div>
            </div>

            <p className="recommended-card__section-label">Top Benefits</p>
            <div className="recommended-card__benefits">
                {topBenefits.map((b: any) => (
                    <span className="recommended-card__benefit" key={b}>{b}</span>
                ))}
            </div>

            <p className="recommended-card__why">
                <IoInformationCircleOutline className="icon" />
                <span><strong>Why recommended:</strong> highest coverage score against your profile, fastest claims turnaround, and the largest panel workshop network in Klang Valley.</span>
            </p>
        </div>

        <div className="recommended-card__aside">
            <span className="recommended-card__aside-label">Annual Premium</span>
            <div className="recommended-card__aside-price">
                <span className="recommended-card__aside-price-value">RM 1,284</span>
                <span className="recommended-card__aside-price-old">RM 1,480</span>
            </div>
            <p className="recommended-card__aside-monthly">or RM 107/month · 0% interest</p>
            <button type="button" className="recommended-card__choose-btn" onClick={onChooseRecommended}>
                Choose Recommended Plan <IoArrowForward className="icon" />
            </button>
            <button type="button" className="recommended-card__view-btn" onClick={onViewBenefits}>
                View Full Benefits
            </button>
        </div>
    </div>
)

const CheckoutBar = ({ selectedPlan, onContinue }: any) => (
    <div className="checkout-bar">
        <div className="checkout-bar__plan">
            <span className="checkout-bar__logo">{selectedPlan.name.charAt(0)}</span>
            <span>
                <span className="checkout-bar__plan-label">Selected Plan</span>
                <span className="checkout-bar__plan-name">{selectedPlan.name}</span>
            </span>
        </div>

        <div className="checkout-bar__right">
            <div className="checkout-bar__figures">
                <div className="checkout-bar__figure">
                    <span className="checkout-bar__figure-label">Premium</span>
                    <span className="checkout-bar__figure-value">RM {selectedPlan.price}</span>
                </div>
                <div className="checkout-bar__figure">
                    <span className="checkout-bar__figure-label">Monthly</span>
                    <span className="checkout-bar__figure-value">RM {selectedPlan.monthly}</span>
                </div>
                <div className="checkout-bar__figure">
                    <span className="checkout-bar__figure-label">Savings</span>
                    <span className="checkout-bar__figure-value checkout-bar__figure-value--green">RM {selectedPlan.save}</span>
                </div>
            </div>

            <button type="button" className="checkout-bar__cta" onClick={onContinue}>
                Continue to Checkout <IoArrowForward className="icon" />
            </button>
        </div>

    </div>
)

// ---------------------------------------------------------------
// Page
// ---------------------------------------------------------------
// `onContinue` is called whenever the user is ready to move to the next
// step in the flow (CarMotersFlow passes `() => setActiveStep(3)`).
// The step-level Header now comes from the flow shell, so it isn't
// re-rendered here — that also removes the double-header bug this
// component had when mounted inside CarMotersFlow.
const ComparePlans = ({ onContinue }: any) => {
    const [isDetailsOpen, setIsDetailsOpen] = useState(false)
    const [selectedPlanId, setSelectedPlanId] = useState(RECOMMENDED_PLAN_ID)

    const selectedPlan = useMemo(
        () => plans.find((p: any) => p.id === selectedPlanId) ?? plans[0],
        [selectedPlanId]
    )

    const handleChooseRecommended = () => {
        setSelectedPlanId(RECOMMENDED_PLAN_ID)
        onContinue?.()
    }

    return <>
        <div className="compare-page">
            <div className="compare-page__container">
                <span className="compare-page__badge">
                    <IoCheckmarkCircle className="icon" /> 3 plans selected for comparison
                </span>

                <h1 className="compare-page__title">
                    Compare your <span className="compare-page__title-accent">plans.</span>
                </h1>
                <p className="compare-page__subtitle">Every feature, side by side. Pick the right plan in seconds.</p>

                <VehicleBar />
                <CompareGrid selectedPlanId={selectedPlanId} onSelectPlan={setSelectedPlanId} />
                <RecommendedCard
                    onViewBenefits={() => setIsDetailsOpen(true)}
                    onChooseRecommended={handleChooseRecommended}
                />
            </div>

            <CheckoutBar selectedPlan={selectedPlan} onContinue={onContinue} />
        </div>

        <PlanDetailsModal
            isOpen={isDetailsOpen}
            onClose={() => setIsDetailsOpen(false)}
            plan={selectedPlan}
        />
    </>
}

export default ComparePlans