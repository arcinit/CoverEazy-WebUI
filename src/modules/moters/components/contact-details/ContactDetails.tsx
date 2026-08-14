import React, { useState } from 'react'
import './ContactDetails.scss'
import {
    IoPersonOutline,
    IoCardOutline,
    IoLocationOutline,
    IoCarSportOutline,
    IoShieldCheckmarkOutline,
    IoChevronUpOutline,
    IoChevronDownOutline,
    IoCheckmarkCircle,
    IoInformationCircleOutline,
    IoWarningOutline,
    IoArrowForward,
    IoArrowBackOutline,
    IoSparkles,
} from 'react-icons/io5'
import zurichLogo from './images/zurich.png'
import { FaRegCheckCircle, FaSortDown, FaSortUp } from 'react-icons/fa'
import { FaRegCircleCheck } from 'react-icons/fa6'
import { LuSparkles } from 'react-icons/lu'
import { FiShield } from 'react-icons/fi'

// ---------------------------------------------------------------
// Site header — independent block
// ---------------------------------------------------------------
const LogoMark = () => (
    <svg className="site-header__logo-svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M16 4C9.373 4 4 9.373 4 16s5.373 12 12 12c3.5 0 6.646-1.51 8.834-3.912l-2.646-2.646A8.963 8.963 0 0116 25c-4.97 0-9-4.03-9-9s4.03-9 9-9c2.09 0 4.01.714 5.535 1.912l2.646-2.646A11.96 11.96 0 0016 4z"
            fill="#062155"
        />
        <circle cx="21" cy="15" r="5.5" fill="#14CA80" />
    </svg>
)

const navLinks = [
    { label: 'Home', active: false, dropdown: false },
    { label: 'Motor', active: true, dropdown: true },
    { label: 'Claims', active: false, dropdown: false },
]

const SiteHeader = () => (
    <header className="site-header">
        <div className="site-header__left">
            <span className="site-header__logo-mark">
                <LogoMark />
            </span>
            <div className="site-header__brand">
                <span className="site-header__brand-name">CoverEazy</span>
                <span className="site-header__brand-tagline">INSURANCE MADE EASY</span>
            </div>
        </div>

        <nav className="site-header__nav">
            {navLinks.map((link) => (
                <a
                    key={link.label}
                    href="#"
                    className={`site-header__nav-link${link.active ? ' site-header__nav-link--active' : ''}`}
                >
                    {link.label}
                    {link.dropdown && <IoChevronDownOutline className="icon" />}
                </a>
            ))}
        </nav>

        <div className="site-header__right">
            <span className="site-header__ai-badge">
                <IoSparkles className="icon" /> AI Mode
                <span className="site-header__ai-badge-tag">New</span>
            </span>
            <button type="button" className="site-header__quote-btn">
                Get Quote <IoArrowForward className="icon" />
            </button>
            <div className="site-header__user">
                <span className="site-header__user-avatar">
                    <IoPersonOutline className="icon" />
                </span>
                <span className="site-header__user-name">John Doe</span>
            </div>
        </div>
    </header>
)

// ---------------------------------------------------------------
// Stepper — independent block
// ---------------------------------------------------------------
const steps: any = [
    { label: 'Vehicle Details', status: 'done' },
    { label: 'Coverage', status: 'done' },
    { label: 'Add-Ons', status: 'done' },
    { label: 'Contact Details', status: 'current', number: 4 },
    { label: 'Checkout', status: 'upcoming', number: 5 },
]

const Stepper = () => (
    <div className="stepper">
        {steps.map((step: any, i: number) => (
            <React.Fragment key={step.label}>
                <div className={`stepper__step stepper__step--${step.status}`}>
                    <span className="stepper__marker">
                        {step.status === 'done' ? (
                            <IoCheckmarkCircle className="icon" />
                        ) : (
                            <span className="stepper__number">{step.number}</span>
                        )}
                    </span>
                    <span className="stepper__label">{step.label}</span>
                </div>
                {i < steps.length - 1 && (
                    <span className={`stepper__connector${step.status === 'done' ? ' stepper__connector--done' : ''}`} />
                )}
            </React.Fragment>
        ))}
    </div>
)

