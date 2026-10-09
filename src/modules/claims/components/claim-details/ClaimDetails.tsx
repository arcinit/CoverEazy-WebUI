import React, { useState } from "react";
import {
    FiArrowLeft,
    FiCalendar,
    FiCheckCircle,
    FiClock,
    FiDollarSign,
    FiDownload,
    FiFileText,
    FiMapPin,
    FiNavigation,
    FiPhone,
    FiShare2,
    FiShield,
    FiUploadCloud,
    FiUser,
} from "react-icons/fi";
import { FaCar, FaCheckCircle, FaStar } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import "./ClaimDetails.scss";
import carImage from "./images/car.png";
import etiqaLogo from "./images/etiqa.png";
import mapImage from "./images/map.png";

interface ClaimDetailsProps {
    onBack?: () => void;
}

type TabKey = "details" | "documents" | "tracker";

const TABS: { key: TabKey; label: string }[] = [
    { key: "details", label: "Details" },
    { key: "documents", label: "Documents" },
    { key: "tracker", label: "Claim Tracker" },
];

const HERO_INFO = [
    { label: "Claim ID", value: "CLM-2026-17376" },
    { label: "Insurance Provider", value: "Etiqa Takaful Berhad" },
    { label: "Workshop Name", value: "Auto Bavaria Glenmarie" },
];

const SUMMARY_ITEMS = [
    { icon: <FaCar />, label: "Claim Type", value: "Own Vehicle Damage" },
    { icon: <FiFileText />, label: "Policy Number", value: "MOTO-88721" },
    { icon: <FaCar />, label: "Vehicle", value: "WXD 1234 · Toyota Camry 2.5V" },
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
    { icon: <FiNavigation />, label: "Distance", value: "2.4 km", positive: false },
    { icon: <FiClock />, label: "Status", value: "Open Now", positive: true },
    { icon: <FiFileText />, label: "Hours", value: "Mon–Sat 8:30am – 6:00pm", positive: false },
    { icon: <FiPhone />, label: "Phone", value: "+603 7845 8888", positive: false },
];

const DOCUMENTS = [
    { name: "Front Bumper Damage", type: "JPG", meta: "2.4 MB · 15 Jan 2026", tone: "blue", icon: <FiShield /> },
    { name: "Side Profile", type: "JPG", meta: "2.4 MB · 15 Jan 2026", tone: "blue", icon: <FiShield /> },
    { name: "Police Report", type: "PDF", meta: "0.8 MB · 25 Jun 2026", tone: "orange", icon: <FiFileText /> },
    { name: "Claim Reference CLM-88421", type: "PDF", meta: "0.6 MB · 25 Jun 2026", tone: "orange", icon: <FiFileText /> },
    { name: "Tow Invoice", type: "PDF", meta: "0.4 MB · 15 Jan 2026", tone: "purple", icon: <FiDollarSign /> },
    { name: "KYC Verification Certificate", type: "PDF", meta: "1.1 MB · 10 Jan 2022", tone: "green", icon: <FiCheckCircle /> },
];

type StepState = "done" | "current" | "upcoming";
const STEPS: { title: string; sub: string; state: StepState }[] = [
    { title: "Claim Submitted", sub: "28 Jun 2026 · 10:24", state: "done" },
    { title: "Insurance Review", sub: "28 Jun 2026 · 14:10", state: "done" },
    { title: "Workshop Assigned", sub: "29 Jun 2026 · 09:00", state: "done" },
    { title: "Damage Assessment", sub: "30 Jun 2026 · 11:30", state: "current" },
    { title: "Repair Estimate", sub: "Estimated 01 Jul 2026", state: "upcoming" },
    { title: "Approval", sub: "Estimated 02 Jul 2026", state: "upcoming" },
    { title: "Repair Started", sub: "Estimated 03 Jul 2026", state: "upcoming" },
    { title: "Quality Check", sub: "Estimated 10 Jul 2026", state: "upcoming" },
    { title: "Vehicle Ready", sub: "Estimated 12 Jul 2026", state: "upcoming" },
    { title: "Claim Closed", sub: "Estimated —", state: "upcoming" },
];
const STEP_PILL: Record<StepState, string> = {
    done: "Completed",
    current: "In Progress",
    upcoming: "Upcoming",
};

