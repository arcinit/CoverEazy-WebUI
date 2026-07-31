import React from "react";
import "./Footer.scss";

// replace with your actual logo file
import logo from "./images/logo.png";

const footerColumns = [
    {
        title: "Products",
        links: ["Motor", "Travel", "Road Tax", "Claims", "Wallet"],
    },
    {
        title: "Company",
        links: ["About", "Careers", "Press", "Partners"],
    },
    {
        title: "Support",
        links: ["Help Center", "Contact", "Status", "WhatsApp"],
    },
    {
        title: "Legal",
        links: ["Privacy", "Terms", "PDPA", "Licenses"],
    },
];

const trustBadges = ["BNM Licensed", "PDPA Compliant", "SSL Secured"];

const ArrowIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path
            d="M5 12h14M13 6l6 6-6 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const CheckIcon = () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8" />
        <path
            d="m8 12.5 2.5 2.5L16 9.5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const FacebookIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff">
        <path d="M13.5 21v-7.6h2.55l.38-2.96h-2.93V8.55c0-.86.24-1.44 1.47-1.44h1.57V4.46A21 21 0 0 0 14.35 4.3c-2.1 0-3.54 1.28-3.54 3.63v2.53H8.25v2.96h2.56V21h2.69Z" />
    </svg>
);

const InstagramIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="5"
            stroke="#fff"
            strokeWidth="1.8"
        />
        <circle cx="12" cy="12" r="4" stroke="#fff" strokeWidth="1.8" />
        <circle cx="17.2" cy="6.8" r="1.1" fill="#fff" />
    </svg>
);

const WhatsAppIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff">
        <path d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.5-1.3A9 9 0 1 0 12 3Zm0 16.3a7.2 7.2 0 0 1-3.7-1l-.27-.16-2.66.78.79-2.6-.17-.27A7.3 7.3 0 1 1 12 19.3Zm4-5.4c-.22-.11-1.3-.64-1.5-.71-.2-.08-.35-.11-.5.11s-.57.71-.7.86-.26.16-.48.05a6 6 0 0 1-1.77-1.1 6.6 6.6 0 0 1-1.23-1.53c-.13-.22 0-.34.1-.45.1-.1.22-.26.33-.39.11-.13.15-.22.22-.37.08-.15.04-.27-.02-.38-.06-.11-.5-1.2-.68-1.65-.18-.43-.36-.37-.5-.38h-.43a.82.82 0 0 0-.59.27 2.5 2.5 0 0 0-.78 1.86 4.3 4.3 0 0 0 .91 2.29 9.9 9.9 0 0 0 3.8 3.36c.53.23.94.36 1.26.46.53.17 1 .15 1.38.09.42-.06 1.3-.53 1.48-1.04.18-.51.18-.94.13-1.03-.05-.09-.2-.15-.42-.26Z" />
    </svg>
);

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__cta-row">
                    <h2 className="footer__heading">
                        Protection should <em>be simple.</em>
                    </h2>

                    <div className="footer__cta-group">
                        <button className="footer__cta footer__cta--primary">
                            Get Started
                            <ArrowIcon />
                        </button>
                        <button className="footer__cta footer__cta--outline">
                            Talk to an advisor
                        </button>
                    </div>
                </div>

                <div className="footer__main">
                    <div className="footer__brand">
                        <div className="footer__logo">
                            {/* replace src locally */}
                            <img src={logo} alt="CoverEazy" />
                        </div>
                        <div className="footer__socials">
                            <a href="#" className="footer__social" aria-label="Facebook">
                                <FacebookIcon />
                            </a>
                            <a href="#" className="footer__social" aria-label="Instagram">
                                <InstagramIcon />
                            </a>
                            <a href="#" className="footer__social" aria-label="WhatsApp">
                                <WhatsAppIcon />
                            </a>
                        </div>
                    </div>

                    <div className="footer__columns">
                        {footerColumns.map((col) => (
                            <div className="footer__column" key={col.title}>
                                <span className="footer__column-title">{col.title}</span>
                                <ul className="footer__link-list">
                                    {col.links.map((link) => (
                                        <li key={link}>
                                            <a href="#" className="footer__link">
                                                {link}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="footer__divider" />

                <div className="footer__bottom-row">
                    <span className="footer__copyright">
                        © 2026 CoverEazy Sdn Bhd. All rights reserved.
                    </span>

                    <div className="footer__badges">
                        {trustBadges.map((badge) => (
                            <span className="footer__badge" key={badge}>
                                <CheckIcon />
                                {badge}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;