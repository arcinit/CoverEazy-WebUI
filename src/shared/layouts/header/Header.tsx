import React from 'react'
import "./Header.scss"
import { IoMdArrowDropdown } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { tokenService } from '../../services/token.service';
import avtarImage from "./images/avtar.png"

const Header = () => {
    const menusData = [
        { id: 1, menu: "Compare", path: "/moters" },
        { id: 2, menu: "Motor", path: "/moters" },
        { id: 3, menu: "Road Tax", path: "/road-tax" },
        { id: 4, menu: "Claims", path: "/claims" },
        {
            id: 5, menu: "Products", subMenus: [
                { id: 51, menu: "Motor", path: "/moters" },
                { id: 52, menu: "Travel", path: "/travel" },
                { id: 53, menu: "Road Tax", path: "/road-tax" }
            ]
        },
        { id: 6, menu: "Support", path: "/claims" },
        { id: 7, menu: "About", path: "/" }
    ]
    const navigate = useNavigate();
    const isLogin = tokenService.isAuthenticated();

    return (
        <header className="header">
            <nav className="header__nav" aria-label="Main navigation">
                <button className="header__logo" type="button" aria-label="PolisOne home" onClick={() => navigate("/")}>
                    <span className="header__logo-mark" aria-hidden="true"><i /></span>
                    <span className="header__logo-word"><span>Polis</span><strong>One</strong></span>
                </button>

                <div className="header__menus">
                    {menusData.map((item) => {
                        const subMenus = 'subMenus' in item ? item.subMenus : undefined
                        return (
                            <div className="header__menu" key={item.id}>
                                <button
                                    className="header__menu-link"
                                    type="button"
                                    onClick={() => item.path && navigate(item.path)}
                                    aria-haspopup={subMenus ? "true" : undefined}
                                >
                                    {item.menu}
                                    {subMenus && <IoMdArrowDropdown className="icon" aria-hidden="true" />}
                                </button>
                                {subMenus && (
                                    <div className="header__submenus-card">
                                        {subMenus.map((sub) => (
                                            <button
                                                className="header__submenu-row"
                                                key={sub.id}
                                                type="button"
                                                onClick={() => navigate(sub.path)}
                                            >
                                                {sub.menu}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </div>

                <div className="header__nav-right">
                    {!isLogin ? (
                        <>
                            <button className="header__login-btn" type="button" onClick={() => navigate("/login")}>Login</button>
                            <button className="header__signup-btn" type="button" onClick={() => navigate("/login")}>Sign Up</button>
                        </>
                    ) : (
                        <button className="header__profile-btn" type="button" onClick={() => navigate("/profile")}>
                            <img src={avtarImage} alt="" />
                            <span>Jhon doe</span>
                        </button>
                    )}
                    <button className="header__get-quote-btn" type="button" onClick={() => navigate("/get-quote")}>
                        Get Quote
                        <FaArrowRight className="icon" aria-hidden="true" />
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Header
