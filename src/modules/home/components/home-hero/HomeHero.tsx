import React from 'react'
import "./HomeHero.scss"
import { FaArrowRight, FaCarSide } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa6";
import { IoNewspaperOutline } from "react-icons/io5";
import { AiOutlineFileProtect } from "react-icons/ai";
import { LuSearchCheck } from "react-icons/lu";
import appStore from "./images/app-store.png"
import googleStore from "./images/google-play.png"

import mobileImg from "./images/mobile.png"
import motorInsuranceImg from "./images/motor-insurance.png"
import travelImg from "./images/travel.png"
import taxRenewalImg from "./images/tax-renewal.png"
import claimsImg from "./images/claims.png"
import { FaCar, FaPlane } from "react-icons/fa";
import { IoCheckmarkCircle } from "react-icons/io5";

const HomeHero = () => {
    return <>

        <section className="h-hero">
            <div className="h-hero__container">
                <div className="h-hero__content">
                    <div className="h-hero__badge">
                        <span className="point"></span>
                        Now Serving 100,000+ Malaysians
                    </div>
                    <h1 className="h-hero__title">
                        Malaysia's
                        <br />
                        Smartest <span className="gradient-text">Insurance</span>
                        <br />
                        <span className="gradient-text">Super App</span>
                    </h1>
                    <div className="h-hero__subtitle">Compare, buy, renew, and manage Motor, Travel, and Health Insurance from <br /> multiple insurers in one seamless experience.</div>
                    <div className="h-hero__action-btns">
                        <button className="h-hero__compare-btn">Compare Insurance <FaArrowRight className='icon' /></button>
                        <button className="h-hero__demo-btn">
                            Watch Demo
                            <video autoPlay loop src="https://www.pexels.com/download/video/38687742/"></video>
                        </button>
                    </div>
                    <div className="h-hero__meta-row">
                        <div className="h-hero__meta-block">
                            <div className="h-hero__meta-icon-wrap">
                                <FaHandshake className='icon' />
                            </div>
                            <div className="h-hero__meta-title">  20+ Insurance Partners</div>
                          
                        </div>

                        <div className="h-hero__meta-block">
                            <div className="h-hero__meta-icon-wrap">
                                <IoNewspaperOutline className='icon' />
                            </div>
                            <div className="h-hero__meta-title">Instant Quotes</div>
                        </div>

                        <div className="h-hero__meta-block">
                            <div className="h-hero__meta-icon-wrap">
                                <AiOutlineFileProtect className='icon' />
                            </div>
                            <div className="h-hero__meta-title">Secure Payments</div>
                        </div>

                        <div className="h-hero__meta-block">
                            <div className="h-hero__meta-icon-wrap">
                                <LuSearchCheck className='icon' />
                            </div>
                            <div className="h-hero__meta-title"> Real-Time Claim Tracking</div>
                        </div>

                    </div>
                    <div className="h-hero__get-app-btns">
                        <button className="h-hero__get-app-btn play-store">
                        </button>
                        <button className="h-hero__get-app-btn app-store">
                        </button>
                    </div>
                </div>
                <div className="h-hero__3d-images-container">
                    <img src={mobileImg} alt="Insurance Super App" className="h-hero__phone-img" />

                    <img src={motorInsuranceImg} alt="" className="h-hero__floating-icon h-hero__floating-icon--motor" />
                    <div className="h-hero__float-card h-hero__float-card--motor">
                        <div className="h-hero__float-card__icon-wrap">
                            <FaCar className="icon" />
                        </div>
                        <div className="h-hero__float-card__text">
                            <span className="title">Motor Insurance</span>
                            <span className="subtitle">Car + Bike Insurance</span>
                        </div>
                    </div>

                    <img src={travelImg} alt="" className="h-hero__floating-icon h-hero__floating-icon--travel" />
                    <div className="h-hero__float-card h-hero__float-card--travel">
                        <div className="h-hero__float-card__icon-wrap">
                            <FaPlane className="icon" />
                        </div>
                        <div className="h-hero__float-card__text">
                            <span className="title">Travel</span>
                            <span className="subtitle">Worldwide Coverage</span>
                        </div>
                    </div>

                    <img src={taxRenewalImg} alt="Road Tax Renewal" className="h-hero__floating-icon h-hero__floating-icon--tax" />
                    <div className="h-hero__float-card h-hero__float-card--tax">
                        <div className="h-hero__float-card__icon-wrap">
                            <FaCarSide className="icon" />
                        </div>
                        <div className="h-hero__float-card__text">
                            <span className="title">Road Tax Renewal</span>
                            <span className="subtitle">Renew + Road Tax</span>
                        </div>
                    </div>

                    <img src={claimsImg} alt="Claims" className="h-hero__floating-icon h-hero__floating-icon--claims" />
                    <div className="h-hero__float-card h-hero__float-card--claims">
                        <div className="h-hero__float-card__text">
                            <span className="title">Claims</span>
                            <div className="claim-row"><IoCheckmarkCircle style={{ color: "var(--green-color)" }} /> Third-Party Claim Notification</div>
                            <div className="claim-row"><IoCheckmarkCircle style={{ color: "var(--green-color)" }} /> Claim Notification</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </>
}

export default HomeHero