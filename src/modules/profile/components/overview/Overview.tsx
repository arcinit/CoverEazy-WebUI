import React from 'react';
import {
    FiShield, FiRefreshCw, FiFileText, FiDownload, FiBarChart2,
    FiSend, FiInfo, FiChevronRight,
} from 'react-icons/fi';
import './Overview.scss';

interface CoverageItem {
    id: string;
    label: string;
    value: number;
    color: 'blue' | 'green' | 'orange';
}

const COVERAGE: CoverageItem[] = [
    { id: 'motor', label: 'Motor Insurance', value: 92, color: 'blue' },
    { id: 'travel', label: 'Travel Coverage', value: 78, color: 'green' },
    { id: 'roadtax', label: 'Road Tax', value: 65, color: 'orange' },
];

interface RenewalItem {
    id: string;
    icon: React.ElementType;
    tone: 'orange' | 'blue';
    title: string;
    subtitle: string;
    days: string;
    urgent: boolean;
}

const RENEWALS: RenewalItem[] = [
    {
        id: 'roadtax', icon: FiRefreshCw, tone: 'orange',
        title: 'Road Tax – WXD 1234', subtitle: 'Expires 31 Jul 2026',
        days: '36d', urgent: true,
    },
    {
        id: 'motor', icon: FiShield, tone: 'blue',
        title: 'Motor Insurance – MOTO-88721', subtitle: 'Expires 31 Dec 2026',
        days: '189d', urgent: false,
    },
];

interface QuickAction {
    id: string;
    icon: React.ElementType;
    tone: 'blue' | 'orange' | 'green' | 'purple';
    label: string;
}

const QUICK_ACTIONS: QuickAction[] = [
    { id: 'renew-insurance', icon: FiShield, tone: 'blue', label: 'Renew Insurance' },
    { id: 'renew-roadtax', icon: FiRefreshCw, tone: 'orange', label: 'Renew Road Tax' },
    { id: 'file-claim', icon: FiFileText, tone: 'orange', label: 'File Claim' },
    { id: 'download-policy', icon: FiDownload, tone: 'green', label: 'Download Policy' },
    { id: 'compare-plans', icon: FiBarChart2, tone: 'purple', label: 'Compare Plans' },
];

interface ActivityItem {
    id: string;
    icon: React.ElementType;
    tone: 'orange' | 'blue' | 'green';
    title: string;
    subtitle: string;
    date: string;
    status: 'processing' | 'completed' | 'active';
}

const ACTIVITY: ActivityItem[] = [
    {
        id: 'a1', icon: FiRefreshCw, tone: 'orange',
        title: 'Road Tax Renewal Submitted', subtitle: 'WXD 1234 · Processing',
        date: '2h ago', status: 'processing',
    },
    {
        id: 'a2', icon: FiShield, tone: 'blue',
        title: 'Motor Insurance Premium Paid', subtitle: 'MOTO-88721 · RM 1,240',
        date: '15 Jan 2026', status: 'completed',
    },
    {
        id: 'a3', icon: FiFileText, tone: 'orange',
        title: 'Claim CLM-88421 Updated', subtitle: 'Adjuster assigned · Under review',
        date: '22 Jun 2026', status: 'active',
    },
    {
        id: 'a4', icon: FiSend, tone: 'green',
        title: 'Travel Insurance – Japan', subtitle: 'TRV-2026-44821 · Active',
        date: '25 Jun 2026', status: 'active',
    },
];

const Overview: React.FC = () => {
    return (
        <div className="overview">
            <div className="overview__heading">
                <h2 className="overview__title">Overview</h2>
                <p className="overview__subtitle">Your complete insurance command center.</p>
            </div>

            {/* Coverage Distribution */}
            <section className="overview__card">
                <h3 className="overview__card-title">Coverage Distribution</h3>
                <div className="coverage">
                    {COVERAGE.map(({ id, label, value, color }) => (
                        <div className="coverage__row" key={id}>
                            <span className="coverage__label">{label}</span>
                            <div className="coverage__bar-wrap">
                                <div className="coverage__bar-track">
                                    <div
                                        className={`coverage__bar-fill coverage__bar-fill--${color}`}
                                        style={{ width: `${value}%` }}
                                    />
                                </div>
                                <span className="coverage__value">{value}%</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Upcoming Renewals */}
            <section className="overview__card">
                <div className="overview__card-header">
                    <h3 className="overview__card-title">Upcoming Renewals</h3>
                    <span className="overview__card-tag">Action Required</span>
                </div>
                <div className="renewals">
                    {RENEWALS.map(({ id, icon: Icon, tone, title, subtitle, days, urgent }) => (
                        <div
                            className={`renewals__item${urgent ? ' renewals__item--urgent' : ''}`}
                            key={id}
                        >
                            <span className={`renewals__icon renewals__icon--${tone}`}>
                                <Icon />
                            </span>
                            <div className="renewals__text">
                                <span className="renewals__title">{title}</span>
                                <span className="renewals__subtitle">{subtitle}</span>
                            </div>
                            <div className="renewals__days">
                                <span
                                    className={`renewals__days-value${urgent ? ' renewals__days-value--urgent' : ''}`}
                                >
                                    {days}
                                </span>
                                <span className="renewals__days-label">remaining</span>
                            </div>
                            <button type="button" className={`renewals__btn renewals__btn--${tone}`}>
                                Renew
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Quick Actions */}
            <section className="overview__section">
                <h3 className="overview__section-title">Quick Actions</h3>
                <div className="quick-actions">
                    {QUICK_ACTIONS.map(({ id, icon: Icon, tone, label }) => (
                        <button type="button" className="quick-actions__item" key={id}>
                            <span className={`quick-actions__icon quick-actions__icon--${tone}`}>
                                <Icon />
                            </span>
                            <span className="quick-actions__label">{label}</span>
                        </button>
                    ))}
                </div>
            </section>

            {/* Recent Activity */}
            <section className="overview__card">
                <h3 className="overview__card-title">Recent Activity</h3>
                <ul className="activity">
                    {ACTIVITY.map(({ id, icon: Icon, tone, title, subtitle, date, status }) => (
                        <li className="activity__item" key={id}>
                            <span className={`activity__icon activity__icon--${tone}`}>
                                <Icon />
                            </span>
                            <div className="activity__text">
                                <span className="activity__title">{title}</span>
                                <span className="activity__subtitle">{subtitle}</span>
                            </div>
                            <div className="activity__meta">
                                <span className="activity__date">{date}</span>
                                <span className={`activity__status activity__status--${status}`}>
                                    {status}
                                </span>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>

            {/* AI Insight */}
            <section className="ai-insight">
                <div className="ai-insight__header">
                    <span className="ai-insight__badge">
                        <FiInfo />
                    </span>
                    <span className="ai-insight__title">AI INSIGHT</span>
                    <span className="ai-insight__confidence">94% confidence</span>
                </div>
                <p className="ai-insight__text">
                    Your insurance score is 82/100 — excellent! Adding a policy would
                    increase it to 96/100 and fill your biggest coverage gap. We found 3
                    suitable plans starting from RM 88/month.
                </p>
                <button type="button" className="ai-insight__cta">
                    Explore More Plans
                    <FiChevronRight />
                </button>
            </section>
        </div>
    );
};

export default Overview;