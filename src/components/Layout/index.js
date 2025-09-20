import { useEffect, useRef } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar'
import './index.scss'

const Layout = () => {
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
            <Navbar />
            <div ref={mouseRef} className='page'>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout