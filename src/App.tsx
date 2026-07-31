import React from 'react'
import PublicRoutes from './routes/PublicRoutes'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return <>
    <BrowserRouter>
      <PublicRoutes />
    </BrowserRouter>
  </>
}

export default App