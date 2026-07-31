import React from 'react'
import "./HomePage.scss"
import Header from '../../../../shared/layouts/header/Header'
import HomeHero from '../../components/home-hero/HomeHero'
import TrustedInsurers from '../../components/trusted-insurers/TrustedInsurers'
import InsurerForms from '../../components/insurers-forms/InsurerForms'
import ProductsEcosystem from '../../components/products-ecosystem/ProductsEcosystem'
import PaymentInfo from '../../components/payment-info/PaymentInfo'
import InsuranceAdvisers from '../../components/insurance-advisers/InsuranceAdvisers'
import DigitalPolicyWallet from '../../components/digital-policy-wallet/DigitalPolicyWallet'
import MobileApp from '../../components/mobile-app/MobileApp'
import RatingSection from '../../components/rating-section/RatingSection'
import FaqSection from '../../components/faq-section/FaqSection'
import Footer from '../../../../shared/layouts/footer/Footer'

const HomePage = () => {
  return <>
  <Header/>
  <section className="hp">
    <main className="hp__container">
        <HomeHero/>
        <TrustedInsurers/>
        <InsurerForms/>
        <ProductsEcosystem/>
        <PaymentInfo/>
        <InsuranceAdvisers/>
        <DigitalPolicyWallet/>
        <MobileApp/>
        <RatingSection/>
        <FaqSection/>
        <Footer/>
    </main>
  </section>
  
  </>
}

export default HomePage