import React, { useEffect, useRef, useState } from 'react'
import './AuthCards.scss'
import { LuShield } from 'react-icons/lu'
import { TrustFooter } from './shared'

const OTP_LENGTH = 6
const RESEND_SECONDS = 58

interface OtpCardProps {
    target: string
    onVerify: (otp: string) => void
    onChangeNumber: () => void
    onResend: () => void
    onCreateAccount: () => void
}

const OtpCard = ({ target, onVerify, onChangeNumber, onResend, onCreateAccount }: OtpCardProps) => {
    const [digits, setDigits] = useState<string[]>(Array(OTP_LENGTH).fill(''))
    const [secondsLeft, setSecondsLeft] = useState(RESEND_SECONDS)
    const refs = useRef<Array<HTMLInputElement | null>>([])

    useEffect(() => {
        if (secondsLeft <= 0) return
        const t = setInterval(() => setSecondsLeft((s) => (s > 0 ? s - 1 : 0)), 1000)
        return () => clearInterval(t)
    }, [secondsLeft])

    const code = digits.join('')
    const complete = code.length === OTP_LENGTH

    const setDigit = (value: string, index: number) => {
        const digit = value.replace(/\D/g, '').slice(-1)
        setDigits((prev) => prev.map((d, i) => (i === index ? digit : d)))
        if (digit && index < OTP_LENGTH - 1) refs.current[index + 1]?.focus()
    }

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === 'Backspace' && !digits[index] && index > 0) refs.current[index - 1]?.focus()
    }

    const onPaste = (e: React.ClipboardEvent) => {
        const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, OTP_LENGTH)
        if (!pasted) return
        e.preventDefault()
        setDigits(Array.from({ length: OTP_LENGTH }, (_, i) => pasted[i] ?? ''))
        refs.current[Math.min(pasted.length, OTP_LENGTH - 1)]?.focus()
    }

    const resend = () => {
        if (secondsLeft > 0) return
        setSecondsLeft(RESEND_SECONDS)
        onResend()
    }

    return (
        <div className="acard">
            <div className="acard__section acard__otp">
                <h2 className="acard__title">Verify Your Identity</h2>
                <div className="acard__shield"><LuShield size={34} strokeWidth={1.6} /></div>
                <p className="acard__sent">
                    <span>We've sent a 6-digit code to</span>
                    <b>{target}</b>
                </p>
                <div className="acard__boxes" onPaste={onPaste}>
                    {digits.map((d, i) => (
                        <input
                            key={i}
                            ref={(el) => { refs.current[i] = el }}
                            className={`acard__box${d ? ' is-filled' : ''}`}
                            type="text"
                            inputMode="numeric"
                            maxLength={1}
                            value={d}
                            aria-label={`Digit ${i + 1}`}
                            onChange={(e) => setDigit(e.target.value, i)}
                            onKeyDown={(e) => onKeyDown(e, i)}
                        />
                    ))}
                </div>
                <div className="acard__resend">
                    {secondsLeft > 0 ? (
                        <span>Resend in <em>0:{String(secondsLeft).padStart(2, '0')}</em></span>
                    ) : (
                        <button type="button" onClick={resend}>Resend OTP</button>
                    )}
                    <i />
                    <button type="button" onClick={onChangeNumber}>Change Number</button>
                </div>
                <button
                    type="button"
                    className={`acard__primary acard__primary--verify${complete ? '' : ' is-empty'}`}
                    onClick={() => complete && onVerify(code)}
                >
                    Verify &amp; Continue
                </button>
            </div>
            <TrustFooter onCreateAccount={onCreateAccount} />
        </div>
    )
}

export default OtpCard
