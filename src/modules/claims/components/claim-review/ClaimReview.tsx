import React from "react";
import {
    FiArrowLeft,
    FiArrowRight,
    FiEdit2,
    FiCalendar,
    FiMapPin,
    FiFileText,
    FiPhone,
    FiUsers,
    FiClock,
    FiNavigation,
    FiAlertTriangle,
    FiCheck,
    FiPlus,
    FiMinus,
} from "react-icons/fi";
import { FaCar, FaCheckCircle, FaStar, FaRegHeart } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import "./ClaimReview.scss";
import vehicleImage from "./images/vehicle.png"

/* ------------------------------------------------------------------ */
/* Static data — swap for real claim data as needed                    */
/* ------------------------------------------------------------------ */

const SUMMARY_ITEMS = [
    { icon: <FaCar />, label: "Claim Type", value: "Own Vehicle Damage" },
    { icon: <FiFileText />, label: "Policy Number", value: "MOTO-88721" },
    {
        icon: <FaCar />,
        label: "Vehicle",
        value: "WXD 1234 · Toyota Camry 2.5V",
    },
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
    {
        icon: <FiCheck />,
        label: "Status",
        value: "Open Now",
        modifier: "positive",
    },
    { icon: <FiClock />, label: "Hours", value: "Mon–Sat 8:30am – 6:00pm" },
    { icon: <FiPhone />, label: "Phone", value: "+603 7845 8888" },
];

/* ------------------------------------------------------------------ */
/* Small presentational sub-components                                 */
/* ------------------------------------------------------------------ */

const InfoField = ({ icon, label, value }:any) => (
    <div className="claim-review__field">
        <span className="claim-review__field-icon">{icon}</span>
        <div className="claim-review__field-text">
            <span className="claim-review__field-label">{label}</span>
            <span className="claim-review__field-value">{value}</span>
        </div>
    </div>
);

const SpecItem = ({ label, value }:any) => (
    <div className="claim-review__spec">
        <span className="claim-review__spec-label">{label}</span>
        <span className="claim-review__spec-value">{value}</span>
    </div>
);

const Badge = ({ children, modifier }:any) => (
    <span className={`claim-review__badge claim-review__badge--${modifier}`}>
        {children}
    </span>
);

/* ------------------------------------------------------------------ */
/* Main component                                                      */
/* ------------------------------------------------------------------ */

