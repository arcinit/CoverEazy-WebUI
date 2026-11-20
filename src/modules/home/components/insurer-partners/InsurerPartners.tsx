import React from 'react'
import './InsurerPartners.scss'

const insurers = [
    'Etiqa',
    'Allianz',
    'MSIG',
    'AIA',
    'Takaful Ikhlas',
    'Tokio Marine',
    'Zurich',
    'Great Eastern',
]

const InsurerPartners = () => (
    <section className="insurer-partners" aria-label="Licensed insurer partners">
        <div className="insurer-partners__panel">
            <h2 className="insurer-partners__heading">Licensed insurer partners</h2>
            <ul className="insurer-partners__list">
                {insurers.map((insurer) => (
                    <li className="insurer-partners__name" key={insurer}>
                        {insurer}
                    </li>
                ))}
            </ul>
        </div>
    </section>
)

export default InsurerPartners
