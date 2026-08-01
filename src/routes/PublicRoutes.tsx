import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import { AppLayout } from '../shared/layouts/app-layout/AppLayout'
import HomePage from '../modules/home/pages/home-page/HomePage'
import AuthPage from '../modules/auth/pages/AuthPage'

const PublicRoutes = () => {
  const routes=useRoutes([
    {
      path:"",element:<HomePage/>
    },
    {
      path:"/login",element:<AuthPage/>
    }
    
  ])
  return <>
    <Suspense fallback={<div>loading routes</div>}>{routes}</Suspense>
  </>
}

export default PublicRoutes