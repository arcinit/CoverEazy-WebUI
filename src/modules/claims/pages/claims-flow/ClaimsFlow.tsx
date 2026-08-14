import React, { useState } from 'react';
import {
    FiChevronLeft,
    FiCheck,
    FiClock,
    FiPhone,
} from 'react-icons/fi';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { FaBolt } from 'react-icons/fa';
import { PiPulseBold } from 'react-icons/pi';
import './ClaimsFlow.scss';

import Header from '../../../../shared/layouts/header/Header';
import ClaimsType from '../../components/claims-type/ClaimsType';
import BasicDetails from '../../components/basic-details/BasicDetails';
import PolicyVehicleDetails from '../../components/policy-vehicle-details/PolicyVehicleDetails';
import EvidenceUpload from '../../components/evidence-upload/EvidenceUpload';
import RoadsideAssistance from '../../components/roadside-assistance/RoadsideAssistance';
import WorkshopList from '../../components/workshop/WorkshopList';
import ClaimReview from '../../components/claim-review/ClaimReview';
import WorkshopDetail from '../../components/workshop/workshop-details/WorkshopDetails';
import ClaimStatus from '../../components/claim-status/ClaimStatus';

const STEPS = [
    { id: 1, label: 'Claim Type' },
    { id: 2, label: 'Basic Details' },
    { id: 3, label: 'Evidence' },
    { id: 4, label: 'Roadside Assistance' },
    { id: 5, label: 'Workshop' },
    { id: 6, label: 'Review & Submit' },
];

const ClaimsFlow = () => {
    const [activeStep, setActiveStep] = useState(1);

    const goBack = () => setActiveStep((s) => Math.max(s - 1, 1));

    return (
        <div className="claims-flow">
            <Header />

            {/* Sub header */}
            <section className="claims-flow__subheader">
                <div className="claims-flow__subheader-left">
                    <span className="claims-flow__subheader-icon">
                        <HiOutlineDocumentText />
                    </span>
                    <div className="claims-flow__subheader-copy">
                        <div className="claims-flow__subheader-title-row">
                            <h1 className="claims-flow__subheader-title">
                                Insurance Claims
                            </h1>
                            <span className="claims-flow__ai-powered-badge">
                                AI-Assisted
                            </span>
                        </div>
                        <p className="claims-flow__subheader-desc">
                            <span>
                                <FaBolt className="claims-flow__desc-icon" />
                                Fast-track processing
                            </span>
                            <span className="claims-flow__dot">&bull;</span>
                            <span>
                                <FiClock className="claims-flow__desc-icon" />
                                Avg. 7-day settlement
                            </span>
                        </p>
                    </div>
                </div>

                <div className="claims-flow__subheader-right">
                    <div className="claims-flow__stat">
                        <PiPulseBold className="claims-flow__stat-icon claims-flow__stat-icon--orange" />
                        <div className="claims-flow__stat-copy">
                            <span className="claims-flow__stat-value">2</span>
                            <span className="claims-flow__stat-label">Active Claims</span>
                        </div>
                    </div>
                    <div className="claims-flow__stat">
                        <FiClock className="claims-flow__stat-icon claims-flow__stat-icon--blue" />
                        <div className="claims-flow__stat-copy">
                            <span className="claims-flow__stat-value">7 Days</span>
                            <span className="claims-flow__stat-label">Avg Settlement</span>
                        </div>
                    </div>
                    <div className="claims-flow__stat">
                        <FiPhone className="claims-flow__stat-icon claims-flow__stat-icon--green" />
                        <div className="claims-flow__stat-copy">
                            <span className="claims-flow__stat-value">24/7</span>
                            <span className="claims-flow__stat-label">Claims Support</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stepper row */}
            <section className="claims-flow__stepper-row">
                <button
                    className="claims-flow__back-btn"
                    type="button"
                    onClick={goBack}
                    disabled={activeStep === 1}
                >
                    <FiChevronLeft />
                </button>

                <ol className="claims-flow__stepper">
                    {STEPS.map((step, index) => {
                        const isActive = step.id === activeStep;
                        const isDone = step.id < activeStep;
                        return (
                            <li
                                key={step.id}
                                className={[
                                    'claims-flow__step',
                                    isActive ? 'claims-flow__step--active' : '',
                                    isDone ? 'claims-flow__step--done' : '',
                                ].join(' ').trim()}
                            >
                                <span className="claims-flow__step-content">
                                    <span className="claims-flow__step-index">
                                        {isDone ? <FiCheck /> : step.id}
                                    </span>
                                    <span className="claims-flow__step-label">
                                        {step.label}
                                    </span>
                                </span>
                                {index < STEPS.length - 1 && (
                                    <span className="claims-flow__step-divider" />
                                )}
                            </li>
                        );
                    })}
                </ol>
                <div></div>
            </section>

            {/* Active step content */}
            <main className="claims-flow__content">
                {activeStep === 1 && (
                    <ClaimsType onContinue={() => setActiveStep(2)} />
                )}
                {activeStep === 2 && (
                    <BasicDetails onContinue={() => setActiveStep(3)} />
                )}
                {activeStep === 3 && (
                    <PolicyVehicleDetails onBack={()=>{}} onContinue={() => setActiveStep(4)} />
                )}
                {activeStep === 4 && (
                    <EvidenceUpload onBack={() => { }} onContinue={() => setActiveStep(5)} />
                )}
                {activeStep === 5 && (
                    <RoadsideAssistance onBack={() => { }} onContinue={() => setActiveStep(6)} />
                )}
                {activeStep === 6 && (
                    <WorkshopList onBack={() => { }} onContinue={() => setActiveStep(7)} />
                )}
                {activeStep === 7 && (
                    <WorkshopDetail  onContinue={() => setActiveStep(8)} />
                )}
                {activeStep === 8 && (
                    <ClaimReview onContinue={() => setActiveStep(9)} />
                )}

                {activeStep === 9 && (
                    <ClaimStatus onContinue={() => setActiveStep(10)} />
                )}

            </main>
        </div>
    );
};

export default ClaimsFlow;