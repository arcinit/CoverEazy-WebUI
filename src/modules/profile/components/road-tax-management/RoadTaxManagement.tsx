import React from 'react';
import {
    FiArrowLeft, FiPlus, FiTruck, FiClock, FiCheck, FiDownload,
} from 'react-icons/fi';
import './RoadTaxManagement.scss';

// ---------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------
type RenewalStatus = 'processing' | 'completed';

interface RenewalRecord {
    id: string;
    title: string;
    duration: string;
    validUntil: string;
    deliveryNote: string;
    amount: string;
    status: RenewalStatus;
}

// ---------------------------------------------------------------------
// Static data — swap with API data later
// ---------------------------------------------------------------------
const CURRENT_VEHICLE = {
    plateNo: 'WXD 1234',
    model: 'Toyota Camry 2.5V',
};

const SUMMARY = {
    expiresInDays: 36,
    expiryDate: '31 Jul 2026',
    lastRenewedDate: '25 Jun 2026',
    lastRenewedAmount: 'RM 95',
    lastRenewedDuration: '12 months',
};

const RENEWALS: RenewalRecord[] = [
    {
        id: 'r1',
        title: '2026 Renewal',
        duration: '12 months',
        validUntil: '31 Jul 2026',
        deliveryNote: 'In Transit',
        amount: 'RM 95',
        status: 'processing',
    },
    {
        id: 'r2',
        title: '2024 Renewal',
        duration: '12 months',
        validUntil: '31 Jul 2026',
        deliveryNote: 'Delivered',
        amount: 'RM 90',
        status: 'completed',
    },
    {
        id: 'r3',
        title: '2023 Renewal',
        duration: '12 months',
        validUntil: '31 Jul 2024',
        deliveryNote: 'Delivered',
        amount: 'RM 90',
        status: 'completed',
    },
];

const STATUS_LABEL: Record<RenewalStatus, string> = {
    processing: 'Processing',
    completed: 'Completed',
};

// ---------------------------------------------------------------------
// RoadTaxManagement — main export
// ---------------------------------------------------------------------
const RoadTaxManagement: React.FC = () => {
    return (
        <section className="road-tax">
            <div className="road-tax__header">
                <div className="road-tax__title-group">
                    <button type="button" className="road-tax__back" aria-label="Go back">
                        <FiArrowLeft />
                    </button>
                    <div>
                        <h2 className="road-tax__heading">Road Tax Management</h2>
                        <p className="road-tax__lead">Track your road tax renewals and delivery status.</p>
                    </div>
                </div>
                <button type="button" className="road-tax__btn road-tax__btn--add">
                    <FiPlus />
                    Add Vehicle
                </button>
            </div>

            <div className="road-tax__summary">
                <div className="road-tax__summary-card">
                    <span className="road-tax__summary-icon road-tax__summary-icon--blue">
                        <FiTruck />
                    </span>
                    <div className="road-tax__summary-body">
                        <span className="road-tax__summary-label">Current Vehicle</span>
                        <span className="road-tax__summary-value">{CURRENT_VEHICLE.plateNo}</span>
                        <span className="road-tax__summary-sub">{CURRENT_VEHICLE.model}</span>
                    </div>
                </div>

                <div className="road-tax__summary-card">
                    <span className="road-tax__summary-icon road-tax__summary-icon--orange">
                        <FiClock />
                    </span>
                    <div className="road-tax__summary-body">
                        <span className="road-tax__summary-label">Expires In</span>
                        <span className="road-tax__summary-value">{SUMMARY.expiresInDays} Days</span>
                        <span className="road-tax__summary-sub">{SUMMARY.expiryDate}</span>
                    </div>
                </div>

                <div className="road-tax__summary-card">
                    <span className="road-tax__summary-icon road-tax__summary-icon--green">
                        <FiCheck />
                    </span>
                    <div className="road-tax__summary-body">
                        <span className="road-tax__summary-label">Last Renewed</span>
                        <span className="road-tax__summary-value">{SUMMARY.lastRenewedDate}</span>
                        <span className="road-tax__summary-sub">
                            {SUMMARY.lastRenewedAmount} &middot; {SUMMARY.lastRenewedDuration}
                        </span>
                    </div>
                </div>
            </div>

            <div className="road-tax__history">
                <h3 className="road-tax__history-title">Renewal History</h3>

                <ul className="road-tax__list">
                    {RENEWALS.map((renewal) => (
                        <li className="road-tax__row" key={renewal.id}>
                            <span
                                className={`road-tax__row-icon road-tax__row-icon--${renewal.status}`}
                            >
                                {renewal.status === 'processing' ? <FiClock /> : <FiCheck />}
                            </span>

                            <div className="road-tax__row-body">
                                <span className="road-tax__row-title">
                                    {renewal.title} &middot; {renewal.duration}
                                </span>
                                <span className="road-tax__row-sub">
                                    Valid until {renewal.validUntil} &middot; {renewal.deliveryNote}
                                </span>
                            </div>

                            <span className="road-tax__row-amount">{renewal.amount}</span>

                            <span
                                className={`road-tax__badge road-tax__badge--${renewal.status}`}
                            >
                                {STATUS_LABEL[renewal.status]}
                            </span>

                            <button
                                type="button"
                                className="road-tax__download"
                                aria-label={`Download ${renewal.title} receipt`}
                            >
                                <FiDownload />
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default RoadTaxManagement;