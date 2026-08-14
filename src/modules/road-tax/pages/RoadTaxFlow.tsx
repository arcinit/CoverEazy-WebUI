import React, { useState } from 'react';
import {
    FiChevronLeft,
    FiChevronDown,
    FiClock,
    FiTruck,
    FiCheck,
} from 'react-icons/fi';
import { HiOutlineShieldCheck } from 'react-icons/hi';
import { PiSteeringWheelBold } from 'react-icons/pi';
import { FaCheckCircle } from 'react-icons/fa';

import './RoadTaxFlow.scss';
import VehicleDetails from '../components/vehicle-details/VehicleDetails';
import OptionsDelivery from '../components/options-delivery/OptionsDelivery';
import ReviewPayment from '../components/review-payment/ReviewPayment';
import SuccessScreen from '../components/success-screen/SuccessScreen';
import Header from '../../../shared/layouts/header/Header';
import { LuCar } from 'react-icons/lu';

const STEPS = [
    { id: 1, label: 'Vehicle Details' },
    { id: 2, label: 'Options & Delivery' },
    { id: 3, label: 'Review & Payments' },
    { id: 4, label: 'Success' },
];

const RoadTaxFlow = () => {
    const [activeStep, setActiveStep] = useState(1);

    return <>
        <Header/>
        <div className="road-tax-flow">
            <section className="road-tax-flow__subheader">
                <div className="road-tax-flow__subheader-left">
                    <span className="road-tax-flow__subheader-icon">
                        <LuCar />
                    </span>
                    <div className="road-tax-flow__subheader-copy">
                        <h1 className="road-tax-flow__subheader-title">
                            Road Tax Renewal
                        </h1>
                        <p className="road-tax-flow__subheader-desc">
                            <span>Renew in under 3 minutes</span>
                            <span className="road-tax-flow__dot">•</span>
                            <span>Delivered to your door</span>
                        </p>
                    </div>
                </div>

                <div className="road-tax-flow__subheader-right">
                    <div className="road-tax-flow__stat">
                        <FiClock className="road-tax-flow__stat-icon road-tax-flow__stat-icon--orange" />
                        <div className="road-tax-flow__stat-copy">
                            <span className="road-tax-flow__stat-value">3 Min</span>
                            <span className="road-tax-flow__stat-label">Average</span>
                        </div>
                    </div>
                    <div className="road-tax-flow__stat">
                        <HiOutlineShieldCheck className="road-tax-flow__stat-icon road-tax-flow__stat-icon--green" />
                        <div className="road-tax-flow__stat-copy">
                            <span className="road-tax-flow__stat-value">99.9%</span>
                            <span className="road-tax-flow__stat-label">Success Rate</span>
                        </div>
                    </div>
                    <div className="road-tax-flow__stat">
                        <FiTruck className="road-tax-flow__stat-icon road-tax-flow__stat-icon--blue" />
                        <div className="road-tax-flow__stat-copy">
                            <span className="road-tax-flow__stat-value">Free</span>
                            <span className="road-tax-flow__stat-label">Door Delivery</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stepper row */}
            <section className="road-tax-flow__stepper-row">
                <button className="road-tax-flow__back-btn" type="button">
                    <FiChevronLeft />
                </button>

                <ol className="road-tax-flow__stepper">
                    {STEPS.map((step, index) => {
                        const isActive = step.id === activeStep;
                        const isDone = step.id < activeStep;
                        return (
                            <li
                                key={step.id}
                                className={[
                                    'road-tax-flow__step',
                                    isActive ? 'road-tax-flow__step--active' : '',
                                    isDone ? 'road-tax-flow__step--done' : '',
                                ].join(' ').trim()}
                            >
                                <span className="road-tax-flow__step-index">
                                    {isDone ? <FiCheck /> : step.id}
                                </span>
                                <span className="road-tax-flow__step-label">
                                    {step.label}
                                </span>
                                {index < STEPS.length - 1 && (
                                    <span className="road-tax-flow__step-divider" />
                                )}
                            </li>
                        );
                    })}
                </ol>
                <div></div>
            </section>

            {/* Active step content */}
            <main className="road-tax-flow__content">
                {activeStep === 1 && (
                    <VehicleDetails onContinue={() => setActiveStep(2)} />
                )}
                {activeStep === 2 && (
                    <OptionsDelivery onContinue={() => setActiveStep(3)} />
                )}
                {activeStep === 3 && (
                    <ReviewPayment onContinue={() => setActiveStep(4)} />
                )}
                {activeStep === 4 && (
                    <SuccessScreen onStartNewRenewal={() => setActiveStep(1)} />
                )}
            </main>
        </div>
    </>
};

export default RoadTaxFlow;