import React from 'react'
import "./Header.scss"
import { useLocation, useNavigate } from 'react-router-dom';
import { tokenService } from '../../services/token.service';
import headerLogo from "./images/logo-figma.png"
import avtarImage from "./images/avtar.png"
import aiIcon from "./images/ai-icon.svg"
import arrowRightIcon from "./images/arrow-right.svg"
import arrowDownIcon from "./images/arrow-down.svg"
import agentIcon from "./images/agent.svg"


const menusData = [
    { id: 1, menu: "Home", subMenus: [], key: "home", path: "/" },
    {
        id: 2, menu: "Products", subMenus: [
            { id: 21, menu: "Motor", key: "moter", path: "/moters" },
            { id: 22, menu: "Travel", key: "travel", path: "/travel" },
            { id: 23, menu: "Road Tax", key: "road_tax", path: "/road-tax" }
        ], key: "products", path: ""
    },
    { id: 3, menu: "Claims", subMenus: [], key: "claims", path: "/claims" }
]

interface HeaderProps {
    onLoginClick?: () => void
}

const Header = ({ onLoginClick }: HeaderProps) => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const isLogin = tokenService.isAuthenticated();
    const handleLogin = () => (onLoginClick ? onLoginClick() : navigate('/', { state: { openLogin: true } }));
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

    return <>
        <header className="header">
            <nav className="header__nav">
                <div className="header__nav-left">
                    <div className="header__logo" onClick={() => navigate("/")}>
                        <img src={headerLogo} alt="CoverEazy" className="header__logo-img" />
                    </div>
                    <div className="header__menus">
                        {menusData.map((item) => {
                            const hasSubMenus = item.subMenus.length > 0
                            const isActive = !hasSubMenus && (item.path === "/" ? pathname === "/" : pathname.startsWith(item.path))
                            return (
                                <div
                                    className={`header__menu${isActive ? " header__menu--active" : ""}${hasSubMenus ? " header__menu--has-sub" : ""}`}
                                    key={item.id}
                                >
                                    <span onClick={() => !hasSubMenus && navigate(item.path)}>{item.menu}</span>
                                    {hasSubMenus && <img src={arrowDownIcon} alt="" className="icon" />}
                                    {hasSubMenus && (
                                        <div className="header__submenus-card">
                                            {item.subMenus.map((sub) => (
                                                <div
                                                    className="header__submenu-row"
                                                    key={sub.id}
                                                    onClick={() => navigate(sub.path)}
                                                >
                                                    <span className="header__submenu-name">{sub.menu}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="header__nav-right">
                    <button className="header__ai-mode-btn">
                        <img src={aiIcon} alt="" className="icon" />
                        AI Mode
                        <span>New</span>
                    </button>
                    {!isLogin &&
                        <button className="header__login-btn" onClick={() => handleLogin()}>
                            Login
                        </button>
                    }
                    <button className="header__get-quote-btn" onClick={() => navigate("/get-quote")}>
                        Get Quote
                        <img src={arrowRightIcon} alt="" className="icon" />
                    </button>
                    <span className="header__divider" />
                    <button className="header__agent-btn">
                        <img src={agentIcon} alt="" className="icon" />
                        Agent Portal
                    </button>
                    {isLogin &&
                        <button className="header__profile-btn" onClick={() => navigate("/profile")}>
                            <img src={avtarImage} alt="avtar" />
                            <span>Jhon doe</span>
                        </button>
                    }
                </div>
                <button
                    className={`header__hamburger${mobileMenuOpen ? " header__hamburger--active" : ""}`}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </nav>
            {mobileMenuOpen && (
                <div className="header__mobile-menu">
                    <div className="header__mobile-menu-content">
                        <div className="header__mobile-menus">
                            {menusData.map((item) => {
                                const hasSubMenus = item.subMenus.length > 0
                                const isActive = !hasSubMenus && (item.path === "/" ? pathname === "/" : pathname.startsWith(item.path))
                                return (
                                    <div key={item.id}>
                                        <div
                                            className={`header__mobile-menu-item${isActive ? " header__mobile-menu-item--active" : ""}`}
                                            onClick={() => {
                                                if (!hasSubMenus) {
                                                    navigate(item.path)
                                                    setMobileMenuOpen(false)
                                                }
                                            }}
                                        >
                                            <span>{item.menu}</span>
                                            {hasSubMenus && <img src={arrowDownIcon} alt="" className="icon" />}
                                        </div>
                                        {hasSubMenus && (
                                            <div className="header__mobile-submenus">
                                                {item.subMenus.map((sub) => (
                                                    <div
                                                        className="header__mobile-submenu-item"
                                                        key={sub.id}
                                                        onClick={() => {
                                                            navigate(sub.path)
                                                            setMobileMenuOpen(false)
                                                        }}
                                                    >
                                                        {sub.menu}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                )
                            })}
                        </div>
                        <div className="header__mobile-buttons">
                            <button className="header__mobile-ai-btn">
                                <img src={aiIcon} alt="" className="icon" />
                                AI Mode <span>New</span>
                            </button>
                            {!isLogin && (
                                <button
                                    className="header__mobile-login-btn"
                                    onClick={() => {
                                        handleLogin()
                                        setMobileMenuOpen(false)
                                    }}
                                >
                                    Login
                                </button>
                            )}
                            <button
                                className="header__mobile-quote-btn"
                                onClick={() => {
                                    navigate("/get-quote")
                                    setMobileMenuOpen(false)
                                }}
                            >
                                Get Quote
                                <img src={arrowRightIcon} alt="" className="icon" />
                            </button>
                            <button className="header__mobile-agent-btn">
                                <img src={agentIcon} alt="" className="icon" />
                                Agent Portal
                            </button>
                            {isLogin && (
                                <button
                                    className="header__mobile-profile-btn"
                                    onClick={() => {
                                        navigate("/profile")
                                        setMobileMenuOpen(false)
                                    }}
                                >
                                    <img src={avtarImage} alt="avtar" />
                                    <span>Jhon doe</span>
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </header>
    </>
}

export default Header
