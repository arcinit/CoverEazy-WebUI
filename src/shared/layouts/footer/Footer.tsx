import React from "react";
import { FiAward, FiLock, FiShield } from "react-icons/fi";
import "./Footer.scss";

const footerColumns = [
    {
        title: "Products",
        links: ["Motor Insurance", "Motorcycle", "Road Tax", "Travel", "Health", "Takaful", "SME"],
    },
    {
        title: "Company",
        links: ["About", "Careers", "Press", "Partners", "Blog"],
    },
    {
        title: "Support",
        links: ["Help Center", "Claims Guide", "Contact", "Live Chat", "FAQ"],
    },
    {
        title: "Legal",
        links: ["Privacy Policy", "Terms of Use", "PDPA Notice", "Security", "Cookies"],
    },
];

const trustBadges = [
    { label: "PDPA Compliant", icon: FiShield },
    { label: "PCI-DSS Level 1", icon: FiLock },
    { label: "Bank Negara Certified", icon: FiAward },
];

const Footer = () => (
    <footer className="footer">
        <div className="footer__container">
            <div className="footer__main">
                <div className="footer__brand">
                    <a className="footer__logo" href="/" aria-label="PolisOne home">
                        <span className="footer__logo-mark" aria-hidden="true">
                            <span />
                        </span>
                        <span className="footer__logo-wordmark">
                            Polis<span>One</span>
                        </span>
                    </a>

                    <p className="footer__description">
                        Malaysia's smart insurance super platform. Compare, renew, manage policies, and track claims in one digital ecosystem.
                    </p>

                    <nav className="footer__socials" aria-label="Social media">
                        <a href="#" className="footer__social" aria-label="X">X</a>
                        <a href="#" className="footer__social" aria-label="LinkedIn">in</a>
                        <a href="#" className="footer__social" aria-label="Instagram">ig</a>
                        <a href="#" className="footer__social" aria-label="Facebook">fb</a>
                    </nav>
                </div>

                <div className="footer__columns">
                    {footerColumns.map((column) => (
                        <div className="footer__column" key={column.title}>
                            <h2 className="footer__column-title">{column.title}</h2>
                            <ul className="footer__link-list">
                                {column.links.map((link) => (
                                    <li key={link}>
                                        <a href="#" className="footer__link">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <div className="footer__divider" />

            <div className="footer__bottom-row">
                <div className="footer__badges" aria-label="Security and compliance certifications">
                    {trustBadges.map(({ label, icon: Icon }) => (
                        <span className="footer__badge" key={label}>
                            <Icon aria-hidden="true" />
                            {label}
                        </span>
                    ))}
                </div>

                <span className="footer__copyright">
                    © 2026 PolisOne Financial Technology Sdn Bhd. All rights reserved.
                </span>
            </div>
        </div>
    </footer>
);

export default Footer;
