import React, { useState } from "react";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";
import { PiSteeringWheelFill, PiShieldCheckeredFill } from "react-icons/pi";
import { FaTools } from "react-icons/fa";
import { MdGarage } from "react-icons/md";
import type { IconType } from "react-icons";
import ClaimsFooter from "../claims-footer/ClaimsFooter";
import "./RoadsideAssistance.scss";

// ---------------------------------------------------------
// Types
// ---------------------------------------------------------

export type RoadsideOptionId = "drive";
export type WorkshopOptionId = "panel" | "nonPanel" | "both";

export type BadgeTone = "emergency" | "info" | "success" | "orange";

export interface BadgeConfig {
    label: string;
    tone: BadgeTone;
}

interface BaseCardConfig<Id extends string> {
    id: Id;
    title: string;
    subtitle: string;
    icon: IconType;
    /** BEM modifier suffix for the icon circle's background color */
    iconTone: "danger" | "primary" | "success" | "orange" | "warning";
    badge?: BadgeConfig;
    features: string[];
    ctaLabel: string;
}

export type RoadsideOptionConfig = BaseCardConfig<RoadsideOptionId>;
export type WorkshopOptionConfig = BaseCardConfig<WorkshopOptionId>;

export interface RoadsideAssistanceResult {
    roadsideOption: RoadsideOptionId | null;
    workshopOption: WorkshopOptionId | null;
}

export interface RoadsideAssistanceProps {
    onBack?: () => void;
    onContinue?: (result: RoadsideAssistanceResult) => void;
}

// ---------------------------------------------------------
// Static config
// ---------------------------------------------------------

const ROADSIDE_OPTIONS: RoadsideOptionConfig[] = [
    {
        id: "drive",
        title: "I Can Drive",
        subtitle: "Recommended for minor incidents",
        icon: PiSteeringWheelFill,
        iconTone: "primary",
        badge: { label: "Driveable", tone: "info" },
        features: [
            "Vehicle is safely drivable",
            "Proceed directly to a workshop",
            "Skip towing dispatch fee",
        ],
        ctaLabel: "Select",
    },
];

const WORKSHOP_OPTIONS: WorkshopOptionConfig[] = [
    {
        id: "panel",
        title: "Panel Workshop",
        subtitle: "Insurer approved workshops",
        icon: PiShieldCheckeredFill,
        iconTone: "success",
        badge: { label: "Recommended", tone: "info" },
        features: [
            "Cashless repairs",
            "Direct insurer billing",
            "Priority processing",
            "Workmanship guarantee",
        ],
        ctaLabel: "Browse Panel Workshops",
    },
    {
        id: "nonPanel",
        title: "Non-Panel Workshop",
        subtitle: "Workshops outside the panel",
        icon: FaTools,
        iconTone: "orange",
        features: [
            "Choose any independent workshop",
            "Pay first, claim later",
            "Longer approval timeline",
            "Submit invoices manually",
        ],
        ctaLabel: "Browse Non-Panel",
    },
    {
        id: "both",
        title: "View Both",
        subtitle: "Compare panel & non-panel",
        icon: MdGarage,
        iconTone: "warning",
        features: [
            "See every option side by side",
            "Filter by rating, distance, panel",
            "Switch view at any time",
            "Best for first time claimants",
        ],
        ctaLabel: "See All Workshops",
    },
];

// ---------------------------------------------------------
// Component
// ---------------------------------------------------------

export default function RoadsideAssistance({ onBack, onContinue }: RoadsideAssistanceProps) {
    const [roadsideOption, setRoadsideOption] = useState<RoadsideOptionId | null>(null);
    const [workshopOption, setWorkshopOption] = useState<WorkshopOptionId | null>(null);

    const handleContinueClick = (): void => {
        onContinue?.({ roadsideOption, workshopOption });
    };

    return (
        <div className="roadside-assistance">
            <header className="roadside-assistance__header">
                <h1 className="roadside-assistance__title">Roadside Assistance</h1>
                <p className="roadside-assistance__subtitle">
                    Do you required roadside assistance right now?
                </p>
            </header>

            <div className="roadside-assistance__grid roadside-assistance__grid--one">
                {ROADSIDE_OPTIONS.map((option) => (
                    <OptionCard
                        key={option.id}
                        config={option}
                        selected={roadsideOption === option.id}
                        onSelect={() => setRoadsideOption(option.id)}
                    />
                ))}
            </div>

            {roadsideOption !== null && (
                <>
                    <header className="roadside-assistance__header roadside-assistance__header--section">
                        <h2 className="roadside-assistance__title roadside-assistance__title--section">
                            Workshop Type
                        </h2>
                        <p className="roadside-assistance__subtitle">
                            Choose between CoverEazy workshop or independent non-panel workshops
                        </p>
                    </header>

                    <div className="roadside-assistance__grid roadside-assistance__grid--three">
                        {WORKSHOP_OPTIONS.map((option) => (
                            <OptionCard
                                key={option.id}
                                config={option}
                                selected={workshopOption === option.id}
                                compact
                                onSelect={() => setWorkshopOption(option.id)}
                            />
                        ))}
                    </div>
                </>
            )}

            <ClaimsFooter onBack={onBack} onContinue={handleContinueClick} />
        </div>
    );
}

// ---------------------------------------------------------
// Sub-component: a single selectable card
// ---------------------------------------------------------

interface OptionCardProps<Id extends string> {
    config: BaseCardConfig<Id>;
    selected: boolean;
    compact?: boolean;
    onSelect: () => void;
}

function OptionCard<Id extends string>({ config, selected, compact, onSelect }: OptionCardProps<Id>) {
    const Icon = config.icon;

    return (
        <article
            className={
                "roadside-assistance__card" +
                (selected ? " roadside-assistance__card--selected" : "") +
                (compact ? " roadside-assistance__card--compact" : "")
            }
        >
            <div className="roadside-assistance__card-head">
                <span
                    className={`roadside-assistance__icon roadside-assistance__icon--${config.iconTone}`}
                >
                    <Icon />
                </span>

                <div className="roadside-assistance__card-heading">
                    <div className="roadside-assistance__card-title-row">
                        <h3 className="roadside-assistance__card-title">{config.title}</h3>
                        {config.badge && (
                            <span
                                className={`roadside-assistance__badge roadside-assistance__badge--${config.badge.tone}`}
                            >
                                {config.badge.label}
                            </span>
                        )}
                    </div>
                    <p className="roadside-assistance__card-subtitle">{config.subtitle}</p>
                </div>
            </div>

            <ul className="roadside-assistance__feature-list">
                {config.features.map((feature) => (
                    <li className="roadside-assistance__feature" key={feature}>
                        <FiCheckCircle className="roadside-assistance__feature-icon" />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>

            <button
                type="button"
                className="roadside-assistance__select-btn"
                onClick={onSelect}
            >
                {selected ? "Selected" : config.ctaLabel} {selected ? <FiCheckCircle /> : <FiArrowRight />}
            </button>
        </article>
    );
}