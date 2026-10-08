import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiCheck, FiStar, FiGlobe, FiZap } from 'react-icons/fi';
import { HiOutlineShieldCheck } from 'react-icons/hi';
import { PiAirplaneTiltBold } from 'react-icons/pi';
import './TravelInsuranceFlow.scss';
import TripDetails from '../../components/trip-details/TripDetails';
import TravellerDetails from '../../components/traveler-details/TravellerDetails';
import Coverage from '../../components/coverage/Coverage';
import AiInsights from '../../components/ai-insights/AiInsights';
import DestinationInsights from '../../components/destination-insights/DestinationInsights';
import Checkout from '../../components/checkout/Checkout';
import Success from '../../components/success/Success';
import Header from '../../../../shared/layouts/header/Header';


const STEPS = [
    { id: 1, label: 'Trip Details' },
    { id: 2, label: 'Travellers' },
    { id: 3, label: 'Coverage' },
    { id: 4, label: 'Ai Insights' },
    { id: 5, label: 'Destination' },
    { id: 6, label: 'Checkout' },
    { id: 7, label: 'Success' },
];

const TravelInsuranceFlow = () => {
    const navigate = useNavigate();
    const [activeStep, setActiveStep] = useState(1);

    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, [activeStep]);

    const handleBack = () => (activeStep === 1 ? navigate('/') : setActiveStep(activeStep - 1));
    const isFinished = activeStep === STEPS.length;

    return (
        <div className={`travel-insurance-flow${isFinished ? ' travel-insurance-flow--finished' : ''}`}>
           <Header/>

            {/* Sub header */}
            <section className="travel-insurance-flow__subheader">
                <div className="travel-insurance-flow__subheader-inner">
                <div className="travel-insurance-flow__subheader-left">
                    <span className="travel-insurance-flow__subheader-icon">
                        <PiAirplaneTiltBold />
                    </span>
                    <div className="travel-insurance-flow__subheader-copy">
                        <div className="travel-insurance-flow__subheader-title-row">
                            <h1 className="travel-insurance-flow__subheader-title">
                                Travel Insurance
                            </h1>
                            <span className="travel-insurance-flow__ai-powered-badge">
                                <FiZap />
                                AI Powered
                            </span>
                        </div>
                        <p className="travel-insurance-flow__subheader-desc">
                            <span>
                                <FiZap className="travel-insurance-flow__desc-icon" />
                                Instant Policy Issuance
                            </span>
                            <span className="travel-insurance-flow__dot">•</span>
                            <span>
                                <FiGlobe className="travel-insurance-flow__desc-icon" />
                                24&times;7 Global Assistance
                            </span>
                        </p>
                    </div>
                </div>

                <div className="travel-insurance-flow__subheader-right">
                    <div className="travel-insurance-flow__stat">
                        <HiOutlineShieldCheck className="travel-insurance-flow__stat-icon travel-insurance-flow__stat-icon--green" />
                        <div className="travel-insurance-flow__stat-copy">
                            <span className="travel-insurance-flow__stat-value">15+</span>
                            <span className="travel-insurance-flow__stat-label">
                                Partners
                            </span>
                        </div>
                    </div>
                    <div className="travel-insurance-flow__stat">
                        <FiStar className="travel-insurance-flow__stat-icon travel-insurance-flow__stat-icon--orange" />
                        <div className="travel-insurance-flow__stat-copy">
                            <span className="travel-insurance-flow__stat-value">RM 45</span>
                            <span className="travel-insurance-flow__stat-label">
                                Starting From
                            </span>
                        </div>
                    </div>
                    <div className="travel-insurance-flow__stat">
                        <FiGlobe className="travel-insurance-flow__stat-icon travel-insurance-flow__stat-icon--blue" />
                        <div className="travel-insurance-flow__stat-copy">
                            <span className="travel-insurance-flow__stat-value">24/7</span>
                            <span className="travel-insurance-flow__stat-label">
                                Global Support
                            </span>
                        </div>
                    </div>
                    <div className="travel-insurance-flow__stat">
                        <FiZap className="travel-insurance-flow__stat-icon travel-insurance-flow__stat-icon--navy" />
                        <div className="travel-insurance-flow__stat-copy">
                            <span className="travel-insurance-flow__stat-value">
                                Instant
                            </span>
                            <span className="travel-insurance-flow__stat-label">
                                Policy Issuance
                            </span>
                        </div>
                    </div>
                </div>
                </div>
            </section>

            {/* Stepper row */}
            <section className="travel-insurance-flow__stepper-row">
                <button className="travel-insurance-flow__back-btn" type="button" aria-label="Back" onClick={handleBack}>
                    <FiArrowLeft />
                </button>

                <ol className="travel-insurance-flow__stepper">
                    {STEPS.map((step, index) => {
                        const isActive = step.id === activeStep && !isFinished;
                        const isDone = step.id < activeStep || isFinished;
                        return (
                            <li
                                key={step.id}
                                className={[
                                    'travel-insurance-flow__step',
                                    isActive ? 'travel-insurance-flow__step--active' : '',
                                    isDone ? 'travel-insurance-flow__step--done' : '',
                                ].join(' ').trim()}
                            >
                                <span className="travel-insurance-flow__step-content">
                                    <span className="travel-insurance-flow__step-index">
                                        {isDone ? <FiCheck /> : step.id}
                                    </span>
                                    <span className="travel-insurance-flow__step-label">
                                        {step.label}
                                    </span>
                                </span>
                                {index < STEPS.length - 1 && (
                                    <span className="travel-insurance-flow__step-divider" />
                                )}
                            </li>
                        );
                    })}
                </ol>
                <div className="travel-insurance-flow__stepper-spacer" />
            </section>

            {/* Active step content */}
            <main className="travel-insurance-flow__content">
                {activeStep === 1 && (
                    <TripDetails onContinue={() => setActiveStep(2)} />
                )}
                {activeStep === 2 && (
                    <TravellerDetails onContinue={() => setActiveStep(3)} />
                )}
                {activeStep === 3 && (
                    <Coverage onContinue={() => setActiveStep(4)} />
                )}
                {activeStep === 4 && (
                    <AiInsights onContinue={() => setActiveStep(5)} />
                )}
                {activeStep === 5 && (
                    <DestinationInsights onContinue={() => setActiveStep(6)} />
                )}
                {activeStep === 6 && (
                    <Checkout onContinue={() => setActiveStep(7)} />
                )}
                {activeStep === 7 && (
                    <Success onReturnHome={() => navigate('/')} />
                )}
            </main>
        </div>
    );
};

export default TravelInsuranceFlow;