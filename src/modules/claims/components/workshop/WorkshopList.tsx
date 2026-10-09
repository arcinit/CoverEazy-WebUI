import React, { useMemo, useState } from "react";
import { FiSearch, FiHeart, FiPhone, FiNavigation, FiArrowRight, FiClock } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import "./WorkshopList.scss";
import garageLift from "./images/garage-lift.jpg";
import garageTools from "./images/garage-tools.jpg";
import garageCabinet from "./images/garage-cabinet.jpg";

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
    img: string;
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

const BASE = [
    { key: "auto-bavaria-glenmarie", name: "Auto Bavaria Glenmarie", address: "Lot 1, Jalan Lapangan Terbang Subang, Shah Alam, Selangor", phone: "+60312345678", img: garageLift },
    { key: "perodua-service-pj", name: "Perodua Service Centre PJ", address: "Jalan 51A/225, Section 51A, Petaling Jaya, Selangor", phone: "+60312345679", img: garageTools },
    { key: "proton-edar-subang", name: "Proton Edar Subang", address: "Persiaran Kewajipan, USJ 1, Subang Jaya, Selangor", phone: "+60312345680", img: garageCabinet },
];

// Same display order as the design: A P R / R A P / P R A
const ORDER = [0, 1, 2, 2, 0, 1, 1, 2, 0];

const WORKSHOPS: Workshop[] = ORDER.map((i, n) => {
    const w = BASE[i];
    return {
        id: n < 3 ? w.key : `${w.key}-${n}`,
        name: w.name,
        panelType: "panel",
        address: w.address,
        distanceKm: 2.4,
        openNow: true,
        rating: 4.8,
        reviewCount: 1284,
        phone: w.phone,
        imageLabel: w.name,
        img: w.img,
    };
});

// ---------------------------------------------------------
// Component
// ---------------------------------------------------------

export default function WorkshopList({ onContinue, onCall, onDirection, onViewDetails }: WorkshopListProps) {
    const [query, setQuery] = useState<string>("");
    const [activeFilter, setActiveFilter] = useState<FilterId>("all");
    const [favorites, setFavorites] = useState<Set<string>>(new Set());

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
            list = list.filter((w) => w.name.toLowerCase().includes(q) || w.address.toLowerCase().includes(q));
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
            default:
                break;
        }

        return list;
    }, [query, activeFilter]);

    const handleViewDetails = (workshop: Workshop): void => {
        onViewDetails?.(workshop);
        onContinue?.(workshop.id);
    };

    const handleCall = (workshop: Workshop): void => {
        onCall?.(workshop);
        window.location.href = `tel:${workshop.phone}`;
    };

    return (
        <div className="workshop-list">
            <header className="workshop-list__header">
                <h1 className="workshop-list__title">
                    Choose a <span className="workshop-list__title--accent">Workshop</span>
                </h1>
                <p className="workshop-list__subtitle">Search, filter and select the workshop that works best for you.</p>
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

                    return (
                        <article key={workshop.id} className="workshop-list__card">
                            <div className="workshop-list__thumb" style={{ backgroundImage: `url("${workshop.img}")` }}>
                                {workshop.panelType === "panel" && (
                                    <span className="workshop-list__panel-badge">
                                        <IoShieldCheckmarkOutline /> Panel
                                    </span>
                                )}

                                <button
                                    type="button"
                                    className={
                                        "workshop-list__fav-btn" + (isFavorite ? " workshop-list__fav-btn--active" : "")
                                    }
                                    onClick={() => toggleFavorite(workshop.id)}
                                    aria-label={
                                        isFavorite
                                            ? `Remove ${workshop.name} from favorites`
                                            : `Save ${workshop.name} to favorites`
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
                                        <FiNavigation /> {workshop.distanceKm.toFixed(1)} km
                                    </span>
                                    <span
                                        className={
                                            "workshop-list__meta-item" +
                                            (workshop.openNow ? " workshop-list__meta-item--open" : "")
                                        }
                                    >
                                        <FiClock /> {workshop.openNow ? "Open now" : "Closed"}
                                    </span>
                                    <span className="workshop-list__meta-dot">&middot;</span>
                                    <span className="workshop-list__meta-item">{workshop.reviewCount} reviews</span>
                                </div>

                                <div className="workshop-list__actions">
                                    <button type="button" className="workshop-list__action-btn" onClick={() => handleCall(workshop)}>
                                        <FiPhone /> Call
                                    </button>
                                    <button
                                        type="button"
                                        className="workshop-list__action-btn"
                                        onClick={() => onDirection?.(workshop)}
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
        </div>
    );
}
