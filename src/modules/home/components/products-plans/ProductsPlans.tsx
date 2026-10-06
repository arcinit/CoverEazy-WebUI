import React from 'react'
import './ProductsPlans.scss'
import { FaArrowRight } from 'react-icons/fa6'
import { LuWallet, LuBell, LuZap, LuLeaf } from 'react-icons/lu'
import { BiSolidHeart } from 'react-icons/bi'
import { GiUmbrella, GiCow } from 'react-icons/gi'
import { MdOutlineDirectionsCar, MdMonetizationOn } from 'react-icons/md'
import { IoShieldCheckmark } from 'react-icons/io5'
import { TbMoped } from 'react-icons/tb'

const ProductsPlans = () => {
  const plans = [
    {
      id: 1,
      title: 'Investment Plans',
      description: 'Grow your wealth for the future',
      icon: LuWallet,
    },
    {
      id: 2,
      title: 'Health Insurance',
      description: 'Quality healthcare when it matters',
      icon: BiSolidHeart,
    },
    {
      id: 3,
      title: 'Term Life Insurance',
      description: 'Financial protection for your loved ones',
      icon: GiUmbrella,
    },
    {
      id: 4,
      title: 'Child Savings Plans',
      description: 'Secure their dreams from today',
      icon: LuWallet,
    },
    {
      id: 5,
      title: 'Retirement Plans',
      description: 'Enjoy a peaceful retirement',
      icon: LuBell,
    },
    {
      id: 6,
      title: 'Free of Cost Plans',
      description: 'Plans that cost you nothing',
      icon: LuWallet,
    },
    {
      id: 7,
      title: 'Return of Premium',
      description: 'Get your premiums back with benefits',
      icon: MdMonetizationOn,
    },
    {
      id: 8,
      title: 'Health Insurance PED',
      description: 'Stay protected even with pre-existing conditions',
      icon: IoShieldCheckmark,
    },
    {
      id: 9,
      title: 'Car Insurance',
      description: 'Complete protection for your car',
      icon: MdOutlineDirectionsCar,
    },
    {
      id: 10,
      title: 'Two Wheeler Insurance',
      description: 'Ride with confidence every day',
      icon: TbMoped,
    },
  ]

  const benefits = [
    {
      id: 1,
      title: 'One Wallet',
      description: 'All your policies in one secure place.',
      icon: LuWallet,
    },
    {
      id: 2,
      title: 'Smart Reminders',
      description: 'Never miss an important update',
      icon: LuBell,
    },
    {
      id: 3,
      title: 'Faster Claims',
      description: 'We\'re with you, end to end.',
      icon: LuZap,
    },
    {
      id: 4,
      title: 'Better Together',
      description: 'Expert advice you can trust',
      icon: LuLeaf,
    },
  ]

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
                const IconComponent = plan.icon
                return (
                  <div key={plan.id} className="products-plans__card">
                    <div className="products-plans__card-icon">
                      <IconComponent />
                    </div>
                    <h3 className="products-plans__card-title">
                      {plan.title}
                    </h3>
                    <p className="products-plans__card-description">
                      {plan.description}
                    </p>
                  </div>
                )
              })}
            </div>

            <button className="products-plans__view-all-btn">
              View all plans
              <FaArrowRight />
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
                {benefits.map((benefit) => {
                  const IconComponent = benefit.icon
                  return (
                    <div key={benefit.id} className="products-plans__benefit-item">
                      <div className="products-plans__benefit-icon">
                        <IconComponent />
                      </div>
                      <div className="products-plans__benefit-content">
                        <h4 className="products-plans__benefit-name">
                          {benefit.title}
                        </h4>
                        <p className="products-plans__benefit-desc">
                          {benefit.description}
                        </p>
                      </div>
                      <FaArrowRight className="products-plans__benefit-arrow" />
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductsPlans
