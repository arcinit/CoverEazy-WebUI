import React, { useEffect, useMemo, useState } from "react"
import { createPortal } from "react-dom"
import { useNavigate } from "react-router-dom"
import { FaCarSide } from "react-icons/fa"
import { IoSettingsSharp } from "react-icons/io5"
import { FiArrowLeft, FiArrowRight, FiCheck, FiAlertTriangle, FiRotateCw, FiX } from "react-icons/fi"
import "./VehicleVerificationModal.scss"

type Phase = "loading" | "success" | "fail"

interface Props {
    vehicleReg: string
    onClose: () => void
}

const CHECKS = [
    { id: "spec", title: "Vehicle Details & Spec", desc: "Vehicle specifications verified with JPJ database", failDesc: "" },
    { id: "reg", title: "Registration Status", desc: "Vehicle active registration confirmed", failDesc: "" },
    { id: "blacklist", title: "JPJ Blacklist Check", desc: "JPJ blacklist check clear", failDesc: "" },
    { id: "jpj", title: "JPJ Summons Check", desc: "No outstanding JPJ summons found", failDesc: "" },
    { id: "pdrm", title: "PDRM Traffic Summons", desc: "No outstanding PDRM traffic summons found", failDesc: "Pending Traffic Summons" },
    { id: "tax", title: "Road Tax Validity Status", desc: "Road tax status active & valid", failDesc: "" },
    { id: "customer", title: "Customer Verification", desc: "Customer identity & NRIC verification complete", failDesc: "" },
    { id: "compliance", title: "Compliance Check", desc: "Anti-money laundering & regulatory compliance clear", failDesc: "" },
    { id: "eligibility", title: "Insurance Eligibility", desc: "Vehicle meets all standard private motor underwriting guidelines", failDesc: "" },
]

const getInitialPhase = (): Phase => {
    try {
        return new URLSearchParams(window.location.search).get("verify") === "fail" ? "fail" : "loading"
    } catch {
        return "loading"
    }
}

const VehicleVerificationModal: React.FC<Props> = ({ vehicleReg, onClose }) => {
    const navigate = useNavigate()
    const [phase, setPhase] = useState<Phase>(getInitialPhase)
    const quoteId = useMemo(() => "CE-MOT-2026-" + String(Math.floor(Math.random() * 100000)).padStart(5, "0"), [])
    const failed = phase === "fail"

    useEffect(() => {
        if (phase !== "loading") return
        const t = window.setTimeout(() => setPhase("success"), 2500)
        return () => window.clearTimeout(t)
    }, [phase])

    useEffect(() => {
        const prev = document.body.style.overflow
        document.body.style.overflow = "hidden"
        const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose() }
        window.addEventListener("keydown", onKey)
        return () => {
            document.body.style.overflow = prev
            window.removeEventListener("keydown", onKey)
        }
    }, [onClose])

    const lastChecked = "24 Aug 2026, 10:23"

    return createPortal(
        <div className="vv-overlay" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose() }}>
            <div className="vv-modal" role="dialog" aria-modal="true" aria-label="Motor verification">
                <div className="vv-head">
                    <FaCarSide className="vv-head__car" aria-hidden="true" />
                    <div className="vv-head__text">
                        <div className="vv-head__top">
                            <span className="vv-head__chip">COVER EAZY MOTOR VERIFICATION</span>
                            <span className="vv-head__quote">Quote ID: {quoteId}</span>
                        </div>
                        <h3 className="vv-head__title">{vehicleReg} Insurance Renewal</h3>
                    </div>
                    <button type="button" className="vv-close" onClick={onClose} aria-label="Close"><FiX /></button>
                </div>

                {phase === "loading" ? (
                    <div className="vv-loading">
                        <div className="vv-gears" aria-hidden="true">
                            <IoSettingsSharp className="vv-gears__big" />
                            <IoSettingsSharp className="vv-gears__small" />
                            <span className="vv-gears__bar"><i /></span>
                        </div>
                        <p className="vv-loading__title">Checking your vehicle details...</p>
                        <p className="vv-loading__sub">Querying JPJ database &amp; vehicle registry</p>
                        <ul className="vv-steps">
                            <li className="is-done"><FiCheck /> Registration received ({vehicleReg})</li>
                            <li className="is-active"><span className="vv-steps__dot" /> Retrieving vehicle specifications</li>
                            <li><span className="vv-steps__ring" /> Checking insurance eligibility</li>
                        </ul>
                    </div>
                ) : (
                    <>
                        <div className="vv-status">
                            <div className="vv-status__left">
                                <span className="vv-status__eyebrow">MASTER VERIFICATION STATUS</span>
                                <strong>Checking your eligibility</strong>
                                <span>Real-time JPJ, PDRM summons &amp; compliance status verification</span>
                            </div>
                            <div className="vv-status__right">
                                <span className="vv-status__badge">9 of 9 checks competed</span>
                                <span className="vv-status__time">Last checked: {lastChecked}</span>
                            </div>
                        </div>

                        <div className="vv-grid">
                            {CHECKS.map((c) => {
                                const bad = failed && c.id === "pdrm"
                                return (
                                    <div className={`vv-card ${bad ? "is-bad" : ""}`} key={c.id}>
                                        <span className="vv-card__icon">{bad ? <FiAlertTriangle /> : <FiCheck />}</span>
                                        <div className="vv-card__body">
                                            <div className="vv-card__top">
                                                <span className="vv-card__title">{c.title}</span>
                                                {bad ? (
                                                    <span className="vv-card__pill is-bad"><FiAlertTriangle /> Action required</span>
                                                ) : (
                                                    <span className="vv-card__pill"><FiCheck /> Verified</span>
                                                )}
                                            </div>
                                            <div className="vv-card__desc">
                                                {!bad && <FiCheck />}
                                                {bad ? c.failDesc : c.desc}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        <div className="vv-actions">
                            {failed ? (
                                <button type="button" className="vv-btn vv-btn--primary" onClick={onClose}>
                                    <FiRotateCw /> Re-enter Vehicle Details
                                </button>
                            ) : (
                                <>
                                    <button type="button" className="vv-btn vv-btn--ghost" onClick={onClose}>
                                        <FiArrowLeft /> Back
                                    </button>
                                    <button type="button" className="vv-btn vv-btn--primary" onClick={() => navigate("/moters")}>
                                        Continue to Quote <FiArrowRight />
                                    </button>
                                </>
                            )}
                        </div>
                    </>
                )}
            </div>
        </div>,
        document.body,
    )
}

export default VehicleVerificationModal
