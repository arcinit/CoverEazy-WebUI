import React, { useState } from "react";
import {
    FiCalendar,
    FiMapPin,
    FiFileText,
    FiPhone,
    FiUser,
    FiClock,
    FiNavigation,
    FiAlertTriangle,
    FiCheck,
    FiHome,
} from "react-icons/fi";
import { FaCheckCircle, FaStar } from "react-icons/fa";
import { IoCarSportOutline } from "react-icons/io5";
import "./ClaimReview.scss";
import ClaimsFooter from "../claims-footer/ClaimsFooter";
import vehicleImage from "./images/car-thumb.png";
import etiqaLogo from "./images/etiqa-logo.png";
import mapImage from "./images/map.png";

/* ------------------------------------------------------------------ */
/* Static data — swap for real claim data as needed                    */
/* ------------------------------------------------------------------ */

const SUMMARY_ITEMS = [
    { icon: <IoCarSportOutline />, label: "Claim Type", value: "Own Vehicle Damage" },
    { icon: <FiFileText />, label: "Policy Number", value: "MOTO-88721" },
    { icon: <IoCarSportOutline />, label: "Vehicle", value: "WXD 1234 · Toyota Camry 2.5V" },
    { icon: <FiCalendar />, label: "Incident Date", value: "2026-06-24" },
    { icon: <FiMapPin />, label: "Incident Location", value: "Jalan Dutta" },
    { icon: <FiFileText />, label: "Police Report", value: "KL1234567890" },
];

const VEHICLE_SPECS = [
    { label: "Cubic Capacity", value: "1000 CC" },
    { label: "Variant", value: "Camry ZXi" },
    { label: "Transmission Type", value: "Automatic" },
];

const INSURANCE_SPECS = [
    { label: "Coverage", value: "Comprehensive" },
    { label: "Sum Insured", value: "RM 85,000" },
    { label: "Expiry", value: "Dec 2026" },
];

const DRIVER_INFO = [
    { label: "Driver", value: "Aiman Tan Wei Jun" },
    { label: "Phone", value: "+60 12-456 7890" },
    { label: "Emergency Contact", value: "Tan Mei Ling" },
    { label: "Relation", value: "Spouse · +60 13-220 4411" },
];

const VEHICLE_IMAGES = [
    { label: "Front View", caption: "Hood, bumper, grille" },
    { label: "Rear View", caption: "Boot, bumper, lights" },
    { label: "Driver Side", caption: "Left doors, fenders" },
    { label: "Passenger Side", caption: "Right doors, fenders" },
    { label: "Interior", caption: "Cabin damage if any" },
];

const WORKSHOP_STATS = [
    { icon: <FiNavigation />, label: "Distance", value: "2.4 km" },
    { icon: <FiClock />, label: "Status", value: "Open Now", positive: true },
    { icon: <FiHome />, label: "Hours", value: "Mon–Sat 8:30am – 6:00pm" },
    { icon: <FiPhone />, label: "Phone", value: "+603 7845 8888" },
];

/* ------------------------------------------------------------------ */
/* Small presentational sub-components                                 */
/* ------------------------------------------------------------------ */

const InfoField = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
    <div className="claim-review__field">
        <span className="claim-review__field-icon">{icon}</span>
        <div className="claim-review__field-text">
            <span className="claim-review__field-label">{label}</span>
            <span className="claim-review__field-value">{value}</span>
        </div>
    </div>
);

const SpecItem = ({ label, value }: { label: string; value: string }) => (
    <div className="claim-review__spec">
        <span className="claim-review__spec-label">{label}</span>
        <span className="claim-review__spec-value">{value}</span>
    </div>
);

const Badge = ({ children, modifier }: { children: React.ReactNode; modifier: string }) => (
    <span className={`claim-review__badge claim-review__badge--${modifier}`}>{children}</span>
);

/* ------------------------------------------------------------------ */
/* Main component                                                      */
/* ------------------------------------------------------------------ */

interface ClaimReviewProps {
    onBack?: () => void;
    onEdit?: () => void;
    onContinue?: () => void;
}

