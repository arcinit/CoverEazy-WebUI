import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { FiCalendar } from "react-icons/fi"
import { tokenService } from "../../../../shared/services/token.service"
import { homeTab } from "../../../../shared/state/homeTab"
import VehicleVerificationModal from "../vehicle-verification/VehicleVerificationModal"
import "./HomeHero.scss"

import heroBg from "./images/hero-bg.png"
import tabCar from "./images/tab-car.png"
import tabTravel from "./images/tab-travel.png"
import tabTax from "./images/tab-tax.png"
import badgeBnm from "./images/badge-bnm.svg"
import badgeCompare from "./images/badge-compare.svg"
import badgePrice from "./images/badge-price.svg"
import badgeSecure from "./images/badge-secure.svg"
import arrowRight from "./images/arrow-right.svg"
import playIcon from "./images/play.svg"
import googlePlayBtn from "./images/google-play-btn.svg"
import appStoreBtn from "./images/app-store-btn.svg"
import chipCompare from "./images/chip-compare.svg"
import chipTax from "./images/chip-tax.svg"
import chipClaims from "./images/chip-claims.svg"
import chevronDown from "./images/chevron-down.svg"
import rego from "./images/rego.svg"
import info from "./images/info.svg"
import quoteArrow from "./images/quote-arrow.svg"
import aiSparkle from "./images/ai-sparkle.svg"

const TABS = [
    { id: "car", label: "Car & Motorcycle", icon: tabCar },
    { id: "travel", label: "Travel", icon: tabTravel },
    { id: "tax", label: "Road Tax", icon: tabTax },
]

const BADGES = [
    { icon: badgeBnm, title: "BNM", sub: "Licensed" },
    { icon: badgeCompare, title: "Compare", sub: "20+ Insurers" },
    { icon: badgePrice, title: "Best Prices", sub: "Guaranteed" },
    { icon: badgeSecure, title: "100% Secure", sub: "Your Data is Safe" },
]

const CHIPS = [
    { icon: chipCompare, title: "Policy Compare", sub: "Find the best plan" },
    { icon: chipTax, title: "Road Tax Renewal", sub: "Instant renewal" },
    { icon: chipClaims, title: "Claims Support", sub: "We're here for you" },
]

