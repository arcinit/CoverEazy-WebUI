import React from 'react'
import "./Header.scss"
import { IoMdArrowDropdown } from "react-icons/io";
import { LuSparkles } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa";
import { MdPerson3 } from "react-icons/md";
import headerLogo from "./images/logo.png"

const Header = () => {
    return <>

        <header className="header">
            <nav className="header__nav">
                <div className="header__nav-left">
                    <div className="header__logo">
                        <img src={headerLogo} alt="" className="header__logo-img" />
                    </div>
                    <div className="header__menus">
                        <div className="header__menu active">Home</div>
                        <div className="header__menu">Products <IoMdArrowDropdown className='icon'  /></div>
                        <div className="header__menu">Claims</div>
                    </div>
                </div>
                <div className="header__nav-right">
                    <button className="header__ai-mode-btn">
                        <LuSparkles className='icon'/>
                        AI MODE
                        <span>New</span>
                    </button>
                    <button className="header__login-btn">
                        Login
                    </button>
                    <button className="header__get-quote-btn">
                        Get Quote
                        <FaArrowRight className='icon' strokeWidth={0.9} />
                    </button>
                    <button className="header__agent-btn">
                        <MdPerson3 className='icon'/>
                        Agent
                    </button>
                </div>
            </nav>
        </header>

    </>
}

export default Header