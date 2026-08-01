import React, { useState, useRef, useEffect } from 'react'
import "./VerifyOtp.scss";
import { FaShieldAlt } from 'react-icons/fa';
import { CiLock } from 'react-icons/ci';
import { HiOutlineCheckBadge } from 'react-icons/hi2';
import { MdOutlineVerifiedUser } from 'react-icons/md';
import { LuFingerprint } from 'react-icons/lu';

const OTP_LENGTH = 6;
const RESEND_SECONDS = 58;

interface VerifyOtpProps {
    phoneNumber?: string;
    onVerify?: (otp: string) => void;
    onChangeNumber?: () => void;
    onResend?: () => void;
}

const VerifyOtp = ({
    phoneNumber = '+60 987-7654 321',
    onVerify,
    onChangeNumber,
    onResend,
}: VerifyOtpProps) => {
    const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(''));
    const [secondsLeft, setSecondsLeft] = useState(RESEND_SECONDS);
    const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

    // Countdown for resend
    useEffect(() => {
        if (secondsLeft <= 0) return;
        const timer = setInterval(() => {
            setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(timer);
    }, [secondsLeft]);

    const formatTime = (secs: number) => {
        const s = secs.toString().padStart(2, '0');
        return `0:${s}`;
    };

    const handleChange = (value: string, index: number) => {
        // only allow single digit
        const digit = value.replace(/[^0-9]/g, '').slice(-1);
        const next = [...otp];
        next[index] = digit;
        setOtp(next);

        if (digit && index < OTP_LENGTH - 1) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
        const pasted = e.clipboardData.getData('text').replace(/[^0-9]/g, '').slice(0, OTP_LENGTH);
        if (!pasted) return;
        e.preventDefault();
        const next = Array(OTP_LENGTH).fill('');
        pasted.split('').forEach((char, i) => {
            next[i] = char;
        });
        setOtp(next);
        const focusIndex = Math.min(pasted.length, OTP_LENGTH - 1);
        inputRefs.current[focusIndex]?.focus();
    };

    const handleResend = () => {
        if (secondsLeft > 0) return;
        setSecondsLeft(RESEND_SECONDS);
        setOtp(Array(OTP_LENGTH).fill(''));
        inputRefs.current[0]?.focus();
        onResend?.();
    };

    const handleVerify = () => {
        onVerify?.(otp.join(''));
    };

    const isComplete = otp.every((digit) => digit !== '');

    return (
        <div className="verify-otp">
            <div className="verify-otp__container">
                <div className="verify-otp__title">Verify Your Identity</div>

                <div className="verify-otp__icon-wrap">
                    <FaShieldAlt className="verify-otp__icon" />
                </div>

                <div className="verify-otp__desc">
                    We've sent a 6-digit code to
                    <div className="verify-otp__phone">{phoneNumber}</div>
                </div>

                <div className="verify-otp__inputs">
                    {otp.map((digit, index) => (
                        <input
                            key={index}
                            ref={(el) => { inputRefs.current[index] = el; }}
                            type="text"
                            inputMode="numeric"
                            maxLength={1}
                            className="verify-otp__input"
                            value={digit}
                            onChange={(e) => handleChange(e.target.value, index)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            onPaste={handlePaste}
                        />
                    ))}
                </div>

                <div className="verify-otp__meta">
                    {secondsLeft > 0 ? (
                        <span>Resend in <span className="verify-otp__timer">{formatTime(secondsLeft)}</span></span>
                    ) : (
                        <span className="verify-otp__resend" onClick={handleResend}>Resend Code</span>
                    )}
                    <span className="verify-otp__dot">•</span>
                    <span className="verify-otp__change" onClick={onChangeNumber}>Change Number</span>
                </div>

                <div className="verify-otp__actions">
                    <button
                        type="button"
                        className="verify-otp__submit-btn"
                        disabled={!isComplete}
                        onClick={handleVerify}
                    >
                        Verify & Continue
                    </button>
                </div>

                <div className="verify-otp__badges">
                    <div className="verify-otp__badge">
                        <CiLock className="icon" />
                        <div className="verify-otp__badge-summary">
                            <div className='title'>256-bit</div>
                            <div className='val'>Encryption</div>
                        </div>
                    </div>
                    <div className="verify-otp__badge">
                        <HiOutlineCheckBadge className="icon" />
                        <div className="verify-otp__badge-summary">
                            <div className='title'>PDPA</div>
                            <div className='val'>Compliant</div>
                        </div>
                    </div>
                    <div className="verify-otp__badge">
                        <MdOutlineVerifiedUser className="icon" />
                        <div className="verify-otp__badge-summary">
                            <div className='title'>Licensed</div>
                            <div className='val'>Platform</div>
                        </div>
                    </div>
                    <div className="verify-otp__badge">
                        <LuFingerprint className="icon" />
                        <div className="verify-otp__badge-summary">
                            <div className='title'>Secure</div>
                            <div className='val'>Auth</div>
                        </div>
                    </div>
                </div>

                <div className="verify-otp__footer">
                    Don't have an account? <a href="#">Create Account</a>
                </div>
            </div>
        </div>
    );
};

export default VerifyOtp