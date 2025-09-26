import './index.scss'
import { Link } from 'react-router-dom'
import Novice from '../../assets/images/novice.jpg'
import Pino from '../../assets/images/pino.jpg'

const Home = () => {
    return (
        <div className='home-page'>
            <div className='padding-global'>
                <div className='home-hero'>
                    <div className='home_hero-title'>
                        <h1 className='title-hover'>Hello,</h1>
                        <h1 className='title-hover'>world.</h1>
                    </div>
                    <div className='home_hero-text'>
                        <p className='home-text'>My name is Samuel Noel (he/him), I am a creative developer based in the Philippines. Please, feel free to look around or click on the button below to enter a random page.</p>
                        <Link to='/contact' className='cta-btn'>
                            <span className='link_btn-text'>Into the Rabbit Hole</span>
                        </Link>
                    </div>
                    <div className='home-featured' id='home-featured'>
                        <div className='home_featured-intro'>
                            <h2>Featured Projects</h2>
                            <p>Websites, art direction, and et cetera. Click on any project to learn more about them.</p>
                        </div>
                        <div className='home_featured-list'>
                            <div className='featured-proj'>
                                <div className='proj_image-banner'>
                                    <img src={Pino} className='proj-image' alt="cover" />
                                </div>
                                <div className='proj-text'>
                                    <h4 className='proj_text-title'>PINO dot ph</h4>
                                    <div className='proj_text-dot'></div>
                                    <h4 className='proj_text-category'>website</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home