import React, { useState } from 'react'
import { FiCalendar, FiTrendingUp } from 'react-icons/fi'
import { LuBrain } from 'react-icons/lu'
import './AnalyticsAi.scss'

const periods = {
    '3M': {
        total: 'RM 720',
        growth: '+6.2%',
        labels: ['MAR', 'APR', 'MAY'],
        points: '0,112 70,96 140,104 210,68 280,76 350,44 420,53 490,21 540,12',
    },
    '6M': {
        total: 'RM 1,420',
        growth: '+11.3%',
        labels: ['DEC', 'JAN', 'FEB', 'MAR', 'APR', 'MAY'],
        points: '0,126 60,102 120,112 180,76 240,87 300,54 360,64 420,31 480,39 540,15',
    },
    '12M': {
        total: 'RM 2,840',
        growth: '+18.4%',
        labels: ['JUN', 'AUG', 'OCT', 'DEC', 'FEB', 'APR', 'MAY'],
        points: '0,128 45,110 90,120 135,92 180,102 225,74 270,84 315,56 360,66 405,38 450,48 495,20 540,11',
    },
} as const

type Period = keyof typeof periods

const predictions = [
    { title: 'Motor · VCS 8842', date: 'Dec 12, 2026', remaining: '42 days', status: 'soon' },
    { title: 'Road Tax · VCS 8842', date: 'Dec 12, 2026', remaining: '42 days', status: 'soon' },
    { title: 'Family Health Shield', date: 'Aug 04, 2026', remaining: '18 days', status: 'urgent' },
] as const

const AnalyticsAi = () => {
    const [period, setPeriod] = useState<Period>('12M')
    const selectedPeriod = periods[period]
    const linePoints = selectedPeriod.points
    const areaPath = `M ${linePoints.replaceAll(' ', ' L ')} L 540 160 L 0 160 Z`

    return (
        <section className="analytics-ai" aria-labelledby="analytics-ai-title">
            <div className="analytics-ai__container">
                <header className="analytics-ai__header">
                    <span className="analytics-ai__eyebrow">Analytics &amp; AI</span>
                    <h2 className="analytics-ai__title" id="analytics-ai-title">
                        Your insurance, intelligently<br className="analytics-ai__desktop-break" /> optimized.
                    </h2>
                    <p className="analytics-ai__description">
                        See exactly where your money goes, how much you've saved, and what to renew next.
                    </p>
                </header>

                <div className="analytics-ai__overview">
                    <article className="analytics-ai__savings-card">
                        <div className="analytics-ai__savings-top">
                            <div className="analytics-ai__savings-label">
                                <FiTrendingUp aria-hidden="true" />
                                <span>Savings tracker · {period === '12M' ? '12 months' : period === '6M' ? '6 months' : '3 months'}</span>
                            </div>
                            <div className="analytics-ai__period-switch" aria-label="Savings time period">
                                {(Object.keys(periods) as Period[]).map((option) => (
                                    <button
                                        className={`analytics-ai__period-button${period === option ? ' analytics-ai__period-button--active' : ''}`}
                                        key={option}
                                        type="button"
                                        aria-pressed={period === option}
                                        onClick={() => setPeriod(option)}
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="analytics-ai__savings-amount">
                            <strong>{selectedPeriod.total}</strong>
                            <span>{selectedPeriod.growth}</span>
                        </div>

                        <div className="analytics-ai__chart">
                            <svg
                                className="analytics-ai__chart-svg"
                                viewBox="0 0 540 170"
                                role="img"
                                aria-label={`Savings growth over ${period === '12M' ? '12 months' : period === '6M' ? '6 months' : '3 months'}`}
                                preserveAspectRatio="none"
                            >
                                <defs>
                                    <linearGradient id="analytics-savings-fill" x1="0" x2="0" y1="0" y2="1">
                                        <stop offset="0%" stopColor="#3167dc" stopOpacity="0.2" />
                                        <stop offset="100%" stopColor="#3167dc" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                                {[20, 56, 92, 128].map((y) => (
                                    <line className="analytics-ai__chart-gridline" key={y} x1="0" x2="540" y1={y} y2={y} />
                                ))}
                                <path className="analytics-ai__chart-area" d={areaPath} />
                                <polyline className="analytics-ai__chart-line" points={linePoints} />
                                <circle className="analytics-ai__chart-point-halo" cx="540" cy={linePoints.slice(linePoints.lastIndexOf(',') + 1)} r="10" />
                                <circle className="analytics-ai__chart-point" cx="540" cy={linePoints.slice(linePoints.lastIndexOf(',') + 1)} r="5" />
                            </svg>
                            <div className="analytics-ai__chart-labels">
                                {selectedPeriod.labels.map((label) => (
                                    <span key={label}>{label}</span>
                                ))}
                            </div>
                        </div>
                    </article>

                    <article className="analytics-ai__score-card">
                        <div className="analytics-ai__score-label">
                            <LuBrain aria-hidden="true" />
                            <span>Insurance score</span>
                        </div>
                        <div className="analytics-ai__score-value">
                            <strong>842</strong>
                            <span>Excellent</span>
                        </div>
                        <div className="analytics-ai__score-meter" role="meter" aria-label="Insurance score" aria-valuemin={0} aria-valuemax={1000} aria-valuenow={842}>
                            <span />
                        </div>
                        <div className="analytics-ai__score-scale">
                            <span>300</span>
                            <span>1000</span>
                        </div>
                        <p className="analytics-ai__score-description">
                            You qualify for premium rates and 8 exclusive offers from top insurers.
                        </p>
                    </article>
                </div>

                <section className="analytics-ai__predictions" aria-labelledby="analytics-ai-predictions-title">
                    <h3 className="analytics-ai__predictions-heading" id="analytics-ai-predictions-title">
                        <FiCalendar aria-hidden="true" />
                        Renewal predictions
                    </h3>
                    <ul className="analytics-ai__prediction-list">
                        {predictions.map((prediction) => (
                            <li className="analytics-ai__prediction" key={prediction.title}>
                                <strong>{prediction.title}</strong>
                                <div className="analytics-ai__prediction-meta">
                                    <time>{prediction.date}</time>
                                    <span className={`analytics-ai__prediction-badge analytics-ai__prediction-badge--${prediction.status}`}>
                                        {prediction.remaining}
                                    </span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </section>
    )
}

export default AnalyticsAi