const ClaimReview = ({onContinue}:any) => {
    return (
        <div className="claim-review">
            {/* Header ---------------------------------------------------- */}
            <header className="claim-review__header">
                <h1 className="claim-review__title">
                    Review Your <span className="claim-review__title-accent">Claim</span>
                </h1>
                <p className="claim-review__subtitle">
                    Verify all details before submission. Submitted claims cannot be
                    edited.
                </p>
            </header>

            <div className="claim-review__body">
                {/* Claim summary -------------------------------------------- */}
                <section className="claim-review__card">
                    <div className="claim-review__card-header">
                        <h2 className="claim-review__card-title">Claim Summary</h2>
                        <Badge modifier="pending">Pending</Badge>
                    </div>

                    <div className="claim-review__grid claim-review__grid--2col">
                        {SUMMARY_ITEMS.map((item) => (
                            <InfoField key={item.label} {...item} />
                        ))}
                    </div>
                </section>

                {/* Vehicle + Insurance ---------------------------------------- */}
                <section className="claim-review__grid claim-review__grid--split">
                    <div className="claim-review__card-vehicle ">
                        <div className="claim-review__entity">
                            <div className="claim-review__entity-media">
                                <img src={vehicleImage} alt="vehicle" />
                            </div>
                            <div className="claim-review__entity-info">
                                <div className="claim-review__entity-top">
                                    <span className="claim-review__entity-label">
                                        Insured Vehicle
                                    </span>
                                    <Badge modifier="verified">
                                        <MdVerified /> Verified
                                    </Badge>
                                </div>
                                <h3 className="claim-review__entity-name">WXD 1234</h3>
                                <p className="claim-review__entity-meta">
                                    Toyota Camry 2.5V · 2022 · Pearl White
                                </p>
                            </div>
                        </div>

                        <div className="claim-review__divider" />

                        <div className="claim-review__grid claim-review__grid--3col">
                            {VEHICLE_SPECS.map((spec) => (
                                <SpecItem key={spec.label} {...spec} />
                            ))}
                        </div>
                    </div>

                    <div className="claim-review__card-insurance ">
                        <div className="claim-review__entity">
                            <div className="claim-review__entity-info">
                                <div className="claim-review__entity-top">
                                    <span className="claim-review__entity-label">
                                        Insurance Provider
                                    </span>
                                    <Badge modifier="active">
                                        <span className="claim-review__dot" /> Active
                                    </Badge>
                                </div>
                                <h3 className="claim-review__entity-name">
                                    Etiqa Takaful Berhad
                                </h3>
                                <p className="claim-review__entity-meta">MOTO-88721</p>
                            </div>
                            <div className="claim-review__entity-logo">eTiQa</div>
                        </div>

                        <div className="claim-review__divider" />

                        <div className="claim-review__grid claim-review__grid--3col">
                            {INSURANCE_SPECS.map((spec) => (
                                <SpecItem key={spec.label} {...spec} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Driver & emergency contact ----------------------------------- */}
                <section className="claim-review__card">
                    <div className="claim-review__card-header claim-review__card-header--icon">
                        <span className="claim-review__card-icon">
                            <FiUsers />
                        </span>
                        <h2 className="claim-review__card-title">
                            Driver &amp; Emergency Contact
                        </h2>
                    </div>

                    <div className="claim-review__grid claim-review__grid--4col">
                        {DRIVER_INFO.map((item) => (
                            <SpecItem key={item.label} {...item} />
                        ))}
                    </div>
                </section>

                {/* Vehicle images ------------------------------------------------ */}
                <section className="claim-review__card">
                    <h2 className="claim-review__card-title">Vehicle Images</h2>

                    <div className="claim-review__images">
                        {VEHICLE_IMAGES.map((image) => (
                            <div className="claim-review__image-slot" key={image.label}>
                                <span className="claim-review__image-check">
                                    <FaCheckCircle />
                                </span>
                                <span className="claim-review__image-label">
                                    {image.label}
                                </span>
                                <span className="claim-review__image-caption">
                                    {image.caption}
                                </span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Workshop -------------------------------------------------------- */}
                <section className="claim-review__card">
                    <div className="claim-review__workshop-header">
                        <div>
                            <div className="claim-review__workshop-title-row">
                                <h2 className="claim-review__card-title">
                                    Auto Bavaria Glenmarie
                                </h2>
                                <span className="claim-review__rating">
                                    <Badge modifier="panel">Panel</Badge>
                                    <FaStar /> 4.8 · 1284 reviews
                                </span>
                            </div>
                            <p className="claim-review__workshop-address">
                                Lot 1, Jalan Lapangan Terbang Subang, Shah Alam, Selangor
                            </p>
                        </div>
                    </div>

                    <div className="claim-review__grid claim-review__grid--4col">
                        {WORKSHOP_STATS.map((stat) => (
                            <div className="claim-review__field" key={stat.label}>
                                <span className="claim-review__field-icon">{stat.icon}</span>
                                <div className="claim-review__field-text">
                                    <span className="claim-review__field-label">
                                        {stat.label}
                                    </span>
                                    <span
                                        className={`claim-review__field-value${stat.modifier
                                                ? ` claim-review__field-value--${stat.modifier}`
                                                : ""
                                            }`}
                                    >
                                        {stat.value}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="claim-review__map">
                        <div className="claim-review__map-canvas">
                            <FiMapPin className="claim-review__map-pin" />
                        </div>
                        <div className="claim-review__map-controls">
                            <button type="button" aria-label="Zoom in">
                                <FiPlus />
                            </button>
                            <button type="button" aria-label="Zoom out">
                                <FiMinus />
                            </button>
                        </div>
                        <div className="claim-review__map-attribution">
                            Report a problem &middot; © OpenStreetMap contributors &middot;
                            Make a Donation &middot; Website and API terms
                        </div>
                    </div>
                </section>

                {/* Warning ----------------------------------------------------------- */}
                <div className="claim-review__warning">
                    <FiAlertTriangle className="claim-review__warning-icon" />
                    <p>
                        Submitting false or fraudulent information is a criminal offence
                        under Malaysian law and may result in policy cancellation, claim
                        rejection and prosecution.
                    </p>
                </div>

                {/* Declaration --------------------------------------------------------- */}
                <section className="claim-review__card">
                    <h2 className="claim-review__card-title">Declaration</h2>

                    <ul className="claim-review__declaration-list">
                        <li>
                            I declare that the information provided in this claim form is
                            true, accurate and complete to the best of my knowledge and
                            belief.
                        </li>
                        <li>
                            I understand that any false or misleading statements may result
                            in the rejection of this claim and may constitute an offence
                            under applicable laws.
                        </li>
                        <li>
                            I authorise Insurtech One Berhad to access any information
                            necessary for the assessment and processing of this claim.
                        </li>
                    </ul>

                    <label className="claim-review__agree">
                        <span className="claim-review__checkbox">
                            <FiCheck />
                        </span>
                        I agree to the Declaration above and confirm that all details are
                        accurate.
                    </label>
                </section>
            </div>

            {/* Footer -------------------------------------------------------------- */}
            <footer className="claim-review__footer">
                <button type="button" className="claim-review__btn claim-review__btn--ghost">
                    <FiArrowLeft /> Back
                </button>

                <div className="claim-review__footer-actions">
                    <button
                        type="button"
                        className="claim-review__btn claim-review__btn--outline"
                    >
                        <FiEdit2 /> Edit Details
                    </button>
                    <button
                        type="button"
                        className="claim-review__btn claim-review__btn--primary"
                onClick={onContinue}
                    >
                        Continue <FiArrowRight />
                    </button>
                </div>
            </footer>
        </div>
    );
};

export default ClaimReview;