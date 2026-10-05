import React from 'react'
import "./HomeHero.scss"
import { FaArrowRight } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa6";
import { IoNewspaperOutline } from "react-icons/io5";
import { AiOutlineFileProtect } from "react-icons/ai";
import { LuSearchCheck } from "react-icons/lu";
import { Link } from 'react-router-dom'

import mobileImg from "./images/mobile.png"
import motorInsuranceImg from "./images/motor-insurance.png"
import travelImg from "./images/travel.png"
import claimsImg from "./images/claims.png"
import { FaCar, FaHeartbeat, FaPlane } from "react-icons/fa";
import { IoCheckmarkCircle } from "react-icons/io5";

const HomeHero = () => {
    return <>

        <section className="h-hero">
            <div className="h-hero__container">
                <div className="h-hero__content">
                    <div className="h-hero__badge">
                        <span className="point"></span>
                        Malaysia's #1 Insurance Super App
                    </div>
                    <h1 className="h-hero__title">
                        Malaysia's
                        <br />
                        Smart <span className="gradient-text">Insurance</span>
                        <br />
                        Super Platform
                    </h1>
                    <div className="h-hero__subtitle">Compare, renew, manage policies, renew road tax, and track claims — all from one intelligent digital insurance ecosystem built for Malaysians.</div>
                    <div className="h-hero__action-btns">
                        <Link to="/get-quote" className="h-hero__compare-btn">Compare Insurance <FaArrowRight className='icon' /></Link>
                        <Link to="/road-tax" className="h-hero__demo-btn">Renew Road Tax</Link>
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

                    <IoCheckmarkCircle className="h-hero__floating-icon h-hero__floating-icon--tax" aria-hidden="true" />
                    <div className="h-hero__float-card h-hero__float-card--health">
                        <div className="h-hero__float-card__icon-wrap">
                            <FaHeartbeat className="icon" />
                        </div>
                        <div className="h-hero__float-card__text">
                            <span className="title">Health</span>
                            <span className="subtitle">Medical Protection</span>
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