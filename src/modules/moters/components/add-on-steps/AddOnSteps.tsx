import React, { useState } from "react";
import {
    FiArrowLeft,
    FiArrowRight,
    FiCheck,
    FiMail,
    FiPackage,
    FiZap,
} from "react-icons/fi";
import {
    MdOutlineLocalShipping,
    MdOutlineApartment,
    MdDirectionsCarFilled,
    MdOutlineWaterDrop,
    MdOutlineGroups,
    MdOutlineBuildCircle,
    MdOutlineVpnKey,
    MdOutlineHouseSiding,
} from "react-icons/md";
import { TbShieldCheckFilled } from "react-icons/tb";
import "./AddOnSteps.scss";
import raodTaxImage from "./images/road-tax.png"
import zurikPlanImage from "./images/zurich.png"
import { Stepper } from "../moters/Moters";
import { IoArrowBack } from "react-icons/io5";
import Header from "../../../../shared/layouts/header/Header";
const STEPS = [
    { id: 1, label: "Vehicle Details", status: "complete" },
    { id: 2, label: "Coverage", status: "complete" },
    { id: 3, label: "Add-Ons", status: "current" },
    { id: 4, label: "Contact Details", status: "upcoming" },
    { id: 5, label: "Checkout", status: "upcoming" },
];

const DELIVERY_METHODS = [
    {
        id: "standard",
        icon: FiPackage,
        title: "Standard Delivery",
        price: "Free",
        subtitle: "3–5 Business Days",
        tags: ["Full tracking", "Signature required"],
        badge: "Free"
    },
    {
        id: "express",
        icon: FiZap,
        title: "Express Delivery",
        price: "RM 10.00",
        subtitle: "1–2 Business Days",
        badge: "Fast",
        tags: ["Priority processing", "Live tracking", "SMS updates"],
        highlighted: true,
    },
    {
        id: "office",
        icon: MdOutlineApartment,
        title: "Office Collection",
        price: "Free",
        subtitle: "Ready in 4 Hours",
        badge: "Instant",
        tags: ["Collect from branch", "No waiting", "Immediate pickup"],
    },
];

const ADD_ONS = [
    {
        id: "windscreen",
        icon: MdDirectionsCarFilled,
        title: "Windscreen Cover",
        description: "Repair or replace windscreen, sunroof and windows.",
        price: 65,
        hasSumInsured: true,
        checked: true,
    },
    {
        id: "flood-natural",
        icon: MdOutlineWaterDrop,
        title: "Flood & Natural Disasters",
        description: "Repair or replace windscreen, sunroof and windows.",
        price: 110,
        hasSumInsured: true,
        checked: true,
    },
    {
        id: "unlimited-drivers",
        icon: MdOutlineGroups,
        title: "Unlimited Drivers",
        description: "Anyone with a valid licence can drive your car.",
        price: 45,
        checked: false,
    },
    {
        id: "roadside",
        icon: MdOutlineBuildCircle,
        title: "24/7 Roadside AssistUnlimited Drivers",
        description: "Towing, jumpstart and on-the-spot help anywhere.",
        price: 38,
        checked: false,
    },
    {
        id: "key-replacement",
        icon: MdOutlineVpnKey,
        title: "Key Replacement",
        description: "Lost or stolen key replacement, up to RM1,500.",
        price: 22,
        checked: false,
    },
    {
        id: "flood-protection",
        icon: MdOutlineHouseSiding,
        title: "Flood Protection",
        description: "Lost or stolen key replacement, up to RM1,500.",
        price: 22,
        checked: false,
    },
];

const PAYMENT_PLANS = [
    { id: "full", label: "Pay in Full", value: "RM 1310" },
    { id: "3mo", label: "3 Months", value: "RM 110/mo" },
    { id: "6mo", label: "6 Months", value: "RM 110/mo" },
    { id: "12mo", label: "12 Months", value: "RM 110/mo" },
];



