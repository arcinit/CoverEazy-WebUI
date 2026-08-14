import { useState } from 'react'
import {
    IoSparkles,
    IoChevronDown,
    IoArrowForward,
    IoArrowBack,
    IoCheckmark,
    IoCardOutline,
    IoPhonePortraitOutline,
    IoBusinessOutline,
} from 'react-icons/io5'
import zurichLogo from './images/zurich.png'
import covereazyLogo from './images/logo.png'
import avatarPlaceholder from './images/logo.png'
import './ReviewCheckout.scss'
import Header from '../../../../shared/layouts/header/Header'

// ---------------------------------------------------------------
// Static data
// ---------------------------------------------------------------
const steps = [
    { id: 1, label: 'Vehicle Details', status: 'done' },
    { id: 2, label: 'Coverage', status: 'done' },
    { id: 3, label: 'Add-Ons', status: 'done' },
    { id: 4, label: 'Contact Details', status: 'done' },
    { id: 5, label: 'Review & Checkout', status: 'active' },
]

const paymentMethods = [
    { id: 'card', label: 'Credit Card', icon: IoCardOutline },
    { id: 'ewallet', label: 'E-Wallet', icon: IoPhonePortraitOutline },
    { id: 'fpx', label: 'FPX Banking', icon: IoBusinessOutline },
]

const breakdownLines = [
    { label: 'Base Premium', value: 'RM 1180.00' },
    { label: 'No-claim Discount (0%)', value: 'RM 0.00' },
    { label: 'Net Premium/Contribution', value: 'RM 714.88' },
]

const addOnLines = [
    { label: 'Windscreen', value: 'RM 65.00' },
    { label: 'Flood & Natural Disaster', value: 'RM 110.00' },
]

const secondaryLines = [
    { label: 'Gross Premium/Contribution', value: 'RM 1180' },
    { label: 'SST (8%)', value: 'RM 0.00' },
    { label: 'Stamp Duty', value: 'RM 714.88' },
]

const paymentOptions = [
    { id: 'full', label: 'Pay in Full', value: 'RM 1310' },
    { id: '3m', label: '3 Months', value: 'RM 110/mo' },
    { id: '6m', label: '6 Months', value: 'RM 110/mo' },
    { id: '12m', label: '12 Months', value: 'RM 110/mo' },
]

