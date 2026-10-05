import React from 'react'
import { FiBarChart2, FiBell, FiSmartphone } from 'react-icons/fi'
import { LuWallet } from 'react-icons/lu'
import './MobileAppShowcase.scss'

const features = [
    { label: 'Policy Wallet', icon: LuWallet },
    { label: 'Smart Alerts', icon: FiBell },
    { label: 'Live Dashboard', icon: FiBarChart2 },
    { label: '1-Tap Claims', icon: FiSmartphone },
]

const MobileAppShowcase = () => (
    <section className="mobile-app-showcase" aria-labelledby="mobile-app-showcase-title">
        <div className="mobile-app-showcase__container">
            <div className="mobile-app-showcase__content">
                <span className="mobile-app-showcase__eyebrow">Mobile app</span>
                <h2 className="mobile-app-showcase__title" id="mobile-app-showcase-title">
                    Carry your protection<br className="mobile-app-showcase__desktop-break" /> in your pocket.
                </h2>
                <p className="mobile-app-showcase__description">
                    Manage policies, file claims, and renew road tax from anywhere. Available on iOS and Android.
                </p>

                <ul className="mobile-app-showcase__features">
                    {features.map(({ label, icon: Icon }) => (
                        <li className="mobile-app-showcase__feature" key={label}>
                            <Icon aria-hidden="true" />
                            <span>{label}</span>
                        </li>
                    ))}
                </ul>

                <div className="mobile-app-showcase__downloads" aria-label="App download options">
                    <div className="mobile-app-showcase__store-badge">
                        <span className="mobile-app-showcase__store-mark" aria-hidden="true" />
                        <span>
                            <small>Download on</small>
                            <strong>App Store</strong>
                        </span>
                    </div>
                    <div className="mobile-app-showcase__store-badge">
                        <span className="mobile-app-showcase__store-mark" aria-hidden="true" />
                        <span>
                            <small>Download on</small>
                            <strong>Google Play</strong>
                        </span>
                    </div>
                    <div className="mobile-app-showcase__qr-badge">
                        <span className="mobile-app-showcase__qr-icon" aria-hidden="true">
                            <i />
                        </span>
                        <span className="mobile-app-showcase__qr-copy">
                            <small>Scan to download</small>
                            <strong>polisone.my/app</strong>
                        </span>
                    </div>
                </div>
            </div>

            <div className="mobile-app-showcase__visual" aria-hidden="true">
                <div className="mobile-app-showcase__rear-phone">
                    <span className="mobile-app-showcase__rear-speaker" />
                    <div className="mobile-app-showcase__rear-cards">
                        <span><i className="mobile-app-showcase__status-dot mobile-app-showcase__status-dot--green" /></span>
                        <span><i className="mobile-app-showcase__status-dot mobile-app-showcase__status-dot--blue" /></span>
                        <span><i className="mobile-app-showcase__status-dot mobile-app-showcase__status-dot--gold" /></span>
                    </div>
                </div>

                <div className="mobile-app-showcase__phone">
                    <div className="mobile-app-showcase__screen">
                        <span className="mobile-app-showcase__island" />
                        <div className="mobile-app-showcase__greeting">
                            <span>Good morning</span>
                            <strong>Aisha Rahman</strong>
                            <i>A</i>
                        </div>
                        <div className="mobile-app-showcase__policy">
                            <small>Active policy</small>
                            <strong>VCS 8842 · Comprehensive</strong>
                            <span>Exp 12/2026</span>
                        </div>
                        <div className="mobile-app-showcase__quick-actions">
                            <span><i />Quote</span>
                            <span><i />Claim</span>
                            <span><i />Wallet</span>
                        </div>
                        <div className="mobile-app-showcase__savings-label">Savings · 12 months</div>
                        <div className="mobile-app-showcase__savings-card">
                            <strong>RM 2,840</strong>
                            <svg viewBox="0 0 120 34" fill="none">
                                <path d="M2 28C19 19 29 15 43 17C58 19 65 23 81 20C97 17 106 10 118 5" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default MobileAppShowcase
