import React, { useMemo, useState } from "react";
import {
    FiSearch,
    FiHeart,
    FiPhoneCall,
    FiNavigation,
    FiArrowRight,
    FiArrowLeft,
    FiClock,
    FiMapPin,
    FiTool,
} from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import "./WorkshopList.scss";
import workshowImage from "./images/workshop1.png";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
// ---------------------------------------------------------
// Types
// ---------------------------------------------------------

export type WorkshopPanelType = "panel" | "nonPanel";

export type FilterId = "all" | "panel" | "nonPanel" | "nearest" | "highestRated" | "openNow";

export interface FilterConfig {
    id: FilterId;
    label: string;
}

export interface Workshop {
    id: string;
    name: string;
    panelType: WorkshopPanelType;
    address: string;
    distanceKm: number;
    openNow: boolean;
    rating: number;
    reviewCount: number;
    phone: string;
    img:string;
    imageLabel: string;
}

export interface WorkshopListProps {
    onBack?: () => void;
    onContinue?: (selectedWorkshopId: string | null) => void;
    onCall?: (workshop: Workshop) => void;
    onDirection?: (workshop: Workshop) => void;
    onViewDetails?: (workshop: Workshop) => void;
}

// ---------------------------------------------------------
// Static config
// ---------------------------------------------------------

const FILTERS: FilterConfig[] = [
    { id: "all", label: "All" },
    { id: "panel", label: "Panel" },
    { id: "nonPanel", label: "Non Panel" },
    { id: "nearest", label: "Nearest" },
    { id: "highestRated", label: "Highest Rated" },
    { id: "openNow", label: "Open Now" },
];

const WORKSHOPS: Workshop[] = [
    {
        id: "auto-bavaria-glenmarie",
        name: "Auto Bavaria Glenmarie",
        panelType: "panel",
        address: "Lot 1, Jalan Lapangan Terbang Subang, Shah Alam, Selangor",
        distanceKm: 2.4,
        openNow: true,
        rating: 4.8,
        reviewCount: 1284,
        phone: "+60312345678",
        imageLabel: "Auto Bavaria",
        img: workshowImage
    },
    {
        id: "perodua-service-pj",
        name: "Perodua Service Centre PJ",
        panelType: "panel",
        address: "Jalan 51A/225, Section 51A, Petaling Jaya, Selangor",
        distanceKm: 2.4,
        openNow: true,
        rating: 4.8,
        reviewCount: 1284,
        phone: "+60312345679",
        imageLabel: "Perodua Service",
        img: workshowImage
    },
    {
        id: "proton-edar-subang",
        name: "Proton Edar Subang",
        panelType: "panel",
        address: "Persiaran Kewajipan, USJ 1, Subang Jaya, Selangor",
        distanceKm: 2.4,
        openNow: true,
        rating: 4.8,
        reviewCount: 1284,
        phone: "+60312345680",
        imageLabel: "Proton Edar",
        img: workshowImage
    },
    {
        id: "proton-edar-subang-2",
        name: "Proton Edar Subang",
        panelType: "panel",
        address: "Persiaran Kewajipan, USJ 1, Subang Jaya, Selangor",
        distanceKm: 2.4,
        openNow: true,
        rating: 4.8,
        reviewCount: 1284,
        phone: "+60312345680",
        imageLabel: "Proton Edar",
        img: workshowImage
    },

    {
        id: "auto-bavaria-glenmarie-2",
        name: "Auto Bavaria Glenmarie",
        panelType: "panel",
        address: "Lot 1, Jalan Lapangan Terbang Subang, Shah Alam, Selangor",
        distanceKm: 2.4,
        openNow: true,
        rating: 4.8,
        reviewCount: 1284,
        phone: "+60312345678",
        imageLabel: "Auto Bavaria",
        img: workshowImage
    },
    {
        id: "perodua-service-pj-2",
        name: "Perodua Service Centre PJ",
        panelType: "panel",
        address: "Jalan 51A/225, Section 51A, Petaling Jaya, Selangor",
        distanceKm: 2.4,
        openNow: true,
        rating: 4.8,
        reviewCount: 1284,
        phone: "+60312345679",
        imageLabel: "Perodua Service",
        img: workshowImage
    },
    {
        id: "perodua-service-pj-3",
        name: "Perodua Service Centre PJ",
        panelType: "panel",
        address: "Jalan 51A/225, Section 51A, Petaling Jaya, Selangor",
        distanceKm: 2.4,
        openNow: true,
        rating: 4.8,
        reviewCount: 1284,
        phone: "+60312345679",
        imageLabel: "Perodua Service",
        img: workshowImage
    },
    {
        id: "proton-edar-subang-3",
        name: "Proton Edar Subang",
        panelType: "panel",
        address: "Persiaran Kewajipan, USJ 1, Subang Jaya, Selangor",
        distanceKm: 2.4,
        openNow: true,
        rating: 4.8,
        reviewCount: 1284,
        phone: "+60312345680",
        imageLabel: "Proton Edar",
        img: workshowImage
    },
    {
        id: "auto-bavaria-glenmarie-3",
        name: "Auto Bavaria Glenmarie",
        panelType: "panel",
        address: "Lot 1, Jalan Lapangan Terbang Subang, Shah Alam, Selangor",
        distanceKm: 2.4,
        openNow: true,
        rating: 4.8,
        reviewCount: 1284,
        phone: "+60312345678",
        imageLabel: "Auto Bavaria",
        img: workshowImage
    },
];

// ---------------------------------------------------------
// Component
// ---------------------------------------------------------

export default function WorkshopList({
    onBack,
    onContinue,
    onCall,
    onDirection,
    onViewDetails,
}: WorkshopListProps) {
    const [query, setQuery] = useState<string>("");
    const [activeFilter, setActiveFilter] = useState<FilterId>("all");
    const [favorites, setFavorites] = useState<Set<string>>(new Set());
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const navigate = useNavigate();


    const toggleFavorite = (id: string): void => {
        setFavorites((prev) => {
            const next = new Set(prev);
            if (next.has(id)) next.delete(id);
            else next.add(id);
            return next;
        });
    };

    const filteredWorkshops = useMemo<Workshop[]>(() => {
        let list = WORKSHOPS.slice();

        const q = query.trim().toLowerCase();
        if (q) {
            list = list.filter(
                (w) =>
                    w.name.toLowerCase().includes(q) ||
                    w.address.toLowerCase().includes(q)
            );
        }

        switch (activeFilter) {
            case "panel":
                list = list.filter((w) => w.panelType === "panel");
                break;
            case "nonPanel":
                list = list.filter((w) => w.panelType === "nonPanel");
                break;
            case "openNow":
                list = list.filter((w) => w.openNow);
                break;
            case "nearest":
                list = list.slice().sort((a, b) => a.distanceKm - b.distanceKm);
                break;
            case "highestRated":
                list = list.slice().sort((a, b) => b.rating - a.rating);
                break;
            case "all":
            default:
                break;
        }

        return list;
    }, [query, activeFilter]);

    const handleViewDetails = (workshop: Workshop): void => {
        setSelectedId(workshop.id);
        // navigate("/claims/workshop/details")
    };

    const handleCall = (workshop: Workshop): void => {
        onCall?.(workshop);
        window.location.href = `tel:${workshop.phone}`;
    };

    const handleDirection = (workshop: Workshop): void => {
        onDirection?.(workshop);
    };

    const handleContinueClick = (): void => {
        onContinue?.(selectedId);
    };

    return (
        <div className="workshop-list">
            <header className="workshop-list__header">
                <h1 className="workshop-list__title">
                    Choose a <span className="workshop-list__title--accent">Workshop</span>
                </h1>
                <p className="workshop-list__subtitle">
                    Search, filter and select the workshop that works best for you.
                </p>
            </header>

            <div className="workshop-list__toolbar">
                <div className="workshop-list__search">
                    <FiSearch className="workshop-list__search-icon" />
                    <input
                        type="text"
                        className="workshop-list__search-input"
                        placeholder="Search workshop name, area or service..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </div>

                <div className="workshop-list__filters">
                    {FILTERS.map((filter) => (
                        <button
                            type="button"
                            key={filter.id}
                            className={
                                "workshop-list__filter-btn" +
                                (activeFilter === filter.id ? " workshop-list__filter-btn--active" : "")
                            }
                            onClick={() => setActiveFilter(filter.id)}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="workshop-list__grid">
                {filteredWorkshops.map((workshop) => {
                    const isFavorite = favorites.has(workshop.id);
                    const isSelected = selectedId === workshop.id;

                    return (
                        <article
                            key={workshop.id}
                            className={
                                "workshop-list__card" +
                                (isSelected ? " workshop-list__card--selected" : "")
                            }
                        >
                            <div className="workshop-list__thumb" style={{ backgroundImage: `url("${workshop.img}")` }}>
                                

                                {workshop.panelType === "panel" && (
                                    <span className="workshop-list__panel-badge">
                                        <IoShieldCheckmarkOutline /> Panel
                                    </span>
                                )}

                                <button
                                    type="button"
                                    className={
                                        "workshop-list__fav-btn" +
                                        (isFavorite ? " workshop-list__fav-btn--active" : "")
                                    }
                                    onClick={() => toggleFavorite(workshop.id)}
                                    aria-label={
                                        isFavorite ? `Remove ${workshop.name} from favorites` : `Save ${workshop.name} to favorites`
                                    }
                                >
                                    <FiHeart />
                                </button>
                            </div>

                            <div className="workshop-list__body">
                                <div className="workshop-list__name-row">
                                    <h3 className="workshop-list__name">{workshop.name}</h3>
                                    <span className="workshop-list__rating">
                                        <FaStar className="workshop-list__rating-icon" />
                                        {workshop.rating.toFixed(1)}
                                    </span>
                                </div>

                                <p className="workshop-list__address">{workshop.address}</p>

                                <div className="workshop-list__meta">
                                    <span className="workshop-list__meta-item">
                                        <FiMapPin /> {workshop.distanceKm.toFixed(1)} km
                                    </span>
                                    <span className="workshop-list__meta-dot">&middot;</span>
                                    <span
                                        className={
                                            "workshop-list__meta-item" +
                                            (workshop.openNow ? " workshop-list__meta-item--open" : "")
                                        }
                                    >
                                        <FiClock /> {workshop.openNow ? "Open now" : "Closed"}
                                    </span>
                                    <span className="workshop-list__meta-dot">&middot;</span>
                                    <span className="workshop-list__meta-item">
                                        {workshop.reviewCount.toLocaleString()} reviews
                                    </span>
                                </div>

                                <div className="workshop-list__actions">
                                    <button
                                        type="button"
                                        className="workshop-list__action-btn"
                                        onClick={() => handleCall(workshop)}
                                    >
                                        <FiPhoneCall /> Call
                                    </button>
                                    <button
                                        type="button"
                                        className="workshop-list__action-btn"
                                        onClick={() => handleDirection(workshop)}
                                    >
                                        <FiNavigation /> Direction
                                    </button>
                                    <button
                                        type="button"
                                        className="workshop-list__action-btn workshop-list__action-btn--primary"
                                        onClick={() => handleViewDetails(workshop)}
                                    >
                                        View Details <FiArrowRight />
                                    </button>
                                </div>
                            </div>
                        </article>
                    );
                })}

                {filteredWorkshops.length === 0 && (
                    <p className="workshop-list__empty">
                        No workshops match your search. Try a different name, area or filter.
                    </p>
                )}
            </div>

            <footer className="workshop-list__footer">
                <button
                    type="button"
                    className="workshop-list__btn workshop-list__btn--ghost"
                    onClick={onBack}
                >
                    <FiArrowLeft /> Back
                </button>
                <button
                    type="button"
                    className="workshop-list__btn workshop-list__btn--primary"
                  
                    onClick={handleContinueClick}
                >
                    Continue <FiArrowRight />
                </button>
            </footer>
        </div>
    );
}