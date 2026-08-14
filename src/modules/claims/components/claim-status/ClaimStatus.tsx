import React from "react";
import {
    FiCheck,
    FiClock,
    FiPhone,
    FiCalendar,
    FiDownload,
    FiShare2,
    FiChevronRight,
    FiActivity,
    FiShield,
    FiInfo,
    FiNavigation,
    FiFileText,
} from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import "./ClaimStatus.scss";

/* ------------------------------------------------------------------ */
/* Static data — swap for real claim data as needed                    */
/* ------------------------------------------------------------------ */

const STATUS_PILLS = [
    { icon: <FiCheck />, label: "Received", modifier: "received" },
    { icon: <FiClock />, label: "Processing", modifier: "processing" },
    { icon: <FiShield />, label: "AI Assessment", modifier: "assessment" },
];

const CLAIM_DETAILS = [
    { label: "Vehicle", value: "WXD 1234" },
    { label: "Claim Type", value: "Own Damage" },
    { label: "Date Filed", value: "25 Jun 2026" },
    { label: "Est. Payout", value: "RM 3,100" },
    { label: "SLA", value: "7 Business Days" },
    { label: "Status", value: "Under Review" },
];

const ADJUSTER_DETAILS = [
    {
        icon: <FiPhone />,
        label: "Expected Contact",
        value: "Within 24 hours",
    },
    {
        icon: <FiCalendar />,
        label: "Inspection Date",
        value: "27–28 Jun 2026",
    },
    {
        icon: <FiClock />,
        label: "Settlement Target",
        value: "By 4 Jul 2026",
    },
];

const TIMELINE_STEPS = [
    { label: "Submitted", caption: "Claim received", status: "done" },
    { label: "Under Review", caption: "Adjuster assigned", status: "done" },
    { label: "Assessment", caption: "Damage inspection", status: "active" },
    { label: "Approval", caption: "Coverage confirmed", status: "pending" },
    { label: "Repair", caption: "Workshop repair", status: "pending" },
    { label: "Settlement", caption: "Payment processed", status: "pending" },
];

const QUICK_ACTIONS = [
    { icon: <FiActivity />, label: "Track Claim", modifier: "amber" },
    { icon: <FiDownload />, label: "Download Ref", modifier: "blue" },
    { icon: <FiPhone />, label: "Contact Adjuster", modifier: "green" },
    { icon: <FiShield />, label: "View Policy", modifier: "purple" },
    { icon: <FiShare2 />, label: "Share Claim", modifier: "gray" },
];

const HELP_LINKS = [
    {
        icon: <FiPhone />,
        modifier: "amber",
        title: "24/7 Claims Hotline",
        subtitle: "1800-88-CLAIM",
    },
    {
        icon: <FiNavigation />,
        modifier: "blue",
        title: "Workshop Locator",
        subtitle: "Find panel workshops near you",
    },
    {
        icon: <FiInfo />,
        modifier: "purple",
        title: "Claims FAQ",
        subtitle: "Common questions answered",
    },
];

/* ------------------------------------------------------------------ */
/* Small presentational sub-components                                 */
/* ------------------------------------------------------------------ */

const Stat = ({ label, value }:any) => (
    <div className="claim-status__stat">
        <span className="claim-status__stat-label">{label}</span>
        <span className="claim-status__stat-value">{value}</span>
    </div>
);

const AdjusterRow = ({ icon, label, value }:any) => (
    <div className="claim-status__adjuster-row">
        <span className="claim-status__adjuster-icon">{icon}</span>
        <div className="claim-status__adjuster-text">
            <span className="claim-status__adjuster-label">{label}</span>
            <span className="claim-status__adjuster-value">{value}</span>
        </div>
    </div>
);

const TimelineStep = ({ label, caption, status, isLast }:any) => (
    <div className={`claim-status__step claim-status__step--${status}`}>
        <div className="claim-status__step-track">
            <span className="claim-status__step-dot">
                {status === "pending" ? "" : status === "active" ? <FiActivity /> : <FiCheck />}
            </span>
            {!isLast && <span className="claim-status__step-line" />}
        </div>
        <div className="claim-status__step-text">
            <span className="claim-status__step-label">{label}</span>
            <span className="claim-status__step-caption">{caption}</span>
        </div>
    </div>
);

const QuickAction = ({ icon, label, modifier }:any) => (
    <button type="button" className="claim-status__quick-action">
        <span
            className={`claim-status__quick-icon claim-status__quick-icon--${modifier}`}
        >
            {icon}
        </span>
        <span className="claim-status__quick-label">{label}</span>
    </button>
);

