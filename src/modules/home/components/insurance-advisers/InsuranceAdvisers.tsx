import React from "react";
import "./InsuranceAdvisers.scss";

import adviserImage from "./images/licance-adviser.png";
import containerGirls from "./images/container-girls.png";

const InsuranceAdvisers = () => {
    return (
        <>
            <section className="ins-ad">
                <main className="ins-ad__container">
                    {/* ---------- HERO ---------- */}
                    <div className="ins-ad__hero">
                        <div className="ins-ad__hero-left">
                            <span className="ins-ad__badge">
                                <span className="ins-ad__badge-dot" />
                                Insurance Advisors · Online Now
                            </span>

                            <h1 className="ins-ad__title">
                                Expert insurance <em>advisors</em>.
                                <br />
                                When you need it.
                            </h1>

                            <p className="ins-ad__subtitle">
                                Skip the chatbot loop. Talk to a BNM-licensed insurance
                                specialist who actually understands Malaysian policies.
                            </p>

                            {/* hero CTAs — classes scoped to __hero-cta only */}
                            <div className="ins-ad__hero-cta-group">
                                <button className="ins-ad__hero-cta ins-ad__hero-cta--whatsapp">
                                    <ChatIcon />
                                    WhatsApp Advisor
                                </button>
                                <button className="ins-ad__hero-cta ins-ad__hero-cta--schedule">
                                    <CalendarIcon />
                                    Schedule Call
                                </button>
                                <button className="ins-ad__hero-cta ins-ad__hero-cta--call">
                                    <PhoneIcon />
                                    Call Now
                                </button>
                            </div>

                            <div className="ins-ad__trust-row">
                                <span className="ins-ad__trust-item">
                                    <span className="ins-ad__trust-icon">
                                        <CheckIcon />
                                    </span>
                                    Licensed Advisor
                                </span>
                                <span className="ins-ad__trust-item">
                                    <span className="ins-ad__trust-icon ins-ad__trust-icon--ghost">
                                        <UserIcon />
                                    </span>
                                    Personalized Guidance
                                </span>
                                <span className="ins-ad__trust-item">
                                    <span className="ins-ad__trust-icon ins-ad__trust-icon--ghost">
                                        <BubbleIcon />
                                    </span>
                                    100% Confidential
                                </span>
                            </div>
                        </div>

                        <div className="ins-ad__hero-right">
                            <div className="ins-ad__hero-image">
                                <img src={adviserImage} alt="Insurance advisor" />
                            </div>

                        </div>
                    </div>

                    {/* ---------- BOTTOM GRID (layout wrapper only) ---------- */}
                    <div className="ins-ad__bottom-grid">
                        {/* CLAIMS & ROAD TAX CARD — independent from Takaful card */}
                        <div className="ins-ad__claims-card">
                            <div className="ins-ad__claims-copy">
                                <span className="ins-ad__claims-icon">
                                    <HeadsetIcon />
                                </span>
                                <h3 className="ins-ad__claims-title">
                                    Claims &amp; Road Tax
                                    <br />
                                    <em>Fast, Simple, Digital.</em>
                                </h3>
                                <p className="ins-ad__claims-desc">
                                    Dedicated case officers guide you through every step —
                                    from accident reporting to settlement.
                                </p>
                                <a href="#" className="ins-ad__claims-link">
                                    Learn More <ArrowIcon />
                                </a>
                            </div>

                            <div className="ins-ad__claims-image">
                                <img src={containerGirls} alt="Advisors reviewing claim documents" />
                            </div>
                        </div>

                        {/* TAKAFUL SOLUTIONS CARD — independent from Claims card */}
                        <div className="ins-ad__takaful-card">
                            <span className="ins-ad__takaful-eyebrow">TAKAFUL GUIDANCE</span>
                            <h3 className="ins-ad__takaful-title">Takaful Solutions</h3>
                            <p className="ins-ad__takaful-desc">
                                Choose certified Shariah-compliant protection with
                                confidence.
                            </p>
                            <button className="ins-ad__takaful-btn">Explore Takaful</button>
                        </div>
                    </div>
                </main>
            </section>
        </>
    );
};

/* ---------- inline icons (swap for lucide-react etc. if preferred) ---------- */

const ChatIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
            d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const CalendarIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <rect
            x="3"
            y="4"
            width="18"
            height="18"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.8"
        />
        <path
            d="M16 2v4M8 2v4M3 10h18"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
        />
    </svg>
);

const PhoneIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
            d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 2 .6 2.9a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.5 2.9.6a2 2 0 0 1 1.8 2.1Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const CheckIcon = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
        <path
            d="M20 6 9 17l-5-5"
            stroke="#fff"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const UserIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.8" />
        <path
            d="M4 21c0-4 3.6-7 8-7s8 3 8 7"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
        />
    </svg>
);

const BubbleIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path
            d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const ShieldIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path
            d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
        />
        <path
            d="m9 12 2 2 4-4"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const HeadsetIcon = () => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path
            d="M4 13v-1a8 8 0 0 1 16 0v1"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
        />
        <rect
            x="2.5"
            y="13"
            width="5"
            height="7"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.8"
        />
        <rect
            x="16.5"
            y="13"
            width="5"
            height="7"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.8"
        />
        <path
            d="M19.5 20v.5a3 3 0 0 1-3 3H14"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
        />
    </svg>
);

const ArrowIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path
            d="M5 12h14M13 6l6 6-6 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export default InsuranceAdvisers;