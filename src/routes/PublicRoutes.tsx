import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import { AppLayout } from '../shared/layouts/app-layout/AppLayout'
import HomePage from '../modules/home/pages/home-page/HomePage'

const PublicRoutes = () => {
  const routes=useRoutes([
    {
      path:"",element:<HomePage/>
    },
    
  ])
  return <>
    <Suspense fallback={<div>loading routes</div>}>{routes}</Suspense>
  </>
}

export default PublicRoutes