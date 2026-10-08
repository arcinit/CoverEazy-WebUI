import React from "react";
import "./Footer.scss";

import logo from "./images/logo-figma.png";
import fbGlyph from "./images/fb-f.svg";
import igGlyph from "./images/ig-glyph.svg";
import whatsappIcon from "./images/whatsapp.svg";
import checkIcon from "./images/check.svg";

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

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__glow" />
            <div className="footer__container">
                <div className="footer__main">
                    <div className="footer__brand">
                        <div className="footer__logo">
                            <img src={logo} alt="CoverEazy" />
                        </div>
                        <div className="footer__socials">
                            <a href="#" className="footer__social footer__social--facebook" aria-label="Facebook">
                                <img src={fbGlyph} alt="" />
                            </a>
                            <a href="#" className="footer__social footer__social--instagram" aria-label="Instagram">
                                <img src={igGlyph} alt="" />
                            </a>
                            <a href="#" className="footer__social" aria-label="WhatsApp">
                                <img src={whatsappIcon} alt="" className="footer__social-full" />
                            </a>
                        </div>
                    </div>

                    {footerColumns.map((col) => (
                        <div className={`footer__column footer__column--${col.title.toLowerCase()}`} key={col.title}>
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

                <div className="footer__bottom-row">
                    <span className="footer__copyright">
                        © 2026 CoverEazy Sdn Bhd. All rights reserved.
                    </span>

                    <div className="footer__badges">
                        {trustBadges.map((badge) => (
                            <span className="footer__badge" key={badge}>
                                <img src={checkIcon} alt="" />
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
