import "./WhyChooseCoverEazy.scss"
import bestPrice from "./images/best-price.svg"
import delivery from "./images/delivery.svg"
import advisors from "./images/advisors.svg"
import digital from "./images/digital.svg"
import support from "./images/support.svg"
import statCustomers from "./images/stat-customers.svg"
import statRating from "./images/stat-rating.svg"
import statPartners from "./images/stat-partners.svg"
import statBnm from "./images/stat-bnm.svg"
import statSecure from "./images/stat-secure.svg"
import statSupport from "./images/stat-support.svg"

const features = [
  { id: 1, title: "Best Price Guarantee", description: "We ensure you get the best deal.", icon: bestPrice },
  { id: 2, title: "Doorstep Delivery", description: "Policy documents delivered to you.", icon: delivery },
  { id: 3, title: "BNM Licensed Advisors", description: "Talk to real experts, not just bots.", icon: advisors },
  { id: 4, title: "100% Digital", description: "Paperless, fast and convenient.", icon: digital },
  { id: 5, title: "Dedicated Support", description: "Real people, ready to help anytime.", icon: support },
]

const stats = [
  { id: 1, icon: statCustomers, value: "250,000+", label: "Happy Customers" },
  { id: 2, icon: statRating, value: "4.9/5", label: "Average Rating" },
  { id: 3, icon: statPartners, value: "25+", label: "Insurance Partners" },
  { id: 4, icon: statBnm, value: "BNM", label: "Licensed" },
  { id: 5, icon: statSecure, value: "100%", label: "Secure & Trusted" },
  { id: 6, icon: statSupport, value: "24/7", label: "Customer Support" },
]

const WhyChooseCoverEazy = () => {
  return (
    <section className="why-choose">
      <div className="why-choose__container">
        <h2 className="why-choose__heading">
          WHY MALAYSIANS <span className="why-choose__highlight">CHOOSE COVEREAZY</span>
        </h2>

        <div className="why-choose__features">
          {features.map((feature) => (
            <div className="why-choose__feature" key={feature.id}>
              <img className="why-choose__feature-icon" src={feature.icon} alt="" />
              <div className="why-choose__feature-text">
                <p className="why-choose__feature-title">{feature.title}</p>
                <p className="why-choose__feature-desc">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="why-choose__stats">
          {stats.map((stat) => (
            <div className="why-choose__stat" key={stat.id}>
              <span className="why-choose__stat-icon">
                <img src={stat.icon} alt="" />
              </span>
              <div className="why-choose__stat-text">
                <span className="why-choose__stat-value">{stat.value}</span>
                <span className="why-choose__stat-label">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseCoverEazy
