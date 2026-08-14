import React, { useState } from 'react'
import './GetQuoteFlow.scss'
import TravelForm from '../travel-form/TravelForm'
import CarMotorForm from '../cars-moter-quote-form/CarMoterQuoteForm'
import RoadTaxForm from '../road-tax-frm/RoadTaxForm'
import QuoteTabs from '../quote-tabs/QuoteTabs'

const TABS = ['Car & Motorcycle', 'Travel', 'Road Tax']

// Maps each tab to the form component that should render below it.
// Add a new entry here whenever a new product tab is introduced —
// nothing else in this file needs to change.
const FORM_BY_TAB:any = {
  'Car & Motorcycle': CarMotorForm,
  'Travel': TravelForm,
  'Road Tax': RoadTaxForm,
}

const GetQuoteFlow = () => {
  const [activeTab, setActiveTab] = useState(TABS[0])

  const ActiveForm = FORM_BY_TAB[activeTab]

  return (
    <div className="quote-card">
      <div className="quote-card__container">
        {/* Header */}
        <div className="quote-card__header">
          <h1 className="quote-card__title">
            Get an <span className="quote-card__title-accent">Instant Quote</span>
          </h1>
          <p className="quote-card__desc">
            Compare 20+ insurers in under 30 seconds. No paperwork.
          </p>
        </div>

        {/* Reusable tabs */}
        <QuoteTabs tabs={TABS} activeTab={activeTab} onChange={setActiveTab} />

        {/* Dynamic form for the selected tab */}
        <ActiveForm />
      </div>
    </div>
  )
}

export default GetQuoteFlow