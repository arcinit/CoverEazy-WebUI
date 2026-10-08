import React from 'react'
import fpxLogo from './images/fpx.png'
import visaMcLogo from './images/visa-mc.png'
import grabPayLogo from './images/grabpay.png'
import tngLogo from './images/tng.png'
import shieldImage from './images/shield.png'
import phoneImage from './images/phone.png'
import supportImage from './images/support.png'
import googlePlayBadge from './images/google-play.svg'
import appStoreBadge from './images/app-store.svg'
import iconMonthly from './images/icon-monthly.svg'
import iconAnnual from './images/icon-annual.svg'
import iconFpx from './images/icon-fpx.svg'
import iconCard from './images/icon-card.svg'
import iconCheck from './images/icon-check.svg'
import iconAppCheck from './images/icon-app-check.svg'
import iconMail from './images/icon-mail.svg'
import iconPhone from './images/icon-phone.svg'
import iconClock from './images/icon-clock.svg'
import './PaymentFeatures.scss'

const paymentOptions = [
  {
    title: 'Pay Monthly',
    description: 'Spread your premium with interest-free instalments.',
    icon: iconMonthly,
  },
  {
    title: 'Pay Annually',
    description: 'One-time payment with extra savings.',
    icon: iconAnnual,
  },
  {
    title: 'FPX Online Banking',
    description: 'Securely pay via your online banking.',
    icon: iconFpx,
  },
  {
    title: 'Cards & eWallets',
    description: "Visa, MasterCard, GrabPay, Touch 'n Go eWallet & more.",
    icon: iconCard,
  },
]

// Logos are cropped from shared sprite sheets, matching the Figma crops.
const paymentLogos = [
  { name: 'FPX', src: fpxLogo, width: 63.573, style: { height: '198.67%', left: 0, top: '-48.44%', width: '100%' } },
  { name: 'VISA', src: visaMcLogo, width: 80.964, style: { height: '258.73%', left: 0, top: 0, width: '100%' } },
  { name: 'Mastercard', src: visaMcLogo, width: 53.217, style: { height: '186.74%', left: '-2.88%', top: '-74.78%', width: '109.8%' } },
  { name: 'GrabPay', src: grabPayLogo, width: 126.42, style: { height: '158.02%', left: 0, top: '-37.24%', width: '100%' } },
  { name: "Touch 'n Go", src: tngLogo, width: 49.438, style: { height: '100%', left: 0, top: 0, width: '100%' } },
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
          {paymentOptions.map(({ title, description, icon }) => (
            <div className="payment-features__option" key={title}>
              <img className="payment-features__option-icon" src={icon} alt="" aria-hidden="true" />
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="payment-features__logos" role="list" aria-label="Accepted payment methods">
          {paymentLogos.map(({ name, src, width, style }) => (
            <span
              className="payment-features__logo"
              key={name}
              role="listitem"
              style={{ width }}
            >
              <img src={src} alt={name} style={style} />
            </span>
          ))}
        </div>
      </div>

      <aside className="payment-features__security">
        <div className="payment-features__security-icon">
          <img src={shieldImage} alt="" aria-hidden="true" />
        </div>
        <div className="payment-features__security-body">
          <h3>Your payments<br />are safe with us.</h3>
          <ul>
            {securityFeatures.map((feature) => (
              <li key={feature}>
                <img src={iconCheck} alt="" aria-hidden="true" />
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
              <img src={iconAppCheck} alt="" aria-hidden="true" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <div className="payment-features__store-badges">
          <img className="payment-features__store-badge payment-features__store-badge--google" src={googlePlayBadge} alt="Get it on Google Play" />
          <img className="payment-features__store-badge payment-features__store-badge--apple" src={appStoreBadge} alt="Download on the App Store" />
        </div>
      </div>

      <div className="payment-features__mobile-visual">
        <img src={phoneImage} alt="CoverEazy mobile app showing insurance policies and claims" />
      </div>

      <div className="payment-features__support">
        <img className="payment-features__support-agent" src={supportImage} alt="" aria-hidden="true" />
        <h2>Need help?<br />We're here for you.</h2>
        <p>
          Our friendly support team is your extended family. Speak your heart out. We listen
          with undivided attention to resolve your concerns.
        </p>
        <div className="payment-features__contact">
          <div>
            <img src={iconMail} alt="" aria-hidden="true" />
            <span>
              <small>General Enquiries</small>
              <a href="mailto:care@covereazy.com">care@covereazy.com</a>
            </span>
          </div>
          <div>
            <img src={iconPhone} alt="" aria-hidden="true" />
            <span>
              <small>Customer Sales Enquiries</small>
              <a href="tel:+60123456789">+60 12-345 6789</a>
            </span>
          </div>
        </div>
        <div className="payment-features__availability">
          <img src={iconClock} alt="" aria-hidden="true" />
          Available 24/7
        </div>
      </div>
    </div>
  </section>
)

export default PaymentFeatures
