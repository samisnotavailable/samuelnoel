import { useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar'
import './index.scss'

const Layout = () => {
    const location = useLocation()
    const hideNavbarRoutes = 
        location.pathname.startsWith('/website/') ||
        location.pathname.startsWith('/design/')
    const mouseRef = useRef(null)

    useEffect(() => {
        const handleMouseMove = (e) => {
            const x = (e.clientX / window.innerWidth) * 100;
            const y = (e.clientY / window.innerHeight) * 100;
            if (mouseRef.current) {
                mouseRef.current.style.setProperty('--x', `${x}vw`);
                mouseRef.current.style.setProperty('--y', `${y}vh`);
            }
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className='App'>
            {!hideNavbarRoutes && <Navbar />}
            <div ref={mouseRef} className='page'>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout