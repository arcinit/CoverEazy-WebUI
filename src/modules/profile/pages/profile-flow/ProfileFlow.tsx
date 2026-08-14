import React, { useState } from 'react';
import {
    FiEdit2, FiShield, FiFileText, FiTruck, FiSend, FiRefreshCw, FiGift,
    FiArrowLeft, FiGrid, FiUser, FiPhoneCall, FiCreditCard, FiBell,
    FiLock, FiLogOut, FiArrowRight,
} from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';
import './ProfileFlow.scss';
import Header from '../../../../shared/layouts/header/Header';
import Overview from '../../components/overview/Overview';
import PersonalInformation from '../../components/personal-information/PersonalInformation';
import PolicyWallet from '../../components/policy-wallet/PolicyWallet';
import SecuritySettings from '../../components/security-privacy/SecurityPrivacy';
import Vehicles from '../../components/vehicle/Vehicle';
import ClaimsManagement from '../../components/claims-management/ClaimsManagement';
import EmergencyContact from '../../components/emergency-contact/EmergencyContact';
import PaymentMethods from '../../components/payment-methods/PaymentMethods';
import Notifications from '../../components/notifications/Notifications';
import { tokenService } from '../../../../shared/services/token.service';
import { useNavigate } from 'react-router-dom';

// ---------------------------------------------------------------------
// Static data
// ---------------------------------------------------------------------
interface StatItem {
    id: string;
    icon: React.ElementType;
    value: string | number;
    label: string;
}

const STATS: StatItem[] = [
    { id: 'policies', icon: FiShield, value: 3, label: 'Active Policies' },
    { id: 'claims', icon: FiFileText, value: 2, label: 'Claims' },
    { id: 'vehicles', icon: FiTruck, value: 1, label: 'Vehicles' },
    { id: 'travel', icon: FiSend, value: 1, label: 'Travel Policies' },
    { id: 'roadtax', icon: FiRefreshCw, value: '36d', label: 'Road Tax Due' },
    { id: 'points', icon: FiGift, value: '1,240', label: 'Reward Points' },
];

const USER = {
    initials: 'AR',
    name: 'Ahmad Rizal bin Ismail',
    membership: 'Gold Member',
    email: 'ahmad.rizal@email.com',
    phone: '+60 12-345 6789',
    memberSince: 'January 2022',
    profileCompletion: 88,
};

// menu id ko hi key bana diya — same key se component render hoga
type MenuKey =
    | 'overview'
    | 'personal'
    | 'wallet'
    | 'vehicles'
    | 'claims'
    | 'emergency'
    | 'payment'
    | 'notifications'
    | 'security';

interface NavItem {
    id: MenuKey;
    label: string;
    icon: React.ElementType;
    count?: number;
}

const NAV_ITEMS: NavItem[] = [
    { id: 'overview', label: 'Overview', icon: FiGrid },
    { id: 'personal', label: 'Personal Information', icon: FiUser },
    { id: 'wallet', label: 'Policy Wallet', icon: FiShield, count: 3 },
    { id: 'vehicles', label: 'Vehicles', icon: FiTruck },
    { id: 'claims', label: 'Claims', icon: FiFileText, count: 2 },
    { id: 'emergency', label: 'Emergency Contact', icon: FiPhoneCall },
    { id: 'payment', label: 'Payment Methods', icon: FiCreditCard },
    { id: 'notifications', label: 'Notifications', icon: FiBell, count: 5 },
    { id: 'security', label: 'Security & Settings', icon: FiLock },
];



