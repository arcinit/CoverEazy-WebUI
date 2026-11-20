import React, { useState } from 'react';
import { FiSearch, FiArrowLeft, FiArrowRight, FiAlertCircle } from 'react-icons/fi';
import './BasicDetails.scss';

const BasicDetails = ({ onBack, onContinue }:any) => {
    const [regNumber, setRegNumber] = useState('WXD 1234');
    const [searched, setSearched] = useState(false);
    const [policyFound, setPolicyFound] = useState(false);

    const handleSearch = () => {
        setSearched(true);
        setPolicyFound(true);
    };

    const showError = searched && policyFound === false;

    return (
        <div className="basic-details">
            <h1 className="basic-details__title">
                Policy &amp; Vehicle <span className="basic-details__title-accent">Details</span>
            </h1>
            <p className="basic-details__subtitle">
                Locate your policy to begin the claim. AI will verify eligibility instantly.
            </p>

            <div className="basic-details__card">
                <div className="basic-details__search-row">
                    <div className="basic-details__search-input">
                        <FiSearch className="basic-details__search-input-icon" />
                        <input
                            type="text"
                            value={regNumber}
                            onChange={(e) => setRegNumber(e.target.value)}
                            placeholder="Enter vehicle registration number"
                        />
                    </div>
                    <button
                        type="button"
                        className="basic-details__search-btn"
                        onClick={handleSearch}
                    >
                        <FiSearch /> Search
                    </button>
                </div>

                {showError && (
                    <div className="basic-details__error">
                        <span className="basic-details__error-icon">
                            <FiAlertCircle />
                        </span>
                        <div className="basic-details__error-copy">
                            <p className="basic-details__error-title">
                                We couldn&apos;t find an active insurance policy for this
                                vehicle. Please verify and try again.
                            </p>
                            <ul className="basic-details__error-list">
                                <li>Check registration number for typos</li>
                                <li>Try another vehicle</li>
                            </ul>
                        </div>
                    </div>
                )}
            </div>

            <div className="basic-details__footer-nav">
                <button type="button" className="basic-details__back-btn" onClick={onBack}>
                    <FiArrowLeft /> Back
                </button>
                <button
                    type="button"
                    className="basic-details__continue-btn"
                    disabled={!policyFound}
                    onClick={onContinue}
                >
                    Continue <FiArrowRight />
                </button>
            </div>
        </div>
    );
};

export default BasicDetails;