import React from 'react'
import { Link } from 'react-router-dom'
import './FinalCallToAction.scss'

const FinalCallToAction = () => (
    <section className="final-cta" aria-labelledby="final-cta-title">
        <div className="final-cta__panel">
            <div className="final-cta__content">
                <span className="final-cta__badge">
                    <span className="final-cta__badge-dot" />
                    Join 250,000+ Malaysians
                </span>
                <h2 className="final-cta__title" id="final-cta-title">
                    Manage your insurance <em>smarter.</em>
                </h2>
                <p className="final-cta__description">
                    One intelligent platform for all your insurance and road tax needs. Free to<br className="final-cta__desktop-break" /> use. Save in minutes.
                </p>
                <div className="final-cta__actions">
                    <Link className="final-cta__button final-cta__button--primary" to="/get-quote">
                        Get Instant Quote
                    </Link>
                    <Link className="final-cta__button final-cta__button--secondary" to="/login">
                        Create Free Account
                    </Link>
                </div>
            </div>
        </div>
    </section>
)

export default FinalCallToAction
