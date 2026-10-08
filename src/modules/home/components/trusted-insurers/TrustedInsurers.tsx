import React from 'react'
import "./TrustedInsurers.scss";

const modules = import.meta.glob("./images/strip-*.png", { eager: true, import: "default" }) as Record<string, string>
const logos = Object.entries(modules)
    .sort(([a], [b]) => parseInt(a.replace(/\D/g, "")) - parseInt(b.replace(/\D/g, "")))
    .map(([, src]) => src)

const TrustedInsurers = () => {
    return (
        <section className="trusted-insu">
            <div className="trusted-insu__container">
                <div className="trusted-insu__heading">
                    Trusted by over 250,000 Malyasians
                </div>
                <div className="trusted-insu__divider" />
                <div className="trusted-insu__logos-wrapper">
                    <div className="trusted-insu__logos-track">
                        {[0, 1].map((set) => (
                            <div className="trusted-insu__logos-set" key={set} aria-hidden={set === 1}>
                                {logos.map((src, i) => (
                                    <img className="trusted-insu__logo-img" src={src} alt={set === 0 ? `Insurer ${i + 1}` : ""} key={i} />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TrustedInsurers
