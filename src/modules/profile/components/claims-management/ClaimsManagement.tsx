import React, { useState } from 'react';
import { FiCheck } from 'react-icons/fi';
import './ClaimsManagement.scss';

// ---------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------
type TabKey = 'active' | 'completed' | 'rejected';
type ClaimStatus = 'under-review' | 'completed' | 'rejected';

interface ClaimStep {
    id: string;
    label: string;
}

interface Claim {
    id: string;
    tab: TabKey;
    claimNo: string;
    status: ClaimStatus;
    type: string;
    plateNo: string;
    filedDate: string;
    estPayout: string;
    adjuster: string;
    sla: string;
    currentStep: number; // 1-indexed, matches STEPS
}

// ---------------------------------------------------------------------
// Static data — swap with API data later
// ---------------------------------------------------------------------
const TABS: { key: TabKey; label: string }[] = [
    { key: 'active', label: 'Active' },
    { key: 'completed', label: 'Completed' },
    { key: 'rejected', label: 'Rejected' },
];

const STEPS: ClaimStep[] = [
    { id: '1', label: 'Submitted' },
    { id: '2', label: 'Assigned' },
    { id: '3', label: 'Assessment' },
    { id: '4', label: 'Approval' },
    { id: '5', label: 'Settlement' },
];

const STATUS_LABEL: Record<ClaimStatus, string> = {
    'under-review': 'Under Review',
    completed: 'Completed',
    rejected: 'Rejected',
};

const CLAIMS: Claim[] = [
    {
        id: 'c1',
        tab: 'active',
        claimNo: 'CLM-2026-88421',
        status: 'under-review',
        type: 'Own Vehicle Damage',
        plateNo: 'WXD 1234',
        filedDate: '25 Jun 2026',
        estPayout: 'RM 3,100',
        adjuster: 'Hafiz Ahmad',
        sla: '4 Jul 2026',
        currentStep: 3,
    },
];

// ---------------------------------------------------------------------
// Small presentational bits
// ---------------------------------------------------------------------
interface StepperProps {
    currentStep: number;
}

const Stepper: React.FC<StepperProps> = ({ currentStep }) => (
    <div className="claims__stepper">
        {STEPS.map((step, idx) => {
            const stepNo = idx + 1;
            const state =
                stepNo < currentStep ? 'done' : stepNo === currentStep ? 'active' : 'pending';

            return (
                <React.Fragment key={step.id}>
                    {idx > 0 && (
                        <span
                            className={`claims__stepper-line ${stepNo <= currentStep ? 'claims__stepper-line--filled' : ''
                                }`}
                        />
                    )}
                    <div className="claims__stepper-item">
                        <span className={`claims__stepper-dot claims__stepper-dot--${state}`}>
                            {state === 'done' ? <FiCheck /> : stepNo}
                        </span>
                        <span className={`claims__stepper-label claims__stepper-label--${state}`}>
                            {step.label}
                        </span>
                    </div>
                </React.Fragment>
            );
        })}
    </div>
);

// ---------------------------------------------------------------------
// Claim card
// ---------------------------------------------------------------------
const ClaimCard: React.FC<{ claim: Claim }> = ({ claim }) => (
    <div className="claims__card">
        <div className="claims__card-top">
            <div>
                <h3 className="claims__claim-no">{claim.claimNo}</h3>
                <p className="claims__claim-sub">
                    {claim.type} &middot; {claim.plateNo}
                </p>
            </div>
            <span className={`claims__badge claims__badge--${claim.status}`}>
                {STATUS_LABEL[claim.status]}
            </span>
        </div>

        <div className="claims__meta">
            <div className="claims__meta-item">
                <span className="claims__meta-label">Filed</span>
                <span className="claims__meta-value">{claim.filedDate}</span>
            </div>
            <div className="claims__meta-item">
                <span className="claims__meta-label">Est. Payout</span>
                <span className="claims__meta-value">{claim.estPayout}</span>
            </div>
            <div className="claims__meta-item">
                <span className="claims__meta-label">Adjuster</span>
                <span className="claims__meta-value">{claim.adjuster}</span>
            </div>
            <div className="claims__meta-item">
                <span className="claims__meta-label">SLA</span>
                <span className="claims__meta-value">{claim.sla}</span>
            </div>
        </div>

        <Stepper currentStep={claim.currentStep} />

        <div className="claims__footer">
            <button type="button" className="claims__link">
                Track Claim
            </button>
            <button type="button" className="claims__link">
                Upload Documents
            </button>
            <button type="button" className="claims__link">
                Contact Adjuster
            </button>
        </div>
    </div>
);

// ---------------------------------------------------------------------
// ClaimsManagement — main export
// ---------------------------------------------------------------------
const ClaimsManagement: React.FC = () => {
    const [activeTab, setActiveTab] = useState<TabKey>('active');
    const claims = CLAIMS.filter((c) => c.tab === activeTab);

    return (
        <section className="claims">
            <div className="claims__header">
                <h2 className="claims__heading">Claims Management</h2>
                <p className="claims__lead">Track and manage all your insurance claims.</p>
            </div>

            <div className="claims__tabs">
                {TABS.map((tab) => (
                    <button
                        key={tab.key}
                        type="button"
                        onClick={() => setActiveTab(tab.key)}
                        className={`claims__tab${activeTab === tab.key ? ' claims__tab--active' : ''
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <div className="claims__list">
                {claims.length > 0 ? (
                    claims.map((claim) => <ClaimCard key={claim.id} claim={claim} />)
                ) : (
                    <div className="claims__empty">No {activeTab} claims to show.</div>
                )}
            </div>
        </section>
    );
};

export default ClaimsManagement;