// ---------------------------------------------------------------
// Reusable form primitives
// ---------------------------------------------------------------
const TextField = ({ label, value, placeholder, verified, hint, required = true }: any) => (
    <div className="form-field">
        <label className="form-field__label">
            {label}
            {required && <span className="form-field__required">*</span>}
        </label>
        <div className={`form-field__control${verified ? ' form-field__control--verified' : ''}`}>
            <input
                className="form-field__input"
                defaultValue={value}
                placeholder={placeholder}
                readOnly={verified}
            />
            {verified && <IoCheckmarkCircle className="icon form-field__check" />}
        </div>
        {hint && (
            <span className="form-field__hint">
                <LuSparkles className="icon" /> {hint}
            </span>
        )}
    </div>
)

const SelectField = ({ label, value, placeholder, verified, hint, required = true }: any) => (
    <div className="form-field">
        <label className="form-field__label">
            {label}
            {required && <span className="form-field__required">*</span>}
        </label>
        <div
            className={`form-field__control form-field__control--select${verified ? ' form-field__control--verified' : ''
                }`}
        >
            <select className="form-field__input" defaultValue={value || ''}>
                <option value="" disabled>
                    {placeholder}
                </option>
                {value && <option value={value}>{value}</option>}
            </select>
            {verified ? (
                <IoCheckmarkCircle className="icon form-field__check" />
            ) : (
                <IoChevronDownOutline className="icon form-field__caret" />
            )}
        </div>
        {hint && (
            <span className="form-field__hint">
                <LuSparkles className="icon" /> {hint}
            </span>
        )}
    </div>
)

const PhoneField = ({ label, required = true }: any) => (
    <div className="form-field">
        <label className="form-field__label">
            {label}
            {required && <span className="form-field__required">*</span>}
        </label>
        <div className="form-field__control form-field__control--phone">
            <span className="form-field__flag">🇺🇸 +61</span>
            <input className="form-field__input" placeholder="X XX XX XX XX" />
        </div>
    </div>
)

const ToggleField = ({ title, desc, checked = false }: any) => {
    const [on, setOn] = useState(checked)
    return (
        <div className="toggle-field">
            <div className="toggle-field__info">
                <p className="toggle-field__title">{title}</p>
                <p className="toggle-field__desc">{desc}</p>
            </div>
            <button
                type="button"
                className={`toggle-field__switch${on ? ' toggle-field__switch--on' : ''}`}
                onClick={() => setOn((p:any) => !p)}
            >
                <span className="toggle-field__knob" />
            </button>
        </div>
    )
}

// ---------------------------------------------------------------
// Collapsible section wrapper — each usage renders an independent
// BEM block (personal-info, contact-details, etc.), styled
// independently in SCSS via shared mixins only.
// ---------------------------------------------------------------
const FormSection = ({ blockName, icon: Icon, title, subtitle, defaultOpen = true, children }: any) => {
    const [open, setOpen] = useState(defaultOpen)

    return (
        <section className={blockName}>
            <button type="button" className={`${blockName}__header`} onClick={() => setOpen((p:any) => !p)}>
                <span className={`${blockName}__header-left`}>
                    <span className={`${blockName}__icon`}>
                        <Icon className="icon" />
                    </span>
                    <span>
                        <h3 className={`${blockName}__title`}>{title}</h3>
                        {subtitle && <p className={`${blockName}__subtitle`}>{subtitle}</p>}
                    </span>
                </span>
                {open ? (
                    <div className={`${blockName}__chevron`}>
                        <FaSortDown className='icon' />
                    </div>
                    
                ) : (
                    <div className={`${blockName}__chevron`}>
                            <FaSortUp className='icon' />
                    </div>
                      
                )}
            </button>
            {open && <div className={`${blockName}__body`}>{children}</div>}
        </section>
    )
}

