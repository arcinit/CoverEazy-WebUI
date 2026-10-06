import React from 'react'
import {
  FaBuilding,
  FaCalendarDays,
  FaCreditCard,
} from 'react-icons/fa6'
import {
  LuCircleCheck,
  LuClock3,
  LuHeadphones,
  LuMail,
  LuPhone,
  LuShield,
} from 'react-icons/lu'
import appStoreImage from '../home-hero/images/app-store.png'
import googlePlayImage from '../home-hero/images/google-play.png'
import mobileImage from '../mobile-app/images/mobile.png'
import './PaymentFeatures.scss'

const paymentOptions = [
  {
    title: 'Pay Monthly',
    description: 'Spread your premium with interest-free instalments.',
    icon: FaCalendarDays,
  },
  {
    title: 'Pay Annually',
    description: 'One-time payment with extra savings.',
    icon: FaCalendarDays,
  },
  {
    title: 'FPX Online Banking',
    description: 'Securely pay via your online banking.',
    icon: FaBuilding,
  },
  {
    title: 'Cards & eWallets',
    description: "Visa, MasterCard, GrabPay, Touch 'n Go, eWallet & more.",
    icon: FaCreditCard,
  },
]

const securityFeatures = [
  'Bank-level security',
  'Encrypted transactions',
  'No hidden charges',
  'Real-time confirmation',
]

const appFeatures = [
  'Instant policy access',
  'Road tax renewal in seconds',
  'Track & manage claims',
  'Smart reminders & alerts',
]

const PaymentFeatures = () => (
  <section className="payment-features" aria-label="Payment and customer support">
    <div className="payment-features__payment-panel">
      <div className="payment-features__payment-content">
        <header className="payment-features__header">
          <div className="payment-features__eyebrow">
            <span />
            MAKE SIMPLE, FLEXIBLE
            <span />
          </div>
          <h2>Easy &amp; Flexible Payment Options</h2>
          <p>Choose how you want to pay. Simple, secure and reliable.</p>
        </header>

        <div className="payment-features__options">
          {paymentOptions.map(({ title, description, icon: Icon }) => (
            <div className="payment-features__option" key={title}>
              <Icon className="payment-features__option-icon" aria-hidden="true" />
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="payment-features__logos" aria-label="Accepted payment methods">
          <span className="payment-features__logo payment-features__logo--fpx">FPX</span>
          <span className="payment-features__logo payment-features__logo--visa">VISA</span>
          <span className="payment-features__logo payment-features__logo--mastercard">MasterCard</span>
          <span className="payment-features__logo payment-features__logo--grabpay">GrabPay</span>
          <span className="payment-features__logo payment-features__logo--tng">Touch 'n Go</span>
        </div>
      </div>

      <aside className="payment-features__security">
        <div className="payment-features__security-icon">
          <LuShield aria-hidden="true" />
        </div>
        <div>
          <h3>Your payments<br />are safe with us.</h3>
          <ul>
            {securityFeatures.map((feature) => (
              <li key={feature}>
                <LuCircleCheck aria-hidden="true" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>

    <div className="payment-features__app-panel">
      <div className="payment-features__app-content">
        <h2>
          Take <span>CoverEazy</span> with you, everywhere
        </h2>
        <p>Our mobile app puts the power of insurance in your pocket.</p>
        <ul className="payment-features__app-list">
          {appFeatures.map((feature) => (
            <li key={feature}>
              <LuCircleCheck aria-hidden="true" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <div className="payment-features__store-badges">
          <div className="payment-features__store-badge">
            <img src={googlePlayImage} alt="Get it on Google Play" />
          </div>
          <div className="payment-features__store-badge">
            <img src={appStoreImage} alt="Download on the App Store" />
          </div>
        </div>
      </div>

      <div className="payment-features__mobile-visual">
        <img src={mobileImage} alt="CoverEazy mobile app showing insurance policies and claims" />
      </div>

      <div className="payment-features__support">
        <div className="payment-features__support-icon">
          <LuHeadphones aria-hidden="true" />
        </div>
        <h2>Need help?<br />We're here for you.</h2>
        <p>
          Our friendly support team is your extended family. Speak your heart out, we listen
          with undivided attention to resolve your concerns.
        </p>
        <div className="payment-features__contact">
          <div>
            <LuMail aria-hidden="true" />
            <span>
              <small>General Enquiries</small>
              <a href="mailto:care@covereazy.com">care@covereazy.com</a>
            </span>
          </div>
          <div>
            <LuPhone aria-hidden="true" />
            <span>
              <small>Customer Sales Enquiries</small>
              <a href="tel:+60123456789">+60 12-345 6789</a>
            </span>
          </div>
        </div>
        <div className="payment-features__availability">
          <LuClock3 aria-hidden="true" />
          Available 24/7
        </div>
      </div>
    </div>
  </section>
)

export default PaymentFeatures
