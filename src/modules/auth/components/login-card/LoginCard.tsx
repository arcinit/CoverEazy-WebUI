import React, { useState } from 'react'
import './LoginCard.scss'
import googleLogo from './images/google.png'
import appleLogo from './images/apple.png'
import microsoftLogo from './images/microsoft.png'
import chevronDown from './images/chevron-down.svg'
import phoneIcon from './images/phone.svg'
import sendOtpIcon from './images/send-otp.svg'
import encryptionIcon from './images/encryption.svg'
import pdpaIcon from './images/pdpa.svg'
import licensedIcon from './images/licensed.svg'
import secureAuthIcon from './images/secure-auth.svg'

const SOCIALS = [
    { name: 'Google', logo: googleLogo, width: 20 },
    { name: 'Apple', logo: appleLogo, width: 16 },
    { name: 'Microsoft', logo: microsoftLogo, width: 20 },
]

const BADGES = [
    { icon: encryptionIcon, title: '256-bit', sub: 'Encryption', width: 58 },
    { icon: pdpaIcon, title: 'PDPA', sub: 'Compliant', width: 58 },
    { icon: licensedIcon, title: 'Licensed', sub: 'Platform', width: 48 },
    { icon: secureAuthIcon, title: 'Secure', sub: 'Auth', width: 48 },
]

const COUNTRY_CODE = '+60'
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

interface LoginCardProps {
    onSendOtp: (target: string) => void
    onCreateAccount: () => void
}

const LoginCard = ({ onSendOtp, onCreateAccount }: LoginCardProps) => {
    const [method, setMethod] = useState<'mobile' | 'email'>('mobile')
    const [mobile, setMobile] = useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')

    const value = method === 'mobile' ? mobile : email
    const isEmpty = value.trim().length === 0

    const switchMethod = (next: 'mobile' | 'email') => {
        setMethod(next)
        setError('')
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (method === 'mobile') {
            const digits = mobile.replace(/\D/g, '')
            if (digits.length < 9 || digits.length > 11) {
                setError(isEmpty ? 'Please enter your mobile number.' : 'Enter a valid mobile number.')
                return
            }
            setError('')
            onSendOtp(`${COUNTRY_CODE} ${mobile.trim()}`)
            return
        }
        if (!EMAIL_RE.test(email.trim())) {
            setError(isEmpty ? 'Please enter your email address.' : 'Enter a valid email address.')
            return
        }
        setError('')
        onSendOtp(email.trim())
    }

    return (
        <div className="auth-login-card">
                <div className="auth-login-card__top">
                    <div className="auth-login-card__header">
                        <h2 className="auth-login-card__title">Welcome Back</h2>
                        <p className="auth-login-card__subtitle">
                            Access your insurance, road tax, travel policies and claims from one secure account.
                        </p>
                    </div>

                    <form className="auth-login-card__form" onSubmit={handleSubmit}>
                        <div className="auth-login-card__tabs">
                            <button
                                type="button"
                                className={`auth-login-card__tab${method === 'mobile' ? ' is-active' : ''}`}
                                onClick={() => switchMethod('mobile')}
                            >
                                📱 Mobile
                            </button>
                            <button
                                type="button"
                                className={`auth-login-card__tab${method === 'email' ? ' is-active' : ''}`}
                                onClick={() => switchMethod('email')}
                            >
                                ✉️ Email
                            </button>
                        </div>

                        {method === 'mobile' ? (
                            <div className="auth-login-card__field">
                                <label className="auth-login-card__label" htmlFor="login-mobile">Mobile Number</label>
                                <div className="auth-login-card__input-row">
                                    <button type="button" className="auth-login-card__country">
                                        <span className="auth-login-card__country-label">
                                            <svg width="20" height="14" viewBox="0 0 28 14" aria-hidden="true">
                                                <rect width="28" height="14" fill="#fff" />
                                                {[0, 2, 4, 6, 8, 10, 12].map((y) => (
                                                    <rect key={y} y={y} width="28" height="1" fill="#cc0001" />
                                                ))}
                                                <rect width="14" height="8" fill="#010066" />
                                                <circle cx="5.2" cy="4" r="2.6" fill="#ffcc00" />
                                                <circle cx="6" cy="4" r="2.1" fill="#010066" />
                                                <circle cx="9.6" cy="4" r="1.1" fill="#ffcc00" />
                                            </svg>
                                            +60
                                        </span>
                                        <img src={chevronDown} alt="" />
                                    </button>
                                    <div className="auth-login-card__input">
                                        <img src={phoneIcon} alt="" />
                                        <input
                                            id="login-mobile"
                                            type="tel"
                                            inputMode="tel"
                                            placeholder="012-345 6789"
                                            value={mobile}
                                            onChange={(e) => { setMobile(e.target.value); setError('') }}
                                        />
                                    </div>
                                </div>
                                <p className="auth-login-card__hint">We'll send a 6-digit OTP to verify your number.</p>
                            </div>
                        ) : (
                            <div className="auth-login-card__field">
                                <label className="auth-login-card__label" htmlFor="login-email">Email Address</label>
                                <div className="auth-login-card__input-row">
                                    <div className="auth-login-card__input">
                                        <input
                                            id="login-email"
                                            type="email"
                                            placeholder="name@example.com"
                                            value={email}
                                            onChange={(e) => { setEmail(e.target.value); setError('') }}
                                        />
                                    </div>
                                </div>
                                <p className="auth-login-card__hint">We'll send a 6-digit OTP to verify your email.</p>
                            </div>
                        )}

                        {error && <p className="auth-login-card__error" role="alert">{error}</p>}

                        <button type="submit" className={`auth-login-card__submit${isEmpty ? ' is-empty' : ''}`}>
                            <img src={sendOtpIcon} alt="" />
                            <span>Send OTP</span>
                        </button>
                    </form>
                </div>

                <div className="auth-login-card__social">
                    <div className="auth-login-card__divider">
                        <span className="auth-login-card__divider-line" />
                        <span className="auth-login-card__divider-text">or continue with</span>
                        <span className="auth-login-card__divider-line" />
                    </div>
                    <div className="auth-login-card__social-row">
                        {SOCIALS.map((s) => (
                            <button type="button" className="auth-login-card__social-btn" key={s.name}>
                                <img src={s.logo} alt="" style={{ width: s.width }} />
                                <span>{s.name}</span>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="auth-login-card__bottom">
                    <div className="auth-login-card__badges">
                        {BADGES.map((b) => (
                            <div className="auth-login-card__badge" key={b.title}>
                                <img src={b.icon} alt="" />
                                <div className="auth-login-card__badge-text" style={{ width: b.width }}>
                                    <b>{b.title}</b>
                                    <span>{b.sub}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="auth-login-card__signup">
                        <span>Don't have an account?</span>
                        <b role="button" tabIndex={0} onClick={onCreateAccount} onKeyDown={(e) => e.key === 'Enter' && onCreateAccount()}>
                            Create Account
                        </b>
                    </p>
                </div>
        </div>
    )
}

export default LoginCard
