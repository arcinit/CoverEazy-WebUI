import React from 'react'
import './QuoteTabs.scss'


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
                    {tab}
                </button>
            ))}
        </div>
    )
}

export default QuoteTabs