// ---------------------------------------------------------------
// Page
// ---------------------------------------------------------------
const ReviewCheckout = ({ onContinue }:any) => {
    const [paymentMethod, setPaymentMethod] = useState('card')
    const [selectedPlan, setSelectedPlan] = useState('12m')

    return <>
        <div className="review-checkout-page">


            {/* ---------------- Content ---------------- */}
            <div className="review-checkout">
                <div className="review-checkout__left">

                    {/* Policy/Certificate Details */}
                    <div className="card policy-details">
                        <h2 className="card__title">Policy/Certificate Details</h2>

                        <div className="policy-details__grid">
                            <div className="policy-details__field">
                                <span className="policy-details__label">Vehicle Number</span>
                                <span className="policy-details__value">ABC 1234 D</span>
                            </div>
                            <div className="policy-details__field">
                                <span className="policy-details__label">Period of Coverage</span>
                                <span className="policy-details__value">2026/06/01 - 2027/05/31</span>
                            </div>

                            <div className="policy-details__field">
                                <span className="policy-details__label">Owner Full Name</span>
                                <span className="policy-details__value">John Doe</span>
                            </div>
                            <div className="policy-details__field">
                                <span className="policy-details__label">ID Number</span>
                                <span className="policy-details__value">1234 5678 90</span>
                            </div>

                            <div className="policy-details__field">
                                <span className="policy-details__label">Email</span>
                                <span className="policy-details__value">test@gmail.com</span>
                            </div>
                            <div className="policy-details__field">
                                <span className="policy-details__label">Phone Number</span>
                                <span className="policy-details__value">+61 9876543210</span>
                            </div>

                            <div className="policy-details__field policy-details__field--full">
                                <span className="policy-details__label">Resident Address</span>
                                <span className="policy-details__value">
                                    ABC STREET
                                    <br />
                                    31350 Kaula Lampur  Malaysia
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Notice */}
                    <div className="card notice">
                        <p className="notice__heading">
                            *A 8% service tax will be imposed on the insurance, road tax
                            service charges, lamination fee and delivery fee
                        </p>

                        <ul className="notice__list">
                            <li>
                                ANGKASA SISTEMATIK SDN BHD is a registered agent with Syarikat
                                Takaful Malaysia Am Berhad (STAMB).
                            </li>
                            <li>
                                Discover similar product(s) directly from Syarikat Takaful
                                Malaysia Am Berhad (STAMB)&rsquo;s website and/or office with no
                                commission.
                            </li>
                            <li>
                                The benefit(s) payable under eligible product is(are)
                                protected by Perbadanan Insurans Deposit Malaysia (PIDM) up to
                                limits.
                            </li>
                            <li>
                                Please refer to{' '}
                                <a href="#" className="notice__link">
                                    PIDM&rsquo;s Takaful and Insurance Benefits Protection
                                    System (TIPS)
                                </a>{' '}
                                Brochure or contact Syarikat Takaful Malaysia Am Berhad
                                (STAMB) or PIDM (visit{' '}
                                <a href="#" className="notice__link">
                                    www.pidm.gov.my
                                </a>
                                ).
                            </li>
                            <li>
                                By renewing your motor insurance and road tax on Compare by
                                MYEG, you will be automatically entered into ongoing marketing
                                campaigns or prize draws (subject to applicable Terms &amp;
                                Conditions). If you wish to opt out, please email{' '}
                                <a href="#" className="notice__link">
                                    support.compare@myeg.com.my
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Payment Method */}
                    <div className="card payment-method">
                        <h2 className="card__title">Payment Method</h2>

                        <div className="payment-method__tabs">
                            {paymentMethods.map(({ id, label, icon: Icon }) => (
                                <button
                                    type="button"
                                    key={id}
                                    className={`payment-method__tab${paymentMethod === id ? ' payment-method__tab--active' : ''
                                        }`}
                                    onClick={() => setPaymentMethod(id)}
                                >
                                    <Icon className="payment-method__icon" />
                                    <span>{label}</span>
                                </button>
                            ))}
                        </div>

                        {paymentMethod === 'card' && (
                            <form className="payment-method__form">
                                <div className="form-field">
                                    <label className="form-field__label">
                                        Card Number<span className="form-field__required">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="form-field__input"
                                        placeholder="1234 5678 9012 3456"
                                    />
                                </div>

                                <div className="form-field__group">
                                    <div className="form-field">
                                        <label className="form-field__label">
                                            Expiry Date<span className="form-field__required">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            className="form-field__input"
                                            placeholder="MM/YY"
                                        />
                                    </div>
                                    <div className="form-field">
                                        <label className="form-field__label">
                                            CVV<span className="form-field__required">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            className="form-field__input"
                                            placeholder="123"
                                        />
                                    </div>
                                </div>
                            </form>
                        )}
                    </div>
                </div>

                {/* ---------------- Order Summary ---------------- */}
                <div className="review-checkout__right">
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
                            {breakdownLines.map((line) => (
                                <div className="order-summary__line" key={line.label}>
                                    <span>{line.label}</span>
                                    <span>{line.value}</span>
                                </div>
                            ))}
                        </div>

                        <div className="order-summary__addons">
                            <p className="order-summary__addons-title">
                                Add-ons ({addOnLines.length})
                            </p>
                            <div className="order-summary__addons-divider" />
                            {addOnLines.map((line) => (
                                <div className="order-summary__line" key={line.label}>
                                    <span>{line.label}</span>
                                    <span>{line.value}</span>
                                </div>
                            ))}
                        </div>

                        <div className="order-summary__summary-box">
                            <div className="order-summary__lines">
                                {secondaryLines.map((line) => (
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
                            {paymentOptions.map((opt) => (
                                <button
                                    type="button"
                                    key={opt.id}
                                    className={`order-summary__payment${selectedPlan === opt.id
                                            ? ' order-summary__payment--selected'
                                            : ''
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
                            </div>
                            <p className="order-summary__total-monthly">or RM 107/mo</p>
                        </div>

                        <button type="button" className="order-summary__next-btn" onClick={onContinue}>
                            Next <IoArrowForward className="icon" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default ReviewCheckout