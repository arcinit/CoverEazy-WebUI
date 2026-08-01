import React, { useState, useRef, useEffect } from 'react'
import "./RegistrationForm.scss";
import { FaUser, FaLock, FaPhoneAlt } from 'react-icons/fa';
import { MdOutlineMailOutline } from 'react-icons/md';
import { FiEye, FiEyeOff, FiArrowRight } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi2';

const COUNTRIES = [
    { code: 'US', name: 'United States', dial: '+1', flag: '🇺🇸' },
    { code: 'MY', name: 'Malaysia', dial: '+60', flag: '🇲🇾' },
    { code: 'IN', name: 'India', dial: '+91', flag: '🇮🇳' },
    { code: 'SG', name: 'Singapore', dial: '+65', flag: '🇸🇬' },
    { code: 'ID', name: 'Indonesia', dial: '+62', flag: '🇮🇩' },
    { code: 'TH', name: 'Thailand', dial: '+66', flag: '🇹🇭' },
    { code: 'PH', name: 'Philippines', dial: '+63', flag: '🇵🇭' },
    { code: 'GB', name: 'United Kingdom', dial: '+44', flag: '🇬🇧' },
    { code: 'AU', name: 'Australia', dial: '+61', flag: '🇦🇺' },
    { code: 'AE', name: 'UAE', dial: '+971', flag: '🇦🇪' },
];

export interface RegisterPayload {
    fullName: string;
    email: string;
    countryCode: string;
    mobile: string;
    password: string;
    referralCode: string;
}

interface RegisterFormProps {
    onRegister: (payload: RegisterPayload) => void;
    onSignIn?: () => void;
}

