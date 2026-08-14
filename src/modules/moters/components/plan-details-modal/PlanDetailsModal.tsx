import React, { useState } from 'react'
import './PlanDetailsModal.scss'
import {
    IoClose,
    IoStar,
    IoCheckmarkCircle,
    IoChevronUpOutline,
    IoChevronDownOutline,
    IoCloseCircleOutline,
    IoAddCircleOutline,
    IoWaterOutline,
    IoCarSportOutline,
    IoConstructOutline,
    IoBusinessOutline,
    IoCarOutline,
    IoFlashOutline,
    IoCallOutline,
    IoArrowForward,
    IoCalendarOutline,
} from 'react-icons/io5'
import { FaFileAlt, FaShieldAlt } from 'react-icons/fa'
import { IoIosCloseCircle } from 'react-icons/io'
import { MdRemoveRedEye } from 'react-icons/md'
import { BiSolidPlusSquare } from 'react-icons/bi'

// ---------------------------------------------------------------
// Static data
// ---------------------------------------------------------------
const vehicle: any = {
    sumInsured: 'RM 142,800',
    ncd: '30%',
    renewal: '12 Aug 2026',
}

const coreCoverage: any = [
    { title: 'Accidental Damage', desc: 'Covers repair costs for your vehicle due to accidental collisions.' },
    { title: 'Fire & Theft', desc: 'Protection against vehicle loss due to fire or criminal theft.' },
    { title: 'Third-party Liability', desc: 'Coverage for injury or property damage caused to others.' },
]

const addOns: any = [
    { icon: IoWaterOutline, title: 'Flood Protection', price: '+RM 50/year' },
    { icon: IoCarSportOutline, title: 'Windshield Protection', price: '+RM 80/year' },
]

const exclusions: any = [
    'Consequential loss of any nature.',
    'Damage caused by war or nuclear risks.',
    'Driving under influence of alcohol or drugs.',
]

const claimSteps: any = [
    { icon: FaFileAlt, title: '1. Report', desc: 'Notify via RHB app or 24/7 hotline within 24 hours.' },
    { icon: MdRemoveRedEye, title: '2. Survey', desc: 'Adjuster inspects vehicle at a panel workshop.' },
    { icon: IoConstructOutline, title: '3. Repair', desc: 'Quality repairs with original parts guarantee.' },
]

const whyChoosePoints: any = [
    { icon: IoBusinessOutline, title: '500+ Panel Workshops', desc: 'Widest network in West & East Malaysia.' },
    { icon: IoCarOutline, title: '24/7 Roadside Assistance', desc: 'Free towing up to 50km for breakdowns.' },
    { icon: IoFlashOutline, title: 'Fast Approval', desc: 'Claims under RM 5k approved in 48h.' },
]

// ---------------------------------------------------------------
// Modal Header — lives INSIDE the left/main column only.
// ---------------------------------------------------------------
const ModalHeader = ({ plan, onClose }: any) => (
    <div className="plan-details-modal__header">
        <button type="button" className="plan-details-modal__close" onClick={onClose}>
            <IoClose className="icon" />
        </button>

        <div className="plan-details-modal__brand">
            <span className="plan-details-modal__brand-logo">
                <img src={plan.logo} alt="" />
            </span>
            <div className="plan-details-modal__brand-info">
                <h2 className="plan-details-modal__brand-title">
                    Comprehensive <span>Motor Insurance</span>
                </h2>
                <p className="plan-details-modal__brand-subtitle">by {plan.name}</p>
            </div>
        </div>

        <button type="button" className="plan-details-modal__select-btn">
            Select Plan
        </button>
    </div>
)

const PolicySummaryCard = () => (
    <section className="policy-summary">
        <h3 className="policy-summary__title">Policy Summary</h3>
        <div className="policy-summary__grid">
            <div className="policy-summary__item">
                <span className="policy-summary__label">Sum Insured</span>
                <span className="policy-summary__value">{vehicle.sumInsured}</span>
            </div>
            <div className="policy-summary__item">
                <span className="policy-summary__label">NCD</span>
                <span className="policy-summary__value">{vehicle.ncd}</span>
            </div>
            <div className="policy-summary__item">
                <span className="policy-summary__label">
                    <IoCalendarOutline className="icon" /> Renewal
                </span>
                <span className="policy-summary__value">{vehicle.renewal}</span>
            </div>
        </div>
    </section>
)