// ---------------------------------------------------------------------
// ProfileFlow — Header + Sidebar + local render logic (no routing)
// ---------------------------------------------------------------------
const ProfileFlow: React.FC = () => {
    const [activeMenu, setActiveMenu] = useState<MenuKey>('overview');
    const navigate=useNavigate();
    const renderContent = () => {
        switch (activeMenu) {
            case 'overview':
                return <Overview />;
            case 'personal':
                return <PersonalInformation/>;
            case 'wallet':
                return <PolicyWallet/>;
            case 'vehicles':
                return <Vehicles/>;
            case 'claims':
                return <ClaimsManagement/>;
            case 'emergency':
                return <EmergencyContact/>;
            case 'payment':
                return <PaymentMethods/>;
            case 'notifications':
                return <Notifications/>;
            case 'security':
                return <SecuritySettings/>;
            default:
                return <Overview />;
        }
    };

    const handleLogout = () => {
        tokenService.setIsAuthenticated("false");
        navigate("/", { replace:true })
    }

    return <>
        <Header />
        <div className="profile-flow">
            {/* ---------- Header ---------- */}
            <header className="profile-flow__header">
                <div className="profile-flow__identity">
                    <div className="profile-flow__avatar-wrap">
                        <div className="profile-flow__avatar">{USER.initials}</div>
                        <span className="profile-flow__avatar-status" />
                    </div>

                    <div className="profile-flow__info">
                        <div className="profile-flow__name-row">
                            <h1 className="profile-flow__name">{USER.name}</h1>
                            <span className="profile-flow__badge">
                                <FaStar className="profile-flow__badge-icon" />
                                {USER.membership}
                            </span>
                        </div>
                        <p className="profile-flow__contact">
                            {USER.email} &middot; {USER.phone}
                        </p>

                        <div className="profile-flow__meta">
                            <div className="profile-flow__meta-item">
                                <span className="profile-flow__meta-label">Member Since</span>
                                <span className="profile-flow__meta-value">{USER.memberSince}</span>
                            </div>
                            <div className="profile-flow__meta-item">
                                <span className="profile-flow__meta-label">Profile</span>
                                <div className="profile-flow__progress">
                                    <div className="profile-flow__progress-track">
                                        <div
                                            className="profile-flow__progress-fill"
                                            style={{ width: `${USER.profileCompletion}%` }}
                                        />
                                    </div>
                                    <span className="profile-flow__meta-value">
                                        {USER.profileCompletion}%
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="profile-flow__stats">
                    {STATS.map(({ id, icon: Icon, value, label }) => (
                        <div className="profile-flow__stat" key={id}>
                            <Icon className="profile-flow__stat-icon" />
                            <div className="profile-flow__stat-text">
                                <span className="profile-flow__stat-value">{value}</span>
                                <span className="profile-flow__stat-label">{label}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <button type="button" className="profile-flow__edit-btn">
                    <FiEdit2 />
                    Edit Profile
                </button>
            </header>

            {/* ---------- Body: Sidebar + locally-rendered content ---------- */}
            <div className="profile-flow__body">
                <aside className="profile-flow__sidebar">
                    <button type="button" className="profile-flow__back">
                        <FiArrowLeft />
                        Back to Home
                    </button>

                    <nav className="profile-flow__nav">
                        <ul className="profile-flow__list">
                            {NAV_ITEMS.map(({ id, label, icon: Icon, count }) => (
                                <li className="profile-flow__item" key={id}>
                                    <button
                                        type="button"
                                        onClick={() => setActiveMenu(id)}
                                        className={`profile-flow__link${activeMenu === id ? ' profile-flow__link--active' : ''}`}
                                    >
                                        <Icon className="profile-flow__link-icon" />
                                        <span className="profile-flow__link-label">{label}</span>
                                        {count ? (
                                            <span className="profile-flow__link-count">{count}</span>
                                        ) : null}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="profile-flow__refer">
                        <div className="profile-flow__refer-header">
                            <FiGift className="profile-flow__refer-icon" />
                            <span className="profile-flow__refer-title">Refer &amp; Earn</span>
                        </div>
                        <p className="profile-flow__refer-text">
                            Invite your friends and earn up to RM100
                        </p>
                        <button type="button" className="profile-flow__refer-btn">
                            Refer Now
                            <FiArrowRight />
                        </button>
                    </div>

                    <button type="button" className="profile-flow__logout" onClick={handleLogout}>
                        <FiLogOut />
                        Logout
                    </button>
                </aside>

                {/* activeMenu ke hisaab se component yahan render hota hai */}
                <main className="profile-flow__content">
                    {renderContent()}
                </main>
            </div>
        </div>
    </>
};

export default ProfileFlow;