import React from 'react';
import {
    FiPlus, FiEdit2, FiTrash2, FiShield, FiRefreshCw, FiAlertTriangle,
} from 'react-icons/fi';
import './Vehicle.scss';
import carImage from "./images/car.png"
// ---------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------
interface CoverageInfo {
    policyNo: string;
    startDate: string;
    expiryDate: string;
}

interface Vehicle {
    id: string;
    plateNo: string;
    status: 'active' | 'expiring' | 'expired';
    model: string;
    year: string | number;
    color: string;
    insurance: CoverageInfo;
    roadTax: CoverageInfo;
    roadTaxDueInDays?: number;
}

// ---------------------------------------------------------------------
// Static data — swap with API data later
// ---------------------------------------------------------------------
const VEHICLES: Vehicle[] = [
    {
        id: 'v1',
        plateNo: 'WXD 1234',
        status: 'active',
        model: 'Toyota Camry 2.5V',
        year: 2022,
        color: 'Pearl White',
        insurance: {
            policyNo: 'MOTO-88721',
            startDate: '29-07-2025',
            expiryDate: '28-07-2026',
        },
        roadTax: {
            policyNo: 'MOTO-88721',
            startDate: '29-07-2025',
            expiryDate: '28-07-2026',
        },
        roadTaxDueInDays: 36,
    },
];

const STATUS_LABEL: Record<Vehicle['status'], string> = {
    active: 'Insurance Active',
    expiring: 'Insurance Expiring',
    expired: 'Insurance Expired',
};



interface CoverageRowProps {
    icon: React.ElementType;
    iconClass: string;
    label: string;
    coverage: CoverageInfo;
}

const CoverageRow: React.FC<CoverageRowProps> = ({ icon: Icon, iconClass, label, coverage }) => (
    <div className="vehicles__coverage">
        <span className={`vehicles__coverage-icon ${iconClass}`}>
            <Icon />
        </span>
        <div className="vehicles__coverage-body">
            <span className="vehicles__coverage-label">{label}</span>
            <span className="vehicles__coverage-policy">{coverage.policyNo}</span>
            <span className="vehicles__coverage-dates">
                Start Date: <strong>{coverage.startDate}</strong> &nbsp;&middot;&nbsp; Expiry Date:{' '}
                <strong>{coverage.expiryDate}</strong>
            </span>
        </div>
    </div>
);

// ---------------------------------------------------------------------
// Vehicle card
// ---------------------------------------------------------------------
const VehicleCard: React.FC<{ vehicle: Vehicle }> = ({ vehicle }) => (
    <div className="vehicles__card">
        <div className="vehicles__card-top">
            <div className="vehicles__thumb">
                <img src={carImage} className='carImage'/>
            </div>

            <div className="vehicles__details">
                <div className="vehicles__title-row">
                    <h3 className="vehicles__plate">{vehicle.plateNo}</h3>
                    <span className={`vehicles__status vehicles__status--${vehicle.status}`}>
                        {STATUS_LABEL[vehicle.status]}
                    </span>
                </div>
                <p className="vehicles__subtitle">
                    {vehicle.model} &middot; {vehicle.year} &middot; {vehicle.color}
                </p>

                <div className="vehicles__coverage-grid">
                    <CoverageRow
                        icon={FiShield}
                        iconClass="vehicles__coverage-icon--blue"
                        label="Insurance"
                        coverage={vehicle.insurance}
                    />
                    <CoverageRow
                        icon={FiRefreshCw}
                        iconClass="vehicles__coverage-icon--orange"
                        label="Road Tax"
                        coverage={vehicle.roadTax}
                    />
                </div>
            </div>

            <div className="vehicles__actions">
                <button type="button" className="vehicles__btn vehicles__btn--ghost">
                    <FiEdit2 />
                    Edit
                </button>
                <button type="button" className="vehicles__btn vehicles__btn--danger-ghost">
                    <FiTrash2 />
                    Remove
                </button>
            </div>
        </div>

        {typeof vehicle.roadTaxDueInDays === 'number' && (
            <div className="vehicles__notice">
                <span className="vehicles__notice-text">
                    <FiAlertTriangle className="vehicles__notice-icon" />
                    Road tax expires in <strong>{vehicle.roadTaxDueInDays} days</strong>.
                </span>
                <div className="vehicles__notice-actions">
                    <button type="button" className="vehicles__btn vehicles__btn--navy">
                        View Policy
                    </button>
                    <button type="button" className="vehicles__btn vehicles__btn--green">
                        View Road Tax
                    </button>
                    <button type="button" className="vehicles__btn vehicles__btn--orange">
                        Renew Now
                    </button>
                </div>
            </div>
        )}
    </div>
);

// ---------------------------------------------------------------------
// Vehicles — main export
// ---------------------------------------------------------------------
const Vehicles: React.FC = () => {
    return (
        <section className="vehicles">
            <div className="vehicles__header">
                <div>
                    <h2 className="vehicles__heading">My Vehicles</h2>
                    <p className="vehicles__lead">Manage your registered vehicles and their coverage.</p>
                </div>
                <button type="button" className="vehicles__btn vehicles__btn--add">
                    <FiPlus />
                    Add Vehicle
                </button>
            </div>

            <div className="vehicles__list">
                {VEHICLES.map((vehicle) => (
                    <VehicleCard key={vehicle.id} vehicle={vehicle} />
                ))}
            </div>
        </section>
    );
};

export default Vehicles;