import React, { useState } from 'react';
import {
    FiChevronLeft,
    FiChevronDown,
    FiStar,
    FiGlobe,
    FiZap,
    FiCheck,
} from 'react-icons/fi';
import { HiOutlineShieldCheck } from 'react-icons/hi';
import { PiCarBold } from 'react-icons/pi';
import { FaCheckCircle } from 'react-icons/fa';
import './CarMotersFlow.scss';
import Header from '../../../shared/layouts/header/Header';
import Moters from '../components/moters/Moters';
import ComparePlans from '../components/compare-plans/ComparePlans';
import AddOnStep from '../components/add-on-steps/AddOnSteps';
import ContactDetails from '../components/contact-details/ContactDetails';
import ReviewCheckout from '../components/review-checkout/ReviewCheckout';
import PolicyConfirmation from '../components/policy-conformation/PolicyConformation';
import PlanDetailsModal from '../components/plan-details-modal/PlanDetailsModal';


// Steps shown in the pill-stepper (matches the design: Vehicle Details -> Checkout).
// "Policy Confirmation" intentionally isn't a pill — same way a "thank you" screen
// usually sits outside the stepper — it renders once activeStep goes past CHECKOUT.
const STEPS = [
    { id: 1, label: 'Vehicle Details' },
    { id: 2, label: 'Coverage' },
    { id: 3, label: 'Add-ons' },
    { id: 4, label: 'Contact Details' },
    { id: 5, label: 'Checkout' },
];

const CONFIRMATION_STEP = STEPS.length + 1; // 6

const CarMotersFlow = () => {
    const [activeStep, setActiveStep] = useState(1);

    // The "Coverage" step renders the plan comparison, and lets the user open a
    // modal with the full plan breakdown before they pick one.
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [isPlanModalOpen, setIsPlanModalOpen] = useState(false);

    const openPlanDetails = (plan:any) => {
        setSelectedPlan(plan);
        setIsPlanModalOpen(true);
    };

    const closePlanDetails = () => setIsPlanModalOpen(false);

    return (
        <div className="car-moters-flow">
            <Header />

           
            {/* Stepper row */}
            <section className="car-moters-flow__stepper-row">
                <button className="car-moters-flow__back-btn" type="button">
                    <FiChevronLeft />
                </button>

                <ol className="car-moters-flow__stepper">
                    {STEPS.map((step, index) => {
                        const isActive = step.id === activeStep;
                        const isDone = step.id < activeStep;
                        return (
                            <li
                                key={step.id}
                                className={[
                                    'car-moters-flow__step',
                                    isActive ? 'car-moters-flow__step--active' : '',
                                    isDone ? 'car-moters-flow__step--done' : '',
                                ].join(' ').trim()}
                            >
                                <span className="car-moters-flow__step-content">
                                    <span className="car-moters-flow__step-index">
                                        {isDone ? <FiCheck /> : step.id}
                                    </span>
                                    <span className="car-moters-flow__step-label">
                                        {step.label}
                                    </span>
                                </span>
                                {index < STEPS.length - 1 && (
                                    <span className="car-moters-flow__step-divider" />
                                )}
                            </li>
                        );
                    })}
                </ol>
                <div></div>
            </section>

            {/* Active step content */}
            <main className="car-moters-flow__content">
                {activeStep === 1 && (
                    // "Vehicle Details" step renders Moters
                    <Moters onContinue={() => setActiveStep(2)} />
                )}
                {activeStep === 2 && (
                    <ComparePlans
                        selectedPlan={selectedPlan}
                        onSelectPlan={setSelectedPlan}
                        onViewDetails={openPlanDetails}
                        onContinue={() => setActiveStep(3)}
                    />
                )}
                {activeStep === 3 && (
                    <AddOnStep onContinue={() => setActiveStep(4)} />
                )}
                {activeStep === 4 && (
                    <ContactDetails onContinue={() => setActiveStep(5)} />
                )}
                {activeStep === 5 && (
                    <ReviewCheckout onContinue={() => setActiveStep(6)} />
                )}
                {activeStep === 6 && (
                    <PolicyConfirmation onContinue={() => setActiveStep(1)} />
                )}
            </main>

            {/* Plan details modal — opened from the Coverage step */}
            {isPlanModalOpen && (
                <PlanDetailsModal
                    plan={selectedPlan}
                    onClose={closePlanDetails}
                   isOpen
                />
            )}
        </div>
    );
};

export default CarMotersFlow;