import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import { AppLayout } from '../shared/layouts/app-layout/AppLayout'
import HomePage from '../modules/home/pages/home-page/HomePage'
import AuthPage from '../modules/auth/pages/AuthPage'
import GetQuote from '../modules/quote/pages/GetQuote'
import Moters from '../modules/moters/components/moters/Moters'
import ComparePlans from '../modules/moters/components/compare-plans/ComparePlans'
import AddOnsStep from '../modules/moters/components/add-on-steps/AddOnSteps'
import ContactDetails from '../modules/moters/components/contact-details/ContactDetails'
import ReviewCheckout from '../modules/moters/components/review-checkout/ReviewCheckout'
import PolicyConfirmation from '../modules/moters/components/policy-conformation/PolicyConformation'
import RoadTaxFlow from '../modules/road-tax/pages/RoadTaxFlow'
import TravelInsuranceFlow from '../modules/travel-insurance/pages/travel-insurance-flow/TravelInsuranceFlow'
import ClaimsFlow from '../modules/claims/pages/claims-flow/ClaimsFlow'
import WorkshopDetail from '../modules/claims/components/workshop/workshop-details/WorkshopDetails'
import ProfileFlow from '../modules/profile/pages/profile-flow/ProfileFlow'
import CarMotersFlow from '../modules/moters/pages/CarMotersFlow'

const PublicRoutes = () => {
  const routes=useRoutes([
    {
      path:"",element:<HomePage/>
    },
    {
      path:"/login",element:<AuthPage/>
    },
    {
      path: "/get-quote", element: <GetQuote />
    },
    {
      path: "/moters", element: <CarMotersFlow />
    },
    {
      path: "/road-tax", element: <RoadTaxFlow />
    },
    {
      path: "/travel", element: <TravelInsuranceFlow />
    },
    {
      path: "/claims", element: <ClaimsFlow />
    },
    {
      path: "/claims/workshop/details", element: <WorkshopDetail />
    },
    {
      path:"profile", element:<ProfileFlow />
    }
    
  ])
  return <>
    <Suspense fallback={<div>loading routes</div>}>{routes}</Suspense>
  </>
}

export default PublicRoutes