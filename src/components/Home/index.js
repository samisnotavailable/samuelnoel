import { useEffect, useRef } from 'react'
import HelloTitle from '../../assets/images/Hello.png'
import './index.scss'

const Home = () => {
    const homeRef = useRef(null)

    useEffect(() => {
        const handleMouseMove = (e) => {
            const x = (e.clientX / window.innerWidth) * 100;
            const y = (e.clientY / window.innerHeight) * 100;
            if (homeRef.current) {
                homeRef.current.style.setProperty('--x', `${x}vw`);
                homeRef.current.style.setProperty('--y', `${y}vh`);
            }
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div ref={homeRef} className='container home-page'>
            <div className='home-hero'>
                <h1 className='title-hover'>Hello,</h1>
                <h1 className='title-hover'>world.</h1>
            </div>
        </div>
    )
}

export default Home