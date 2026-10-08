import React from 'react'
import './AuthStats.scss'
import statCustomers from '../../../home/components/why-choose-covereazy/images/stat-customers.svg'
import statRating from '../../../home/components/why-choose-covereazy/images/stat-rating.svg'
import statPartners from '../../../home/components/why-choose-covereazy/images/stat-partners.svg'
import statSecure from '../../../home/components/why-choose-covereazy/images/stat-secure.svg'
import statSupport from '../../../home/components/why-choose-covereazy/images/stat-support.svg'

const STATS = [
    { icon: statCustomers, value: '250,000+', label: 'Happy Customers' },
    { icon: statRating, value: '4.9/5', label: 'Average Rating' },
    { icon: statPartners, value: '25+', label: 'Insurance Partners' },
    { icon: statSecure, value: '100%', label: 'Secure & Trusted' },
    { icon: statSupport, value: '24/7', label: 'Customer Support' },
]

const AuthStats = () => (
    <div className="auth-stats">
        <div className="why-choose__stats">
            {STATS.map((s) => (
                <div className="why-choose__stat" key={s.label}>
                    <span className="why-choose__stat-icon">
                        <img src={s.icon} alt="" />
                    </span>
                    <div className="why-choose__stat-text">
                        <span className="why-choose__stat-value">{s.value}</span>
                        <span className="why-choose__stat-label">{s.label}</span>
                    </div>
                </div>
            ))}
        </div>
    </div>
)

export default AuthStats
