import React from 'react'
import "./Header.scss"
import { IoMdArrowDropdown } from "react-icons/io";
import { LuSparkles } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa";
import { MdPerson3 } from "react-icons/md";
import headerLogo from "./images/logo.png"
import { useNavigate } from 'react-router-dom';
import { tokenService } from '../../services/token.service';
import avtarImage from "./images/avtar.png"

const Header = () => {
    const menusData = [
        { id: 1, menu: "Home", subMenus: [], key: "home", path: "/" },
        {
            id: 2, menu: "Products", subMenus: [
                { id: 21, menu: "Motor", key: "moter", path: "/moters" },
                { id: 22, menu: "Travel", key: "travel", path: "/travel" },
                { id: 23, menu: "Road Tax", key: "road_tax", path: "/road-tax" }
            ], key: "products"
        },
        { id: 3, menu: "Claims", subMenus: [], key: "claims", path: "/claims" }
    ]
    const navigate = useNavigate();
    const isLogin = tokenService.isAuthenticated();
    const handleLogin = () => {
        navigate("/login")
    }
    const getQuote = () => {
        navigate("/get-quote")
    }

    const handleSubMenuClick = (path:string) => {
        navigate(path)
    }

    const handleMenuClick = (path: string) => {
        navigate(path)
    }

    return <>

        <header className="header">
            <nav className="header__nav">
                <div className="header__nav-left">
                    <div className="header__logo">
                        <img src={headerLogo} alt="" className="header__logo-img" />
                    </div>
                    <div className="header__menus">
                        {
                            menusData?.map((item) => {
                                const hasSubMenus = item.subMenus.length > 0
                                return (
                                    <div className="header__menu" key={item.id}>
                                        <span onClick={() => handleMenuClick(item?.path ?? "")}>{item.menu}</span>
                                        {hasSubMenus && <IoMdArrowDropdown className="icon" />}

                                        {hasSubMenus && (
                                            <div className="header__submenus-card">
                                                {item.subMenus.map((sub) => (
                                                    <div
                                                        className="header__submenu-row"
                                                        key={sub.id}
                                                        onClick={() => handleSubMenuClick(sub.path??"")}
                                                    >
                                                        <span className="header__submenu-name">{sub.menu}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
                <div className="header__nav-right">
                    <button className="header__ai-mode-btn">
                        <LuSparkles className='icon' />
                        AI MODE
                        <span>New</span>
                    </button>
                    {
                        !isLogin &&
                        <button className="header__login-btn" onClick={handleLogin}>
                            Login
                        </button>
                    }

                    <button className="header__get-quote-btn" onClick={getQuote}>
                        Get Quote
                        <FaArrowRight className='icon' strokeWidth={0.9} />
                    </button>
                    <button className="header__agent-btn">
                        <MdPerson3 className='icon' />
                        Agent
                    </button>
                    {
                        isLogin &&
                        <button className="header__profile-btn" onClick={() => navigate("/profile")}>
                            <img src={avtarImage} alt="avtar" />
                            <span>Jhon doe</span>
                        </button>
                    }

                </div>
            </nav>
        </header>

    </>
}

export default Header