function RoadTaxCard() {
    return (
        <section className="road-tax-card">
            <div className="road-tax-card__icon" aria-hidden="true">
                <img src={raodTaxImage} alt="" />
            </div>
            <div className="road-tax-card__body">
                <div className="road-tax-card__heading">
                    <h2 className="road-tax-card__title">Road Tax Renewal</h2>
                    <span className="road-tax-card__badge">Eligible</span>
                </div>
                <dl className="road-tax-card__meta">
                    <div className="road-tax-card__meta-item">
                        <dt>Renew before:</dt>
                        <dd>26 July 2026</dd>
                    </div>
                    <div className="road-tax-card__meta-item">
                        <dt>Vehicle:</dt>
                        <dd>ABC 123</dd>
                    </div>
                    <div className="road-tax-card__meta-item">
                        <dt>Type:</dt>
                        <dd>Private</dd>
                    </div>
                </dl>
            </div>
            <div className="road-tax-card__price">
                <span className="road-tax-card__price-currency">RM</span>
                <span className="road-tax-card__price-amount">123.45</span>
            </div>
        </section>
    );
}

function RenewalPeriod({ value, onChange }: any) {
    const options = ["12 Months", "6 Months", "3 Months", "Don't Renew"];
    return (
        <section className="option-section">
            <h3 className="option-section__title">Renewal Period</h3>
            <p className="option-section__subtitle">Pick how long you want to renew your road tax for.</p>
            <div className="pill-group" role="radiogroup" aria-label="Renewal period">
                {options.map((option) => (
                    <button
                        type="button"
                        key={option}
                        role="radio"
                        aria-checked={value === option}
                        className={`pill-group__option${value === option ? " pill-group__option--selected" : ""}`}
                        onClick={() => onChange(option)}
                    >
                        {option}
                    </button>
                ))}
            </div>
        </section>
    );
}

function DeliveryFormat({ value, onChange }: any) {
    return (
        <section className="option-section">
            <h3 className="option-section__title">Delivery Format</h3>
            <p className="option-section__subtitle">How would you like to receive your road tax?</p>
            <div className="format-group">
                <button
                    type="button"
                    className={`format-card${value === "digital" ? " format-card--selected" : ""}`}
                    onClick={() => onChange("digital")}
                >
                    <span className="format-card__icon format-card__icon--digital">
                        <FiMail />
                    </span>
                    <span className="format-card__text">
                        <span className="format-card__title">Digital Copy</span>
                        <span className="format-card__subtitle">Instant Email Delivey</span>
                    </span>
                    <span className="format-card__price">Free</span>
                </button>
                <button
                    type="button"
                    className={`format-card${value === "digital-physical" ? " format-card--selected" : ""}`}
                    onClick={() => onChange("digital-physical")}
                >
                    <span className="format-card__icon format-card__icon--physical">
                        <MdOutlineLocalShipping />
                    </span>
                    <span className="format-card__text">
                        <span className="format-card__title">Digital+Physical</span>
                        <span className="format-card__subtitle">Email Copy + Courier Delivery</span>
                    </span>
                    <span className="format-card__price">+RM 12</span>
                </button>
            </div>
            <p className="option-section__footnote">
                Insure Pro logistics officers will verify and record the details of the person accepting the
                renewed road tax by performing a biometric verification of their MyKad.
            </p>
        </section>
    );
}