const QuoteCard = ({ embedded = false }: { embedded?: boolean }) => {
    const navigate = useNavigate()
    const [tab, setTab] = useState("car")
    React.useEffect(() => {
        if (!embedded) return
        homeTab.set(tab as "car" | "travel" | "tax")
        return () => homeTab.set("car")
    }, [tab, embedded])
    const [form, setForm] = useState({
        ownership: "Private",
        vehicleReg: "VAB 1234",
        idType: "NRIC/ My Kad",
        idNumber: "1234 5678 9012",
        postcode: "47500",
        marital: "Unmarried",
        noEhailing: false,
    })
    // Figma shows the full "Get Quote Now" card (e-hailing check + AI note) on the signed-in landing page too
    const loggedIn = embedded
    const taxOnly = tab === "tax"
    const isPassport = form.idType === "Passport"
    const [verifyOpen, setVerifyOpen] = useState(() => {
        try { return new URLSearchParams(window.location.search).get("verify") === "fail" } catch { return false }
    })
    const [country, setCountry] = useState("Malaysia")
    const [dob, setDob] = useState("15/03/1985")
    const [trip, setTrip] = useState({ destination: "Japan", depart: "2026-06-26", ret: "2026-06-30", cover: "" })
    const travelOnly = tab === "travel"
    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (tab === "tax") navigate("/road-tax")
        else if (tab === "travel") navigate("/travel")
        else if (tab === "car") setVerifyOpen(true)
    }
    const set = (key: string, value: string | boolean) => setForm((f) => ({ ...f, [key]: value }))

    return (
        <>
            <form className={`h-hero__card${embedded ? " h-hero__card--embedded" : ""}`} onSubmit={onSubmit}>
                <div className="h-hero__card-inner">
                    <h2 className="h-hero__card-title">{embedded ? <>Get an <span>Instant Quote</span></> : <>Get an <span>Instant</span> Quote</>}</h2>
                    <p className="h-hero__card-sub">Compare 20+ insurers in under 30 seconds. No paperwork.</p>

                    <div className={`h-hero__tabs${embedded ? " h-hero__tabs--embedded" : ""}`} data-tab={tab}>
                        {TABS.map((t) => (
                            <button
                                type="button"
                                key={t.id}
                                className={`h-hero__tab ${tab === t.id ? "is-active" : ""}`}
                                onClick={() => setTab(t.id)}
                            >
                                {!embedded && <img src={t.icon} alt="" />} {t.label}
                            </button>
                        ))}
                    </div>

                    {travelOnly ? (<>
                    <div className="h-hero__row">
                        <label className="h-hero__field">
                            <span className="h-hero__label">Destination<i>*</i></span>
                            <span className="h-hero__input">
                                <input value={trip.destination} placeholder="Select your destination" onChange={(e) => setTrip((t) => ({ ...t, destination: e.target.value }))} />
                            </span>
                        </label>
                    </div>
                    <div className="h-hero__row h-hero__row--dates">
                        <label className="h-hero__field">
                            <span className="h-hero__label">Depart Date<i>*</i></span>
                            <span className="h-hero__input">
                                <input value={trip.depart} placeholder="yyyy-mm-dd" inputMode="numeric" onChange={(e) => setTrip((t) => ({ ...t, depart: e.target.value }))} />
                                <FiCalendar className="h-hero__cal" aria-hidden="true" />
                            </span>
                        </label>
                        <label className="h-hero__field">
                            <span className="h-hero__label">Return Date<i>*</i></span>
                            <span className="h-hero__input">
                                <input value={trip.ret} placeholder="yyyy-mm-dd" inputMode="numeric" onChange={(e) => setTrip((t) => ({ ...t, ret: e.target.value }))} />
                                <FiCalendar className="h-hero__cal" aria-hidden="true" />
                            </span>
                        </label>
                    </div>
                    <div className="h-hero__tiles">
                        {[
                            { id: "group", title: "Solo or Group", desc: "For individuals, friends & relatives travelling together" },
                            { id: "family", title: "Family", desc: "For immediate family members travelling together" },
                        ].map((c) => (
                            <button
                                type="button"
                                key={c.id}
                                aria-pressed={trip.cover === c.id}
                                className={`h-hero__tile${trip.cover === c.id ? " is-selected" : ""}`}
                                onClick={() => setTrip((t) => ({ ...t, cover: t.cover === c.id ? "" : c.id }))}
                            >
                                <b>{c.title}</b>
                                <span>{c.desc}</span>
                            </button>
                        ))}
                    </div>
                    </>) : taxOnly ? (
                    <div className="h-hero__row">
                        <label className="h-hero__field">
                            <span className="h-hero__label">Vehicle Reg</span>
                            <span className="h-hero__input">
                                <img src={rego} alt="" />
                                <input value={form.vehicleReg} placeholder="VAB 1234" onChange={(e) => set("vehicleReg", e.target.value)} />
                            </span>
                        </label>
                    </div>
                ) : (<>
<div className="h-hero__row">
                        <label className="h-hero__field">
                            <span className="h-hero__label">Ownership<i>*</i></span>
                            <span className="h-hero__input">
                                <select value={form.ownership} onChange={(e) => set("ownership", e.target.value)}>
                                    <option>Private</option>
                                    <option>Company</option>
                                </select>
                                <img src={chevronDown} alt="" />
                            </span>
                        </label>
                        <label className="h-hero__field">
                            <span className="h-hero__label">Vehicle Reg</span>
                            <span className="h-hero__input">
                                <img src={rego} alt="" />
                                <input value={form.vehicleReg} placeholder="VAB 1234" onChange={(e) => set("vehicleReg", e.target.value)} />
                            </span>
                        </label>
                    </div>

                    <div className="h-hero__row">
                        <label className="h-hero__field">
                            <span className="h-hero__label">ID Type</span>
                            <span className="h-hero__input">
                                <select value={form.idType} onChange={(e) => set("idType", e.target.value)}>
                                    <option>NRIC/ My Kad</option>
                                    <option>Passport</option>
                                </select>
                                <img src={chevronDown} alt="" />
                            </span>
                        </label>
                        <label className="h-hero__field">
                            <span className="h-hero__label">{isPassport ? "Passport Number" : "ID Number"}</span>
                            <span className="h-hero__input">
                                <input value={form.idNumber} placeholder="1234 5678 9012" onChange={(e) => set("idNumber", e.target.value)} />
                            </span>
                        </label>
                    </div>

                    {isPassport && (
                        <div className="h-hero__row">
                            <label className="h-hero__field">
                                <span className="h-hero__label">Country</span>
                                <span className="h-hero__input">
                                    <svg className="h-hero__flag" viewBox="0 0 28 20" aria-hidden="true">
                                        <rect width="28" height="20" fill="#fff" />
                                        {[0, 1, 2, 3, 4].map((i) => <rect key={i} y={i * 4} width="28" height="2" fill="#cc0001" />)}
                                        <rect width="14" height="10" fill="#010066" />
                                        <circle cx="5.6" cy="5" r="3" fill="#fc0" />
                                        <circle cx="6.5" cy="5" r="2.5" fill="#010066" />
                                    </svg>
                                    <select value={country} onChange={(e) => setCountry(e.target.value)}>
                                        <option>Malaysia</option>
                                        <option>Singapore</option>
                                        <option>Indonesia</option>
                                        <option>Thailand</option>
                                    </select>
                                    <img src={chevronDown} alt="" />
                                </span>
                            </label>
                            <label className="h-hero__field">
                                <span className="h-hero__label">Date of Birth</span>
                                <span className="h-hero__input">
                                    <input value={dob} placeholder="DD/MM/YYYY" inputMode="numeric" onChange={(e) => setDob(e.target.value)} />
                                    <FiCalendar className="h-hero__cal" aria-hidden="true" />
                                </span>
                            </label>
                        </div>
                    )}

                    <div className="h-hero__row">
                        <label className="h-hero__field">
                            <span className="h-hero__label">Postcode<i>*</i></span>
                            <span className="h-hero__input">
                                <input value={form.postcode} placeholder="eg. 54320" onChange={(e) => set("postcode", e.target.value)} />
                            </span>
                        </label>
                        <label className="h-hero__field">
                            <span className="h-hero__label">Martial Status<i>*</i></span>
                            <span className="h-hero__input">
                                <select value={form.marital} onChange={(e) => set("marital", e.target.value)}>
                                    <option>Unmarried</option>
                                    <option>Married</option>
                                </select>
                                <img src={chevronDown} alt="" />
                            </span>
                        </label>
                    </div>

                    </>)}

{!loggedIn && tab === "car" && <label className="h-hero__check">
                        <input type="checkbox" checked={form.noEhailing} onChange={(e) => set("noEhailing", e.target.checked)} />
                        <span>My vehicle is not used for, and has no history of e-hailing.</span>
                        <span className="h-hero__info">
                            <img src={info} alt="" />
                            <em>We don't cover e-hailing vehicles. However, you can proceed if you've declared at a JPJ counter that your vehicle is no longer used for e-hailing.</em>
                        </span>
                    </label>}

                    <button type="submit" className={`h-hero__quote-btn${taxOnly || travelOnly ? " h-hero__quote-btn--outline" : ""}`}>
                        {loggedIn || tab !== "car" ? "Search" : "Get Quote Now"} <img src={quoteArrow} alt="" />
                    </button>

                    {!loggedIn && tab === "car" && <div className="h-hero__ai-note">
                        <img src={aiSparkle} alt="" />
                        <p>
                            <b>CoverEazy AI</b> matches you with<br />
                            <b>12 licensed insurers</b> in under 30 seconds.
                        </p>
                    </div>}
                </div>
            </form>
        {verifyOpen && (
            <VehicleVerificationModal
                vehicleReg={form.vehicleReg.trim() || "VAB 1234"}
                onClose={() => setVerifyOpen(false)}
            />
        )}
        </>
    )
}

