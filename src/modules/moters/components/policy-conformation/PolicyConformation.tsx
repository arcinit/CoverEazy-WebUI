import React from "react";
import {
    FiCheck,
    FiTruck,
    FiDownload,
    FiCreditCard,
    FiShare2,
    FiFileText,
    FiAlertCircle,
} from "react-icons/fi";
import "./PolicyConformation.scss";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

// ==========================================================================
// Types
// ==========================================================================

interface PolicyDetails {
    policyNumber: string;
    insurer: string;
    vehicle: string;
    amountPaid: string;
    policyStartDate: string;
    policyEndDate: string;
    jpjStatus: string;
}

interface TrackingDetails {
    status: string;
    courierPartner: string;
    trackingNumber: string;
    expectedDelivery: string;
    currentStatus: string;
    deliveryAddress: string;
}

interface CoverageStats {
    coverageAmount: string;
    coveragePeriod: string;
    annualPremium: string;
}

interface CoverageDates {
    startDate: string;
    endDate: string;
}

interface ActionItem {
    key: string;
    label: string;
    icon: React.ReactNode;
    onClick?: () => void;
}

interface NextStep {
    step: number;
    heading: string;
    description: string;
}

// ==========================================================================
// Sub-component: Hero
// ==========================================================================

const Hero: React.FC = () => (
    <div className="policy-confirmation__hero">
        <div className="policy-confirmation__hero-icon">
            <IoMdCheckmarkCircleOutline />
        </div>
        <h1 className="policy-confirmation__title">
            Congratulations!{" "}
            <span className="policy-confirmation__title-accent">You're Covered.</span>
        </h1>
        <p className="policy-confirmation__subtitle">
            Your insurance policy is now active
        </p>
    </div>
);

// ==========================================================================
// Sub-component: Policy Card
// ==========================================================================

const PolicyCard: React.FC<{ data: PolicyDetails }> = ({ data }) => (
    <div className="policy-confirmation__policy-card">
        <div className="policy-confirmation__policy-head">
            <div>
                <span className="policy-confirmation__field-label">Policy Number</span>
                <span className="policy-confirmation__field-value policy-confirmation__field-value--code">
                    {data.policyNumber}
                </span>
            </div>
            <div className="policy-confirmation__insurer-badge">
                <div className="policy-confirmation__insurer-logo">
                    <strong>ZURICH</strong>
                    <span>Takaful</span>
                </div>
            </div>
        </div>

        <div className="policy-confirmation__field-grid">
            <div>
                <span className="policy-confirmation__field-label">Insurer</span>
                <span className="policy-confirmation__field-value">{data.insurer}</span>
            </div>
            <div>
                <span className="policy-confirmation__field-label">Vehicle</span>
                <span className="policy-confirmation__field-value">{data.vehicle}</span>
            </div>
        </div>

        <div className="policy-confirmation__field-grid policy-confirmation__field-grid--tight">
            <div>
                <span className="policy-confirmation__field-label">Amount Paid</span>
                <span className="policy-confirmation__field-value">{data.amountPaid}</span>
            </div>
            <div>
                <span className="policy-confirmation__field-label">Policy Start Date</span>
                <span className="policy-confirmation__field-value">{data.policyStartDate}</span>
            </div>
        </div>

        <div className="policy-confirmation__field-grid policy-confirmation__field-grid--tight">
            <div>
                <span className="policy-confirmation__field-label">Policy End Date</span>
                <span className="policy-confirmation__field-value">{data.policyEndDate}</span>
            </div>
            <div>
                <span className="policy-confirmation__field-label">JPJ Status</span>
                <span className="policy-confirmation__field-value">{data.jpjStatus}</span>
            </div>
        </div>
    </div>
);

// ==========================================================================
// Sub-component: Tracking Card
// ==========================================================================

