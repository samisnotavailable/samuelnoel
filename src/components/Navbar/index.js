import { useState, useRef, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import TestIcon from '../../assets/images/red.png'

const Navbar = () => {
    const [showNav, setShowNav] = useState(false)
    const navRef = useRef(null)

    useEffect(() => {
        if (!showNav) return
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setShowNav(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [showNav])

    return (
        <>
            <button className="hamburger" onClick={() => setShowNav(!showNav)} aria-label="Toggle navigation">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>
            <div ref={navRef} className={`nav-bar${showNav ? ' show' : ''}`}>
                <button className="close-nav" onClick={() => setShowNav(false)} aria-label="Close navigation">
                    &times;
                </button>
                <Link className="logo" to="/" onClick={() => setShowNav(false)}>
                    <img src={LogoS} alt="logo" />
                    <h5>Samuel Noel</h5>
                </Link>
                <nav>
                    <NavLink exact="true" activeclassname="active" className="navlink" to="/develop" onClick={() => setShowNav(false)}>
                        <div className='nav-icon'>
                            <img src={TestIcon} className='icon-normal' alt="icon" />
                            <img src={LogoS} className='icon-hover' alt="icon" />
                        </div>
                        <h5>Develop</h5>
                    </NavLink>
                    <NavLink exact="true" activeclassname="active" className="navlink" to="/design" onClick={() => setShowNav(false)}>
                        <div className='nav-icon'>
                            <img src={TestIcon} className='icon-normal' alt="icon" />
                            <img src={LogoS} className='icon-hover' alt="icon" />
                        </div>
                        <h5>Design</h5>
                    </NavLink>
                    <NavLink exact="true" activeclassname="active" className="navlink" to="/about" onClick={() => setShowNav(false)}>
                        <div className='nav-icon'>
                            <img src={TestIcon} className='icon-normal' alt="icon" />
                            <img src={LogoS} className='icon-hover' alt="icon" />
                        </div>
                        <h5>About</h5>
                    </NavLink>
                    <NavLink exact="true" activeclassname="active" className="navlink" to="/contact" onClick={() => setShowNav(false)}>
                        <div className='nav-icon'>
                            <img src={TestIcon} className='icon-normal' alt="icon" />
                            <img src={LogoS} className='icon-hover' alt="icon" />
                        </div>
                        <h5>Contact</h5>
                    </NavLink>
                </nav>
            </div>
        </>
    )
}

export default Navbar