const HelpLink = ({ icon, modifier, title, subtitle }:any) => (
    <button type="button" className="claim-status__help-link">
        <span
            className={`claim-status__help-icon claim-status__help-icon--${modifier}`}
        >
            {icon}
        </span>
        <span className="claim-status__help-text">
            <span className="claim-status__help-title">{title}</span>
            <span className="claim-status__help-subtitle">{subtitle}</span>
        </span>
        <FiChevronRight className="claim-status__help-chevron" />
    </button>
);

/* ------------------------------------------------------------------ */
/* Main component                                                      */
/* ------------------------------------------------------------------ */

const ClaimStatus = ({onContinue}:any) => {
    return (
        <div className="claim-status">
            {/* Hero -------------------------------------------------------- */}
            <header className="claim-status__hero">
                <span className="claim-status__hero-icon">
                    <FiCheck />
                </span>
                <h1 className="claim-status__hero-title">
                    First Notification of Loss Submitted
                </h1>
                <p className="claim-status__hero-subtitle">
                    Your claim is being processed. We&apos;ll keep you updated every
                    step of the way.
                </p>

                <div className="claim-status__pills">
                    {STATUS_PILLS.map((pill) => (
                        <span
                            key={pill.label}
                            className={`claim-status__pill claim-status__pill--${pill.modifier}`}
                        >
                            {pill.icon} {pill.label}
                        </span>
                    ))}
                </div>
            </header>

            <div className="claim-status__body">
                {/* Claim details + adjuster ---------------------------------- */}
                <section className="claim-status__grid claim-status__grid--split">
                    <div className="claim-status__card-claim-ref ">
                        <div className="claim-status__claim-head">
                            <div>
                                <span className="claim-status__field-label">
                                    Claim Reference
                                </span>
                                <h2 className="claim-status__claim-ref">CLM-2026-88421</h2>
                            </div>
                            <span className="claim-status__doc-icon">
                                <FiFileText />
                            </span>
                        </div>

                        <div className="claim-status__grid claim-status__grid--2col">
                            {CLAIM_DETAILS.map((item) => (
                                <Stat key={item.label} {...item} />
                            ))}
                        </div>

                        <div className="claim-status__claim-actions">
                            <button type="button" className="claim-status__btn claim-status__btn--outline">
                                <FiDownload /> Download
                            </button>
                            <button type="button" className="claim-status__btn claim-status__btn--outline">
                                <FiShare2 /> Share
                            </button>
                        </div>
                    </div>

                    <div className="claim-status__card claim-status__card--adjuster">
                        <h2 className="claim-status__card-title">Assigned Adjuster</h2>

                        <div className="claim-status__adjuster">
                            <span className="claim-status__avatar">HA</span>
                            <div className="claim-status__adjuster-info">
                                <h3 className="claim-status__adjuster-name">
                                    Hafiz bin Ahmad
                                </h3>
                                <p className="claim-status__adjuster-role">
                                    Senior Claims Adjuster · 8 years exp.
                                </p>
                                <span className="claim-status__adjuster-rating">
                                    <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                                    <span className="claim-status__adjuster-rating-value">
                                        5.0 rating
                                    </span>
                                </span>
                            </div>
                        </div>

                        <div className="claim-status__divider" />

                        <div className="claim-status__adjuster-list">
                            {ADJUSTER_DETAILS.map((item) => (
                                <AdjusterRow key={item.label} {...item} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Timeline ------------------------------------------------------ */}
                <section className="claim-status__card">
                    <div className="claim-status__card-header">
                        <h2 className="claim-status__card-title">Claim Progress Timeline</h2>
                        <button type="button" className="claim-status__btn claim-status__btn--primary">
                            Track Claim
                        </button>
                    </div>

                    <div className="claim-status__timeline">
                        {TIMELINE_STEPS.map((step, i) => (
                            <TimelineStep
                                key={step.label}
                                {...step}
                                isLast={i === TIMELINE_STEPS.length - 1}
                            />
                        ))}
                    </div>
                </section>

                {/* Quick actions --------------------------------------------------- */}
                <section>
                    <h2 className="claim-status__section-title">Quick Actions</h2>
                    <div className="claim-status__quick-grid">
                        {QUICK_ACTIONS.map((action) => (
                            <QuickAction key={action.label} {...action} />
                        ))}
                    </div>
                </section>

                {/* Help links -------------------------------------------------------- */}
                <section className="claim-status__help-grid">
                    {HELP_LINKS.map((link) => (
                        <HelpLink key={link.title} {...link} />
                    ))}
                </section>

                {/* Footer actions -------------------------------------------------------- */}
                <div className="claim-status__footer">
                    <button type="button" className="claim-status__btn claim-status__btn--ghost">
                        <FiNavigation /> View Details
                    </button>
                    <button type="button" className="claim-status__btn claim-status__btn--ghost">
                        <FiNavigation /> Return to Homepage
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ClaimStatus;