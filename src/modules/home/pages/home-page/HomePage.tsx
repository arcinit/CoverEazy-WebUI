import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import "./HomePage.scss"
import Header from '../../../../shared/layouts/header/Header'
import HomeHero, { HomeQuoteCard } from '../../components/home-hero/HomeHero'
import TrustedInsurers from '../../components/trusted-insurers/TrustedInsurers'
import ProtectionServices from '../../components/protection-services/ProtectionServices'
import ProductsPlans from '../../components/products-plans/ProductsPlans'
import PaymentFeatures from '../../components/payment-features/PaymentFeatures'
import WhyChooseCoverEazy from '../../components/why-choose-covereazy/WhyChooseCoverEazy'
import InsurerForms from '../../components/insurers-forms/InsurerForms'
import ProductsEcosystem from '../../components/products-ecosystem/ProductsEcosystem'
import PaymentInfo from '../../components/payment-info/PaymentInfo'
import InsuranceAdvisers from '../../components/insurance-advisers/InsuranceAdvisers'
import DigitalPolicyWallet from '../../components/digital-policy-wallet/DigitalPolicyWallet'
import MobileApp from '../../components/mobile-app/MobileApp'
import RatingSection from '../../components/rating-section/RatingSection'
import FaqSection from '../../components/faq-section/FaqSection'
import Footer from '../../../../shared/layouts/footer/Footer'
import AuthHero, { AuthHeroLayout } from '../../../auth/components/auth-hero/AuthHero'
import { tokenService } from '../../../../shared/services/token.service'
import AuthStats from '../../../auth/components/auth-hero/AuthStats'

const HomePage = () => {
  const location = useLocation()
  const [showLogin, setShowLogin] = useState(!!location.state?.openLogin)

  useEffect(() => {
    setShowLogin(!!location.state?.openLogin)
  }, [location.key])

  const loggedIn = tokenService.isAuthenticated()
  const showAuthLayout = showLogin || loggedIn

  return <>
  <Header onLoginClick={() => setShowLogin(true)} />
  <section className="hp">
    <main className="hp__container">
        {loggedIn ? <AuthHeroLayout card={<HomeQuoteCard />} centerCard /> : showLogin ? <AuthHero /> : <HomeHero />}
        <TrustedInsurers/>
        {showAuthLayout && <AuthStats />}
        <ProtectionServices/>
        <ProductsPlans/>
        <PaymentFeatures/>
        <WhyChooseCoverEazy/>
        {/* <InsurerForms/> */}
        {/* <ProductsEcosystem/> */}
        {/* <PaymentInfo/> */}
        {/* <InsuranceAdvisers/> */}
        {/* <DigitalPolicyWallet/> */}
        {/* <MobileApp/> */}
        <RatingSection/>
        {/* <FaqSection/> */}
        <Footer/>
    </main>
  </section>
  </>
}

export default HomePage