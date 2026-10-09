import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiCheck } from 'react-icons/fi';
import { LuActivity, LuClock, LuFileText, LuPhone, LuZap } from 'react-icons/lu';
import './ClaimsFlow.scss';

import Header from '../../../../shared/layouts/header/Header';
import ClaimsType from '../../components/claims-type/ClaimsType';
import PolicyVehicleDetails from '../../components/policy-vehicle-details/PolicyVehicleDetails';
import EvidenceUpload from '../../components/evidence-upload/EvidenceUpload';
import RoadsideAssistance from '../../components/roadside-assistance/RoadsideAssistance';
import WorkshopList from '../../components/workshop/WorkshopList';
import WorkshopDetail from '../../components/workshop/workshop-details/WorkshopDetails';
import ClaimReview from '../../components/claim-review/ClaimReview';
import ClaimStatus from '../../components/claim-status/ClaimStatus';
import ClaimDetails from '../../components/claim-details/ClaimDetails';

// Pill-stepper labels, as in the Figma design.
const STEPS = [
    { id: 1, label: 'Claim Type' },
    { id: 2, label: 'Basic Details' },
    { id: 3, label: 'Evidence' },
    { id: 4, label: 'Roadside Assistance' },
    { id: 5, label: 'Workshop' },
    { id: 6, label: 'Review & Submit' },
];

// Screens of the flow. Some stepper steps span two screens (workshop list + workshop details), and the
// "claim submitted" screens that follow the stepper have no stepper at all.
const SCREEN = {
    TYPE: 1,
    POLICY: 2,
    EVIDENCE: 3,
    ROADSIDE: 4,
    WORKSHOPS: 5,
    WORKSHOP_DETAIL: 6,
    REVIEW: 7,
    SUBMITTED: 8,
    DETAILS: 9,
} as const;

const stepperStepFor = (screen: number) => {
    if (screen <= SCREEN.WORKSHOPS) return screen;
    if (screen === SCREEN.WORKSHOP_DETAIL) return 5;
    if (screen === SCREEN.REVIEW) return 6;
    return 0;
};

const ClaimsFlow = () => {
    const navigate = useNavigate();
    const [screen, setScreen] = useState<number>(SCREEN.TYPE);

    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, [screen]);

    const goBack = () => (screen === SCREEN.TYPE ? navigate('/') : setScreen(screen - 1));
    const stepperStep = stepperStepFor(screen);

    return (
        <div className="claims-flow">
            <Header />

            {/* Sub header */}
            <section className="claims-flow__subheader">
                <div className="claims-flow__subheader-inner">
                    <div className="claims-flow__subheader-left">
                        <span className={`claims-flow__subheader-icon${screen === SCREEN.TYPE ? ' claims-flow__subheader-icon--navy' : ''}`}>
                            <LuFileText />
                        </span>
                        <div className="claims-flow__subheader-copy">
                            <div className="claims-flow__subheader-title-row">
                                <h1 className="claims-flow__subheader-title">Insurance Claims</h1>
                                <span className="claims-flow__ai-powered-badge">AI-Assisted</span>
                            </div>
                            <p className="claims-flow__subheader-desc">
                                <span>
                                    <LuZap className="claims-flow__desc-icon claims-flow__desc-icon--orange" />
                                    Fast-track processing
                                </span>
                                <span className="claims-flow__dot">&bull;</span>
                                <span>
                                    <LuClock className="claims-flow__desc-icon claims-flow__desc-icon--blue" />
                                    Avg. 7-day settlement
                                </span>
                            </p>
                        </div>
                    </div>

                    <div className="claims-flow__subheader-right">
                        <div className="claims-flow__stat">
                            <LuActivity className="claims-flow__stat-icon claims-flow__stat-icon--orange" />
                            <div className="claims-flow__stat-copy">
                                <span className="claims-flow__stat-value">2</span>
                                <span className="claims-flow__stat-label">Active Claims</span>
                            </div>
                        </div>
                        <div className="claims-flow__stat">
                            <LuClock className="claims-flow__stat-icon claims-flow__stat-icon--blue" />
                            <div className="claims-flow__stat-copy">
                                <span className="claims-flow__stat-value">7 Days</span>
                                <span className="claims-flow__stat-label">Avg Settlement</span>
                            </div>
                        </div>
                        <div className="claims-flow__stat">
                            <LuPhone className="claims-flow__stat-icon claims-flow__stat-icon--green" />
                            <div className="claims-flow__stat-copy">
                                <span className="claims-flow__stat-value">24/7</span>
                                <span className="claims-flow__stat-label">Claims Support</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stepper row */}
            {stepperStep > 0 && (
                <section className="claims-flow__stepper-row">
                    <button className="claims-flow__back-btn" type="button" aria-label="Back" onClick={goBack}>
                        <FiArrowLeft />
                    </button>

                    <ol className="claims-flow__stepper">
                        {STEPS.map((step, index) => {
                            const isActive = step.id === stepperStep;
                            const isDone = step.id < stepperStep;
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
                                        <span className="claims-flow__step-label">{step.label}</span>
                                    </span>
                                    {index < STEPS.length - 1 && <span className="claims-flow__step-divider" />}
                                </li>
                            );
                        })}
                    </ol>
                    <div className="claims-flow__stepper-spacer" />
                </section>
            )}

            {/* Active step content */}
            <main className={`claims-flow__content${stepperStep > 0 ? '' : ' claims-flow__content--bare'}`}>
                {screen === SCREEN.TYPE && <ClaimsType onContinue={() => setScreen(SCREEN.POLICY)} />}
                {screen === SCREEN.POLICY && (
                    <PolicyVehicleDetails onBack={goBack} onContinue={() => setScreen(SCREEN.EVIDENCE)} />
                )}
                {screen === SCREEN.EVIDENCE && (
                    <EvidenceUpload onBack={goBack} onContinue={() => setScreen(SCREEN.ROADSIDE)} />
                )}
                {screen === SCREEN.ROADSIDE && (
                    <RoadsideAssistance onBack={goBack} onContinue={() => setScreen(SCREEN.WORKSHOPS)} />
                )}
                {screen === SCREEN.WORKSHOPS && (
                    <WorkshopList onBack={goBack} onContinue={() => setScreen(SCREEN.WORKSHOP_DETAIL)} />
                )}
                {screen === SCREEN.WORKSHOP_DETAIL && (
                    <WorkshopDetail onBack={goBack} onContinue={() => setScreen(SCREEN.REVIEW)} />
                )}
                {screen === SCREEN.REVIEW && (
                    <ClaimReview onBack={goBack} onEdit={() => setScreen(SCREEN.POLICY)} onContinue={() => setScreen(SCREEN.SUBMITTED)} />
                )}
                {screen === SCREEN.SUBMITTED && (
                    <ClaimStatus onViewDetails={() => setScreen(SCREEN.DETAILS)} onHome={() => navigate('/')} />
                )}
                {screen === SCREEN.DETAILS && <ClaimDetails onBack={() => setScreen(SCREEN.SUBMITTED)} />}
            </main>

            {/* Pinned Back / Continue bar of the active screen is portalled in here */}
            <div id="claims-footer-slot" className="claims-flow__footer-slot" />
        </div>
    );
};

export default ClaimsFlow;
