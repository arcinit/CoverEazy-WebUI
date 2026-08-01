import React from 'react'
import "./AccountReady.scss";
import { FaShieldAlt } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi2';
import { FiGlobe, FiRefreshCw } from 'react-icons/fi';
import { PiAirplaneTiltFill } from 'react-icons/pi';
import { HiOutlineDocumentText } from 'react-icons/hi2';

interface FeatureItem {
    icon: React.ReactNode;
    label: string;
    iconBg: string;
}

const FEATURES: FeatureItem[] = [
    { icon: <FiGlobe />, label: 'Compare Insurance', iconBg: '#E9EEFB' },
    { icon: <FiRefreshCw />, label: 'Renew Road Tax', iconBg: '#FBEAE0' },
    { icon: <PiAirplaneTiltFill />, label: 'Travel Insurance', iconBg: '#E4F5EC' },
    { icon: <HiOutlineDocumentText />, label: 'Submit Claim', iconBg: '#F6E9F8' },
];

const FEATURE_ICON_COLORS = ['#3B5BDB', '#E8590C', '#12B76A', '#9C36B5'];

interface AccountReadyProps {
    brandName?: string;
    onGetStarted?: () => void;
}

const AccountReady = ({ brandName = 'CoverEazy', onGetStarted }: AccountReadyProps) => {
    const handleGetStarted = () => {
        if (onGetStarted) {
            onGetStarted();
        } else {
            window.location.href = '/';
        }
    };

    return (
        <div className="account-ready">
            <div className="account-ready__container">
                <div className="account-ready__icon-wrap">
                    <FaShieldAlt className="account-ready__icon" />
                </div>

                <div className="account-ready__tag">
                    <HiSparkles className="account-ready__tag-icon" />
                    <span>ACCOUNT READY</span>
                </div>

                <div className="account-ready__title">Welcome to {brandName}!</div>

                <div className="account-ready__desc">
                    Your digital insurance wallet is ready. All your policies, claims
                    and renewals — one secure place.
                </div>

                <div className="account-ready__features">
                    {FEATURES.map((feature, index) => (
                        <div className="account-ready__feature-card" key={feature.label}>
                            <div
                                className="account-ready__feature-icon"
                                style={{ background: feature.iconBg, color: FEATURE_ICON_COLORS[index] }}
                            >
                                {feature.icon}
                            </div>
                            <span className="account-ready__feature-label">{feature.label}</span>
                        </div>
                    ))}
                </div>

                <div className="account-ready__actions">
                    <button type="button" className="account-ready__cta-btn" onClick={handleGetStarted}>
                        Get Started!
                    </button>
                </div>

                <div className="account-ready__footer">
                    By continuing, you agree to {brandName}'s <a href="#">Terms of Service</a>
                </div>
            </div>
        </div>
    );
};

export default AccountReady