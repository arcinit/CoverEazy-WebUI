import React from 'react'
import './ProductsPlans.scss'
import spriteImg from './images/plans-sprite.png'
import arrowGreen from './images/arrow-green.svg'
import arrowRight from './images/arrow-right.svg'
import walletIcon from './images/wallet.svg'
import bellIcon from './images/bell.svg'
import zapIcon from './images/zap.svg'
import handshakeIcon from './images/handshake.svg'

// Illustrations are cropped from a single sprite: [height%, left%, top%, width%]
type Sprite = [number, number, number, number]

const plans: { id: number; title: string; description: string; sprite: Sprite }[] = [
  { id: 1, title: 'Investment Plans', description: 'Grow your wealth for the future', sprite: [315.09, -0.61, -50.25, 472.63] },
  { id: 2, title: 'Health Insurance', description: 'Quality healthcare when it matters', sprite: [315.09, -89.79, -50.25, 472.63] },
  { id: 3, title: 'Term Life Insurance', description: 'Financial protection for your loved ones', sprite: [315.09, -186.57, -50.25, 472.63] },
  { id: 4, title: 'Child Savings Plans', description: 'Secure their dreams from today', sprite: [317.75, -282.92, -51.58, 476.63] },
  { id: 5, title: 'Retirement Plans', description: 'Enjoy a peaceful retirement', sprite: [317.75, -371.31, -51.58, 476.63] },
  { id: 6, title: 'Free of Cost Plans', description: 'Plans that cost you nothing', sprite: [352.74, -0.64, -191.32, 529.11] },
  { id: 7, title: 'Return of Premium', description: 'Get your premiums back with benefits', sprite: [352.74, -111.21, -191.32, 529.11] },
  { id: 8, title: 'Health Insurance PED', description: 'Stay protected even with pre-existing conditions', sprite: [352.74, -207.47, -186.02, 529.11] },
  { id: 9, title: 'Car Insurance', description: 'Complete protection for your car', sprite: [326.93, -286.36, -177.34, 490.39] },
  { id: 10, title: 'Two Wheeler Insurance', description: 'Ride with confidence every day', sprite: [326.93, -386.16, -177.34, 490.39] },
]

const benefits = [
  { id: 1, title: 'One Wallet', description: 'All your policies in one secure place.', icon: walletIcon },
  { id: 2, title: 'Smart Reminders', description: 'Never miss an important update', icon: bellIcon },
  { id: 3, title: 'Faster Claims', description: 'We’re with you. end to end.', icon: zapIcon },
  { id: 4, title: 'Better Together', description: 'Expert advice you can trust', icon: handshakeIcon },
]

const ProductsPlans = () => {
  return (
    <section className="products-plans">
      <div className="products-plans__container">
        <div className="products-plans__header">
          <div className="products-plans__eyebrow">
            <span className="line"></span>
            SMART PLANS FOR TODAY &amp; TOMORROW
            <span className="line"></span>
          </div>
          <h2 className="products-plans__title">
            Simple plans for every stage of life
          </h2>
          <p className="products-plans__subtitle">
            Carefully curated solutions to help you live smarter and worry-free.
          </p>
        </div>

        <div className="products-plans__content">
          <div className="products-plans__left">
            <div className="products-plans__grid">
              {plans.map((plan) => {
                const [h, l, t, w] = plan.sprite
                return (
                  <div key={plan.id} className="products-plans__card">
                    <div className="products-plans__card-icon">
                      <img
                        src={spriteImg}
                        alt=""
                        style={{ height: `${h}%`, left: `${l}%`, top: `${t}%`, width: `${w}%` }}
                      />
                    </div>
                    <h3 className="products-plans__card-title">{plan.title}</h3>
                    <p className="products-plans__card-description">{plan.description}</p>
                  </div>
                )
              })}
            </div>

            <button className="products-plans__view-all-btn">
              View all plans
              <img src={arrowGreen} alt="" width={14} height={14} />
            </button>
          </div>

          <div className="products-plans__right">
            <div className="products-plans__benefits-box">
              <div className="products-plans__benefits-eyebrow">
                THE COVEREAZY ADVANTAGE
              </div>
              <h3 className="products-plans__benefits-title">
                Benefits that make insurance <span className="highlight">easy</span>
              </h3>

              <div className="products-plans__benefits-list">
                {benefits.map((benefit) => (
                  <div key={benefit.id} className="products-plans__benefit-item">
                    <div className="products-plans__benefit-icon">
                      <img src={benefit.icon} alt="" width={20} height={20} />
                    </div>
                    <div className="products-plans__benefit-content">
                      <h4 className="products-plans__benefit-name">{benefit.title}</h4>
                      <p className="products-plans__benefit-desc">{benefit.description}</p>
                    </div>
                    <img
                      className="products-plans__benefit-arrow"
                      src={arrowRight}
                      alt=""
                      width={20}
                      height={20}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductsPlans
