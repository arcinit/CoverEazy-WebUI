import React, { useState } from 'react'
import './LoginCard.scss'
import googleLogo from './images/google.png'
import appleLogo from './images/apple.png'
import microsoftLogo from './images/microsoft.png'
import googleLg from './images/google-lg.png'
import appleLg from './images/apple-lg.png'
import microsoftLg from './images/microsoft-lg.png'
import chevronDown from './images/chevron-down.svg'
import phoneIcon from './images/phone.svg'
import sendOtpIcon from './images/send-otp.svg'
import emailIcon from './images/email.svg'
import lockIcon from './images/lock.svg'
import lockWhiteIcon from './images/lock-white.svg'
import eyeIcon from './images/eye.svg'
import encryptionIcon from './images/encryption.svg'
import pdpaIcon from './images/pdpa.svg'
import licensedIcon from './images/licensed.svg'
import secureAuthIcon from './images/secure-auth.svg'
import pillEncryption from './images/pill-encryption.svg'
import pillPdpa from './images/pill-pdpa.svg'
import pillLicensed from './images/pill-licensed.svg'
import pillSecure from './images/pill-secure.svg'

const SOCIALS = [
    { name: 'Google', logo: googleLogo, large: googleLg, width: 20, largeWidth: 24 },
    { name: 'Apple', logo: appleLogo, large: appleLg, width: 16, largeWidth: 20 },
    { name: 'Microsoft', logo: microsoftLogo, large: microsoftLg, width: 20, largeWidth: 24 },
]

// Figma wraps these labels inside fixed-width text boxes ("Encrypt/ion", "Licen/sed"), so each line gets its own max width
const BADGES: { icon: string; pill: string; title: string; sub: string; width: number; titleWidth?: number; subWidth?: number }[] = [
    { icon: encryptionIcon, pill: pillEncryption, title: '256-bit', sub: 'Encryption', width: 58, subWidth: 46 },
    { icon: pdpaIcon, pill: pillPdpa, title: 'PDPA', sub: 'Compliant', width: 58 },
    { icon: licensedIcon, pill: pillLicensed, title: 'Licensed', sub: 'Platform', width: 48, titleWidth: 36 },
    { icon: secureAuthIcon, pill: pillSecure, title: 'Secure', sub: 'Auth', width: 48 },
]

const COUNTRY_CODE = '+60'
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export interface EmailLoginValues {
    email: string
    password: string
    remember: boolean
}

interface LoginCardProps {
    onSendOtp: (target: string) => void
    onEmailLogin: (values: EmailLoginValues) => void
    onCreateAccount: () => void
}