const ClaimReview = ({ onBack, onEdit, onContinue }: ClaimReviewProps) => {
    const [agreed, setAgreed] = useState(false);

    return (
        <div className="claim-review">
            <header className="claim-review__header">
                <h1 className="claim-review__title">
                    Review Your <span className="claim-review__title-accent">Claim</span>
                </h1>
                <p className="claim-review__subtitle">
                    Verify all details before submission. Submitted claims cannot be edited.
                </p>
            </header>

            <div className="claim-review__body">
                {/* Claim summary */}
                <section className="claim-review__card claim-review__card--plain">
                    <div className="claim-review__card-header">
                        <h2 className="claim-review__card-title">Claim Summary</h2>
                        <Badge modifier="pending">Pending</Badge>
                    </div>
                    <div className="claim-review__summary-grid">
                        {SUMMARY_ITEMS.map((item) => (
                            <InfoField key={item.label} {...item} />
                        ))}
                    </div>
                </section>

                {/* Vehicle + Insurance */}
                <section className="claim-review__split">
                    <div className="claim-review__card claim-review__card--tint claim-review__entity-card">
                        <div className="claim-review__entity">
                            <img className="claim-review__entity-media" src={vehicleImage} alt="Vehicle" />
                            <div className="claim-review__entity-info">
                                <div className="claim-review__entity-top">
                                    <span className="claim-review__entity-label">Insured Vehicle</span>
                                    <Badge modifier="verified">
                                        Verified <FaCheckCircle />
                                    </Badge>
                                </div>
                                <h3 className="claim-review__entity-name">WXD 1234</h3>
                                <p className="claim-review__entity-meta">Toyota Camry 2.5V · 2022 · Pearl White</p>
                            </div>
                        </div>
                        <div className="claim-review__divider" />
                        <div className="claim-review__specs">
                            {VEHICLE_SPECS.map((spec) => (
                                <SpecItem key={spec.label} {...spec} />
                            ))}
                        </div>
                    </div>

                    <div className="claim-review__card claim-review__card--tint claim-review__entity-card">
                        <div className="claim-review__entity">
                            <div className="claim-review__entity-info">
                                <span className="claim-review__entity-label">Insurance Provider</span>
                                <div className="claim-review__entity-namerow">
                                    <h3 className="claim-review__entity-name">Etiqa Takaful Berhad</h3>
                                    <Badge modifier="active">
                                        <FaCheckCircle /> Active
                                    </Badge>
                                </div>
                                <p className="claim-review__entity-meta">MOTO-88721</p>
                            </div>
                            <img className="claim-review__entity-logo" src={etiqaLogo} alt="Etiqa Takaful" />
                        </div>
                        <div className="claim-review__divider" />
                        <div className="claim-review__specs">
                            {INSURANCE_SPECS.map((spec) => (
                                <SpecItem key={spec.label} {...spec} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Driver & emergency contact */}
                <section className="claim-review__card claim-review__card--plain">
                    <div className="claim-review__driver-head">
                        <span className="claim-review__card-icon">
                            <FiUser />
                        </span>
                        <h2 className="claim-review__card-title">Driver &amp; Emergency Contact</h2>
                    </div>
                    <div className="claim-review__driver-grid">
                        {DRIVER_INFO.map((item) => (
                            <div className="claim-review__spec" key={item.label}>
                                <span className="claim-review__spec-label claim-review__spec-label--caps">
                                    {item.label}
                                </span>
                                <span className="claim-review__spec-value">{item.value}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Vehicle images */}
                <section className="claim-review__card claim-review__card--plain">
                    <h2 className="claim-review__card-title">Vehicle Images</h2>
                    <div className="claim-review__images">
                        {VEHICLE_IMAGES.map((image) => (
                            <div className="claim-review__image-slot" key={image.label}>
                                <span className="claim-review__image-check">
                                    <FaCheckCircle />
                                </span>
                                <span className="claim-review__image-label">{image.label}</span>
                                <span className="claim-review__image-caption">{image.caption}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Workshop */}
                <section className="claim-review__card claim-review__card--tint claim-review__workshop">
                    <div className="claim-review__workshop-head">
                        <div>
                            <h2 className="claim-review__workshop-name">Auto Bavaria Glenmarie</h2>
                            <p className="claim-review__workshop-address">
                                Lot 1, Jalan Lapangan Terbang Subang, Shah Alam, Selangor
                            </p>
                        </div>
                        <span className="claim-review__rating">
                            <Badge modifier="panel">Panel</Badge>
                            <FaStar /> 4.8 · 1284 reviews
                        </span>
                    </div>
                    <div className="claim-review__divider" />
                    <div className="claim-review__workshop-stats">
                        {WORKSHOP_STATS.map((stat) => (
                            <div className="claim-review__stat" key={stat.label}>
                                <span className="claim-review__stat-label">
                                    {stat.icon} {stat.label}
                                </span>
                                <span
                                    className={`claim-review__stat-value${
                                        stat.positive ? " claim-review__stat-value--positive" : ""
                                    }`}
                                >
                                    {stat.value}
                                </span>
                            </div>
                        ))}
                    </div>
                    <img className="claim-review__map" src={mapImage} alt="Workshop location map" />
                </section>

                {/* Warning */}
                <div className="claim-review__warning" role="alert">
                    <FiAlertTriangle className="claim-review__warning-icon" />
                    <p>
                        Submitting false or fraudulent information is a criminal offence under Malaysian law and
                        may result in policy cancellation, claim rejection and prosecution.
                    </p>
                </div>

                {/* Declaration */}
                <section className="claim-review__card claim-review__card--plain">
                    <h2 className="claim-review__card-title">Declaration</h2>
                    <ul className="claim-review__declaration-list">
                        <li>
                            I declare that the information provided in this claim form is true, accurate and
                            complete to the best of my knowledge and belief.
                        </li>
                        <li>
                            I understand that any false or misleading statements may result in the rejection of
                            this claim and may constitute an offence under applicable laws.
                        </li>
                        <li className="claim-review__declaration-narrow">
                            I authorise Insurtech One Berhad to access any information necessary for the
                            assessment and processing of this claim.
                        </li>
                    </ul>
                    <label className="claim-review__agree">
                        <input
                            type="checkbox"
                            className="claim-review__agree-input"
                            checked={agreed}
                            onChange={(e) => setAgreed(e.target.checked)}
                        />
                        <span className="claim-review__checkbox" aria-hidden="true">
                            <FiCheck />
                        </span>
                        I agree to the Declaration above and confirm that all details are accurate.
                    </label>
                </section>
            </div>

            <ClaimsFooter
                onBack={onBack}
                onContinue={onContinue}
                continueDisabled={!agreed}
                secondary={{ label: "Edit Details", onClick: () => onEdit?.() }}
            />
        </div>
    );
};

export default ClaimReview;