const NAME_REGEX = /^[a-zA-Z\s.'-]{2,}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MOBILE_REGEX = /^[0-9]{7,12}$/;

interface Errors {
    fullName?: string;
    email?: string;
    mobile?: string;
    password?: string;
    confirmPassword?: string;
    agree?: string;
}

const RegisterForm = ({ onRegister, onSignIn }: RegisterFormProps) => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[1]);
    const [isCountryOpen, setIsCountryOpen] = useState(false);
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [referralCode, setReferralCode] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [agree, setAgree] = useState(false);

    const [touched, setTouched] = useState<Record<string, boolean>>({});
    const [errors, setErrors] = useState<Errors>({});

    const countryRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (countryRef.current && !countryRef.current.contains(e.target as Node)) {
                setIsCountryOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const validate = (): Errors => {
        const next: Errors = {};

        if (!fullName) next.fullName = 'Full name is required';
        else if (!NAME_REGEX.test(fullName)) next.fullName = 'Enter a valid full name';

        if (!email) next.email = 'Email is required';
        else if (!EMAIL_REGEX.test(email)) next.email = 'Enter a valid email address';

        if (!mobile) next.mobile = 'Mobile number is required';
        else if (!MOBILE_REGEX.test(mobile)) next.mobile = 'Enter a valid mobile number (7-12 digits)';

        if (!password) next.password = 'Password is required';
        else if (password.length < 8) next.password = 'Minimum 8 characters required';

        if (!confirmPassword) next.confirmPassword = 'Please confirm your password';
        else if (confirmPassword !== password) next.confirmPassword = 'Passwords do not match';

        if (!agree) next.agree = 'You must agree to continue';

        return next;
    };

    // Live-validate any touched field as the user types
    useEffect(() => {
        if (Object.keys(touched).length === 0) return;
        setErrors(validate());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fullName, email, mobile, password, confirmPassword, agree, touched]);

    const markTouched = (field: string) => setTouched((prev) => ({ ...prev, [field]: true }));

    const isFormValid =
        NAME_REGEX.test(fullName) &&
        EMAIL_REGEX.test(email) &&
        MOBILE_REGEX.test(mobile) &&
        password.length >= 8 &&
        confirmPassword === password &&
        agree;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const allTouched = {
            fullName: true,
            email: true,
            mobile: true,
            password: true,
            confirmPassword: true,
            agree: true,
        };
        setTouched(allTouched);
        const validationErrors = validate();
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length > 0) return;

        onRegister({
            fullName,
            email,
            countryCode: selectedCountry.dial,
            mobile,
            password,
            referralCode,
        });
    };

    return (
        <div className="register-card">
            <div className="register-card__container">
                <div className="register-card__header">
                    <div className="register-card__title">Create Account</div>
                    <div className="register-card__desc">Join 500,000+ Malaysians on CoverEazy</div>
                </div>

                <form className="register-card__form" onSubmit={handleSubmit}>
                    <div className="register-card__form-group">
                        <label className="register-card__input-label">Full Name (as per IC)</label>
                        <div className={`register-card__form-input ${touched.fullName && errors.fullName ? 'has-error' : ''}`}>
                            <FaUser className="register-card__input-icon" />
                            <input
                                type="text"
                                placeholder="Ahmad Rizal bin Ismail"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                onBlur={() => markTouched('fullName')}
                            />
                        </div>
                        {touched.fullName && errors.fullName && (
                            <div className="register-card__error">{errors.fullName}</div>
                        )}
                    </div>

                    <div className="register-card__form-group">
                        <label className="register-card__input-label">Email Address</label>
                        <div className={`register-card__form-input ${touched.email && errors.email ? 'has-error' : ''}`}>
                            <MdOutlineMailOutline className="register-card__input-icon" />
                            <input
                                type="email"
                                placeholder="ahmad@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onBlur={() => markTouched('email')}
                            />
                        </div>
                        {touched.email && errors.email && (
                            <div className="register-card__error">{errors.email}</div>
                        )}
                    </div>

                    <div className="register-card__form-group">
                        <label className="register-card__input-label">Mobile Number</label>
                        <div className="register-card__inputs-container">
                            <div className="register-card__country-code-select" ref={countryRef}>
                                <button
                                    type="button"
                                    className="register-card__country-code-trigger"
                                    onClick={() => setIsCountryOpen((prev) => !prev)}
                                >
                                    <span className="register-card__flag">{selectedCountry.flag}</span>
                                    <span>{selectedCountry.dial}</span>
                                    <svg
                                        className={`register-card__chevron ${isCountryOpen ? 'open' : ''}`}
                                        width="10" height="6" viewBox="0 0 10 6" fill="none"
                                    >
                                        <path d="M1 1L5 5L9 1" stroke="#586474" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>

                                {isCountryOpen && (
                                    <ul className="register-card__country-dropdown">
                                        {COUNTRIES.map((country) => (
                                            <li
                                                key={country.code}
                                                className={`register-card__country-option ${country.code === selectedCountry.code ? 'selected' : ''}`}
                                                onClick={() => {
                                                    setSelectedCountry(country);
                                                    setIsCountryOpen(false);
                                                }}
                                            >
                                                <span className="register-card__flag">{country.flag}</span>
                                                <span className="register-card__country-dial">{country.dial}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                            <div className={`register-card__form-input ${touched.mobile && errors.mobile ? 'has-error' : ''}`}>
                                <FaPhoneAlt className="register-card__input-icon" />
                                <input
                                    type="text"
                                    inputMode="numeric"
                                    placeholder="012-345 6789"
                                    value={mobile}
                                    onChange={(e) => setMobile(e.target.value.replace(/[^0-9]/g, ''))}
                                    onBlur={() => markTouched('mobile')}
                                />
                            </div>
                        </div>
                        {touched.mobile && errors.mobile && (
                            <div className="register-card__error">{errors.mobile}</div>
                        )}
                    </div>

                    <div className="register-card__form-group">
                        <label className="register-card__input-label">Password</label>
                        <div className={`register-card__form-input ${touched.password && errors.password ? 'has-error' : ''}`}>
                            <FaLock className="register-card__input-icon" />
                            <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Minimum 8 characters"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                onBlur={() => markTouched('password')}
                            />
                            <button
                                type="button"
                                className="register-card__eye-toggle"
                                onClick={() => setShowPassword((prev) => !prev)}
                                tabIndex={-1}
                            >
                                {showPassword ? <FiEyeOff /> : <FiEye />}
                            </button>
                        </div>
                        {touched.password && errors.password && (
                            <div className="register-card__error">{errors.password}</div>
                        )}
                    </div>

                    <div className="register-card__form-group">
                        <label className="register-card__input-label">Confirm Password</label>
                        <div className={`register-card__form-input ${touched.confirmPassword && errors.confirmPassword ? 'has-error' : ''}`}>
                            <FaLock className="register-card__input-icon" />
                            <input
                                type={showConfirmPassword ? 'text' : 'password'}
                                placeholder="Re-enter password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                onBlur={() => markTouched('confirmPassword')}
                            />
                            <button
                                type="button"
                                className="register-card__eye-toggle"
                                onClick={() => setShowConfirmPassword((prev) => !prev)}
                                tabIndex={-1}
                            >
                                {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
                            </button>
                        </div>
                        {touched.confirmPassword && errors.confirmPassword && (
                            <div className="register-card__error">{errors.confirmPassword}</div>
                        )}
                    </div>

                    <div className="register-card__form-group">
                        <label className="register-card__input-label">Referral Code (Optional)</label>
                        <div className="register-card__form-input">
                            <HiSparkles className="register-card__input-icon" />
                            <input
                                type="text"
                                placeholder="e.g. COVEREAZY20"
                                value={referralCode}
                                onChange={(e) => setReferralCode(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="register-card__agree-row">
                        <label className="register-card__checkbox">
                            <input
                                type="checkbox"
                                checked={agree}
                                onChange={(e) => { setAgree(e.target.checked); markTouched('agree'); }}
                            />
                            <span className="register-card__checkbox-box" />
                            <span className="register-card__agree-text">
                                I agree to the <a href="#" onClick={(e) => e.stopPropagation()}>Terms of Service</a> and{' '}
                                <a href="#" onClick={(e) => e.stopPropagation()}>Privacy Policy</a>. I am at least 18 years old.
                            </span>
                        </label>
                        {touched.agree && errors.agree && (
                            <div className="register-card__error">{errors.agree}</div>
                        )}
                    </div>

                    <div className="register-card__form-actions">
                        <button
                            type="submit"
                            className="register-card__submit-btn"
                            disabled={!isFormValid}
                        >
                            Create Account <FiArrowRight className="icon" />
                        </button>
                    </div>
                </form>

                <div className="register-card__footer">
                    Already have an account?{' '}
                    <a href="#" onClick={(e) => { e.preventDefault(); onSignIn?.(); }}>Sign In</a>
                </div>
            </div>
        </div>
    );
};

export default RegisterForm