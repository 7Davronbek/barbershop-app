import React, { useState } from 'react'


const Navbar = () => {
    const [navbar, setNavbar] = useState(false)
    const [burger, setBurger] = useState(false)
    const changeNavbar = () => {

        if (window.scrollY >= 100) {
            setNavbar(true);
        } else {
            setNavbar(false)
        }
    }
    window.addEventListener('scroll', changeNavbar);

    return (
        <div className={`navBar ${navbar ? 'active' : ''}`}>
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-2">
                        <div className="logo">
                            <a href="/">
                                LOGO
                            </a>
                        </div>
                    </div>
                    <div className={`col-7 mobileWrap ${burger ? '' : 'burgered'}`}>
                        <ul className="nav-menu">
                            <li><a onClick={() => setBurger(!burger)} href="#home">О курсе</a></li>
                            <li><a onClick={() => setBurger(!burger)} href="#services">Программа</a></li>
                            <li><a onClick={() => setBurger(!burger)} href="#portfolio">Тарифы</a></li>
                            <li><a onClick={() => setBurger(!burger)} href="#zayavka">Учебный чат телеграм</a></li>
                            <li><a onClick={() => setBurger(!burger)} href="#contacts">Задать вопрос</a></li>
                        </ul>
                    </div>
                    <div className="col-1 d-lg-block d-none">
                        <div className="buy-btn">
                            <a href="/">Купить</a>
                        </div>
                    </div>
                    <div onClick={() => setBurger(!burger)} className={`burger pr-4 ml-auto d-flex d-lg-none ${burger ? 'burgered' : ''}`}>
                        <div className="burger1"></div>
                        <div className="burger2"></div>
                        <div className="burger3"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar