import React from 'react';
import { FiPlus, FiCreditCard, FiSmartphone } from 'react-icons/fi';
import { SiApple } from 'react-icons/si';
import './PaymentMethods.scss';

// ---------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------
type CardBrand = 'visa' | 'mastercard';
type CardTheme = 'indigo' | 'crimson';

interface SavedCard {
    id: string;
    last4: string;
    holder: string;
    expiry: string;
    brand: CardBrand;
    theme: CardTheme;
    isDefault?: boolean;
}

interface OtherMethod {
    id: string;
    label: string;
    icon: React.ElementType;
}

// ---------------------------------------------------------------------
// Static data — swap with API data later
// ---------------------------------------------------------------------
const CARDS: SavedCard[] = [
    {
        id: 'card1',
        last4: '4242',
        holder: 'Ahmad Rizal',
        expiry: '12/27',
        brand: 'visa',
        theme: 'indigo',
        isDefault: true,
    },
    {
        id: 'card2',
        last4: '8888',
        holder: 'Ahmad Rizal',
        expiry: '08/26',
        brand: 'mastercard',
        theme: 'crimson',
    },
];

const BRAND_LABEL: Record<CardBrand, string> = {
    visa: 'Visa',
    mastercard: 'Mastercard',
};

const OTHER_METHODS: OtherMethod[] = [
    { id: 'fpx', label: 'FPX Online Banking', icon: FiCreditCard },
    { id: 'tng', label: "Touch 'n Go", icon: FiSmartphone },
    { id: 'apple', label: 'Apple Pay', icon: SiApple },
];

// ---------------------------------------------------------------------
// Card tile
// ---------------------------------------------------------------------
const CardTile: React.FC<{ card: SavedCard }> = ({ card }) => (
    <div className={`payment-methods__card payment-methods__card--${card.theme}`}>
        {card.isDefault && <span className="payment-methods__card-default">Default</span>}

        <div className="payment-methods__card-dots" aria-hidden="true">
            <span />
            <span />
            <span />
        </div>

        <span className="payment-methods__card-number">
            &middot;&middot;&middot;&middot; &middot;&middot;&middot;&middot; &middot;&middot;&middot;&middot; {card.last4}
        </span>

        <div className="payment-methods__card-footer">
            <div className="payment-methods__card-field">
                <span className="payment-methods__card-field-label">Card Holder</span>
                <span className="payment-methods__card-field-value">{card.holder}</span>
            </div>
            <div className="payment-methods__card-field">
                <span className="payment-methods__card-field-label">Expiry</span>
                <span className="payment-methods__card-field-value">{card.expiry}</span>
            </div>
            <div className="payment-methods__card-field payment-methods__card-field--right">
                <span className="payment-methods__card-field-label">Type</span>
                <span className="payment-methods__card-field-value">{BRAND_LABEL[card.brand]}</span>
            </div>
        </div>
    </div>
);

// ---------------------------------------------------------------------
// PaymentMethods — main export
// ---------------------------------------------------------------------
const PaymentMethods: React.FC = () => {
    return (
        <section className="payment-methods">
            <div className="payment-methods__header">
                <div>
                    <h2 className="payment-methods__heading">Payment Methods</h2>
                    <p className="payment-methods__lead">Manage your saved cards, wallets, and billing.</p>
                </div>
                <button type="button" className="payment-methods__add-btn">
                    <FiPlus />
                    Add Card
                </button>
            </div>

            <div className="payment-methods__cards">
                {CARDS.map((card) => (
                    <CardTile key={card.id} card={card} />
                ))}
            </div>

            <div className="payment-methods__other">
                <h3 className="payment-methods__other-title">Other Methods</h3>
                <div className="payment-methods__other-list">
                    {OTHER_METHODS.map(({ id, label, icon: Icon }) => (
                        <button type="button" className="payment-methods__other-item" key={id}>
                            <Icon />
                            {label}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PaymentMethods;