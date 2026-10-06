import React, { useState } from 'react'
import './ProtectionServices.scss'
import { FaArrowRight, FaCarSide, FaMotorcycle, FaPlane, FaPeopleGroup, FaShieldHalved, FaMagnifyingGlass } from 'react-icons/fa6'
import { MdOutlineVerifiedUser } from 'react-icons/md'
import { MdOutlineTask } from 'react-icons/md'
import { LuWallet, LuBell, LuFileText, LuUsers } from 'react-icons/lu'

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

  const services = [
    {
      id: 1,
      title: 'Car Insurance',
      description: 'Comprehensive cover for your car',
      icon: FaCarSide,
      color: '#003366'
    },
    {
      id: 2,
      title: 'Bike Insurance',
      description: 'Protect your ride, every mile',
      icon: FaMotorcycle,
      color: '#003366'
    },
    {
      id: 3,
      title: 'Travel Insurance',
      description: 'Comprehensive cover for your trip',
      icon: FaPlane,
      color: '#003366'
    },
    {
      id: 4,
      title: 'Road Tax Renewal',
      description: 'Renew road tax instantly',
      icon: MdOutlineVerifiedUser,
      color: '#003366'
    },
    {
      id: 5,
      title: 'Claim Notifications',
      description: 'Report, Track & Settle faster',
      icon: MdOutlineTask,
      color: '#003366'
    },
    {
      id: 6,
      title: 'Third Party Claim Notifications',
      description: 'Manage third party claims',
      icon: FaPeopleGroup,
      color: '#003366'
    },
    {
      id: 7,
      title: 'Police Summons Check',
      description: 'Check your summons status',
      icon: FaMagnifyingGlass,
      color: '#003366'
    }
  ]

  const totalPages = Math.ceil(services.length / itemsPerPage)
  const startIdx = currentPage * itemsPerPage
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
                  <div className="protection-services__card-icon">
                    {React.createElement(service.icon as any, {
                      style: { color: service.color }
                    })}
                  </div>
                </div>
                <h3 className="protection-services__card-title">
                  {service.title}
                </h3>
                <p className="protection-services__card-description">
                  {service.description}
                </p>
                <div className="protection-services__card-arrow">
                  <FaArrowRight />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="protection-services__pagination">
          {Array.from({ length: Math.max(totalPages, 1) }).map((_, idx) => (
            <button
              key={idx}
              className={`protection-services__pagination-dot ${
                idx === currentPage ? 'active' : ''
              }`}
              onClick={() => handlePageChange(idx)}
              aria-label={`Go to page ${idx + 1}`}
              disabled={totalPages <= 1}
            />
          ))}
        </div>

        <div className="protection-services__benefits">
          <div className="protection-services__benefits-grid">
            <div className="protection-services__benefit-card">
              <div className="protection-services__benefit-icon">
                <LuWallet />
              </div>
              <h3 className="protection-services__benefit-title">
                <span className="highlight-text">Green wallet.</span> All your policies in one place.
              </h3>
              <p className="protection-services__benefit-description">
                Store, access and manage all your policies, road tax and documents securely.
              </p>
            </div>

            <div className="protection-services__benefit-card">
              <div className="protection-services__benefit-icon">
                <LuBell />
              </div>
              <h3 className="protection-services__benefit-title">
                <span className="highlight-text">Green reminders.</span> Never miss an important date.
              </h3>
              <p className="protection-services__benefit-description">
                Get timely reminders for policy renewals, road tax expiry and claim updates.
              </p>
            </div>

            <div className="protection-services__benefit-card">
              <div className="protection-services__benefit-icon">
                <LuFileText />
              </div>
              <h3 className="protection-services__benefit-title">
                <span className="highlight-text">Faster claims.</span> We're with you, end to end.
              </h3>
              <p className="protection-services__benefit-description">
                Raise, track and settle claims with real-time updates at every step.
              </p>
            </div>

            <div className="protection-services__benefit-card">
              <div className="protection-services__benefit-icon">
                <LuUsers />
              </div>
              <h3 className="protection-services__benefit-title">
                <span className="highlight-text">Better together.</span> Advice you can trust.
              </h3>
              <p className="protection-services__benefit-description">
                Our BNM licensed advisors are here to help you choose the right protection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProtectionServices
