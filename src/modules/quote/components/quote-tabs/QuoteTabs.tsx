import React from 'react'
import './QuoteTabs.scss'
import tabCar from '../../../home/components/home-hero/images/tab-car.png'
import tabTravel from '../../../home/components/home-hero/images/tab-travel.png'
import tabTax from '../../../home/components/home-hero/images/tab-tax.png'

// Same tab artwork as the landing-page quote card
const TAB_ICONS: Record<string, string> = {
    'Car & Motorcycle': tabCar,
    'Travel': tabTravel,
    'Road Tax': tabTax,
}

const QuoteTabs = ({ tabs, activeTab, onChange }:any) => {
    return (
        <div className="quote-tabs">
            {tabs.map((tab:any) => (
                <button
                    key={tab}
                    type="button"
                    className={`quote-tabs__tab${activeTab === tab ? ' active' : ''}`}
                    onClick={() => onChange(tab)}
                >
                    {TAB_ICONS[tab] && <img className="quote-tabs__icon" src={TAB_ICONS[tab]} alt="" />}
                    {tab}
                </button>
            ))}
        </div>
    )
}

export default QuoteTabs
