import React, { useState } from 'react'
import './ProtectionServices.scss'
import sprite1 from './images/sprite1.png'
import sprite2 from './images/sprite2.png'
import sprite3 from './images/sprite3.png'
import arrowIcon from './images/arrow.svg'
import walletIcon from './images/wallet.svg'
import bellIcon from './images/bell.svg'
import claimIcon from './images/claim.svg'
import userIcon from './images/user.svg'

interface Service {
  id: number
  title: string
  description: string
  sprite: string
  crop: { h: number; l: number; t: number; w: number }
}

const services: Service[] = [
  { id: 1, title: 'Car Insurance', description: 'Comprehensive cover for your car', sprite: sprite1, crop: { h: 262.56, l: -22.31, t: 0.77, w: 393.85 } },
  { id: 2, title: 'Bike Insurance', description: 'Protect your ride, every mile', sprite: sprite2, crop: { h: 263.43, l: -112.54, t: -5, w: 396.5 } },
  { id: 3, title: 'Travel Insurance', description: 'Comprehensive cover for your car', sprite: sprite2, crop: { h: 345.95, l: -126.95, t: -231.08, w: 363.12 } },
  { id: 4, title: 'Road Tax Renewal', description: 'Renew road tax instantly', sprite: sprite3, crop: { h: 188.93, l: -41.93, t: -94.47, w: 283.92 } },
  { id: 5, title: 'Claim Notifications', description: 'Report, Track & Settle faster', sprite: sprite1, crop: { h: 262.56, l: -14.51, t: -86.48, w: 393.85 } },
  { id: 6, title: 'Third Party Claim Notifications', description: 'Manage third party claims', sprite: sprite2, crop: { h: 325.81, l: -132.55, t: -122.78, w: 490.4 } },
  { id: 7, title: 'Police Summons Check', description: 'Check your summons status', sprite: sprite2, crop: { h: 325.81, l: -264.56, t: -122.78, w: 490.4 } }
]

const benefits = [
  { icon: walletIcon, accent: 'One wallet.', title: 'All your policies in one place.', text: 'Store, access and manage all your policies, road tax and documents securely.' },
  { icon: bellIcon, accent: 'Smart reminders.', title: 'Never miss an important date.', text: 'Get timely reminders for policy renewals, road tax expiry and claim updates.' },
  { icon: claimIcon, accent: 'Faster claims.', title: "We're with you, end to end.", text: 'Raise, track and settle claims with real-time updates at every step.' },
  { icon: userIcon, accent: 'Better together.', title: 'Advice you can trust.', text: 'Our BNM licensed advisors are here to help you choose the right protection.' }
]

const ProtectionServices = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const [itemsPerPage, setItemsPerPage] = React.useState(7)

  React.useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        if (window.innerWidth >= 1024) {
          setItemsPerPage(7)
        } else if (window.innerWidth >= 768) {
          setItemsPerPage(4)
        } else if (window.innerWidth >= 480) {
          setItemsPerPage(2)
        } else {
          setItemsPerPage(1)
        }
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const totalPages = Math.ceil(services.length / itemsPerPage)
  const safePage = Math.min(currentPage, Math.max(totalPages - 1, 0))
  const startIdx = safePage * itemsPerPage
  const visibleServices = services.slice(startIdx, startIdx + itemsPerPage)

  const handlePageChange = (page: number) => {
    setCurrentPage(Math.max(0, Math.min(page, totalPages - 1)))
  }

  return (
    <section className="protection-services">
      <div className="protection-services__container">
        <div className="protection-services__header">
          <div className="protection-services__eyebrow">
            <span className="line"></span>
            PROTECTION FOR EVERY MILE &amp; MOMENT
            <span className="line"></span>
          </div>
          <h2 className="protection-services__title">
            Everything you need. <span className="highlight">All in one place.</span>
          </h2>
          <p className="protection-services__subtitle">
            Drive, ride, travel or plan ahead — we&apos;ve got the right protection for you and your loved ones.
          </p>
        </div>

        <div className="protection-services__cards-container">
          <div className="protection-services__cards-grid">
            {visibleServices.map((service) => (
              <div key={service.id} className="protection-services__card">
                <div className="protection-services__card-icon-wrapper">
                  <img
                    className="protection-services__card-image"
                    src={service.sprite}
                    alt=""
                    style={{
                      height: `${service.crop.h}%`,
                      left: `${service.crop.l}%`,
                      top: `${service.crop.t}%`,
                      width: `${service.crop.w}%`
                    }}
                  />
                </div>
                <div className="protection-services__card-body">
                  <h3 className="protection-services__card-title">{service.title}</h3>
                  <p className="protection-services__card-description">{service.description}</p>
                </div>
                <img className="protection-services__card-arrow" src={arrowIcon} alt="" />
              </div>
            ))}
          </div>
        </div>

        <div className="protection-services__pagination">
          {Array.from({ length: Math.max(totalPages, 2) }).map((_, idx) => (
            <button
              key={idx}
              className={`protection-services__pagination-dot ${idx === safePage ? 'active' : ''}`}
              onClick={() => handlePageChange(idx)}
              aria-label={`Go to page ${idx + 1}`}
              disabled={totalPages <= 1}
            />
          ))}
        </div>

        <div className="protection-services__benefits">
          {benefits.map((b) => (
            <div key={b.accent} className="protection-services__benefit">
              <img className="protection-services__benefit-icon" src={b.icon} alt="" />
              <div className="protection-services__benefit-content">
                <h3 className="protection-services__benefit-title">
                  <span className="highlight-text">{b.accent}</span>
                  <span>{b.title}</span>
                </h3>
                <p className="protection-services__benefit-description">{b.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProtectionServices
