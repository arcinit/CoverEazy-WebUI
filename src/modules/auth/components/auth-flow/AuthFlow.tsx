import React, { useState } from 'react'
import "./AuthFlow.scss";
import type { EmailLoginPayload, MobileOtpPayload } from '../login-form/LoginForm';
import type { RegisterPayload } from '../registration-form/RegistrationForm';
import VerifyOtp from '../verify-otp/VerifyOtp';
import RegisterForm from '../registration-form/RegistrationForm';
import AccountReady from '../account-ready/AccountReady';
import LoginForm from '../login-form/LoginForm';


type Step = 'login' | 'register' | 'otp' | 'account-ready';

const AuthFlow = () => {
    const [step, setStep] = useState<Step>('login');
    const [otpPayload, setOtpPayload] = useState<MobileOtpPayload | null>(null);

    // ---- Login (mobile) ----
    const handleSendOtp = (payload: MobileOtpPayload) => {
        // No backend yet — this is where you'd call your "send OTP" API with `payload`
        console.log('[AuthFlow] Send OTP payload:', payload);
        setOtpPayload(payload);
        setStep('otp');
    };

    // ---- Login (email/password) ----
    const handleEmailLogin = (payload: EmailLoginPayload) => {
        // No backend yet — this is where you'd call your "email login" API with `payload`
        console.log('[AuthFlow] Email login payload:', payload);
    };

    // ---- Register ----
    const handleRegister = (payload: RegisterPayload) => {
        // No backend yet — this is where you'd call your "create account" API with `payload`
        console.log('[AuthFlow] Register payload:', payload);
        // Reuse the same OTP verification step, using the mobile number they just registered with
        setOtpPayload({ countryCode: payload.countryCode, mobile: payload.mobile });
        setStep('otp');
    };

    // ---- OTP ----
    const handleVerifyOtp = (otp: string) => {
        if (!otpPayload) return;
        const payload = { ...otpPayload, otp };
        // No backend yet — this is where you'd call your "verify OTP" API with `payload`
        console.log('[AuthFlow] Verify OTP payload:', payload);
        setStep('account-ready');
    };

    const handleChangeNumber = () => {
        setStep('login');
    };

    const handleResendOtp = () => {
        if (!otpPayload) return;
        // No backend yet — this is where you'd call your "resend OTP" API with `otpPayload`
        console.log('[AuthFlow] Resend OTP payload:', otpPayload);
    };

    return (
        <div className="auth-flow">
            {step === 'login' && (
                <LoginForm
                    onSendOtp={handleSendOtp}
                    onEmailLogin={handleEmailLogin}
                    onCreateAccount={() => setStep('register')}
                />
            )}

            {step === 'register' && (
                <RegisterForm
                    onRegister={handleRegister}
                    onSignIn={() => setStep('login')}
                />
            )}

            {step === 'otp' && otpPayload && (
                <VerifyOtp
                    phoneNumber={`${otpPayload.countryCode} ${otpPayload.mobile}`}
                    onVerify={handleVerifyOtp}
                    onChangeNumber={handleChangeNumber}
                    onResend={handleResendOtp}
                />
            )}

            {step === 'account-ready' && (
                <AccountReady brandName="CoverEazy" onGetStarted={() => { window.location.href = '/'; }} />
            )}
        </div>
    );
};

export default AuthFlow