export const HomeQuoteCard = () => <QuoteCard embedded />

const HomeHero = () => {
    return (
        <section className="h-hero" style={{ backgroundImage: `url(${heroBg})` }}>
            <div className="h-hero__overlay">
                <div className="h-hero__container">
                    <div className="h-hero__content">
                        <div className="h-hero__pill">
                            <span className="h-hero__pill-dot" />
                            Now serving 100,000+ Malaysians
                        </div>
                        <h1 className="h-hero__title">
                            Malaysia's<br />Smarter Way<br />to <span>Insure</span>
                        </h1>
                        <p className="h-hero__subtitle">
                            Compare, buy, renew and manage your Motor Insurance, Road Tax and more in one simple, secure platform.
                        </p>
                        <div className="h-hero__meta-row">
                            {BADGES.map((b) => (
                                <div className="h-hero__meta-block" key={b.title}>
                                    <img src={b.icon} alt="" />
                                    <div className="h-hero__meta-text">
                                        <span className="h-hero__meta-title">{b.title}</span>
                                        <span className="h-hero__meta-sub">{b.sub}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="h-hero__action-btns">
                            <button type="button" className="h-hero__compare-btn">
                                Compare Insurance <img src={arrowRight} alt="" />
                            </button>
                            <button type="button" className="h-hero__demo-btn">
                                Watch Demo
                                <span className="h-hero__demo-thumb" style={{ backgroundImage: `url(${heroBg})` }}>
                                    <img src={playIcon} alt="" />
                                </span>
                            </button>
                        </div>
                        <div className="h-hero__app-label">Download our app</div>
                        <div className="h-hero__get-app-btns">
                            <img src={googlePlayBtn} alt="Get it on Google Play" />
                            <img src={appStoreBtn} alt="Download on the App Store" />
                        </div>

                        <div className="h-hero__chips">
                            {CHIPS.map((c) => (
                                <div className="h-hero__chip" key={c.title}>
                                    <span className="h-hero__chip-icon"><img src={c.icon} alt="" /></span>
                                    <span className="h-hero__chip-text">
                                        <b>{c.title}</b>
                                        <small>{c.sub}</small>
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <QuoteCard />
                </div>
            </div>
        </section>
    )
}

export default HomeHero
