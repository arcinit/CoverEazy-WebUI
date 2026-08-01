import React from 'react'
import "./AuthPage.scss"
import Header from '../../../shared/layouts/header/Header'
import { MdOutlineVerifiedUser } from 'react-icons/md'
import { FaCarAlt } from 'react-icons/fa'
import TrustedInsurers from '../../home/components/trusted-insurers/TrustedInsurers'
import LoginForm from '../components/login-form/LoginForm'
import { IoCarSportOutline, IoPricetagOutline } from 'react-icons/io5'
import VerifyOtp from '../components/verify-otp/VerifyOtp'
import AuthFlow from '../components/auth-flow/AuthFlow'

const AuthPage = () => {
    return <>
        <section className="auth-p">
            <Header />
            <main className="auth-p__container">
                <div className="auth-p__hero-section">
                    <div className="auth-p__hero-section-container">

                        <div className="auth-p__hero-content">
                            <div className="auth-p__hero-title">One Platform.<br /> Every <em>Insurance</em> Need.</div>
                            <div className="auth-p__hero-desc">Compare, purchase, renew, manage policies, submit claims, renew road tax, and track everything in one secure ecosystem.</div>
                            <div className="auth-p__benifits-grid">
                                <div className="auth-p__benifits-block">
                                    <div className="auth-p__benifit-icon"><MdOutlineVerifiedUser className="icon compare " /></div>
                                    <div className="auth-p__benifit-summary">
                                        <div className="auth-p__benifit-title">Compare</div>
                                        <div className="auth-p__benifit-desc">20+ Insurers</div>
                                    </div>
                                </div>
                                <div className="auth-p__benifits-block">
                                    <div className="auth-p__benifit-icon"><IoPricetagOutline className="icon prices" /></div>
                                    <div className="auth-p__benifit-summary">
                                        <div className="auth-p__benifit-title">Best Prices</div>
                                        <div className="auth-p__benifit-desc">Guaranteed</div>
                                    </div>
                                </div>
                                <div className="auth-p__benifits-block">
                                    <div className="auth-p__benifit-icon"><IoCarSportOutline className="icon road" /></div>
                                    <div className="auth-p__benifit-summary">
                                        <div className="auth-p__benifit-title">Road Tax</div>
                                        <div className="auth-p__benifit-desc">Renewal Made Easy</div>
                                    </div>
                                </div>
                                <div className="auth-p__benifits-block">
                                    <div className="auth-p__benifit-icon"><MdOutlineVerifiedUser className="icon claims" /></div>
                                    <div className="auth-p__benifit-summary">
                                        <div className="auth-p__benifit-title">Claims</div>
                                        <div className="auth-p__benifit-desc">Fast & Hassle-Free</div>
                                    </div>
                                </div>
                                <div className="auth-p__benifits-block">
                                    <div className="auth-p__benifit-icon"><MdOutlineVerifiedUser className="icon secure" /></div>
                                    <div className="auth-p__benifit-summary">
                                        <div className="auth-p__benifit-title">Secure & Safe</div>
                                        <div className="auth-p__benifit-desc">100% Protected</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="auth-p__auth-form">
                            <AuthFlow />
                        </div>
                    </div>
                </div>
                <div className="auth-p__bottom-grid">
                    <div className="auth-p__feature-block">
                        <div className="auth-p__feature-icon car"><FaCarAlt className='icon' /></div>
                        <div className="auth-p__feature-summary">
                            <div className="auth-p__feature-title">MOTOR INSURANCE</div>
                            <div className="auth-p__feature-desc">Comprehensive coverage for you and your vehicle at the best price.</div>
                        </div>
                    </div>
                    <div className="auth-p__feature-block">
                        <div className="auth-p__feature-icon road"><FaCarAlt className='icon' /></div>
                        <div className="auth-p__feature-summary">
                            <div className="auth-p__feature-title">ROAD TAX RENEWAL</div>
                            <div className="auth-p__feature-desc">Renew your road tax in minutes with JPJ integration</div>
                        </div>
                    </div>
                    <div className="auth-p__feature-block">
                        <div className="auth-p__feature-icon travel"><FaCarAlt className='icon' /></div>
                        <div className="auth-p__feature-summary">
                            <div className="auth-p__feature-title">TRAVEL INSURANCE</div>
                            <div className="auth-p__feature-desc">Travel with peace of mind anywhere in the world</div>
                        </div>
                    </div>
                    <div className="auth-p__feature-block">
                        <div className="auth-p__feature-icon claims"><FaCarAlt className='icon' /></div>
                        <div className="auth-p__feature-summary">
                            <div className="auth-p__feature-title">CLAIMS MADE EASY</div>
                            <div className="auth-p__feature-desc">Submit, track and settle claims quickly and hassle-free</div>
                        </div>
                    </div>
                </div>
                <TrustedInsurers />
            </main>
        </section>

    </>
}

export default AuthPage