import React from 'react'
import "./HomePage.scss"
import Header from '../../../../shared/layouts/header/Header'
import HomeHero from '../../components/home-hero/HomeHero'
import TrustedInsurers from '../../components/trusted-insurers/TrustedInsurers'
import InsurerForms from '../../components/insurers-forms/InsurerForms'
import ProductsEcosystem from '../../components/products-ecosystem/ProductsEcosystem'
import SmartComparison from '../../components/smart-comparison/SmartComparison'
import WhyPolisOne from '../../components/why-polisone/WhyPolisOne'
import ClaimsExperience from '../../components/claims-experience/ClaimsExperience'
import PaymentInfo from '../../components/payment-info/PaymentInfo'
import InsuranceAdvisers from '../../components/insurance-advisers/InsuranceAdvisers'
import DigitalPolicyWallet from '../../components/digital-policy-wallet/DigitalPolicyWallet'
import RoadTaxRenewal from '../../components/road-tax-renewal/RoadTaxRenewal'
import AnalyticsAi from '../../components/analytics-ai/AnalyticsAi'
import MobileAppShowcase from '../../components/mobile-app-showcase/MobileAppShowcase'
import RatingSection from '../../components/rating-section/RatingSection'
import InsurerPartners from '../../components/insurer-partners/InsurerPartners'
import FaqSection from '../../components/faq-section/FaqSection'
import FinalCallToAction from '../../components/final-call-to-action/FinalCallToAction'
import Footer from '../../../../shared/layouts/footer/Footer'

const HomePage = () => {
  return <>
  <div className="hp__header">
    <Header/>
  </div>
  <section className="hp">
    <main className="hp__container">
        <HomeHero/>
        <InsurerForms/>
        {/* <TrustedInsurers/> */}
        <ProductsEcosystem/>
        <SmartComparison/>
        <WhyPolisOne/>
        <ClaimsExperience/>
        <DigitalPolicyWallet/>
        <RoadTaxRenewal/>
        <AnalyticsAi/>
        {/* <PaymentInfo/> */}
        {/* <InsuranceAdvisers/> */}
        <MobileAppShowcase/>
        <RatingSection/>
        <InsurerPartners/>
        <FaqSection/>
        <FinalCallToAction/>
        <Footer/>
    </main>
  </section>
  
  </>
}

export default HomePage