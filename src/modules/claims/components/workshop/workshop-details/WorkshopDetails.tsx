import React from "react";
import {
    FiArrowLeft,
    FiArrowRight,
    FiPhoneCall,
    FiNavigation,
    FiMapPin,
    FiClock,
    FiCheckCircle,
    FiPlus,
    FiMinus,
    FiZap,
} from "react-icons/fi";
import {
    FaStar,
    FaTools,
    FaCarSide,
    FaWind,
    FaShower,
    FaChair,
    FaPaintRoller,
} from "react-icons/fa";
import { GiCarWheel } from "react-icons/gi";
import type { IconType } from "react-icons";
import "./WorkshopDetails.scss";
import { useNavigate } from "react-router-dom";
import acIcon from "../images/what-we-do/ac.png";
import exteriorwashIcon from "../images/what-we-do/exterior-wash.png";
import interiorwashIcon from "../images/what-we-do/interior-wash.png";
import paintingIcon from "../images/what-we-do/painting.png"
import periodicIcon from "../images/what-we-do/periodic.png";
import tyreIcon from "../images/what-we-do/tyre.png"
import Header from "../../../../../shared/layouts/header/Header";

import brand1 from "../images/brands/brand1.png";
import brand2 from "../images/brands/brand2.png";
import brand3 from "../images/brands/brand3.png";
import brand4 from "../images/brands/brand4.png";
import brand5 from "../images/brands/brand5.png";
import brand6 from "../images/brands/brand6.png";
import brand7 from "../images/brands/brand7.png";
import brand8 from "../images/brands/brand8.png";
import brand9 from "../images/brands/brand9.png";
import brand10 from "../images/brands/brand10.png";
import brand11 from "../images/brands/brand10.png";


// ---------------------------------------------------------
// Types
// ---------------------------------------------------------

export type WorkshopPanelType = "panel" | "nonPanel";

export interface ServiceCategory {
    id: string;
    label: string;
    icon: string;
}

export interface Review {
    id: string;
    name: string;
    initials: string;
    timeAgo: string;
    rating: number;
    comment: string;
}

export interface NextStep {
    id: string;
    label: string;
}

export interface WorkshopDetailData {
    id: string;
    name: string;
    panelType: WorkshopPanelType;
    rating: number;
    reviewCount: number;
    address: string;
    distanceKm: number;
    openNow: boolean;
    hours: string;
    phone: string;
    aboutHeading: string;
    aboutText: string;
    whatWeDo: ServiceCategory[];
    services: string[];
    facilities: string[];
    insurancePartners: string[];
    location: {
        address: string;
    };
    nextSteps: NextStep[];
    reviews: Review[];
}

export interface WorkshopDetailProps {
    workshop?: WorkshopDetailData;
    onBack?: () => void;
    onContinue?: () => void;
    onCall?: () => void;
    onDirection?: () => void;
    onSelectWorkshop?: () => void;
    onOpenInMaps?: () => void;
}

// ---------------------------------------------------------
// Default / sample data (matches the reference screenshot)
// ---------------------------------------------------------

const DEFAULT_WORKSHOP: WorkshopDetailData = {
    id: "auto-bavaria-glenmarie",
    name: "Auto Bavaria Glenmarie",
    panelType: "panel",
    rating: 4.8,
    reviewCount: 1284,
    address: "Lot 1, Jalan Lapangan Terbang Subang, Shah Alam, Selangor",
    distanceKm: 2.4,
    openNow: true,
    hours: "Mon–Sat 8:30am – 6:00pm",
    phone: "+603 7845 8888",
    aboutHeading: "About Services Center",
    aboutText:
        'If you\'ve been looking for a "car service centre near me" for your NEXA car, you\'ve come to the right place! Motors, Gachibowli is a top-notch NEXA Service Centre near you where you can book a service.',
    whatWeDo: [
        { id: "periodic", label: "Periodic Service", icon: periodicIcon },
        { id: "tyre", label: "Tyre Care", icon: tyreIcon },
        { id: "ac", label: "AC Service", icon: acIcon },
        { id: "exteriorWash", label: "Exterior Wash", icon: exteriorwashIcon },
        { id: "interiorWash", label: "Interior Wash", icon: interiorwashIcon },
        { id: "denting1", label: "Denting & Painting", icon: paintingIcon },
        { id: "denting2", label: "Denting & Painting", icon: paintingIcon },
    ],
    services: ["Body Repair", "Spray Painting", "Mechanical", "Detailing"],
    facilities: ["Waiting Lounge", "Free Wi-Fi", "Pickup & Delivery", "Loan Car"],
    insurancePartners: [
        brand1,
        brand2,
        brand3,
        brand4,
        brand5,
        brand6,
        brand7,
        brand8,
        brand9,
        brand10,
        brand11
    ],
    location: {
        address: "Lot 1, Jalan Lapangan Terbang Subang, Shah Alam, Selangor",
    },
    nextSteps: [
        { id: "step1", label: "Confirm preferred drop-off slot" },
        { id: "step2", label: "Verify policy excess & coverage" },
        { id: "step3", label: "Request loan car if available" },
    ],
    reviews: [
        {
            id: "r1",
            name: "Hafiz Rahman",
            initials: "HR",
            timeAgo: "2 weeks ago",
            rating: 5,
            comment: "Excellent service. Quick claim processing and the paint match was perfect.",
        },
        {
            id: "r2",
            name: "Sarah Lim",
            initials: "SL",
            timeAgo: "1 month ago",
            rating: 5,
            comment: "Picked up my car for me. Friendly staff and constant WhatsApp updates throughout.",
        },
        {
            id: "r3",
            name: "Daniel Kumar",
            initials: "DK",
            timeAgo: "1 month ago",
            rating: 4,
            comment: "Repair took slightly longer than expected but the workmanship is solid.",
        },
    ],
};