const LoginCard = ({ onSendOtp, onEmailLogin, onCreateAccount }: LoginCardProps) => {
    const [method, setMethod] = useState<'mobile' | 'email'>('mobile')
    const [mobile, setMobile] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [remember, setRemember] = useState(false)
    const [error, setError] = useState('')

    const isMobile = method === 'mobile'
    const isEmpty = isMobile ? mobile.trim() === '' : email.trim() === '' || password === ''

    const switchMethod = (next: 'mobile' | 'email') => {
        setMethod(next)
        setError('')
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (isMobile) {
            const digits = mobile.replace(/\D/g, '')
            if (digits.length < 9 || digits.length > 11) {
                setError(mobile.trim() === '' ? 'Please enter your mobile number.' : 'Enter a valid mobile number.')
                return
            }
            setError('')
            onSendOtp(`${COUNTRY_CODE} ${mobile.trim()}`)
            return
        }
        if (!EMAIL_RE.test(email.trim())) {
            setError(email.trim() === '' ? 'Please enter your email address.' : 'Enter a valid email address.')
            return
        }
        if (password === '') {
            setError('Please enter your password.')
            return
        }
        setError('')
        onEmailLogin({ email: email.trim(), password, remember })
    }

    return (
        <div className={`auth-login-card${isMobile ? '' : ' is-email'}${isMobile && mobile.trim() === '' ? ' is-compact' : ''}`}>
            <div className="auth-login-card__top">
                <div className="auth-login-card__header">
                    <h2 className="auth-login-card__title">Welcome Back</h2>
                    <p className="auth-login-card__subtitle">
                        Access your insurance, road tax, travel policies and claims from one secure account.
                    </p>
                </div>

                <form className="auth-login-card__form" onSubmit={handleSubmit} noValidate>
                    <div className="auth-login-card__tabs">
                        <button
                            type="button"
                            className={`auth-login-card__tab${isMobile ? ' is-active' : ''}`}
                            onClick={() => switchMethod('mobile')}
                        >
                            📱 Mobile
                        </button>
                        <button
                            type="button"
                            className={`auth-login-card__tab${!isMobile ? ' is-active' : ''}`}
                            onClick={() => switchMethod('email')}
                        >
                            ✉️ Email
                        </button>
                    </div>

                    {isMobile ? (
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
                        <div className="auth-login-card__fields">
                            <div className="auth-login-card__field">
                                <label className="auth-login-card__label" htmlFor="login-email">Email Address</label>
                                <div className="auth-login-card__input-row is-tight">
                                    <div className="auth-login-card__input is-lg">
                                        <img src={emailIcon} alt="" />
                                        <input
                                            id="login-email"
                                            type="email"
                                            placeholder="ahmad@example.com"
                                            value={email}
                                            onChange={(e) => { setEmail(e.target.value); setError('') }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="auth-login-card__field">
                                <label className="auth-login-card__label" htmlFor="login-password">Password</label>
                                <div className="auth-login-card__input-row is-tight">
                                    <div className="auth-login-card__input is-lg">
                                        <img src={lockIcon} alt="" />
                                        <input
                                            id="login-password"
                                            type={showPassword ? 'text' : 'password'}
                                            placeholder="Enter your password"
                                            value={password}
                                            onChange={(e) => { setPassword(e.target.value); setError('') }}
                                        />
                                        <button
                                            type="button"
                                            className="auth-login-card__eye"
                                            aria-label={showPassword ? 'Hide password' : 'Show password'}
                                            onClick={() => setShowPassword((s) => !s)}
                                        >
                                            <img src={eyeIcon} alt="" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="auth-login-card__remember-row">
                                <label className="auth-login-card__remember">
                                    <input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} />
                                    <span>Remember me</span>
                                </label>
                                <button type="button" className="auth-login-card__forgot">Forgot password?</button>
                            </div>
                        </div>
                    )}

                    {error && <p className="auth-login-card__error" role="alert">{error}</p>}

                    <button type="submit" className={`auth-login-card__submit${isEmpty ? ' is-empty' : ''}`}>
                        <img src={isMobile ? sendOtpIcon : lockWhiteIcon} alt="" />
                        <span>{isMobile ? 'Send OTP' : 'Login Securely'}</span>
                    </button>
                </form>
            </div>

            <div className="auth-login-card__social">
                <div className="auth-login-card__divider">
                    <span className="auth-login-card__divider-line" />
                    <span className="auth-login-card__divider-text">or continue with</span>
                    <span className="auth-login-card__divider-line" />
                </div>
                {isMobile ? (
                    <div className="auth-login-card__social-row">
                        {SOCIALS.map((s) => (
                            <button type="button" className="auth-login-card__social-btn" key={s.name}>
                                <img src={s.logo} alt="" style={{ width: s.width }} />
                                <span>{s.name}</span>
                            </button>
                        ))}
                    </div>
                ) : (
                    <div className="auth-login-card__social-icons">
                        {SOCIALS.map((s) => (
                            <button type="button" className="auth-login-card__social-icon" key={s.name} aria-label={s.name}>
                                <img src={s.large} alt="" style={{ width: s.largeWidth }} />
                            </button>
                        ))}
                    </div>
                )}
            </div>

            <div className="auth-login-card__bottom">
                {isMobile ? (
                    <div className="auth-login-card__badges">
                        {BADGES.map((b) => (
                            <div className="auth-login-card__badge" key={b.title}>
                                <img src={b.icon} alt="" />
                                <div className="auth-login-card__badge-text" style={{ width: b.width }}>
                                    <b style={{ maxWidth: b.titleWidth }}>{b.title}</b>
                                    <span style={{ maxWidth: b.subWidth }}>{b.sub}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="auth-login-card__pills">
                        {BADGES.map((b) => (
                            <div className="auth-login-card__pill" key={b.title}>
                                <img src={b.pill} alt="" />
                                <span>{`${b.title} ${b.sub}`}</span>
                            </div>
                        ))}
                    </div>
                )}
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
