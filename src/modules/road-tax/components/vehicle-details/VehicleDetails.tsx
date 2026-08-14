import React from 'react';
import { FiCheckCircle, FiArrowRight } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';
import { PiCarProfileBold } from 'react-icons/pi';
import './VehicleDetails.scss';
import { BiCar } from 'react-icons/bi';
import carImage from "./images/car.png"

const SYSTEM_CHECKS = [
    {
        id: 'insurance',
        title: 'Vehicle Insurance Active',
        detail: 'Policy MOTO-2024-88721 valid until Dec 2026',
        time: '09:42:11',
    },
    {
        id: 'summons',
        title: 'No Outstanding Summons',
        detail: 'Zero pending summons across all databases',
        time: '09:42:16',
    },
    {
        id: 'jpj',
        title: 'JPJ Record Verified',
        detail: 'Registration matched with JPJ database',
        time: '09:42:13',
    },
    {
        id: 'ownership',
        title: 'Ownership Confirmed',
        detail: 'Owner identity verified via MyKad lookup',
        time: '09:42:14',
    },
    {
        id: 'blacklist',
        title: 'Blacklist Check Passed',
        detail: 'Vehicle cleared across 4 blacklist registries',
        time: '09:42:17',
    },
    {
        id: 'eligible',
        title: 'Road Tax Eligible',
        detail: 'All criteria met · Renewal window open',
        time: '09:42:18',
    },
];

const VEHICLE = {
    name: 'Toyota Camry',
    year: '2022',
    transmission: 'Automatic',
    fuel: 'Petrol',
    plate: 'WXY 8821',
    roadTaxExpiry: '31 Jul 2026',
    jpjVerified: 'Confirmed',
    ownership: 'Verified',
    renewalStatus: 'Ready',
};

const SUMMARY = [
    { label: 'Current Expiry', value: '31 Jul 2026' },
    { label: 'Vehicle Class', value: 'Saloon (Private)' },
    { label: 'Engine CC', value: '2,500 cc' },
    { label: 'Base Rate', value: 'RM 90.00/yr' },
];

