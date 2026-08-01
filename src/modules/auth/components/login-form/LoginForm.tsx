import React, { useState, useRef, useEffect } from 'react'
import "./LoginForm.scss";
import { FaMobileAlt, FaApple, FaLock } from 'react-icons/fa';
import { MdEmail, MdOutlineVerifiedUser, MdOutlineMailOutline } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { BsMicrosoft } from 'react-icons/bs';
import { CiLock } from 'react-icons/ci';
import { HiOutlineCheckBadge } from 'react-icons/hi2';
import { LuFingerprint } from 'react-icons/lu';
import { FiEye, FiEyeOff } from 'react-icons/fi';

// Dummy country list — replace with your real data source / API later
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

export interface MobileOtpPayload {
  countryCode: string;
  mobile: string;
}

export interface EmailLoginPayload {
  email: string;
  password: string;
  remember: boolean;
}

interface LoginFormProps {
  onSendOtp: (payload: MobileOtpPayload) => void;
  onEmailLogin?: (payload: EmailLoginPayload) => void;
  onCreateAccount?: () => void;
}

const MOBILE_REGEX = /^[0-9]{7,12}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const LoginForm = ({ onSendOtp, onEmailLogin, onCreateAccount }: LoginFormProps) => {
  const [activeTab, setActiveTab] = useState<'mobile' | 'email'>('mobile');

  // ---- Mobile tab state ----
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[1]); // default Malaysia +60
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [mobile, setMobile] = useState('');
  const [mobileError, setMobileError] = useState('');
  const [mobileTouched, setMobileTouched] = useState(false);
  const countryRef = useRef<HTMLDivElement>(null);

  // ---- Email tab state ----
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);

  // Close country dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (countryRef.current && !countryRef.current.contains(e.target as Node)) {
        setIsCountryOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Validate mobile on every change (once touched)
  useEffect(() => {
    if (!mobileTouched) return;
    if (!mobile) {
      setMobileError('Mobile number is required');
    } else if (!MOBILE_REGEX.test(mobile)) {
      setMobileError('Enter a valid mobile number (7-12 digits)');
    } else {
      setMobileError('');
    }
  }, [mobile, mobileTouched]);

  // Validate email on every change (once touched)
  useEffect(() => {
    if (!emailTouched) return;
    if (!email) {
      setEmailError('Email is required');
    } else if (!EMAIL_REGEX.test(email)) {
      setEmailError('Enter a valid email address');
    } else {
      setEmailError('');
    }
  }, [email, emailTouched]);

  // Validate password on every change (once touched)
  useEffect(() => {
    if (!passwordTouched) return;
    if (!password) {
      setPasswordError('Password is required');
    } else if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
    } else {
      setPasswordError('');
    }
  }, [password, passwordTouched]);

  const isMobileValid = MOBILE_REGEX.test(mobile);
  const isEmailFormValid = EMAIL_REGEX.test(email) && password.length >= 6;

  const handleMobileChange = (value: string) => {
    const digitsOnly = value.replace(/[^0-9]/g, '');
    setMobile(digitsOnly);
  };

  const handleSendOtp = () => {
    setMobileTouched(true);
    if (!MOBILE_REGEX.test(mobile)) {
      setMobileError(!mobile ? 'Mobile number is required' : 'Enter a valid mobile number (7-12 digits)');
      return;
    }
    onSendOtp({ countryCode: selectedCountry.dial, mobile });
  };

  const handleEmailLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmailTouched(true);
    setPasswordTouched(true);

    let valid = true;
    if (!EMAIL_REGEX.test(email)) {
      setEmailError(!email ? 'Email is required' : 'Enter a valid email address');
      valid = false;
    }
    if (password.length < 6) {
      setPasswordError(!password ? 'Password is required' : 'Password must be at least 6 characters');
      valid = false;
    }
    if (!valid) return;

    onEmailLogin?.({ email, password, remember });
  };

  return <>
    <div className="login-card">
      <div className="login-card__container">
        <div className="login-card__header">
          <div className="login-card__title">Welcome Back</div>
          <div className="login-card__desc">
            Access your insurance, road tax, travel policies and claims from one secure account.
          </div>
        </div>

        <div className="login-card__tabs">
          <button
            type="button"
            className={`login-card__tab ${activeTab === 'mobile' ? 'active' : ''}`}
            onClick={() => setActiveTab('mobile')}
          >
            <FaMobileAlt className='icon' />Mobile
          </button>
          <button
            type="button"
            className={`login-card__tab ${activeTab === 'email' ? 'active' : ''}`}
            onClick={() => setActiveTab('email')}
          >
            <MdEmail className='icon' />Email
          </button>
        </div>

        {activeTab === 'mobile' ? (
          <form
            className="login-card__form"
            onSubmit={(e) => { e.preventDefault(); handleSendOtp(); }}
          >
            <div className="login-card__form-group">
              <label className="login-card__input-label">Mobile Number</label>
              <div className="login-card__inputs-container">
                <div className="login-card__country-code-select" ref={countryRef}>
                  <button
                    type="button"
                    className="login-card__country-code-trigger"
                    onClick={() => setIsCountryOpen((prev) => !prev)}
                  >
                    <span className="login-card__flag">{selectedCountry.flag}</span>
                    <span>{selectedCountry.dial}</span>
                    <svg
                      className={`login-card__chevron ${isCountryOpen ? 'open' : ''}`}
                      width="10" height="6" viewBox="0 0 10 6" fill="none"
                    >
                      <path d="M1 1L5 5L9 1" stroke="#586474" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  {isCountryOpen && (
                    <ul className="login-card__country-dropdown">
                      {COUNTRIES.map((country) => (
                        <li
                          key={country.code}
                          className={`login-card__country-option ${country.code === selectedCountry.code ? 'selected' : ''}`}
                          onClick={() => {
                            setSelectedCountry(country);
                            setIsCountryOpen(false);
                          }}
                        >
                          <span className="login-card__flag">{country.flag}</span>
                          <span className="login-card__country-dial">{country.dial}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className={`login-card__form-input ${mobileTouched && mobileError ? 'has-error' : ''}`}>
                  <FaPhoneAlt className="login-card__input-icon" />
                  <input
                    type="text"
                    inputMode="numeric"
                    placeholder="012-345 6789"
                    value={mobile}
                    onChange={(e) => handleMobileChange(e.target.value)}
                    onBlur={() => setMobileTouched(true)}
                  />
                </div>
              </div>
              {mobileTouched && mobileError ? (
                <div className="login-card__error">{mobileError}</div>
              ) : (
                <div className="login-card__hint">We'll send a 6-digit OTP to verify your number.</div>
              )}
            </div>

            <div className="login-card__form-actions">
              <button
                type="submit"
                className="login-card__submit-btn"
                disabled={mobileTouched && !isMobileValid}
              >
                <FaPhoneAlt className="icon" />
                Send OTP
              </button>
            </div>
          </form>
        ) : (
          <form className="login-card__form" onSubmit={handleEmailLoginSubmit}>
            <div className="login-card__form-group">
              <label className="login-card__input-label">Email Address</label>
              <div className={`login-card__form-input login-card__form-input--full ${emailTouched && emailError ? 'has-error' : ''}`}>
                <MdOutlineMailOutline className="login-card__input-icon" />
                <input
                  type="email"
                  placeholder="ahmad@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => setEmailTouched(true)}
                />
              </div>
              {emailTouched && emailError && (
                <div className="login-card__error">{emailError}</div>
              )}
            </div>

            <div className="login-card__form-group">
              <label className="login-card__input-label">Password</label>
              <div className={`login-card__form-input login-card__form-input--full ${passwordTouched && passwordError ? 'has-error' : ''}`}>
                <FaLock className="login-card__input-icon" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onBlur={() => setPasswordTouched(true)}
                />
                <button
                  type="button"
                  className="login-card__eye-toggle"
                  onClick={() => setShowPassword((prev) => !prev)}
                  tabIndex={-1}
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
              {passwordTouched && passwordError && (
                <div className="login-card__error">{passwordError}</div>
              )}
            </div>

            <div className="login-card__form-meta">
              <label className="login-card__checkbox">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                />
                <span className="login-card__checkbox-box" />
                Remember me
              </label>
              <a href="#" className="login-card__forgot-link">Forgot password?</a>
            </div>

            <div className="login-card__form-actions">
              <button
                type="submit"
                className="login-card__submit-btn"
                disabled={(emailTouched || passwordTouched) && !isEmailFormValid}
              >
                <FaLock className="icon" />
                Login Securely
              </button>
            </div>
          </form>
        )}

        <div className="login-card__divider">
          <span>or continue with</span>
        </div>

        <div className="login-card__social-row">
          <button type="button" className="login-card__social-btn">
            <FcGoogle className="icon" />Google
          </button>
          <button type="button" className="login-card__social-btn">
            <FaApple className="icon" />Apple
          </button>
          <button type="button" className="login-card__social-btn">
            <BsMicrosoft className="icon microsoft" />Microsoft
          </button>
        </div>

        <div className="login-card__badges">
          <div className="login-card__badge">
            <CiLock className="icon" />
            <div className="login-card__badge-summary">
              <div className='title'>256-bit</div>
              <div className='val'>Encryption</div>
            </div>
          </div>
          <div className="login-card__badge">
            <HiOutlineCheckBadge className="icon" />
            <div className="login-card__badge-summary">
              <div className='title'>PDPA</div>
              <div className='val'>Compliant</div>
            </div>
          </div>
          <div className="login-card__badge">
            <MdOutlineVerifiedUser className="icon" />
            <div className="login-card__badge-summary">
              <div className='title'>Licensed</div>
              <div className='val'>Platform</div>
            </div>
          </div>
          <div className="login-card__badge">
            <LuFingerprint className="icon" />
            <div className="login-card__badge-summary">
              <div className='title'>Secure</div>
              <div className='val'>Auth</div>
            </div>
          </div>
        </div>



        <div className="login-card__footer">
          Don't have an account?{' '}
          <a href="#" onClick={(e) => { e.preventDefault(); onCreateAccount?.(); }}>Create Account</a>
        </div>
      </div>
    </div>
  </>
}

export default LoginForm