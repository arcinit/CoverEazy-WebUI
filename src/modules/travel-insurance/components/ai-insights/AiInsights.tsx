import React from 'react';
import {
    FiCheck,
    FiArrowRight,
    FiWind,
    FiActivity,
    FiAlertTriangle,
    FiInfo,
} from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi2';
import './AiInsights.scss';

/**
 * Circular gauge used for the overall trip risk score and the
 * individual risk-factor cards.
 *
 * Pure CSS implementation — no SVG. The ring is drawn with a
 * conic-gradient sized by CSS custom properties, so the arc animates
 * for free via `transition: background` in the stylesheet.
 */
const CircularScore = ({
    value = 64,
    size = 64,
    strokeWidth = 6,
    color = '#16A34A',
    trackColor = '#E5E9F0',
    ringBg = '#ffffff',
    children = null,
}: any) => {
    const style = {
        '--size': `${size}px`,
        '--stroke-width': `${strokeWidth}px`,
        '--value': value,
        '--color': color,
        '--track-color': trackColor,
        '--ring-bg': ringBg,
    } as React.CSSProperties;

    return (
        <div className="circular-score" style={style}>
            <div className="circular-score__label">{children}</div>
        </div>
    );
};

/** Config for the four risk-factor cards. */
const RISK_FACTORS = [
    {
        id: 'weather',
        icon: FiWind,
        iconColor: '#2F6FED',
        title: 'Weather Risk',
        value: 32,
        subtitle: 'Low risk · Clear season',
        badge: 'Moderate',
        badgeTone: 'orange',
    },
    {
        id: 'medical',
        icon: FiActivity,
        iconColor: '#F5A623',
        title: 'Medical Risk',
        value: 45,
        subtitle: 'Moderate · Good facilities',
        badge: 'Moderate',
        badgeTone: 'orange',
    },
    {
        id: 'natural-disaster',
        icon: FiAlertTriangle,
        iconColor: '#16A34A',
        title: 'Natural Disaster',
        value: 18,
        subtitle: 'Low · Seismically stable',
        badge: 'Low',
        badgeTone: 'green',
    },
    {
        id: 'travel-advisory',
        icon: FiInfo,
        iconColor: '#16A34A',
        title: 'Travel Advisory',
        value: 12,
        subtitle: 'Level 1 · Exercise care',
        badge: 'Low',
        badgeTone: 'green',
    },
];

/** Top benefits shown for the recommended plan. */
const TOP_BENEFITS = [
    'RM 100,000 medical',
    'COVID-19 covered',
    'Trip cancellation up to RM 5,000',
    '24/7 emergency assistance',
];

/** Trip summary rows shown in the right-hand sidebar. */
const TRIP_SUMMARY = [
    { label: 'Destination', value: 'Japan' },
    { label: 'Duration', value: '4 days' },
    { label: 'Departure', value: '2026-06-26' },
    { label: 'Return', value: '2026-06-30' },
    { label: 'Travellers', value: '2 pax' },
    { label: 'Trip Type', value: 'Family' },
];