const VehicleDetails = ({ onContinue }:any) => {
    return (
        <div className="eligibility-verification">
            <div className="eligibility-verification__heading">
                <h2 className="eligibility-verification__title">
                    Eligibility <span className="eligibility-verification__title--accent">Verification</span>
                </h2>
                <p className="eligibility-verification__subtitle">
                    Running real-time checks across JPJ, insurance, and summons databases.
                </p>
            </div>

            <div className="eligibility-verification__grid">
                {/* Left column */}
                <div className="eligibility-verification__main">
                    <div className="eligibility-verification__card">
                        <div className="eligibility-verification__card-header">
                            <span className="eligibility-verification__card-title">System Checks</span>
                            <span className="eligibility-verification__card-meta">6/6 verified</span>
                        </div>

                        <div className="eligibility-verification__checks">
                            {SYSTEM_CHECKS.map((check) => (
                                <div className="eligibility-verification__check" key={check.id}>
                                    <span className="eligibility-verification__check-icon">
                                        <FiCheckCircle />
                                    </span>
                                    <div className="eligibility-verification__check-body">
                                        <div className="eligibility-verification__check-row">
                                            <span className="eligibility-verification__check-title">
                                                {check.title}
                                            </span>
                                            <span className="eligibility-verification__check-status">
                                                Verified
                                            </span>
                                        </div>
                                        <p className="eligibility-verification__check-detail">
                                            {check.detail}
                                        </p>
                                        <span className="eligibility-verification__check-time">
                                            {check.time} &middot; System verified
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="eligibility-verification__banner">
                        <div className="eligibility-verification__banner-top">
                            <span className="eligibility-verification__banner-flag">
                                <FiCheckCircle className='icon' />
                                Eligibility Confirmed
                            </span>
                            <div className="eligibility-verification__banner-time">
                                <span className="eligibility-verification__banner-time-label">
                                    Est. Renewal Time
                                </span>
                                <span className="eligibility-verification__banner-time-value">
                                    3 min
                                </span>
                            </div>
                        </div>

                        <h3 className="eligibility-verification__banner-title">
                            Vehicle Eligible For Renewal
                        </h3>
                        <p className="eligibility-verification__banner-desc">
                            All 6 checks passed &middot; Renewal window is open
                        </p>

                        <div className="eligibility-verification__banner-bottom">
                            <div className="eligibility-verification__banner-stats">
                                <div className="eligibility-verification__banner-stat">
                                    <span className="eligibility-verification__banner-stat-label">
                                        Verification Completed
                                    </span>
                                    <span className="eligibility-verification__banner-stat-value">
                                        09:42:18
                                    </span>
                                </div>
                                <div className="eligibility-verification__banner-stat">
                                    <span className="eligibility-verification__banner-stat-label">
                                        Renewal Ready
                                    </span>
                                    <span className="eligibility-verification__banner-stat-value">
                                        Yes &middot; Immediate
                                    </span>
                                </div>
                            </div>

                            <button
                                type="button"
                                className="eligibility-verification__cta"
                                onClick={onContinue}
                            >
                                Configure Renewal
                                <FiArrowRight />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right sidebar */}
                <aside className="eligibility-verification__sidebar">
                    <div className="eligibility-verification__vehicle-card">
                        <span className="eligibility-verification__vehicle-tag">
                            <BiCar />
                            Your Vehicle
                        </span>

                        <div className="eligibility-verification__vehicle-image">
                            <img src={carImage} alt="car" />
                        </div>

                        <h3 className="eligibility-verification__vehicle-name">
                            {VEHICLE.name}
                        </h3>
                        <p className="eligibility-verification__vehicle-specs">
                            {VEHICLE.year} <span className="eligibility-verification__dot">&middot;</span> {VEHICLE.transmission} <span className="eligibility-verification__dot">&middot;</span> {VEHICLE.fuel}
                        </p>
                        <p className="eligibility-verification__vehicle-plate">{VEHICLE.plate}</p>

                        <div className="eligibility-verification__vehicle-grid">
                            <div className="eligibility-verification__vehicle-cell">
                                <span className="eligibility-verification__vehicle-cell-label">
                                    Road Tax Expiry
                                </span>
                                <span className="eligibility-verification__vehicle-cell-value">
                                    {VEHICLE.roadTaxExpiry}
                                </span>
                            </div>
                            <div className="eligibility-verification__vehicle-cell">
                                <span className="eligibility-verification__vehicle-cell-label">
                                    JPJ Verified
                                </span>
                                <span className="eligibility-verification__vehicle-cell-value eligibility-verification__vehicle-cell-value--green">
                                    {VEHICLE.jpjVerified}
                                </span>
                            </div>
                            <div className="eligibility-verification__vehicle-cell">
                                <span className="eligibility-verification__vehicle-cell-label">
                                    Ownership
                                </span>
                                <span className="eligibility-verification__vehicle-cell-value eligibility-verification__vehicle-cell-value--green">
                                    {VEHICLE.ownership}
                                </span>
                            </div>
                            <div className="eligibility-verification__vehicle-cell">
                                <span className="eligibility-verification__vehicle-cell-label">
                                    Renewal Status
                                </span>
                                <span className="eligibility-verification__vehicle-cell-value eligibility-verification__vehicle-cell-value--green">
                                    {VEHICLE.renewalStatus}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="eligibility-verification__summary-card">
                        <span className="eligibility-verification__summary-title">
                            Road Tax Summary
                        </span>
                        <div className="eligibility-verification__summary-list">
                            {SUMMARY.map((row) => (
                                <div className="eligibility-verification__summary-row" key={row.label}>
                                    <span className="eligibility-verification__summary-label">
                                        {row.label}
                                    </span>
                                    <span className="eligibility-verification__summary-value">
                                        {row.value}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="eligibility-verification__recommend-card">
                        <span className="eligibility-verification__recommend-tag">
                            <FaStar />
                            Smart Recommendation
                        </span>
                        <h4 className="eligibility-verification__recommend-title">
                            12 Month Renewal
                        </h4>
                        <p className="eligibility-verification__recommend-desc">
                            Most popular &middot; Lowest cost per month &middot; Government recommended
                        </p>
                        <div className="eligibility-verification__recommend-tags">
                            <span className="eligibility-verification__recommend-save">
                                Save RM 22.50
                            </span>
                            <span className="eligibility-verification__recommend-popular">
                                Most Popular
                            </span>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default VehicleDetails;