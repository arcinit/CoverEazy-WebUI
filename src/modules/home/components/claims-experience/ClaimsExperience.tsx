import React from 'react'
import { Link } from 'react-router-dom'
import {
    FiActivity,
    FiCheck,
    FiCreditCard,
    FiUploadCloud,
} from 'react-icons/fi'
import './ClaimsExperience.scss'

const benefits = [
    'Photo upload directly from your phone',
    'AI-assisted damage assessment',
    'Live status updates via push notification',
    'Fast DuitNow payout to your linked account',
]

const claimSteps = [
    { label: 'Submitted', caption: 'Completed · 12 May, 09:14', state: 'complete', icon: FiUploadCloud },
    { label: 'Under Review', caption: 'Completed · 13 May, 16:22', state: 'complete', icon: FiActivity },
    { label: 'Approved', caption: 'In progress · ETA 24h', state: 'active', icon: FiCheck },
    { label: 'Settled', caption: 'Pending', state: 'pending', icon: FiCreditCard },
]

const ClaimsExperience = () => (
    <section className="claims-experience" aria-labelledby="claims-experience-title">
        <div className="claims-experience__container">
            <div className="claims-experience__copy">
                <span className="claims-experience__eyebrow">Claims experience</span>
                <h2 className="claims-experience__title" id="claims-experience-title">
                    Claims, tracked in real-time.
                </h2>
                <p className="claims-experience__description">
                    Submit your claim in 3 minutes. Monitor every stage transparently. Direct deposit within 48 hours for approved claims.
                </p>

                <ul className="claims-experience__benefits">
                    {benefits.map((benefit) => (
                        <li key={benefit}>
                            <FiCheck aria-hidden="true" />
                            {benefit}
                        </li>
                    ))}
                </ul>

                <Link className="claims-experience__start-button" to="/claims">
                    Start a claim
                </Link>
            </div>

            <div className="claims-experience__visual">
                <div className="claims-experience__verification">
                    <span>AI verified</span>
                    <strong>98% confidence</strong>
                </div>
                <span className="claims-experience__tracking-pill">On track</span>

                <article className="claims-experience__claim-card">
                    <div className="claims-experience__claim-id">
                        <span>Claim ID</span>
                        <strong>CLM-99284-KL</strong>
                    </div>

                    <ol className="claims-experience__timeline">
                        {claimSteps.map(({ label, caption, state, icon: Icon }) => (
                            <li className={`claims-experience__step claims-experience__step--${state}`} key={label}>
                                <span className="claims-experience__step-icon">
                                    <Icon aria-hidden="true" />
                                </span>
                                <span className="claims-experience__step-copy">
                                    <strong>{label}</strong>
                                    <small>{caption}</small>
                                </span>
                            </li>
                        ))}
                    </ol>

                    <div className="claims-experience__payout">
                        <span className="claims-experience__payout-copy">
                            <small>Expected payout</small>
                            <strong>RM 8,420.00</strong>
                        </span>
                        <Link to="/claims" className="claims-experience__details-button">
                            View details
                        </Link>
                    </div>
                </article>
            </div>
        </div>
    </section>
)

export default ClaimsExperience