const AiInsights = ({ onContinue }: any) => {
    return (
        <div className="ai-insights">
            <header className="ai-insights__header">
                <h1 className="ai-insights__title">
                    <span className="ai-insights__title-accent">AI travel</span> insights
                </h1>
                <p className="ai-insights__subtitle">
                    CoverEazy AI has analyzed your trip and recommends the following coverage.
                </p>
            </header>

            <div className="ai-insights__body">
                <div className="ai-insights__main">
                    {/* Overall trip risk score */}
                    <section className="ai-insights__risk-card">
                        <CircularScore value={78} size={64} strokeWidth={6} color="#16A34A">
                            <span className="ai-insights__score-value">78</span>
                            <span className="ai-insights__score-caption">Score</span>
                        </CircularScore>
                        <div className="ai-insights__risk-card-copy">
                            <span className="ai-insights__eyebrow ai-insights__eyebrow--green">
                                Trip Risk Score
                            </span>
                            <h2 className="ai-insights__risk-card-title">Low to Moderate</h2>
                            <p className="ai-insights__risk-card-desc">
                                Your destination is generally safe for travellers. Standard
                                precautions apply. Medical facilities are good but costs are high.
                            </p>
                        </div>
                    </section>

                    {/* Individual risk factors */}
                    <section className="ai-insights__risk-grid">
                        {RISK_FACTORS.map((factor) => {
                            const Icon = factor.icon;
                            return (
                                <div className="risk-factor-card" key={factor.id}>
                                    <CircularScore
                                        value={factor.value}
                                        size={48}
                                        strokeWidth={5}
                                        color={factor.iconColor}
                                    >
                                        <span className="risk-factor-card__value">
                                            {factor.value}%
                                        </span>
                                    </CircularScore>
                                    <div className="risk-factor-card__copy">
                                        <span className="risk-factor-card__title">
                                            <Icon
                                                className="risk-factor-card__icon"
                                                style={{ color: factor.iconColor }}
                                            />
                                            {factor.title}
                                        </span>
                                        <span className="risk-factor-card__subtitle">
                                            {factor.subtitle}
                                        </span>
                                        <span
                                            className={`risk-factor-card__badge risk-factor-card__badge--${factor.badgeTone}`}
                                        >
                                            {factor.badge}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </section>

                    {/* Recommended plan */}
                    <section className="ai-insights__recommended">
                        <div className="ai-insights__recommended-info">
                            <span className="ai-insights__eyebrow ai-insights__eyebrow--muted">
                                <HiSparkles className="ai-insights__eyebrow-icon" />
                                RECOMMENDED CHOICE
                            </span>
                            <h2 className="ai-insights__recommended-name">Allianz General</h2>
                            <p className="ai-insights__recommended-tagline">
                                Best Value Plan · Comprehensive Plus
                            </p>

                            <span className="ai-insights__benefits-label">TOP BENEFITS</span>
                            <ul className="ai-insights__benefits-list">
                                {TOP_BENEFITS.map((benefit) => (
                                    <li className="ai-insights__benefits-item" key={benefit}>
                                        <FiCheck className="ai-insights__benefits-icon" />
                                        {benefit}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="ai-insights__premium-card">
                            <span className="ai-insights__eyebrow ai-insights__eyebrow--muted">
                                ANNUAL PREMIUM
                            </span>
                            <div className="ai-insights__premium-price">
                                <span className="ai-insights__premium-amount">RM 1,284</span>
                                <span className="ai-insights__premium-original">RM 1,480</span>
                            </div>
                            <p className="ai-insights__premium-caption">
                                or RM 107/month · 0% interest
                            </p>

                            <button
                                className="ai-insights__btn ai-insights__btn--primary"
                                type="button"
                            >
                                Choose Recommended Plan
                                <FiArrowRight />
                            </button>
                            <button
                                className="ai-insights__btn ai-insights__btn--secondary"
                                type="button"
                            >
                                Modify Coverage
                            </button>
                        </div>
                    </section>
                </div>

                {/* Trip summary sidebar */}
                <aside className="ai-insights__summary">
                    <h3 className="ai-insights__summary-title">Trip Summary</h3>
                    <dl className="ai-insights__summary-list">
                        {TRIP_SUMMARY.map((row) => (
                            <div className="ai-insights__summary-row" key={row.label}>
                                <dt>{row.label}</dt>
                                <dd>{row.value}</dd>
                            </div>
                        ))}
                    </dl>

                    <div className="ai-insights__summary-premium">
                        <span className="ai-insights__summary-premium-label">Est. Premium</span>
                        <span className="ai-insights__summary-premium-value">
                            <span className="ai-insights__summary-premium-currency">RM</span>
                            290.00
                        </span>
                    </div>
                    <span className="ai-insights__summary-plan-label">Premium plan</span>

                    <button
                        className="ai-insights__btn ai-insights__btn--primary ai-insights__btn--full"
                        type="button"
                        onClick={onContinue}
                    >
                        Continue
                        <FiArrowRight />
                    </button>
                </aside>
            </div>
        </div>
    );
};

AiInsights.defaultProps = {
    onContinue: () => { },
};

export default AiInsights;