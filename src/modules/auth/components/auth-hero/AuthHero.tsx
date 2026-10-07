import React, { useState } from 'react'
import './AuthHero.scss'
import '../auth-flow/AuthFlow.scss'
import LoginCard from '../login-card/LoginCard'
import RegisterForm from '../registration-form/RegistrationForm'
import VerifyOtp from '../verify-otp/VerifyOtp'
import AccountReady from '../account-ready/AccountReady'
import { tokenService } from '../../../../shared/services/token.service'
import heroBg from './images/hero-bg.png'
import shieldTick1 from './images/shield-tick-1.svg'
import pricetag from './images/pricetag.svg'
import carIcon from './images/car.svg'
import documentFavorite from './images/document-favorite.svg'
import shieldTick2 from './images/shield-tick-2.svg'
import svcCar from './images/svc-car.svg'
import svcRoad from './images/svc-road.svg'
import svcPlane from './images/svc-plane.svg'
import svcShield from './images/svc-shield.svg'

const FEATURES = [
    { icon: shieldTick1, title: 'Compare', sub: '20+ Insurers', flip: false },
    { icon: pricetag, title: 'Best Prices', sub: 'Guaranteed', flip: true },
    { icon: carIcon, title: 'Road Tax', sub: 'Renewal Made Easy', flip: false },
    { icon: documentFavorite, title: 'Claims', sub: 'Fast & Hassle-Free', flip: false },
    { icon: shieldTick2, title: 'Secure & Safe', sub: '100% Protected', flip: false },
]

const SERVICES = [
    { icon: svcCar, title: 'MOTOR INSURANCE', desc: 'Comprehensive coverage for you and your vehicle at the best price.' },
    { icon: svcRoad, title: 'ROAD TAX RENEWAL', desc: 'Renew your road tax in minutes with JPJ integration' },
    { icon: svcPlane, title: 'TRAVEL INSURANCE', desc: 'Travel with peace of mind anywhere in the world' },
    { icon: svcShield, title: 'CLAIMS MADE EASY', desc: 'Submit, track and settle claims quickly and hassle-free' },
]

type Step = 'login' | 'register' | 'otp' | 'account-ready'

const AuthHero = () => {
    const [step, setStep] = useState<Step>('login')
    const [otpTarget, setOtpTarget] = useState('')

    const sendOtp = (target: string) => {
        // No backend yet: call the "send OTP" API here
        setOtpTarget(target)
        setStep('otp')
    }

    const verifyOtp = () => {
        // No backend yet: call the "verify OTP" API here
        tokenService.setIsAuthenticated('true')
        setStep('account-ready')
    }

    return (
        <>
            <section className="auth-hero" style={{ backgroundImage: `url(${heroBg})` }}>
                <div className="auth-hero__container">
                    <div className="auth-hero__content">
                        <div className="auth-hero__intro">
                            <h1 className="auth-hero__title">
                                <span>One Platform.</span>
                                <span>
                                    Every <em>Insurance</em> Need.
                                </span>
                            </h1>
                            <p className="auth-hero__subtitle">
                                Compare, purchase, renew, manage policies, submit claims, renew road tax, and track everything in one secure ecosystem.
                            </p>
                        </div>
                        <div className="auth-hero__features">
                            {FEATURES.map((f, i) => (
                                <div className="auth-hero__feature" key={f.title}>
                                    {i > 0 && <span className="auth-hero__feature-divider" />}
                                    <div className="auth-hero__feature-icon">
                                        <img src={f.icon} alt="" style={f.flip ? { transform: 'scale(-1)' } : undefined} />
                                    </div>
                                    <div className="auth-hero__feature-text">
                                        <b>{f.title}</b>
                                        <span>{f.sub}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="auth-hero__card">
                        {step === 'login' && (
                            <LoginCard onSendOtp={sendOtp} onCreateAccount={() => setStep('register')} />
                        )}
                        {step !== 'login' && (
                            <div className="auth-flow">
                                {step === 'register' && (
                                    <RegisterForm
                                        onRegister={(p) => sendOtp(`${p.countryCode} ${p.mobile}`)}
                                        onSignIn={() => setStep('login')}
                                    />
                                )}
                                {step === 'otp' && (
                                    <VerifyOtp
                                        phoneNumber={otpTarget}
                                        onVerify={verifyOtp}
                                        onChangeNumber={() => setStep('login')}
                                        onResend={() => undefined}
                                    />
                                )}
                                {step === 'account-ready' && (
                                    <AccountReady brandName="CoverEazy" onGetStarted={() => { window.location.href = '/' }} />
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <div className="auth-services">
                {SERVICES.map(({ icon, title, desc }, i) => (
                    <div className="auth-services__item" key={title}>
                        {i > 0 && <span className="auth-services__divider" />}
                        <img className="auth-services__icon" src={icon} alt="" />
                        <div className="auth-services__text">
                            <b>{title}</b>
                            <span>{desc}</span>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default AuthHero
