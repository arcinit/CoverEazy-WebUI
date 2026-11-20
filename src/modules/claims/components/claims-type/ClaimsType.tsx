import React, { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { FaCheckCircle } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi2';
import { PiUsersThreeFill } from 'react-icons/pi';
import './ClaimsTypes.scss';

const ClaimsType = ({ onContinue }:any) => {
    const [selected, setSelected] = useState('claims');

    const handleSelect = (type:any) => {
        setSelected(type);
    };

    return (
        <div className="claim-type">
            <p className="claim-type__eyebrow">PICK A PATH</p>
            <h1 className="claim-type__title">How would you like to claim?</h1>

            <div className="claim-type__grid">
                {/* -------- CLAIMS CARD -------- */}
                <div
                    className={[
                        'claim-type__card',
                        selected === 'claims' ? 'claim-type__card--selected' : '',
                    ].join(' ').trim()}
                >
                    <span className="claim-type__icon claim-type__icon--blue">
                        <HiSparkles />
                    </span>
                    <h3 className="claim-type__card-title">Claims</h3>
                    <p className="claim-type__card-desc">
                        Best for own-vehicle damage, glass, flood and theft.
                    </p>
                    <ul className="claim-type__list">
                        <li>
                            <FaCheckCircle className="claim-type__check" />
                            AI damage assessment via photos
                        </li>
                        <li>
                            <FaCheckCircle className="claim-type__check" />
                            Live workshop allocation
                        </li>
                        <li>
                            <FaCheckCircle className="claim-type__check" />
                            Cashless settlement available
                        </li>
                        <li>
                            <FaCheckCircle className="claim-type__check" />
                            No physical forms required
                        </li>
                    </ul>
                    <button
                        type="button"
                        className={[
                            'claim-type__btn',
                            selected === 'claims' ? 'claim-type__btn--selected' : '',
                        ].join(' ').trim()}
                        onClick={() => handleSelect('claims')}
                    >
                        {selected === 'claims' ? (
                            <>
                                Selected <FaCheckCircle />
                            </>
                        ) : (
                            <>
                                Select <FiArrowRight />
                            </>
                        )}
                    </button>
                </div>

                {/* -------- THIRD PARTY CARD -------- */}
                <div
                    className={[
                        'claim-type__card',
                        selected === 'third-party' ? 'claim-type__card--selected' : '',
                    ].join(' ').trim()}
                >
                    <span className="claim-type__icon claim-type__icon--gray">
                        <PiUsersThreeFill />
                    </span>
                    <span className="claim-type__pill">Third Party</span>
                    <h3 className="claim-type__card-title">Third Party Claim</h3>
                    <p className="claim-type__card-desc">
                        Claim against another driver&apos;s insurer.
                    </p>
                    <ul className="claim-type__list">
                        <li>
                            <FaCheckCircle className="claim-type__check" />
                            We chase the other insurer
                        </li>
                        <li>
                            <FaCheckCircle className="claim-type__check" />
                            Police report assistance
                        </li>
                        <li>
                            <FaCheckCircle className="claim-type__check" />
                            Legal panel access
                        </li>
                        <li>
                            <FaCheckCircle className="claim-type__check" />
                            Recovery tracking dashboard
                        </li>
                    </ul>
                    <button
                        type="button"
                        className={[
                            'claim-type__btn claim-type__btn--outline',
                            selected === 'third-party' ? 'claim-type__btn--selected' : '',
                        ].join(' ').trim()}
                        onClick={() => handleSelect('third-party')}
                    >
                        {selected === 'third-party' ? (
                            <>
                                Selected <FaCheckCircle />
                            </>
                        ) : (
                            <>
                                Select <FiArrowRight />
                            </>
                        )}
                    </button>
                </div>
            </div>

            <div className="claim-type__footer-nav">
                <button
                    type="button"
                    className="claim-type__continue-btn"
                    onClick={() => onContinue(selected)}
                >
                    Continue <FiArrowRight />
                </button>
            </div>
        </div>
    );
};

export default ClaimsType;