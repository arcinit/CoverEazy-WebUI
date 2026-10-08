import {
    FiCheck,
    FiArrowRight,
    FiWind,
    FiActivity,
    FiAlertTriangle,
    FiInfo,
} from 'react-icons/fi';
import { HiOutlineSparkles } from 'react-icons/hi2';
import './AiInsights.scss';

/**
 * Circular gauge (SVG) with round caps. `start` / `end` are angles in degrees,
 * measured clockwise from 12 o'clock, so each ring mirrors the design.
 */
const CircularScore = ({
    size = 56,
    strokeWidth = 5,
    start = 0,
    end = 90,
    color = '#00B894',
    children = null,
}: any) => {
    const r = (size - strokeWidth) / 2;
    const c = size / 2;
    const point = (deg: number) => {
        const rad = ((deg - 90) * Math.PI) / 180;
        return [c + r * Math.cos(rad), c + r * Math.sin(rad)];
    };
    const [x1, y1] = point(start);
    const [x2, y2] = point(end);
    const large = end - start > 180 ? 1 : 0;

    return (
        <div className="tr-ai-gauge" style={{ width: size, height: size }}>
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden="true">
                <circle cx={c} cy={c} r={r} fill="none" stroke="#E6EBF2" strokeWidth={strokeWidth} />
                <path
                    d={`M ${x1} ${y1} A ${r} ${r} 0 ${large} 1 ${x2} ${y2}`}
                    fill="none"
                    stroke={color}
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                />
            </svg>
            <div className="tr-ai-gauge__label">{children}</div>
        </div>
    );
};

/** Config for the four risk-factor cards. */
const RISK_FACTORS = [
    {
        id: 'weather',
        icon: FiWind,
        color: '#0F5BFF',
        arc: [-6, 98],
        title: 'Weather Risk',
        value: 32,
        subtitle: 'Low risk · Clear season',
        badge: 'Moderate',
        badgeTone: 'orange',
    },
    {
        id: 'medical',
        icon: FiActivity,
        color: '#FFA620',
        arc: [18, 188],
        title: 'Medical Risk',
        value: 45,
        subtitle: 'Moderate · Good facilities',
        badge: 'Moderate',
        badgeTone: 'orange',
    },
    {
        id: 'natural-disaster',
        icon: FiAlertTriangle,
        color: '#1FC27A',
        arc: [135, 196],
        title: 'Natural Disaster',
        value: 18,
        subtitle: 'Low · Seismically stable',
        badge: 'Low',
        badgeTone: 'green',
    },
    {
        id: 'travel-advisory',
        icon: FiInfo,
        color: '#1FC27A',
        arc: [168, 206],
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
        <div className="tr-ai">
            <header className="tr-ai__header">
                <h1 className="tr-ai__title">
                    <span className="tr-ai__title-accent">AI travel</span> insights
                </h1>
                <p className="tr-ai__subtitle">
                    CoverEazy AI has analyzed your trip and recommends the following coverage.
                </p>
            </header>

            <div className="tr-ai__body">
                <div className="tr-ai__main">
                    {/* Overall trip risk score */}
                    <section className="tr-ai__score-card">
                        <CircularScore size={56} strokeWidth={5} start={272} end={552} color="#00B894">
                            <span className="tr-ai__score-value">78</span>
                            <span className="tr-ai__score-caption">Score</span>
                        </CircularScore>
                        <div className="tr-ai__score-copy">
                            <span className="tr-ai__score-eyebrow">Trip Risk Score</span>
                            <h2 className="tr-ai__score-title">Low to Moderate</h2>
                            <p className="tr-ai__score-desc">
                                Your destination is generally safe for travellers. Standard
                                precautions apply. Medical facilities are good but costs are high.
                            </p>
                        </div>
                    </section>

                    {/* Individual risk factors */}
                    <section className="tr-ai__risk-grid">
                        {RISK_FACTORS.map((factor) => {
                            const Icon = factor.icon;
                            return (
                                <div className="tr-ai-risk" key={factor.id}>
                                    <CircularScore
                                        size={56}
                                        strokeWidth={5}
                                        start={factor.arc[0]}
                                        end={factor.arc[1]}
                                        color={factor.color}
                                    >
                                        <span
                                            className="tr-ai-risk__value"
                                            style={{ color: factor.color }}
                                        >
                                            {factor.value}%
                                        </span>
                                    </CircularScore>
                                    <div className="tr-ai-risk__copy">
                                        <span className="tr-ai-risk__title">
                                            <Icon
                                                className="tr-ai-risk__icon"
                                                style={{ color: factor.color }}
                                            />
                                            {factor.title}
                                        </span>
                                        <span className="tr-ai-risk__subtitle">
                                            {factor.subtitle}
                                        </span>
                                        <span
                                            className={`tr-ai-risk__badge tr-ai-risk__badge--${factor.badgeTone}`}
                                        >
                                            {factor.badge}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </section>

                    {/* Recommended plan */}
                    <section className="tr-ai__recommended">
                        <div className="tr-ai__rec-info">
                            <span className="tr-ai__rec-eyebrow">
                                <HiOutlineSparkles className="tr-ai__rec-eyebrow-icon" />
                                RECOMMENDED CHOICE
                            </span>
                            <h2 className="tr-ai__rec-name">Allianz General</h2>
                            <p className="tr-ai__rec-tagline">
                                Best Value Plan · Comprehensive Plus
                            </p>

                            <span className="tr-ai__benefits-label">TOP BENEFITS</span>
                            <ul className="tr-ai__benefits-list">
                                {TOP_BENEFITS.map((benefit) => (
                                    <li className="tr-ai__benefits-item" key={benefit}>
                                        <FiCheck className="tr-ai__benefits-icon" />
                                        {benefit}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="tr-ai__premium">
                            <span className="tr-ai__premium-label">ANNUAL PREMIUM</span>
                            <div className="tr-ai__premium-price">
                                <span className="tr-ai__premium-amount">RM 1,284</span>
                                <span className="tr-ai__premium-original">RM 1,480</span>
                            </div>
                            <p className="tr-ai__premium-caption">
                                or RM 107/month · 0% interest
                            </p>

                            <button className="tr-ai__btn tr-ai__btn--primary" type="button">
                                Choose Recommended Plan
                                <FiArrowRight />
                            </button>
                            <button className="tr-ai__btn tr-ai__btn--secondary" type="button">
                                Modify Coverage
                            </button>
                        </div>
                    </section>
                </div>

                {/* Trip summary sidebar */}
                <aside className="tr-ai__summary">
                    <h3 className="tr-ai__summary-title">Trip Summary</h3>
                    <dl className="tr-ai__summary-list">
                        {TRIP_SUMMARY.map((row) => (
                            <div className="tr-ai__summary-row" key={row.label}>
                                <dt>{row.label}</dt>
                                <dd>{row.value}</dd>
                            </div>
                        ))}
                    </dl>

                    <div className="tr-ai__summary-premium">
                        <span className="tr-ai__summary-premium-label">Est. Premium</span>
                        <span className="tr-ai__summary-premium-value">
                            <span className="tr-ai__summary-premium-currency">RM</span>
                            290.00
                        </span>
                    </div>
                    <span className="tr-ai__summary-plan-label">Premium plan</span>

                    <button
                        className="tr-ai__btn tr-ai__btn--primary tr-ai__btn--summary"
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
