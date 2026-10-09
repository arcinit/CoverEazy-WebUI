import React, { useState } from 'react';
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import { FaCheckCircle } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi2';
import { LuUsers } from 'react-icons/lu';
import './ClaimsTypes.scss';

type ClaimKind = 'claims' | 'third-party';

const CARDS: {
    id: ClaimKind;
    title: string;
    desc: string;
    pill?: string;
    bullets: string[];
}[] = [
    {
        id: 'claims',
        title: 'Claims',
        desc: 'Best for own-vehicle damage, glass, flood and theft.',
        bullets: [
            'AI damage assessment via photos',
            'Live workshop allocation',
            'Cashless settlement available',
            'No physical forms required',
        ],
    },
    {
        id: 'third-party',
        title: 'Third Party Claim',
        desc: "Claim against another driver's insurer.",
        pill: 'Third Party',
        bullets: [
            'We chase the other insurer',
            'Police report assistance',
            'Legal panel access',
            'Recovery tracking dashboard',
        ],
    },
];

const ClaimsType = ({ onContinue }: any) => {
    const [selected, setSelected] = useState<ClaimKind>('claims');

    const handleSelect = (type: ClaimKind) => {
        setSelected(type);
        onContinue(type);
    };

    return (
        <div className="claim-type">
            <p className="claim-type__eyebrow">PICK A PATH</p>
            <h1 className="claim-type__title">How would you like to claim?</h1>

            <div className="claim-type__grid">
                {CARDS.map((card) => {
                    const isSelected = selected === card.id;
                    const isClaims = card.id === 'claims';
                    return (
                        <div
                            key={card.id}
                            className={`claim-type__card${isSelected ? ' claim-type__card--selected' : ''}`}
                        >
                            <div className={`claim-type__head${card.pill ? ' claim-type__head--pill' : ''}`}>
                                <span className={`claim-type__icon claim-type__icon--${isClaims ? 'blue' : 'gray'}`}>
                                    {isClaims ? <HiSparkles /> : <LuUsers />}
                                </span>
                                <div className="claim-type__head-text">
                                    {card.pill && <span className="claim-type__pill">{card.pill}</span>}
                                    <h3 className="claim-type__card-title">{card.title}</h3>
                                    <p className="claim-type__card-desc">{card.desc}</p>
                                </div>
                            </div>
                            <ul className="claim-type__list">
                                {card.bullets.map((b) => (
                                    <li key={b}>
                                        <FiCheckCircle className="claim-type__check" />
                                        {b}
                                    </li>
                                ))}
                            </ul>
                            <button
                                type="button"
                                className={`claim-type__btn${isClaims ? '' : ' claim-type__btn--outline'}${
                                    isSelected ? ' claim-type__btn--selected' : ''
                                }`}
                                onClick={() => handleSelect(card.id)}
                            >
                                {isSelected ? (
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
                    );
                })}
            </div>
        </div>
    );
};

export default ClaimsType;

