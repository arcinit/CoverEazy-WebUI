import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
    FiCreditCard,
    FiFileText,
    FiSearch,
    FiShield,
    FiTruck,
} from 'react-icons/fi'
import './RoadTaxRenewal.scss'

const renewalSteps = [
    {
        label: 'Verify Vehicle',
        description: 'Enter your plate number for instant lookup.',
        icon: FiSearch,
    },
    {
        label: 'Insurance Check',
        description: 'We auto-validate your active motor policy.',
        icon: FiShield,
    },
    {
        label: 'Secure Payment',
        description: 'Pay via FPX, card, or e-wallet.',
        icon: FiCreditCard,
    },
    {
        label: 'Doorstep Delivery',
        description: 'Physical disc delivered within 48 hours.',
        icon: FiTruck,
    },
    {
        label: 'Digital Receipt',
        description: 'Saved automatically to your policy wallet.',
        icon: FiFileText,
    },
]

const RoadTaxRenewal = () => {
    const [plateNumber, setPlateNumber] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        navigate('/road-tax')
    }

    return (
        <section className="road-tax-renewal" aria-labelledby="road-tax-renewal-title">
            <div className="road-tax-renewal__container">
                <header className="road-tax-renewal__header">
                    <span className="road-tax-renewal__eyebrow">Road tax renewal</span>
                    <h2 className="road-tax-renewal__title" id="road-tax-renewal-title">
                        Renew road tax in under 2<br className="road-tax-renewal__desktop-break" /> minutes.
                    </h2>
                    <p className="road-tax-renewal__description">
                        JPJ-integrated, fully digital, delivered to your door. The fastest way to renew in Malaysia.
                    </p>
                </header>

                <ol className="road-tax-renewal__steps">
                    {renewalSteps.map(({ label, description, icon: Icon }, index) => (
                        <li className="road-tax-renewal__step" key={label}>
                            <div className="road-tax-renewal__step-top">
                                <span className="road-tax-renewal__step-icon">
                                    <Icon aria-hidden="true" />
                                </span>
                                <span className="road-tax-renewal__step-number">
                                    Step {String(index + 1).padStart(2, '0')}
                                </span>
                            </div>
                            <h3 className="road-tax-renewal__step-title">{label}</h3>
                            <p className="road-tax-renewal__step-description">{description}</p>
                        </li>
                    ))}
                </ol>

                <form className="road-tax-renewal__cta" onSubmit={handleSubmit}>
                    <div className="road-tax-renewal__cta-copy">
                        <h3 className="road-tax-renewal__cta-title">Ready to renew?</h3>
                        <p className="road-tax-renewal__cta-description">
                            Enter your plate number. We'll handle the rest.
                        </p>
                    </div>
                    <div className="road-tax-renewal__cta-actions">
                        <input
                            className="road-tax-renewal__plate-input"
                            type="text"
                            aria-label="Vehicle plate number"
                            placeholder="VCS 8842"
                            value={plateNumber}
                            onChange={(event) => setPlateNumber(event.target.value)}
                        />
                        <button className="road-tax-renewal__submit" type="submit">
                            Renew Now
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default RoadTaxRenewal
