import './index.scss'
import { Link } from 'react-router-dom'
import Novice from '../../assets/images/novice.png'
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
                                    <img src={Pino} className='proj-image web' alt="cover" />
                                </div>
                                <div className='proj-text'>
                                    <h4 className='proj_text-title'>PINO dot ph</h4>
                                    <span className='proj_text-dot red'></span>
                                    <h4 className='proj_text-category'>website</h4>
                                </div>
                            </div>
                            <div className='featured-proj'>
                                <div className='proj_image-banner'>
                                    <img src={Novice} className='proj-image art' alt="cover" />
                                </div>
                                <div className='proj-text'>
                                    <h4 className='proj_text-title'>NOVICE Magazine issue 03</h4>
                                    <span className='proj_text-dot blue'></span>
                                    <h4 className='proj_text-category'>art direction</h4>
                                </div>
                            </div>
                            <div className='featured-proj'>
                                <div className='proj_image-banner'>
                                </div>
                                <div className='proj-text'>
                                    <h4 className='proj_text-title'>CCCOLLAGE dot com</h4>
                                    <span className='proj_text-dot yellow'></span>
                                    <h4 className='proj_text-category'>website</h4>
                                </div>
                            </div>
                            <div className='featured-proj'>
                                <div className='proj_image-banner'>
                                </div>
                                <div className='proj-text'>
                                    <h4 className='proj_text-title'>ROBINSONS Retail Holdings dot com dot ph</h4>
                                    <span className='proj_text-dot red'></span>
                                    <h4 className='proj_text-category'>website</h4>
                                </div>
                            </div>
                            <div className='featured-proj'>
                                <div className='proj_image-banner'>
                                </div>
                                <div className='proj-text'>
                                    <h4 className='proj_text-title'>30th GAWAD Benildyano</h4>
                                    <span className='proj_text-dot green'></span>
                                    <h4 className='proj_text-category'>visual identity</h4>
                                </div>
                            </div>
                            <div className='featured-proj'>
                                <div className='proj_image-banner'>
                                </div>
                                <div className='proj-text'>
                                    <h4 className='proj_text-title'>DIENDE dot neocities dot org</h4>
                                    <span className='proj_text-dot pink'></span>
                                    <h4 className='proj_text-category'>website</h4>
                                </div>
                            </div>
                            <div className='featured-proj'>
                                <div className='proj_image-banner'>
                                </div>
                                <div className='proj-text'>
                                    <h4 className='proj_text-title'>NATU Explorations dot com</h4>
                                    <span className='proj_text-dot brown'></span>
                                    <h4 className='proj_text-category'>website</h4>
                                </div>
                            </div>
                            <div className='featured-proj'>
                                <div className='proj_image-banner'>
                                </div>
                                <div className='proj-text'>
                                    <h4 className='proj_text-title'>AGOS Screening Event dot psd</h4>
                                    <span className='proj_text-dot blue'></span>
                                    <h4 className='proj_text-category'>visual identity</h4>
                                </div>
                            </div>
                            <div className='featured-proj'>
                                <div className='proj_image-banner'>
                                </div>
                                <div className='proj-text'>
                                    <h4 className='proj_text-title'>MODO dot com</h4>
                                    <span className='proj_text-dot orange'></span>
                                    <h4 className='proj_text-category'>website</h4>
                                </div>
                            </div>
                            <div className='featured-proj'>
                                <div className='proj_image-banner'>
                                </div>
                                <div className='proj-text'>
                                    <h4 className='proj_text-title'>HIT Productions dot net</h4>
                                    <span className='proj_text-dot red'></span>
                                    <h4 className='proj_text-category'>website</h4>
                                </div>
                            </div>
                            <div className='featured-proj'>
                                <div className='proj_image-banner'>
                                </div>
                                <div className='proj-text'>
                                    <h4 className='proj_text-title'>THE BENILDEAN issue 24</h4>
                                    <span className='proj_text-dot green'></span>
                                    <h4 className='proj_text-category'>editorial</h4>
                                </div>
                            </div>
                            <div className='featured-proj'>
                                <div className='proj_image-banner'>
                                </div>
                                <div className='proj-text'>
                                    <h4 className='proj_text-title'>THE BENILDEAN issue 25</h4>
                                    <span className='proj_text-dot green'></span>
                                    <h4 className='proj_text-category'>editorial</h4>
                                </div>
                            </div>
                            <div className='featured-proj'>
                                <div className='proj_image-banner'>
                                </div>
                                <div className='proj-text'>
                                    <h4 className='proj_text-title'>PEOPLE MAY VARY dot psd</h4>
                                    <span className='proj_text-dot blue'></span>
                                    <h4 className='proj_text-category'>branding</h4>
                                </div>
                            </div>
                            <div className='featured-proj'>
                                <div className='proj_image-banner'>
                                </div>
                                <div className='proj-text'>
                                    <h4 className='proj_text-title'>TORRE LORENZO dot com</h4>
                                    <span className='proj_text-dot green'></span>
                                    <h4 className='proj_text-category'>website</h4>
                                </div>
                            </div>
                            <div className='featured-proj'>
                                <div className='proj_image-banner'>
                                </div>
                                <div className='proj-text'>
                                    <h4 className='proj_text-title'>SWAN dot psd</h4>
                                    <span className='proj_text-dot pink'></span>
                                    <h4 className='proj_text-category'>visual identity & merch</h4>
                                </div>
                            </div>
                            <div className='featured-proj'>
                                <div className='proj_image-banner'>
                                </div>
                                <div className='proj-text'>
                                    <h4 className='proj_text-title'>SHADES OF GRAY: Irreversible</h4>
                                    <span className='proj_text-dot violet'></span>
                                    <h4 className='proj_text-category'>editorial</h4>
                                </div>
                            </div>
                            <div className='featured-proj'>
                                <div className='proj_image-banner'>
                                </div>
                                <div className='proj-text'>
                                    <h4 className='proj_text-title'>MADMAN Creative Solutions dot com</h4>
                                    <span className='proj_text-dot red'></span>
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