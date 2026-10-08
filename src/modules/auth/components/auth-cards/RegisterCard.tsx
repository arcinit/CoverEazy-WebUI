import React, { useState } from 'react'
import './AuthCards.scss'
import { LuUser, LuMail, LuPhone, LuLock, LuEye, LuEyeOff, LuSparkles, LuArrowRight, LuChevronDown } from 'react-icons/lu'
import { MalaysiaFlag } from './shared'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

interface RegisterCardProps {
    onRegister: (target: string) => void
    onSignIn: () => void
}

const RegisterCard = ({ onRegister, onSignIn }: RegisterCardProps) => {
    const [form, setForm] = useState({ fullName: '', email: '', mobile: '', password: '', confirm: '', referral: '' })
    const [agree, setAgree] = useState(false)
    const [show, setShow] = useState({ password: false, confirm: false })
    const [error, setError] = useState('')

    const set = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm((f) => ({ ...f, [key]: e.target.value }))
        setError('')
    }

    const mobileDigits = form.mobile.replace(/\D/g, '')
    const problem =
        form.fullName.trim() === '' ? 'Please enter your full name.'
        : !EMAIL_RE.test(form.email.trim()) ? 'Enter a valid email address.'
        : mobileDigits.length < 9 || mobileDigits.length > 11 ? 'Enter a valid mobile number.'
        : form.password.length < 8 ? 'Password must be at least 8 characters.'
        : form.confirm !== form.password ? 'Passwords do not match.'
        : !agree ? 'Please accept the Terms of Service and Privacy Policy.'
        : ''

    const submit = (e: React.FormEvent) => {
        e.preventDefault()
        if (problem) { setError(problem); return }
        onRegister(`+60 ${form.mobile.trim()}`)
    }

    return (
        <form className="acard acard--register" onSubmit={submit} noValidate>
            <h2 className="acard__title acard__title--left">Create Account</h2>
            <p className="acard__reg-sub">Join 500,000+ Malaysians on CoverEazy</p>

            <div className="acard__fields">
                <div className="acard__field">
                    <label htmlFor="reg-name">Full Name (as per IC)</label>
                    <div className="acard__input">
                        <LuUser size={16} strokeWidth={1.5} />
                        <input id="reg-name" placeholder="Ahmad Rizal bin Ismail" value={form.fullName} onChange={set('fullName')} />
                    </div>
                </div>
                <div className="acard__field">
                    <label htmlFor="reg-email">Email Address</label>
                    <div className="acard__input">
                        <LuMail size={16} strokeWidth={1.5} />
                        <input id="reg-email" type="email" placeholder="ahmad@example.com" value={form.email} onChange={set('email')} />
                    </div>
                </div>
                <div className="acard__field">
                    <label htmlFor="reg-mobile">Mobile Number</label>
                    <div className="acard__phone">
                        <button type="button" className="acard__country">
                            <MalaysiaFlag />
                            <span>+60</span>
                            <LuChevronDown size={13} strokeWidth={1.5} />
                        </button>
                        <div className="acard__input">
                            <LuPhone size={16} strokeWidth={1.5} />
                            <input id="reg-mobile" type="tel" inputMode="tel" placeholder="012-345 6789" value={form.mobile} onChange={set('mobile')} />
                        </div>
                    </div>
                </div>
                <div className="acard__field">
                    <label htmlFor="reg-password">Password</label>
                    <div className="acard__input">
                        <LuLock size={16} strokeWidth={1.5} />
                        <input id="reg-password" type={show.password ? 'text' : 'password'} placeholder="Minimum 8 characters" value={form.password} onChange={set('password')} />
                        <button type="button" aria-label="Toggle password" onClick={() => setShow((s) => ({ ...s, password: !s.password }))}>
                            {show.password ? <LuEyeOff size={16} strokeWidth={1.5} /> : <LuEye size={16} strokeWidth={1.5} />}
                        </button>
                    </div>
                </div>
                <div className="acard__field">
                    <label htmlFor="reg-confirm">Confirm Password</label>
                    <div className="acard__input">
                        <LuLock size={16} strokeWidth={1.5} />
                        <input id="reg-confirm" type={show.confirm ? 'text' : 'password'} placeholder="Re-enter password" value={form.confirm} onChange={set('confirm')} />
                        <button type="button" aria-label="Toggle confirm password" onClick={() => setShow((s) => ({ ...s, confirm: !s.confirm }))}>
                            {show.confirm ? <LuEyeOff size={16} strokeWidth={1.5} /> : <LuEye size={16} strokeWidth={1.5} />}
                        </button>
                    </div>
                </div>
                <div className="acard__field">
                    <label htmlFor="reg-referral">Referral Code (Optional)</label>
                    <div className="acard__input">
                        <LuSparkles size={16} strokeWidth={1.5} />
                        <input id="reg-referral" placeholder="e.g. COVEREAZY20" value={form.referral} onChange={set('referral')} />
                    </div>
                </div>
            </div>

            <label className="acard__agree">
                <input type="checkbox" checked={agree} onChange={(e) => { setAgree(e.target.checked); setError('') }} />
                <span>
                    I agree to the <b>Terms of Service</b> and <b>Privacy Policy</b>. I am at least 18 years old.
                </span>
            </label>

            {error && <p className="acard__error" role="alert">{error}</p>}

            <button type="submit" className={`acard__primary acard__primary--register${problem ? ' is-disabled' : ''}`}>
                <span>Create Account</span>
                <LuArrowRight size={14} strokeWidth={2} />
            </button>

            <p className="acard__signin">
                <span>Already have an account?</span>
                <b role="button" tabIndex={0} onClick={onSignIn} onKeyDown={(e) => e.key === 'Enter' && onSignIn()}>Sign In</b>
            </p>
        </form>
    )
}

export default RegisterCard