function DeliveryMethod({ value, onChange }: any) {
    return (
        <section className="option-section">
            <h3 className="option-section__title">Delivery Method</h3>
            <p className="option-section__subtitle">Select how you&apos;d like to receive your road tax sticker.</p>
            <div className="delivery-grid">
                {DELIVERY_METHODS.map((method) => {
                    const Icon = method.icon;
                    const isSelected = value === method.id;
                    return (
                        <button
                            type="button"
                            key={method.id}
                            className={`delivery-card${isSelected ? " delivery-card--selected" : ""}`}
                            onClick={() => onChange(method.id)}
                        >
                            <span className="delivery-card__top">
                                <span className="delivery-card__icon">
                                    <Icon />
                                </span>
                                <div className="delivery-card__price-bloack">
                                    <span className="delivery-card__price">
                                        {method.price}
                                    </span>
                                    {isSelected && (
                                        <span className="delivery-card__check">
                                            <FiCheck />
                                        </span>
                                    )}
                                </div>

                            </span>
                            <span className="delivery-card__title">
                                {method.title}
                                {method.badge && <span className="delivery-card__badge">{method.badge}</span>}
                            </span>
                            <span className="delivery-card__subtitle">{method.subtitle}</span>
                            <span className="delivery-card__tags">
                                {method.tags.map((tag) => (
                                    <span className="delivery-card__tag" key={tag}>
                                        {tag}
                                    </span>
                                ))}
                            </span>
                        </button>
                    );
                })}
            </div>
        </section>
    );
}