// ---------------------------------------------------------
// Small presentational helpers
// ---------------------------------------------------------

function StarRating({ rating }: { rating: number }) {
    const stars = [1, 2, 3, 4, 5];
    return (
        <span className="workshop-detail__stars" aria-label={`${rating} out of 5 stars`}>
            {stars.map((n) => (
                <FaStar
                    key={n}
                    className={
                        "workshop-detail__star" +
                        (n <= Math.round(rating) ? " workshop-detail__star--filled" : "")
                    }
                />
            ))}
        </span>
    );
}

// ---------------------------------------------------------
// Component
// ---------------------------------------------------------

export default function WorkshopDetail({
    workshop = DEFAULT_WORKSHOP,
    onBack,
    onContinue,
    onCall,
    onDirection,
    onSelectWorkshop,
    onOpenInMaps,
}: WorkshopDetailProps) {
   
    return <>

        <div className="workshop-detail">
            <div className="workshop-detail__hero-card">

                <div className="workshop-detail__hero-banner"></div>
                <div className="workshop-detail__hero-info">
                    <div className="workshop-detail__hero-heading">
                        <div>
                            <h1 className="workshop-detail__name">{workshop.name}</h1>
                            <p className="workshop-detail__address">{workshop.address}</p>
                        </div>

                        <div className="workshop-detail__hero-actions">
                            {workshop.panelType === "panel" && (
                                <span className="workshop-detail__panel-tag">Panel</span>
                            )}
                            <span className="workshop-detail__rating-inline">
                                <FaStar className="workshop-detail__rating-icon" />
                                {workshop.rating.toFixed(1)} &middot; {workshop.reviewCount.toLocaleString()} reviews
                            </span>
                            <button type="button" className="workshop-detail__pill-btn" onClick={onCall}>
                                <FiPhoneCall /> Call
                            </button>
                            <button type="button" className="workshop-detail__pill-btn" onClick={onDirection}>
                                <FiNavigation /> Direction
                            </button>
                        </div>
                    </div>

                    <div className="workshop-detail__stat-bar">
                        <div className="workshop-detail__stat">
                            <span className="workshop-detail__stat-label">
                                <FiNavigation /> DISTANCE
                            </span>
                            <span className="workshop-detail__stat-value">
                                {workshop.distanceKm.toFixed(1)} km
                            </span>
                        </div>
                        <div className="workshop-detail__stat">
                            <span className="workshop-detail__stat-label">
                                <FiClock /> STATUS
                            </span>
                            <span className="workshop-detail__stat-value workshop-detail__stat-value--open">
                                {workshop.openNow ? "Open Now" : "Closed"}
                            </span>
                        </div>
                        <div className="workshop-detail__stat">
                            <span className="workshop-detail__stat-label">
                                <FiClock /> HOURS
                            </span>
                            <span className="workshop-detail__stat-value">{workshop.hours}</span>
                        </div>
                        <div className="workshop-detail__stat">
                            <span className="workshop-detail__stat-label">
                                <FiPhoneCall /> PHONE
                            </span>
                            <span className="workshop-detail__stat-value">{workshop.phone}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="workshop-detail__layout">
                <div className="workshop-detail__main">
                    <section className="workshop-detail__section">
                        <h2 className="workshop-detail__section-title">{workshop.aboutHeading}</h2>
                        <p className="workshop-detail__about-text">{workshop.aboutText}</p>
                    </section>

                    <section className="workshop-detail__card">
                        <h2 className="workshop-detail__section-title">What we do</h2>
                        <div className="workshop-detail__service-grid">
                            {workshop.whatWeDo.map((service) => {
                                return (
                                    <span className="workshop-detail__service-chip" key={service.id}>
                                        <span className="workshop-detail__service-icon">
                                            <img src={service.icon} alt={service.id} />
                                        </span>
                                        {service.label}
                                    </span>
                                );
                            })}
                        </div>
                    </section>

                    <div className="workshop-detail__two-col">
                        <section className="workshop-detail__card">
                            <h2 className="workshop-detail__section-title">Services</h2>
                            <ul className="workshop-detail__check-list">
                                {workshop.services.map((item) => (
                                    <li className="workshop-detail__check-item" key={item}>
                                        <FiCheckCircle className="workshop-detail__check-icon workshop-detail__check-icon--success" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <section className="workshop-detail__card">
                            <h2 className="workshop-detail__section-title">Facilities</h2>
                            <ul className="workshop-detail__check-list">
                                {workshop.facilities.map((item) => (
                                    <li className="workshop-detail__check-item" key={item}>
                                        <FiCheckCircle className="workshop-detail__check-icon workshop-detail__check-icon--info" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>

                    <section className="workshop-detail__card">
                        <h2 className="workshop-detail__section-title">Insurance Compatibility</h2>
                        <p className="workshop-detail__section-hint">
                            Insurers this workshop bills directly to.
                        </p>
                        <div className="workshop-detail__insurance-row">
                            {workshop.insurancePartners.map((partner,index) => (
                                <span className="workshop-detail__insurance-badge" key={partner}>
                                    <img src={partner} alt={""} />
                                </span>
                            ))}
                        </div>
                    </section>

                    <section className="workshop-detail__card">
                        <div className="workshop-detail__reviews-head">
                            <h2 className="workshop-detail__section-title">Customer Reviews</h2>
                            <span className="workshop-detail__rating-inline">
                                <FaStar className="workshop-detail__rating-icon" />
                                {workshop.rating.toFixed(1)} &middot; {workshop.reviewCount.toLocaleString()} reviews
                            </span>
                        </div>

                        <ul className="workshop-detail__review-list">
                            {workshop.reviews.map((review) => (
                                <li className="workshop-detail__review" key={review.id}>
                                    <span className="workshop-detail__review-avatar">{review.initials}</span>
                                    <div className="workshop-detail__review-body">
                                        <div className="workshop-detail__review-head">
                                            <div>
                                                <p className="workshop-detail__review-name">{review.name}</p>
                                                <p className="workshop-detail__review-time">{review.timeAgo}</p>
                                            </div>
                                            <StarRating rating={review.rating} />
                                        </div>
                                        <p className="workshop-detail__review-comment">{review.comment}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>

                {/* ---------------- Side column ---------------- */}
                <div className="workshop-detail__side">
                    <section className="workshop-detail__card workshop-detail__card--map">
                        <div className="workshop-detail__map">
                            <div className="workshop-detail__map-pin">
                                <FiMapPin />
                            </div>
                            <div className="workshop-detail__map-controls">
                                <button type="button" className="workshop-detail__map-btn" aria-label="Zoom in">
                                    <FiPlus />
                                </button>
                                <button type="button" className="workshop-detail__map-btn" aria-label="Zoom out">
                                    <FiMinus />
                                </button>
                            </div>
                        </div>

                        <div className="workshop-detail__location">
                            <h3 className="workshop-detail__location-title">Location</h3>
                            <p className="workshop-detail__location-address">{workshop.location.address}</p>
                            <button type="button" className="workshop-detail__maps-btn" onClick={onOpenInMaps}>
                                <FiNavigation /> Open in Maps
                            </button>
                        </div>
                    </section>

                    <section className="workshop-detail__card workshop-detail__card--next-steps">
                        <h3 className="workshop-detail__section-title workshop-detail__section-title--sm">
                            <FiZap className="workshop-detail__next-steps-icon" /> Recommended Next Steps
                        </h3>
                        <ul className="workshop-detail__next-steps-list">
                            {workshop.nextSteps.map((step) => (
                                <li key={step.id}>{step.label}</li>
                            ))}
                        </ul>
                        <button
                            type="button"
                            className="workshop-detail__select-btn"
                            onClick={onSelectWorkshop}
                        >
                            Select this workshop <FiArrowRight />
                        </button>
                    </section>
                </div>
            </div>

            <footer className="workshop-detail__footer">
                <button type="button" className="workshop-detail__btn workshop-detail__btn--ghost" onClick={onBack}>
                    <FiArrowLeft /> Back
                </button>
                <button
                    type="button"
                    className="workshop-detail__btn workshop-detail__btn--primary"
                    onClick={onContinue}
                >
                    Continue <FiArrowRight />
                </button>
            </footer>
        </div>
    </>
}