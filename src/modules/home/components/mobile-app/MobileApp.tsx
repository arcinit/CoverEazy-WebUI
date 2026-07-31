import React from 'react'
import "./MobileApp.scss"
import { LuWallet } from 'react-icons/lu'
import { MdOutlineNotifications } from 'react-icons/md'
import { FaRegChartBar } from 'react-icons/fa'
import { CiMobile2 } from 'react-icons/ci'

import mobileImage from "./images/mobile.png"

const MobileApp = () => {
  return <>
  <section className="mo-app">
    <main className="mo-app__container">
        <div className="mo-app__content">
                  <div className="mo-app__heading">MOBILE APP</div>
                  <div className="mo-app__title">Your insurance,<em>Simplified.</em> </div>
                  <div className="mo-app__desc">Manage policies, file claims, and renew road tax from anywhere. Available on iOS and Android.</div>
                  <div className="mo-app__features-grid">
                    <div className="mo-app__feature-block">
                          <LuWallet className='mo-app__feature-icon' />
                          <span className="mo-app__feature-title">Policy Wallet</span>
                    </div>
                      <div className="mo-app__feature-block">
                          <MdOutlineNotifications className='mo-app__feature-icon' />
                          <span className="mo-app__feature-title">Smart Alerts</span>
                      </div>
                      <div className="mo-app__feature-block">
                          <FaRegChartBar className='mo-app__feature-icon' />
                          <span className="mo-app__feature-title">Live Dashboard</span>
                      </div>
                      <div className="mo-app__feature-block">
                          <CiMobile2 className='mo-app__feature-icon' />
                          <span className="mo-app__feature-title">1-Tap Claims</span>
                      </div>
                  </div>
                  <div className="h-hero__get-app-btns">
                      <button className="h-hero__get-app-btn play-store">
                      </button>
                      <button className="h-hero__get-app-btn app-store">
                      </button>
                  </div>
        </div>
        <div className="mo-app__mobile-image-container">
            <img src={mobileImage} alt="" className="mo-app__mobile-img" />
        </div>
    </main>
  </section>
  
  
  </>
}

export default MobileApp