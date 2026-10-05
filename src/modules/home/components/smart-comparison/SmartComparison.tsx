import React from 'react'
import { Link } from 'react-router-dom'
import { FaCheck, FaStar } from 'react-icons/fa'
import './SmartComparison.scss'

interface InsurancePlan {
    id: string
    label: string
    insurer: string
    price: string
    savings: string
    cashback: string
    features: string[]
    recommended?: boolean
}

const plans: InsurancePlan[] = [
    {
        id: 'etiqa',
        label: 'Best value',
        insurer: 'Etiqa Takaful',
        price: '1,280',
        savings: 'Save RM 420',
        cashback: 'RM 80 cashback',
        features: ['Comprehensive', '55% NCD', '24/7 roadside', 'Flood add-on'],
    },
    {
        id: 'allianz',
        label: 'Top coverage',
        insurer: 'Allianz General',
        price: '1,480',
        savings: 'Save RM 220',
        cashback: 'RM 60 cashback',
        features: ['Comprehensive+', '55% NCD', 'Windshield', 'Personal accident'],
        recommended: true,
    },
    {
        id: 'msig',
        label: 'Fast claims',
        insurer: 'MSIG Malaysia',
        price: '1,390',
        savings: 'Save RM 310',
        cashback: 'RM 50 cashback',
        features: ['Comprehensive', '55% NCD', 'Towing 200km', 'Workshop choice'],
    },
]

const SmartComparison = () => (
    <section className="smart-comparison" aria-labelledby="smart-comparison-title">
        <header className="smart-comparison__header">
            <span className="smart-comparison__eyebrow">Smart comparison</span>
            <h2 className="smart-comparison__title" id="smart-comparison-title">
                Compare. Save. Renew in one tap.
            </h2>
            <p className="smart-comparison__subtitle">
                Real quotes from licensed insurers. No hidden fees. Pricing for a 2022 Honda Civic, 55% NCD.
            </p>
        </header>

        <div className="smart-comparison__plans">
            {plans.map((plan) => (
                <article
                    className={`smart-comparison__card${plan.recommended ? ' smart-comparison__card--recommended' : ''}`}
                    key={plan.id}
                >
                    {plan.recommended && (
                        <span className="smart-comparison__recommend-badge">
                            <FaStar aria-hidden="true" />
                            Recommended
                        </span>
                    )}
                    <div className="smart-comparison__card-inner">
                        <div className="smart-comparison__plan-header">
                            <div>
                                <span className="smart-comparison__plan-label">{plan.label}</span>
                                <h3 className="smart-comparison__insurer">{plan.insurer}</h3>
                            </div>
                            <span className="smart-comparison__insurer-mark" aria-hidden="true">
                                {plan.insurer.charAt(0)}
                            </span>
                        </div>

                        <div className="smart-comparison__price">
                            <span className="smart-comparison__currency">RM</span>
                            <strong>{plan.price}</strong>
                            <span className="smart-comparison__period">/year</span>
                        </div>

                        <div className="smart-comparison__offers">
                            <span className="smart-comparison__saving">{plan.savings}</span>
                            <span className="smart-comparison__cashback">{plan.cashback}</span>
                        </div>

                        <ul className="smart-comparison__features">
                            {plan.features.map((feature) => (
                                <li key={feature}>
                                    <FaCheck aria-hidden="true" />
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <Link
                            className={`smart-comparison__action${plan.recommended ? ' smart-comparison__action--primary' : ''}`}
                            to="/get-quote"
                        >
                            Buy this policy
                        </Link>
                    </div>
                </article>
            ))}
        </div>
    </section>
)

export default SmartComparison
