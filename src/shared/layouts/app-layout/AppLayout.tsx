import React from 'react'
import "./AppLayout.scss"
import Header from '../header/Header'
import { Outlet } from 'react-router-dom'

export const AppLayout = () => {
  return <>
    <section className="app-layout">
          <main className="app-layout__container">
              <header className="app-layout__header">
                    <Header/>
              </header>
            <div className="app-layout__outlet-section">
            
            </div>
          </main>
        
    </section>
  </>
}