const Spec = ({ label, value, upper }: { label: string; value: string; upper?: boolean }) => (
    <div className={`clmd-spec${upper ? " clmd-spec--upper" : ""}`}>
        <span className="clmd-spec__label">{label}</span>
        <span className="clmd-spec__value">{value}</span>
    </div>
);

const ClaimDetails = ({ onBack }: ClaimDetailsProps) => {
    const [tab, setTab] = useState<TabKey>("details");

    return (
        <div className={`clmd clmd--${tab}`}>
            {/* Top card */}
            <section className="clmd-hero">
                <div className="clmd-hero__top">
                    <img className="clmd-hero__thumb" src={carImage} alt="Vehicle" />
                    <div className="clmd-hero__info">
                        <div className="clmd-hero__row">
                            <span className="clmd-hero__submitted">Submitted 28 Jun 2026</span>
                            <span className="clmd-pill clmd-pill--blue">Damage Assessment</span>
                        </div>
                        <h2 className="clmd-hero__plate">WXD 1234</h2>
                        <p className="clmd-hero__meta">Toyota Camry 2.5V · 2022 · Pearl White</p>
                    </div>
                    <button type="button" className="clmd-call">
                        <FiPhone /> Call
                    </button>
                </div>
                <div className="clmd-divider" />
                <div className="clmd-hero__stats">
                    {HERO_INFO.map((i) => (
                        <Spec key={i.label} {...i} />
                    ))}
                </div>
            </section>

            {/* Tabs */}
            <div className="clmd-tabs" role="tablist">
                {TABS.map((t) => (
                    <button
                        key={t.key}
                        type="button"
                        role="tab"
                        aria-selected={tab === t.key}
                        className={`clmd-tabs__btn${tab === t.key ? " is-active" : ""}`}
                        onClick={() => setTab(t.key)}
                    >
                        {t.label}
                    </button>
                ))}
            </div>

            {tab === "details" && (
                <div className="clmd-stack">
                    <section className="clmd-card">
                        <div className="clmd-card__head">
                            <h2 className="clmd-card__title">Claim Summary</h2>
                            <span className="clmd-pill clmd-pill--purple">Pending</span>
                        </div>
                        <div className="clmd-grid clmd-grid--2">
                            {SUMMARY_ITEMS.map((item) => (
                                <div className="clmd-field" key={item.label}>
                                    <span className="clmd-field__icon">{item.icon}</span>
                                    <div className="clmd-field__text">
                                        <span className="clmd-field__label">{item.label}</span>
                                        <span className="clmd-field__value">{item.value}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="clmd-grid clmd-grid--split">
                        <div className="clmd-entity">
                            <div className="clmd-entity__top">
                                <img className="clmd-hero__thumb" src={carImage} alt="Vehicle" />
                                <div className="clmd-hero__info">
                                    <div className="clmd-entity__label-row">
                                        <span className="clmd-entity__label">Insured Vehicle</span>
                                        <span className="clmd-pill clmd-pill--green">
                                            Verified <MdVerified />
                                        </span>
                                    </div>
                                    <h3 className="clmd-hero__plate">WXD 1234</h3>
                                    <p className="clmd-hero__meta">Toyota Camry 2.5V · 2022 · Pearl White</p>
                                </div>
                            </div>
                            <div className="clmd-divider" />
                            <div className="clmd-entity__specs">
                                {VEHICLE_SPECS.map((s) => (
                                    <Spec key={s.label} {...s} />
                                ))}
                            </div>
                        </div>

                        <div className="clmd-entity">
                            <div className="clmd-entity__top">
                                <div className="clmd-hero__info">
                                    <span className="clmd-entity__label">Insurance Provider</span>
                                    <div className="clmd-entity__name-row">
                                        <h3 className="clmd-hero__plate">Etiqa Takaful Berhad</h3>
                                        <span className="clmd-pill clmd-pill--green">
                                            <FaCheckCircle /> Active
                                        </span>
                                    </div>
                                    <p className="clmd-hero__meta">MOTO-88721</p>
                                </div>
                                <img className="clmd-entity__logo" src={etiqaLogo} alt="Etiqa Takaful" />
                            </div>
                            <div className="clmd-divider" />
                            <div className="clmd-entity__specs">
                                {INSURANCE_SPECS.map((s) => (
                                    <Spec key={s.label} {...s} />
                                ))}
                            </div>
                        </div>
                    </section>

                    <section className="clmd-card clmd-card--driver">
                        <div className="clmd-card__head clmd-card__head--icon">
                            <span className="clmd-card__icon">
                                <FiUser />
                            </span>
                            <h2 className="clmd-card__title">Driver &amp; Emergency Contact</h2>
                        </div>
                        <div className="clmd-grid clmd-grid--4">
                            {DRIVER_INFO.map((d) => (
                                <Spec key={d.label} {...d} upper />
                            ))}
                        </div>
                    </section>

                    <section className="clmd-card">
                        <h2 className="clmd-card__title">Vehicle Images</h2>
                        <div className="clmd-images">
                            {VEHICLE_IMAGES.map((img) => (
                                <div className="clmd-images__slot" key={img.label}>
                                    <FaCheckCircle className="clmd-images__check" />
                                    <span className="clmd-images__label">{img.label}</span>
                                    <span className="clmd-images__caption">{img.caption}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="clmd-workshop">
                        <div className="clmd-workshop__head">
                            <div>
                                <h2 className="clmd-workshop__name">Auto Bavaria Glenmarie</h2>
                                <p className="clmd-workshop__addr">Lot 1, Jalan Lapangan Terbang Subang, Shah Alam, Selangor</p>
                            </div>
                            <div className="clmd-workshop__rating">
                                <span className="clmd-pill clmd-pill--blue">Panel</span>
                                <span className="clmd-workshop__stars">
                                    <FaStar /> 4.8 · 1284 reviews
                                </span>
                            </div>
                        </div>
                        <div className="clmd-divider" />
                        <div className="clmd-workshop__stats">
                            {WORKSHOP_STATS.map((s) => (
                                <div className="clmd-wstat" key={s.label}>
                                    <span className="clmd-wstat__label">
                                        {s.icon} {s.label}
                                    </span>
                                    <span className={`clmd-wstat__value${s.positive ? " is-positive" : ""}`}>{s.value}</span>
                                </div>
                            ))}
                        </div>
                        <img className="clmd-workshop__map" src={mapImage} alt="Workshop location map" />
                    </section>
                </div>
            )}

            {tab === "documents" && (
                <section className="clmd-card clmd-card--docs">
                    <div className="clmd-card__head">
                        <h2 className="clmd-card__title">Claim Documents</h2>
                        <button type="button" className="clmd-upload">
                            <FiUploadCloud /> Upload Documents
                        </button>
                    </div>
                    <div className="clmd-docs">
                        {DOCUMENTS.map((d) => (
                            <div className="clmd-doc" key={d.name}>
                                <div className="clmd-doc__top">
                                    <span className={`clmd-doc__icon clmd-tone--${d.tone}`}>{d.icon}</span>
                                    <span className="clmd-doc__tag">{d.type}</span>
                                </div>
                                <h3 className="clmd-doc__name">{d.name}</h3>
                                <p className="clmd-doc__meta">{d.meta}</p>
                                <div className="clmd-doc__actions">
                                    <button type="button" className={`clmd-doc__download clmd-tone--${d.tone}`}>
                                        <FiDownload /> Download
                                    </button>
                                    <button type="button" className="clmd-doc__share" aria-label="Share">
                                        <FiShare2 />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {tab === "tracker" && (
                <section className="clmd-card clmd-card--tracker">
                    <h2 className="clmd-card__title">Claim Progress Timeline</h2>
                    <p className="clmd-card__sub">Live status of every stage from submission to closure.</p>
                    <ol className="clmd-steps">
                        {STEPS.map((s, i) => (
                            <li
                                key={s.title}
                                className={`clmd-step clmd-step--${s.state}${
                                    STEPS[i + 1] && STEPS[i + 1].state !== "upcoming" ? " clmd-step--line-done" : ""
                                }`}
                            >
                                <span className="clmd-step__dot">
                                    {s.state === "done" && <FiCheckCircle />}
                                    {s.state === "current" && <i />}
                                    {s.state === "upcoming" && i + 1}
                                </span>
                                <div className="clmd-step__text">
                                    <span className="clmd-step__title">{s.title}</span>
                                    <span className="clmd-step__sub">{s.sub}</span>
                                </div>
                                <span className={`clmd-step__pill clmd-step__pill--${s.state}`}>{STEP_PILL[s.state]}</span>
                            </li>
                        ))}
                    </ol>
                </section>
            )}

            <div className="clmd-back">
                <button type="button" className="clmd-back__btn" onClick={onBack}>
                    <FiArrowLeft /> Back
                </button>
            </div>
        </div>
    );
};

export default ClaimDetails;
