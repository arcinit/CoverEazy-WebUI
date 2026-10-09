import React from 'react';
import { FiPlus, FiGlobe, FiSmartphone } from 'react-icons/fi';
import { LuWallet } from 'react-icons/lu';
import './PaymentMethods.scss';

type CardTheme = 'blue' | 'red';

interface SavedCard {
    id: string;
    last4: string;
    holder: string;
    expiry: string;
    type: string;
    theme: CardTheme;
    isDefault?: boolean;
}

const CARDS: SavedCard[] = [
    { id: 'card1', last4: '4242', holder: 'Ahmad Rizal', expiry: '12/27', type: 'Visa', theme: 'blue', isDefault: true },
    { id: 'card2', last4: '8888', holder: 'Ahmad Rizal', expiry: '08/26', type: 'Mastercard', theme: 'red' },
];

const OTHER_METHODS: { id: string; label: string; icon: React.ElementType }[] = [
    { id: 'fpx', label: 'FPX Online Banking', icon: FiGlobe },
    { id: 'tng', label: "Touch 'n Go", icon: LuWallet },
    { id: 'apple', label: 'Apple Pay', icon: FiSmartphone },
];

const PaymentMethods: React.FC = () => (
    <section className="pm-root">
        <div className="pm-root__header">
            <div>
                <h2 className="pm-root__heading">Payment Methods</h2>
                <p className="pm-root__lead">Manage your saved cards, wallets, and billing.</p>
            </div>
            <button type="button" className="pm-root__add-btn">
                <FiPlus />
                Add Card
            </button>
        </div>

        <div className="pm-root__cards">
            {CARDS.map((c) => (
                <div key={c.id} className={`pm-card pm-card--${c.theme}`}>
                    <div className="pm-card__top">
                        <div className="pm-card__dots" aria-hidden="true"><span /><span /><span /></div>
                        {c.isDefault && <span className="pm-card__default">Default</span>}
                    </div>
                    <span className="pm-card__number">
                        <i>&bull;&bull;&bull;&bull;</i><i>&bull;&bull;&bull;&bull;</i><i>&bull;&bull;&bull;&bull;</i>{c.last4}
                    </span>
                    <div className="pm-card__footer">
                        <div className="pm-card__field">
                            <span className="pm-card__label">Card Holder</span>
                            <span className="pm-card__value">{c.holder}</span>
                        </div>
                        <div className="pm-card__field pm-card__field--mid">
                            <span className="pm-card__label">Expires</span>
                            <span className="pm-card__value">{c.expiry}</span>
                        </div>
                        <div className="pm-card__field pm-card__field--right">
                            <span className="pm-card__label">Type</span>
                            <span className="pm-card__value">{c.type}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        <div className="pm-other">
            <h3 className="pm-other__title">Other Methods</h3>
            <div className="pm-other__list">
                {OTHER_METHODS.map(({ id, label, icon: Icon }) => (
                    <button type="button" className="pm-other__item" key={id}>
                        <Icon />
                        {label}
                    </button>
                ))}
            </div>
        </div>
    </section>
);

export default PaymentMethods;