function AddOnsSection({ addOns, onToggle }: any) {
    return (
        <section className="addons-card">
            <h3 className="addons-card__title">Enhance Your Coverage</h3>
            <p className="addons-card__subtitle">Add optional protection for complete peace of mind</p>
            <ul className="addons-list">
                {addOns.map((addon: any) => {
                    const Icon = addon.icon;
                    return (
                        <li className="addon-row" key={addon.id}>
                            <div className="addon-row__left">
                                <span className="addon-row__icon">
                                    <Icon />
                                </span>
                                <span className="addon-row__text">
                                    <span className="addon-row__title">{addon.title}</span>
                                    <span className="addon-row__description">{addon.description}</span>
                                </span>
                            </div>

                            {addon.hasSumInsured && (
                                <span className="addon-row__sum-insured">
                                    <label htmlFor={`sum-${addon.id}`}>Sum Insured</label>
                                    <input id={`sum-${addon.id}`} type="text" placeholder="" />
                                </span>
                            )}
                            <span className="addon-row__control">
                                <button
                                    type="button"
                                    role="switch"
                                    aria-checked={addon.checked}
                                    className={`toggle-switch${addon.checked ? " toggle-switch--on" : ""}`}
                                    onClick={() => onToggle(addon.id)}
                                >
                                    <span className="toggle-switch__thumb" />
                                </button>
                                <span className="addon-row__price">+RM {addon.price} /yr</span>
                            </span>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}

function OrderSummary({ selectedPlan, onSelectPlan, onContinue }: any) {
    return (
        <aside className="order-summary">
            <h2 className="order-summary__title">Order Summary</h2>

            <div className="order-summary__plan">
                <span className="order-summary__plan-icon">
                    <img src={zurikPlanImage} alt="plain image" />
                </span>
                <span className="order-summary__plan-text">
                    <span className="order-summary__plan-name">Zurich Takaful</span>
                    <span className="order-summary__plan-type">Comprehensive Plan</span>
                </span>
            </div>

            <dl className="order-summary__rows">
                <div className="order-summary__row">
                    <dt>Sum Insured/Sum Covered</dt>
                    <dd>RM 10,000</dd>
                </div>
                <div className="order-summary__row">
                    <dt>Period of Cover</dt>
                    <dd>2026/06/01 - 2027/05/31</dd>
                </div>
            </dl>

            <dl className="order-summary__rows order-summary__rows--divided">
                <div className="order-summary__row">
                    <dt>Base Premium</dt>
                    <dd>RM 1180.00</dd>
                </div>
                <div className="order-summary__row">
                    <dt>No-claim Discount (0%)</dt>
                    <dd>RM 0.00</dd>
                </div>
                <div className="order-summary__row">
                    <dt>Net Premium/Contribution</dt>
                    <dd>RM 714.88</dd>
                </div>
            </dl>

            <div className="order-summary__addons">
                <p className="order-summary__addons-label">Add-ons (2)</p>
                <div className="order-summary__row">
                    <dt>Windscreen</dt>
                    <dd>RM 65.00</dd>
                </div>
                <div className="order-summary__row">
                    <dt>Flood &amp; Natural Disaster</dt>
                    <dd>RM 110.00</dd>
                </div>
            </div>

            <div className="order-summary__gross-premium-container">
                <dl className="order-summary__rows order-summary__rows--divided">
                    <div className="order-summary__row">
                        <dt>Gross Premium/Contribution</dt>
                        <dd>RM 1180</dd>
                    </div>
                    <div className="order-summary__row">
                        <dt>SST (8%)</dt>
                        <dd>RM 0.00</dd>
                    </div>
                    <div className="order-summary__row">
                        <dt>Stamp Duty</dt>
                        <dd>RM 714.88</dd>
                    </div>
                </dl>

                <dl className="order-summary__rows order-summary__rows--divided ">
                    <div className="order-summary__row order-summary__row--strong">
                        <dt>Total Premium/Contribution</dt>
                        <dd>RM 130.00</dd>
                    </div>
                    <div className="order-summary__excess  bg-white">
                        <div className="order-summary__row">
                            <dt>Excess Amount</dt>
                            <dd>RM 0.00</dd>
                        </div>
                        <div className="order-summary__row">
                            <dt>Commission (10% from Gross Premium/Contribution) *</dt>
                            <dd>RM71.49</dd>
                        </div>
                    </div>
                </dl>

            </div>


            <div className="order-summary__payments">
                <h3 className="order-summary__payments-title">Flexible Payments</h3>
                <div className="payment-options" role="radiogroup" aria-label="Payment plan">
                    {PAYMENT_PLANS.map((plan) => (
                        <button
                            type="button"
                            role="radio"
                            key={plan.id}
                            aria-checked={selectedPlan === plan.id}
                            className={`payment-option${selectedPlan === plan.id ? " payment-option--selected" : ""}`}
                            onClick={() => onSelectPlan(plan.id)}
                        >
                            <span>{plan.label}</span>
                            <span>{plan.value}</span>
                        </button>
                    ))}
                </div>
            </div>

            <div className="order-summary__total">
                <span className="order-summary__total-label">Total Amount</span>
                <span className="order-summary__total-value">
                    <span className="order-summary__total-currency">RM</span>
                    <span className="order-summary__total-amount">1,369</span>
                    <span className="order-summary__total-monthly">or RM 107/mo</span>
                </span>
            </div>

            <button type="button" className="order-summary__cta" onClick={onContinue}>
                Next <FiArrowRight />
            </button>
        </aside>
    );
}

export default function AddOnStep({ onContinue }:any) {
    const [renewalPeriod, setRenewalPeriod] = useState("12 Months");
    const [deliveryFormat, setDeliveryFormat] = useState("digital");
    const [deliveryMethod, setDeliveryMethod] = useState("express");
    const [addOns, setAddOns] = useState(ADD_ONS);
    const [selectedPlan, setSelectedPlan] = useState("12mo");

    const toggleAddon = (id: any) => {
        setAddOns((prev) =>
            prev.map((addon) => (addon.id === id ? { ...addon, checked: !addon.checked } : addon))
        );
    };

    return <>
        <div className="insurance-checkout">
            <div className="insurance-checkout__content">
                <main className="insurance-checkout__main">
                    <div className="insurance-checkout__section-group">
                        <RoadTaxCard />
                        <RenewalPeriod value={renewalPeriod} onChange={setRenewalPeriod} />
                        <DeliveryFormat value={deliveryFormat} onChange={setDeliveryFormat} />
                    </div>

                    <DeliveryMethod value={deliveryMethod} onChange={setDeliveryMethod} />
                    <AddOnsSection addOns={addOns} onToggle={toggleAddon} />
                </main>
                <OrderSummary selectedPlan={selectedPlan} onSelectPlan={setSelectedPlan} onContinue={onContinue} />
            </div>
        </div>
    </>
}