import React from 'react'
import "./WhyChooseCoverEazy.scss"

const WhyChooseCoverEazy = () => {
  const features = [
    {
      id: 1,
      title: "Best Price Guarantee",
      description: "We ensure you get the best deal.",
      icon: "icon-price"
    },
    {
      id: 2,
      title: "Doorstep Delivery",
      description: "Policy documents delivered to you.",
      icon: "icon-delivery"
    },
    {
      id: 3,
      title: "BNM Licensed Advisors",
      description: "Talk to real experts, not just bots.",
      icon: "icon-advisors"
    },
    {
      id: 4,
      title: "100% Digital",
      description: "Paperless, fast and convenient.",
      icon: "icon-digital"
    },
    {
      id: 5,
      title: "Dedicated Support",
      description: "Real people, ready to help anytime.",
      icon: "icon-support"
    }
  ]

  const stats = [
    {
      id: 1,
      icon: "icon-customers",
      value: "250,000+",
      label: "Happy Customers"
    },
    {
      id: 2,
      icon: "icon-rating",
      value: "4.9/5",
      label: "Average Rating"
    },
    {
      id: 3,
      icon: "icon-partners",
      value: "25+",
      label: "Insurance Partners"
    },
    {
      id: 4,
      icon: "icon-bnm",
      value: "BNM",
      label: "Licensed"
    },
    {
      id: 5,
      icon: "icon-secure",
      value: "100%",
      label: "Secure & Trusted"
    },
    {
      id: 6,
      icon: "icon-support-24",
      value: "24/7",
      label: "Customer Support"
    }
  ]

  return <>
    <section className="why-choose">
      <div className="why-choose__container">
        <div className="why-choose__heading">
          WHY MALAYSIANS <span className="why-choose__highlight">CHOOSE COVEREAZY</span>
        </div>

        <div className="why-choose__features-grid">
          {features?.map((feature) => (
            <div className="why-choose__feature-card" key={feature.id}>
              <div className={`why-choose__feature-icon ${feature.icon}`}></div>
              <h3 className="why-choose__feature-title">{feature.title}</h3>
              <p className="why-choose__feature-desc">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="why-choose__stats-wrapper">
          <div className="why-choose__stats-grid">
            {stats?.map((stat) => (
              <div className="why-choose__stat-item" key={stat.id}>
                <div className={`why-choose__stat-icon ${stat.icon}`}></div>
                <div className="why-choose__stat-value">{stat.value}</div>
                <div className="why-choose__stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </>
}

export default WhyChooseCoverEazy