// ---------------------------------------------------------------
// Page intro + auto-fill banner
// ---------------------------------------------------------------
const PageIntro = () => (
    <div className="page-intro">
        <h1 className="page-intro__title">
            Confirm your <span>details</span>
        </h1>
        <p className="page-intro__subtitle">We&apos;ve auto-filled what we know — just review and confirm.</p>
    </div>
)

const AutoFillBanner = () => (
    <div className="auto-fill-banner">
        <span className="auto-fill-banner__icon">
            <FaRegCheckCircle className="icon" />
        </span>
        <p className="auto-fill-banner__text">
            <strong>19 fields auto-filled</strong>
            <span> Vehicle verified • NCD found • Previous policy retrieved • Address detected</span>
        </p>
    </div>
)

// ---------------------------------------------------------------
// Occupation Details — plain section, no card wrapper
// ---------------------------------------------------------------
const OccupationDetails = () => (
    <div className="occupation-details">
        <h3 className="occupation-details__title">Occupation Details</h3>
        <div className="occupation-details__grid">
            <TextField label="Occupation" placeholder="e.g., Software Engineer" />
            <TextField label="Industry" placeholder="" />
        </div>
    </div>
)

// ---------------------------------------------------------------
// Sections
// ---------------------------------------------------------------
const PersonalInfoSection = () => (
    <FormSection
        blockName="personal-info"
        icon={IoPersonOutline}
        title="Personal Information"
        subtitle="Please review and complete the information below"
    >
        <div className="personal-info__grid">
            <TextField label="Full Name (As Per ID)" value="Ahmad bin Abdullah" verified hint="Auto-filled from records" />
            <TextField label="NRIC / MyKad Number" value="890123-10-1234" verified hint="Auto-filled from records" />
            <TextField label="Date of Birth" value="23 Jan 1989" verified hint="Auto-filled from records" />
            <SelectField label="Gender" value="Male" verified hint="Auto-filled from records" placeholder="Select Gender" />
            <SelectField label="Marital Status" placeholder="Select Marital Status" />
            <TextField label="Nationality" value="Malaysian" verified hint="Auto-filled from records" />
        </div>
        <OccupationDetails />
    </FormSection>
)

const ContactDetailsSection = () => (
    <FormSection
        blockName="contact-details"
        icon={IoCardOutline}
        title="Contact Details"
        subtitle="Please review and complete the information below"
    >
        <div className="contact-details__grid">
            <TextField label="Email Address" placeholder="ahmad@example.com" />
            <PhoneField label="Mobile Number" />
            <PhoneField label="Alternative Contact (Optional)" required={false} />
            <SelectField label="Preferred Language" placeholder="Select Language" required={false} />
        </div>
        <div className="contact-details__notice">
            <IoWarningOutline className="icon" />
            <span>
                <strong>Important:</strong> We&apos;ll send your policy documents and renewal reminders to this email.
                Please ensure it&apos;s correct.
            </span>
        </div>
    </FormSection>
)

const AddressInfoSection = () => (
    <FormSection
        blockName="address-info"
        icon={IoLocationOutline}
        title="Address Information"
        subtitle="Please review and complete the information below"
    >
        <div className="address-info__grid">
            <TextField label="Address Line 1" placeholder="House/Unit number and street name" />
            <TextField label="Address Line 2 (Optional)" placeholder="Apartment, suite, building" required={false} />
            <SelectField label="Residential Type" placeholder="Select Residential Type" required={false} />
            <TextField label="City" placeholder="" />
            <SelectField label="State" placeholder="Select State" />
            <TextField label="Postcode" placeholder="" required={false} />
        </div>
    </FormSection>
)

const VehicleDetailsSection = () => (
    <FormSection
        blockName="vehicle-details"
        icon={IoCarSportOutline}
        title="Vehicle Details"
        subtitle="Please review and complete the information below"
    >
        <div className="vehicle-retrieved">
            <span className="vehicle-retrieved__icon">
                <FaRegCircleCheck className="icon" />
            </span>
            <div>
                <p className="vehicle-retrieved__title">Vehicle Information Retrieved</p>
                <p className="vehicle-retrieved__subtitle">
                    The following details were automatically fetched from JPJ records
                </p>
                <div className="vehicle-retrieved__grid">
                    <div className="vehicle-retrieved__item">
                        <span className="vehicle-retrieved__label">Make & Model</span>
                        <span className="vehicle-retrieved__value">Toyota Camry 2.5V</span>
                    </div>
                    <div className="vehicle-retrieved__item">
                        <span className="vehicle-retrieved__label">Year</span>
                        <span className="vehicle-retrieved__value">2018</span>
                    </div>
                    <div className="vehicle-retrieved__item">
                        <span className="vehicle-retrieved__label">Engine CC</span>
                        <span className="vehicle-retrieved__value">2494 cc</span>
                    </div>
                </div>
            </div>
        </div>

        <div className="vehicle-details__grid">
            <TextField label="Chassis Number (Optional)" placeholder="17-digit VIN" required={false} />
            <TextField label="Engine Number (Optional)" placeholder="" required={false} />
            <TextField label="Current Market Value" value="RM 68,000" verified hint="Auto-filled from records" />
            <SelectField label="Vehicle Financing Status" placeholder="Select Financing Status" />
        </div>

        <h4 className="vehicle-details__subheading">Usage Information</h4>
        <div className="vehicle-details__grid vehicle-details__grid--single">
            <SelectField
                label="Primary Usage"
                value="Private"
                verified
                hint="Auto-filled from records"
                placeholder="Select Usage"
            />
        </div>
    </FormSection>
)

const ClaimsHistorySection = () => (
    <FormSection
        blockName="claims-history"
        icon={IoShieldCheckmarkOutline}
        title="Claims History"
        subtitle="Please review and complete the information below"
    >
        <div className="claims-history__notice">
            <IoInformationCircleOutline className="icon" />
            <span>
                <strong>Honesty matters:</strong> Accurate claims history helps us provide the best quote.
                Non-disclosure may void your policy.
            </span>
        </div>

        <div className="claims-history__grid">
            <SelectField label="Previous Claims (Last 3 Years)" value="None" placeholder="Select" />
        </div>

        <div className="claims-history__toggles">
            <ToggleField title="Traffic Violations (Last Year)" desc="Speeding, red light, etc." />
            <ToggleField title="Vehicle Theft History" desc="Was this vehicle ever stolen?" />
        </div>
    </FormSection>
)

const SecurityBanner = () => (
    <div className="security-banner">
        <span className="security-banner__icon">
            <FiShield className="icon" />
        </span>
        <div>
            <p className="security-banner__title">Your data is encrypted end-to-end</p>
            <p className="security-banner__subtitle">256-bit AES • PCI-DSS Compliant • Never shared with third parties</p>
        </div>
    </div>
)

// ---------------------------------------------------------------
// Order summary — right sidebar, independent block
// ---------------------------------------------------------------
const breakdownLines: any = [
    { label: 'Base Premium', value: 'RM 1180.00' },
    { label: 'No-claim Discount (0%)', value: 'RM 0.00' },
    { label: 'Net Premium/Contribution', value: 'RM 714.88', bold: true },
]

const addOnLines: any = [
    { label: 'Windscreen', value: 'RM 65.00' },
    { label: 'Flood & Natural Disaster', value: 'RM 110.00' },
]

const secondaryLines: any = [
    { label: 'Gross Premium/Contribution', value: 'RM 1180' },
    { label: 'SST (8%)', value: 'RM 0.00' },
    { label: 'Stamp Duty', value: 'RM 714.88' },
]

const paymentOptions: any = [
    { id: 'full', label: 'Pay in Full', value: 'RM 1310' },
    { id: '3m', label: '3 Months', value: 'RM 110/mo' },
    { id: '6m', label: '6 Months', value: 'RM 110/mo' },
    { id: '12m', label: '12 Months', value: 'RM 110/mo' },
]