const CoreCoverageCard = () => {
    const [open, setOpen] = useState(true)

    return (
        <section className="core-coverage">
            <button
                type="button"
                className="core-coverage__header"
                onClick={() => setOpen((prev) => !prev)}
            >
                <span className="core-coverage__header-left">
                    <span className="core-coverage__icon">
                        <FaShieldAlt className="icon" />
                    </span>
                    <span className="core-coverage__title">Core Coverage</span>
                </span>
                {open ? (
                    <IoChevronUpOutline className="icon core-coverage__chevron" />
                ) : (
                    <IoChevronDownOutline className="icon core-coverage__chevron" />
                )}
            </button>

            {open && (
                <div className="core-coverage__body">
                    <ul className="core-coverage__list">
                        {coreCoverage.map((item: any) => (
                            <li className="core-coverage__item" key={item.title}>
                                <IoCheckmarkCircle className="icon core-coverage__check" />
                                <div>
                                    <p className="core-coverage__item-title">{item.title}</p>
                                    <p className="core-coverage__item-desc">{item.desc}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </section>
    )
}

// ---------------------------------------------------------------
// Recommended Add-ons — independent card
// ---------------------------------------------------------------
const AddOnsCard = () => {
    console.log('[AddOnsCard] rendering, addOns:', addOns) // TEMP: remove after confirming render
    return (
        <section className="addons-card">
            <div className="addons-card__header">
                <span className="addons-card__icon">
                    <BiSolidPlusSquare className="icon" />
                </span>
                <span className="addons-card__title">Recommended Add-ons</span>
            </div>
            <div className="addons-card__body">
                <ul className="addons-card__list">
                    {addOns.map((item: any) => {
                        const Icon = item.icon
                        return (
                            <li className="addons-card__item" key={item.title}>
                                <div className="addons-card__item-left">
                                    <Icon className="icon addons-card__item-icon" />
                                    <span className="addons-card__item-title">{item.title}</span>
                                </div>
                                <div className="addons-card__item-price">{item.price}</div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}

const ExclusionsCard = () => {
    const [open, setOpen] = useState(true)

    return (
        <section className="exclusions-card">
            <button
                type="button"
                className="exclusions-card__header"
                onClick={() => setOpen((prev) => !prev)}
            >
                <span className="exclusions-card__header-left">
                    <span className="exclusions-card__icon">
                        <IoIosCloseCircle className="icon" />
                    </span>
                    <span className="exclusions-card__title">Exclusions</span>
                </span>
                {open ? (
                    <IoChevronUpOutline className="icon exclusions-card__chevron" />
                ) : (
                    <IoChevronDownOutline className="icon exclusions-card__chevron" />
                )}
            </button>

            {open && (
                <div className="exclusions-card__body">
                    <ul className="exclusions-card__list">
                        {exclusions.map((item: string) => (
                            <li className="exclusions-card__item" key={item}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </section>
    )
}

const ClaimsProcessCard = () => (
    <section className="claims-process">
        <h3 className="claims-process__title">Claims Process</h3>
        <div className="claims-process__grid">
            {claimSteps.map((step: any) => {
                const Icon = step.icon
                return (
                    <div className="claims-process__step" key={step.title}>
                        <span className="claims-process__icon">
                            <Icon className="icon" />
                        </span>
                        <p className="claims-process__step-title">{step.title}</p>
                        <p className="claims-process__step-desc">{step.desc}</p>
                    </div>
                )
            })}
        </div>
    </section>
)

const StarRating = ({ rating }: any) => {
    const stars = [0, 1, 2, 3, 4]
    return (
        <span className="why-choose-card__stars">
            {stars.map((i) => (
                <IoStar
                    key={i}
                    className={`icon why-choose-card__star${i < Math.round(rating) ? ' why-choose-card__star--filled' : ''
                        }`}
                />
            ))}
        </span>
    )
}

const WhyChooseCard = ({ plan }: any) => (
    <div className="why-choose-card">
        <p className="why-choose-card__eyebrow">Insurer Choice</p>
        <h3 className="why-choose-card__title">Why Choose {plan.name}?</h3>

        <div className="why-choose-card__score">
            <span className="why-choose-card__score-value">
                {plan.score ? (plan.score / 10).toFixed(1) : plan.rating}
            </span>
            <span className="why-choose-card__score-meta">
                <StarRating rating={plan.rating || 4.5} />
                <span className="why-choose-card__score-label">Coverage Score</span>
            </span>
        </div>

        <ul className="why-choose-card__list">
            {whyChoosePoints.map((point: any) => {
                const Icon = point.icon
                return (
                    <li className="why-choose-card__item" key={point.title}>
                        <span className="why-choose-card__item-icon">
                            <Icon className="icon" />
                        </span>
                        <div>
                            <p className="why-choose-card__item-title">{point.title}</p>
                            <p className="why-choose-card__item-desc">{point.desc}</p>
                        </div>
                    </li>
                )
            })}
        </ul>
    </div>
)

const HelpCard = () => (
    <div className="help-card">
        <p className="help-card__title">Need help deciding?</p>
        <p className="help-card__desc">
            Our insurance experts are available 9 AM - 6 PM to guide you through RHB&apos;s fine print.
        </p>
        <button type="button" className="help-card__btn">
            <IoCallOutline className="icon" /> Talk to Expert
        </button>
    </div>
)

interface PlanDetailsModalProps {
    isOpen: boolean
    onClose: () => void
    plan: any
}

const PlanDetailsModal = ({ isOpen, onClose, plan }: PlanDetailsModalProps) => {
    if (!isOpen || !plan) return null

    return (
        <div className="plan-details-modal__overlay" onClick={onClose}>
            <div className="plan-details-modal" onClick={(e) => e.stopPropagation()}>
                <div className="plan-details-modal__body">
                    <div className="plan-details-modal__main">
                        <ModalHeader plan={plan} onClose={onClose} />
                        <PolicySummaryCard />
                        <CoreCoverageCard />
                        <AddOnsCard />
                        <ExclusionsCard />
                        <ClaimsProcessCard />
                    </div>

                    <aside className="plan-details-modal__aside">
                        <WhyChooseCard plan={plan} />
                        <HelpCard />
                    </aside>
                </div>

                <div className="plan-details-modal__footer">
                    <div className="plan-details-modal__footer-plan">
                        <span className="plan-details-modal__footer-logo">
                            <img src={plan.logo} alt="" />
                        </span>
                        <span>
                            <span className="plan-details-modal__footer-plan-label">Selected Plan</span>
                            <span className="plan-details-modal__footer-plan-name">{plan.name}</span>
                        </span>
                    </div>

                    <div className="plan-details-modal__footer-right">
                        <div className="plan-details-modal__footer-figures">
                            <div className="plan-details-modal__footer-figure">
                                <span className="plan-details-modal__footer-figure-label">Premium</span>
                                <span className="plan-details-modal__footer-figure-value">RM {plan.price}</span>
                            </div>
                            <div className="plan-details-modal__footer-figure">
                                <span className="plan-details-modal__footer-figure-label">Monthly</span>
                                <span className="plan-details-modal__footer-figure-value">RM {plan.monthly}</span>
                            </div>
                            <div className="plan-details-modal__footer-figure">
                                <span className="plan-details-modal__footer-figure-label">Savings</span>
                                <span className="plan-details-modal__footer-figure-value plan-details-modal__footer-figure-value--green">
                                    RM {plan.save}
                                </span>
                            </div>
                        </div>
                        <button type="button" className="plan-details-modal__footer-cta">
                            Continue to Checkout <IoArrowForward className="icon" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlanDetailsModal