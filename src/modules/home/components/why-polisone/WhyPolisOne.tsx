import React from 'react'
import {
    LuActivity,
    LuBell,
    LuBrain,
    LuFileCheck2,
    LuGauge,
    LuShieldCheck,
    LuWallet,
} from 'react-icons/lu'
import './WhyPolisOne.scss'

const features = [
    {
        title: 'Instant Comparison',
        description: 'Side-by-side quotes from 20+ insurers in 30 seconds.',
        icon: LuGauge,
        featured: true,
    },
    {
        title: 'AI Recommendations',
        description: 'Smart match engine learns your needs and suggests the best plan.',
        icon: LuBrain,
    },
    {
        title: 'Real-Time Claims',
        description: 'Track every stage of your claim with live status updates.',
        icon: LuActivity,
    },
    {
        title: 'Digital Road Tax',
        description: 'Renew online, delivered to your doorstep within 48 hours.',
        icon: LuFileCheck2,
    },
    {
        title: 'Smart Reminders',
        description: 'Never miss a renewal. Push alerts 60 days before expiry.',
        icon: LuBell,
    },
    {
        title: 'Policy Wallet',
        description: 'All policies in one secure digital wallet with QR access.',
        icon: LuWallet,
    },
    {
        title: 'Secure Payments',
        description: 'PCI-DSS compliant. Bank Negara certified. PDPA protected.',
        icon: LuShieldCheck,
    },
]

const metrics = [
    { value: '250,000', accent: '+', label: 'Policies issued' },
    { value: 'RM 12', accent: 'M+', label: 'Total saved' },
    { value: '98', accent: '%', label: 'Claim approval' },
    { value: '48', accent: 'h', label: 'Avg. settlement' },
]

const WhyPolisOne = () => (
    <section className="why-polisone" aria-labelledby="why-polisone-title">
        <header className="why-polisone__header">
            <span className="why-polisone__eyebrow">Why PolisOne</span>
            <h2 className="why-polisone__title" id="why-polisone-title">
                Built for the modern
                <br />
                Malaysian
            </h2>
            <p className="why-polisone__subtitle">
                Enterprise-grade infrastructure. Consumer-grade simplicity. Designed to make insurance effortless.
            </p>
        </header>

        <div className="why-polisone__features">
            {features.map(({ title, description, icon: Icon, featured }) => (
                <article
                    className={`why-polisone__feature${featured ? ' why-polisone__feature--featured' : ''}`}
                    key={title}
                >
                    <span className="why-polisone__icon">
                        <Icon aria-hidden="true" />
                    </span>
                    <h3 className="why-polisone__feature-title">{title}</h3>
                    <p className="why-polisone__feature-description">{description}</p>
                </article>
            ))}
        </div>

        <div className="why-polisone__metrics">
            {metrics.map((metric) => (
                <div className="why-polisone__metric" key={metric.label}>
                    <div className="why-polisone__metric-value">
                        {metric.value}<span>{metric.accent}</span>
                    </div>
                    <div className="why-polisone__metric-label">{metric.label}</div>
                </div>
            ))}
        </div>
    </section>
)

export default WhyPolisOne