const OrderSummaryCard = ({onContinue}:any) => {
    const [selectedPlan, setSelectedPlan] = useState('12m')

    return (
        <div className="order-summary">
            <h3 className="order-summary__title">Order Summary</h3>

            <div className="order-summary__plan">
                <span className="order-summary__plan-logo">
                    <img src={zurichLogo} alt="" />
                </span>
                <div>
                    <p className="order-summary__plan-name">Zurich Takaful</p>
                    <p className="order-summary__plan-type">Comprehensive Plan</p>
                </div>
            </div>

            <div className="order-summary__meta">
                <div className="order-summary__meta-row">
                    <span>Sum Insured/Sum Covered</span>
                    <span>RM 10,000</span>
                </div>
                <div className="order-summary__meta-row">
                    <span>Period of Cover</span>
                    <span>2026/06/01 - 2027/05/31</span>
                </div>
            </div>

            <div className="order-summary__divider" />

            <div className="order-summary__lines">
                {breakdownLines.map((line: any) => (
                    <div className="order-summary__line" key={line.label}>
                        <span>{line.label}</span>
                        <span>{line.value}</span>
                    </div>
                ))}
            </div>

            <div className="order-summary__addons">
                <p className="order-summary__addons-title">Add-ons ({addOnLines.length})</p>
                <div className="order-summary__addons-divider" />
                {addOnLines.map((line: any) => (
                    <div className="order-summary__line" key={line.label}>
                        <span>{line.label}</span>
                        <span>{line.value}</span>
                    </div>
                ))}
            </div>

            <div className="order-summary__summary-box">
                <div className="order-summary__lines">
                    {secondaryLines.map((line: any) => (
                        <div className="order-summary__line" key={line.label}>
                            <span>{line.label}</span>
                            <span>{line.value}</span>
                        </div>
                    ))}
                </div>

                <div className="order-summary__summary-divider" />

                <div className="order-summary__line order-summary__line--bold">
                    <span>Total Premium/Contribution</span>
                    <span>RM 130.00</span>
                </div>

                <div className="order-summary__excess">
                    <div className="order-summary__line">
                        <span>Excess Amount</span>
                        <span>RM 0.00</span>
                    </div>
                    <div className="order-summary__line">
                        <span>Commission (10% from Gross Premium/Contribution) *</span>
                        <span>RM71.49</span>
                    </div>
                </div>
            </div>

            <p className="order-summary__section-label">Flexible Payments</p>
            <div className="order-summary__payments">
                {paymentOptions.map((opt: any) => (
                    <button
                        type="button"
                        key={opt.id}
                        className={`order-summary__payment${selectedPlan === opt.id ? ' order-summary__payment--selected' : ''
                            }`}
                        onClick={() => setSelectedPlan(opt.id)}
                    >
                        <span>{opt.label}</span>
                        <span>{opt.value}</span>
                    </button>
                ))}
            </div>

            <div className="order-summary__total">
                <span className="order-summary__total-label">Total Amount</span>
                <div className="order-summary__total-value">
                    <span className="order-summary__total-currency">RM</span>
                    <span>1,369</span>
                    <p className="order-summary__total-monthly">or RM 107/mo</p>
                </div>
            </div>

            <button type="button" className="order-summary__next-btn" onClick={onContinue}>
                Next <IoArrowForward className="icon" />
            </button>
        </div>
    )
}



// ---------------------------------------------------------------
// Page
// ---------------------------------------------------------------
const ContactDetails = ({ onContinue }:any) => {
    return (
        <div className="confirm-details-page">

           

            <div className="confirm-details-page__container">
                <div className="confirm-details-page__main">
                    <PageIntro />
                    <AutoFillBanner />
                    <PersonalInfoSection />
                    <ContactDetailsSection />
                    <AddressInfoSection />
                    <VehicleDetailsSection />
                    <ClaimsHistorySection />
                    <SecurityBanner />
                </div>

                <aside className="confirm-details-page__aside">
                    <OrderSummaryCard onContinue={onContinue} />
                </aside>
            </div>
        </div>
    )
}

export default ContactDetails