import React, { useState } from 'react'
import darkLogo from '../assets/dark-logo.png';
import defaultUserImage from '../assets/default-user-image.png';
import mobileMenuIcon from '../assets/menu.png';
import homeLogo from "../assets/home.svg"
import newUserLogo from "../assets/new-user.svg"
import loginLogo from "../assets/login.svg"
import { Link } from 'react-router-dom';

export default function Header() {
    const [openMenu, setOpenMenu] = useState(false)
    const [removeShadow, setRemoveShadow] = useState(false)

    const showMenu = () => {
        openMenu ? setOpenMenu(false) : setOpenMenu(true); 
        removeShadow ? setRemoveShadow(false) : setRemoveShadow(true); 
    }

  return <>
        <header className={`header ${removeShadow ? 'remove-shadow' :  ''}`}>
            <div className={`container py-3 navigation`}>
                <div className="logo">
                    <img src={darkLogo} alt="dark logo" className='dark-logo w-100 h-100'/>
                </div>
                <nav className="nav-links hidden-sm">
                    <div className="dark-light-mode-btn">
                        <span className='dark'>
                            <i class="fa-regular fa-moon"></i>
                        </span>
                        <span className='light'>
                            <i class="fa-regular fa-sun"></i>
                        </span>
                    </div>
                    <ul className="links ">
                        <li>
                            <Link to={'/'}>
                            القائمة الرئيسية
                            </Link>
                        </li>
                        <li>
                            <Link to={'/'}>
                            تعليمات المنصة
                            </Link>
                        </li>
                        <li>
                            <Link to={'/'}>
                            أماكن توافر الكتب والاكواد
                            </Link>
                        </li>
                        <li>
                            <Link to={'/'}>
                            مواعيد السنتر
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="user-image hidden-sm">
                    <img src={defaultUserImage} alt='user image' className='w-100 h-100' />
                </div>
                <div className="mobile-menu hidden-lg" onClick={showMenu}>
                    <img src={mobileMenuIcon} alt='mobile menu' className='w-100 h-100' />
                </div>
            </div>
        </header>

        {/* start mobile menu */}
        <div className={`mobile-menu-links ${openMenu ? 'show' : ''}`}>
            <div className='container'>
                <div className='user'>
                    <div className='user-image'>
                        <img className='w-100 h-100' src={defaultUserImage} />
                    </div>
                    <ul>
                        <li>
                            <Link to={'/'}>
                                <img src={homeLogo} />
                                الصفحة الرئيسية
                            </Link>
                        </li>
                        <li>
                            <Link to={'/register'}>
                                <img src={newUserLogo} />
                                حساب جديد
                            </Link>
                        </li>
                        <li>
                            <Link to={'/login'}>
                                <img src={loginLogo} />
                                تسجيل الدخول
                            </Link>
                        </li>
                    </ul>
                </div>
                <ul className='other-links'>
                    <li>
                        <Link to={'/login'}>
                        مواعيد السنتر
                        </Link>
                    </li>
                    <li>
                        <Link to={'/login'}>
                        أماكن توافر الكتب والاكواد
                        </Link>
                    </li>
                    <li>
                        <Link to={'/login'}>
                        تعليمات المنصة
                        </Link>
                    </li>
                    <li>
                        <Link to={'/login'}>
                        القائمة الرئيسية
                        </Link>
                    </li>
                </ul>
                <div className='dark-light-mode'>
                    <div className='right-btn'>
                        <div className='icon'>
                            <i class="fa-regular fa-moon"></i>
                        </div>
                            الانتقال للوضع الليلي
                    </div>
                    <div className="left-btn">
                        <span className='dark'>
                            <i class="fa-regular fa-moon"></i>
                        </span>
                        <span className='light'>
                            <i class="fa-regular fa-sun"></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
  </>
}