const TrackingCard: React.FC<{ data: TrackingDetails }> = ({ data }) => {
    const rows: Array<[string, string]> = [
        ["Courier Partner", data.courierPartner],
        ["Tracking Number", data.trackingNumber],
        ["Expected Delivery", data.expectedDelivery],
        ["Current Status", data.currentStatus],
        ["Delivery Address", data.deliveryAddress],
    ];

    return (
        <div className="policy-confirmation__tracking-card">
            <div className="policy-confirmation__tracking-head">
                <h2 className="policy-confirmation__tracking-title">
                    Road Tax Delivery Tracking
                </h2>
                <span className="policy-confirmation__badge policy-confirmation__badge--in-progress">
                    <FiTruck />
                    {data.status}
                </span>
            </div>

            <div className="policy-confirmation__tracking-list">
                {rows.map(([key, value]) => (
                    <div className="policy-confirmation__tracking-item" key={key}>
                        <span className="policy-confirmation__tracking-key">{key}</span>
                        <span className="policy-confirmation__tracking-value">{value}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

// ==========================================================================
// Sub-component: Stats Strip
// ==========================================================================

const StatsStrip: React.FC<{ data: CoverageStats }> = ({ data }) => {
    const stats: Array<[string, string]> = [
        ["Coverage Amount", data.coverageAmount],
        ["Coverage Period", data.coveragePeriod],
        ["Annual Premium", data.annualPremium],
    ];

    return (
        <div className="policy-confirmation__stats">
            {stats.map(([label, value]) => (
                <div className="policy-confirmation__stat" key={label}>
                    <span className="policy-confirmation__stat-label">{label}</span>
                    <span className="policy-confirmation__stat-value">{value}</span>
                </div>
            ))}
        </div>
    );
};

// ==========================================================================
// Sub-component: Date Banner
// ==========================================================================

const DateBanner: React.FC<{ data: CoverageDates }> = ({ data }) => (
    <div className="policy-confirmation__date-banner">
        <div className="policy-confirmation__date-block">
            <span className="policy-confirmation__date-label">Policy Start Date</span>
            <span className="policy-confirmation__date-value">{data.startDate}</span>
        </div>
        <div className="policy-confirmation__date-block policy-confirmation__date-block--end">
            <span className="policy-confirmation__date-label">Policy End Date</span>
            <span className="policy-confirmation__date-value">{data.endDate}</span>
        </div>
    </div>
);

// ==========================================================================
// Sub-component: Road Tax Notice
// ==========================================================================

const RoadTaxNotice: React.FC<{ message: string }> = ({ message }) => (
    <div className="policy-confirmation__notice">
        <div className="policy-confirmation__notice-head">
            <FiAlertCircle />
            <span>Road Tax Status</span>
        </div>
        <p className="policy-confirmation__notice-text">{message}</p>
    </div>
);

// ==========================================================================
// Sub-component: Actions Row
// ==========================================================================

const ActionsRow: React.FC<{ actions: ActionItem[] }> = ({ actions }) => (
    <div className="policy-confirmation__actions">
        {actions.map((action) => (
            <button
                key={action.key}
                type="button"
                className="policy-confirmation__action"
                onClick={action.onClick}
            >
                <span className="policy-confirmation__action-icon">{action.icon}</span>
                <span className="policy-confirmation__action-label">{action.label}</span>
            </button>
        ))}
    </div>
);

// ==========================================================================
// Sub-component: What's Next
// ==========================================================================

const WhatsNext: React.FC<{ steps: NextStep[] }> = ({ steps }) => (
    <div className="policy-confirmation__next">
        <h2 className="policy-confirmation__next-title">What's Next?</h2>
        <ul className="policy-confirmation__next-list">
            {steps.map((step) => (
                <li className="policy-confirmation__next-item" key={step.step}>
                    <span className="policy-confirmation__next-number">{step.step}</span>
                    <div>
                        <p className="policy-confirmation__next-heading">{step.heading}</p>
                        <p className="policy-confirmation__next-desc">{step.description}</p>
                    </div>
                </li>
            ))}
        </ul>
    </div>
);

// ==========================================================================
// Main component
// ==========================================================================

const policyData: PolicyDetails = {
    policyNumber: "POL-2026-0543210",
    insurer: "Zurich Takaful",
    vehicle: "WXD 1234",
    amountPaid: "RM 1,369",
    policyStartDate: "26 Jun 2026",
    policyEndDate: "26 Jul 2027",
    jpjStatus: "Activated",
};

const trackingData: TrackingDetails = {
    status: "In Progress",
    courierPartner: "PosLaju Malaysia",
    trackingNumber: "EX123456789MY",
    expectedDelivery: "25–26 Jun 2026",
    currentStatus: "Printing in progress",
    deliveryAddress: "Jalan Kenanga 5/2, Subang Jaya",
};

const statsData: CoverageStats = {
    coverageAmount: "RM 58,000",
    coveragePeriod: "12 Months",
    annualPremium: "RM 1,180",
};

const datesData: CoverageDates = {
    startDate: "30 May 2026",
    endDate: "29 May 2027",
};

const nextSteps: NextStep[] = [
    {
        step: 1,
        heading: "Download Your Policy",
        description: "Save a copy for your records",
    },
    {
        step: 2,
        heading: "Add Emergency Contacts",
        description: "Save important numbers to your phone",
    },
    {
        step: 3,
        heading: "Download Mobile App",
        description: "Manage your policy on the go",
    },
];

const PolicyConfirmation = ({ onContinue }:any) => {
    const actions: ActionItem[] = [
        {
            key: "download",
            label: "Download Policy",
            icon: <FiDownload />,
            onClick: () => console.log("Download Policy"),
        },
        {
            key: "wallet",
            label: "Add to Wallet",
            icon: <FiCreditCard />,
            onClick: () => console.log("Add to Wallet"),
        },
        {
            key: "share",
            label: "Share Policy",
            icon: <FiShare2 />,
            onClick: () => console.log("Share Policy"),
        },
        {
            key: "details",
            label: "View Details",
            icon: <FiFileText />,
            onClick: () => console.log("View Details"),
        },
    ];

    return (
        <div className="policy-confirmation">
            <Hero />

            <div className="policy-confirmation__row">
                <PolicyCard data={policyData} />
                <TrackingCard data={trackingData} />
            </div>

            <StatsStrip data={statsData} />
            <DateBanner data={datesData} />
            <RoadTaxNotice message="Your digital road tax will be delivered to your registered address within 48 hours" />
            <ActionsRow actions={actions} />
            <WhatsNext steps={nextSteps} />

            <button
                type="button"
                className="policy-confirmation__back"
                onClick={onContinue}
            >
                Back to Home
            </button>
        </div>
    );
};

export default PolicyConfirmation;