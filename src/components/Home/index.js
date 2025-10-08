import './index.scss'
import { Link } from 'react-router-dom'
import Novice from '../../assets/images/novice.png'
import Pino from '../../assets/images/pino.jpg'
import CCCollage from '../../assets/images/cccollage.jpg'
import RRHI from '../../assets/images/rrhi.jpg'
import Gawad from '../../assets/images/gawad-benildyano.png'
import Diende from '../../assets/images/diende.jpg'
import Natu from '../../assets/images/natu.jpg'
import Agos from '../../assets/images/agos.png'
import Modo from '../../assets/images/modo.jpg'
import Hit from '../../assets/images/hit.jpg'
import TB24 from '../../assets/images/tb24.png'
import TB25 from '../../assets/images/TB25.png'
import PMV from '../../assets/images/pmv.png'
import TorreLorenzo from '../../assets/images/torrelorenzo.png'
import Swan from '../../assets/images/swan.png'
import SOG from '../../assets/images/sog-irreversible.png'
import Madman from '../../assets/images/madman.png'
import AURO from '../../assets/images/auro.jpg'

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
                        <p className='home-text'>My name is Samuel Noel (he/him), I am a creative developer & designer based in the Philippines. Please, feel free to look around or click on the button below to enter a random page.</p>
                        <Link to='/contact' className='cta-btn'>
                            <span className='link_btn-text'>Down the Rabbit Hole</span>
                        </Link>
                    </div>
                    <div className='home-featured' id='home-featured'>
                        <div className='home_featured-intro'>
                            <h2>Featured Projects</h2>
                            <p>Websites, art direction, and et cetera. Click on any project to learn more about them.</p>
                        </div>
                        <div className='home_featured-list'>
                            <Link to='/website/pino-studio' className='proj-link'>
                                <div className='featured-proj'>
                                    <div className='proj_image-banner'>
                                        <div className='proj_image-bg'></div>
                                        <img src={Pino} className='proj-image web' alt="cover" />
                                    </div>
                                    <div className='proj_text-left'>
                                        <div className='proj-text'>
                                            <h6 className='proj_text-title'>PINO dot ph</h6>
                                            <span className='proj_text-dot red'></span>
                                            <h6 className='proj_text-category'>website</h6>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link to='/design/novice-magazine' className='proj-link'>
                                <div className='featured-proj'>
                                    <div className='proj_image-banner'>
                                        <div className='proj_image-bg'></div>
                                        <img src={Novice} className='proj-image art' alt="cover" />
                                    </div>
                                    <div className='proj_text-right'>
                                        <div className='proj-text'>
                                            <h6 className='proj_text-title'>NOVICE Magazine issue 03</h6>
                                            <span className='proj_text-dot blue'></span>
                                            <h6 className='proj_text-category'>art direction</h6>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link to='/website/cccollage' className='proj-link'>
                                <div className='featured-proj'>
                                    <div className='proj_image-banner'>
                                        <div className='proj_image-bg'></div>
                                        <img src={CCCollage} className='proj-image web' alt="cover" />
                                    </div>
                                    <div className='proj_text-left'>
                                        <div className='proj-text'>
                                            <h6 className='proj_text-title'>CCCOLLAGE dot com</h6>
                                            <span className='proj_text-dot yellow'></span>
                                            <h6 className='proj_text-category'>website</h6>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link to='/website/robinsons-retail-holdings' className='proj-link'>
                                <div className='featured-proj'>
                                    <div className='proj_image-banner'>
                                        <div className='proj_image-bg'></div>
                                        <img src={RRHI} className='proj-image web' alt="cover" />
                                    </div>
                                    <div className='proj_text-right'>
                                        <div className='proj-text'>
                                            <h6 className='proj_text-title'>ROBINSONS Retail dot com dot ph</h6>
                                            <span className='proj_text-dot red'></span>
                                            <h6 className='proj_text-category'>website</h6>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link to='/design/gawad-benildyano' className='proj-link'>
                                <div className='featured-proj'>
                                    <div className='proj_image-banner'>
                                        <div className='proj_image-bg'></div>
                                        <img src={Gawad} className='proj-image art' alt="cover" />
                                    </div>
                                    <div className='proj_text-left'>
                                        <div className='proj-text'>
                                            <h6 className='proj_text-title'>30th GAWAD Benildyano</h6>
                                            <span className='proj_text-dot green'></span>
                                            <h6 className='proj_text-category'>visual identity</h6>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link to='/website/diende' className='proj-link'>
                                <div className='featured-proj'>
                                    <div className='proj_image-banner'>
                                        <div className='proj_image-bg'></div>
                                        <img src={Diende} className='proj-image web' alt="cover" />
                                    </div>
                                    <div className='proj_text-right'>
                                        <div className='proj-text'>
                                            <h6 className='proj_text-title'>DIENDE dot neocities dot org</h6>
                                            <span className='proj_text-dot pink'></span>
                                            <h6 className='proj_text-category'>website</h6>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link to='/website/natu-explorations' className='proj-link'>
                                <div className='featured-proj'>
                                    <div className='proj_image-banner'>
                                        <div className='proj_image-bg'></div>
                                        <img src={Natu} className='proj-image web' alt="cover" />
                                    </div>
                                    <div className='proj_text-left'>
                                        <div className='proj-text'>
                                            <h6 className='proj_text-title'>NATU Explorations dot com</h6>
                                            <span className='proj_text-dot brown'></span>
                                            <h6 className='proj_text-category'>website</h6>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link to='/design/agos-charity-screening' className='proj-link'>
                                <div className='featured-proj'>
                                    <div className='proj_image-banner'>
                                        <div className='proj_image-bg'></div>
                                        <img src={Agos} className='proj-image art' alt="cover" />
                                    </div>
                                    <div className='proj_text-right'>
                                        <div className='proj-text'>
                                            <h6 className='proj_text-title'>AGOS Screening dot psd</h6>
                                            <span className='proj_text-dot blue'></span>
                                            <h6 className='proj_text-category'>visual identity</h6>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link to='/website/modo-food-&-living' className='proj-link'>
                                <div className='featured-proj'>
                                    <div className='proj_image-banner'>
                                        <div className='proj_image-bg'></div>
                                        <img src={Modo} className='proj-image web' alt="cover" />
                                    </div>
                                    <div className='proj_text-left'>
                                        <div className='proj-text'>
                                            <h6 className='proj_text-title'>MODO dot com</h6>
                                            <span className='proj_text-dot orange'></span>
                                            <h6 className='proj_text-category'>website</h6>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link to='/website/hit-productions' className='proj-link'>
                                <div className='featured-proj'>
                                    <div className='proj_image-banner'>
                                        <div className='proj_image-bg'></div>
                                        <img src={Hit} className='proj-image web' alt="cover" />
                                    </div>
                                    <div className='proj_text-right'>
                                        <div className='proj-text'>
                                            <h6 className='proj_text-title'>HIT Productions dot net</h6>
                                            <span className='proj_text-dot red'></span>
                                            <h6 className='proj_text-category'>website</h6>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link to='/design/the-benildean-24' className='proj-link'>
                                <div className='featured-proj'>
                                    <div className='proj_image-banner'>
                                        <div className='proj_image-bg'></div>
                                        <img src={TB24} className='proj-image art' alt="cover" />
                                    </div>
                                    <div className='proj_text-left'>
                                        <div className='proj-text'>
                                            <h6 className='proj_text-title'>THE BENILDEAN issue 24</h6>
                                            <span className='proj_text-dot green'></span>
                                            <h6 className='proj_text-category'>editorial</h6>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link to='/design/the-benildean-25' className='proj-link'>
                                <div className='featured-proj'>
                                    <div className='proj_image-banner'>
                                        <div className='proj_image-bg'></div>
                                        <img src={TB25} className='proj-image art' alt="cover" />
                                    </div>
                                    <div className='proj_text-right'>
                                        <div className='proj-text'>
                                            <h6 className='proj_text-title'>THE BENILDEAN issue 25</h6>
                                            <span className='proj_text-dot green'></span>
                                            <h6 className='proj_text-category'>editorial</h6>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link to='/design/people-may-vary' className='proj-link'>
                                <div className='featured-proj'>
                                    <div className='proj_image-banner'>
                                        <div className='proj_image-bg'></div>
                                        <img src={PMV} className='proj-image art' alt="cover" />
                                    </div>
                                    <div className='proj_text-left'>
                                        <div className='proj-text'>
                                            <h6 className='proj_text-title'>PEOPLE MAY VARY dot psd</h6>
                                            <span className='proj_text-dot blue'></span>
                                            <h6 className='proj_text-category'>branding</h6>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link to='/website/torre-lorenzo' className='proj-link'>
                                <div className='featured-proj'>
                                    <div className='proj_image-banner'>
                                        <div className='proj_image-bg'></div>
                                        <img src={TorreLorenzo} className='proj-image web' alt="cover" />
                                    </div>
                                    <div className='proj_text-right'>
                                        <div className='proj-text'>
                                            <h6 className='proj_text-title'>TORRE LORENZO dot com</h6>
                                            <span className='proj_text-dot green'></span>
                                            <h6 className='proj_text-category'>website</h6>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link to='/design/spaces-for-womens-arts-and-narratives' className='proj-link'>
                                <div className='featured-proj'>
                                    <div className='proj_image-banner'>
                                        <div className='proj_image-bg'></div>
                                        <img src={Swan} className='proj-image art' alt="cover" />
                                    </div>
                                    <div className='proj_text-left'>
                                        <div className='proj-text'>
                                            <h6 className='proj_text-title'>SWAN dot psd</h6>
                                            <span className='proj_text-dot pink'></span>
                                            <h6 className='proj_text-category'>visual identity & merch</h6>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link to='/design/shades-of-gray-irreversible' className='proj-link'>
                                <div className='featured-proj'>
                                    <div className='proj_image-banner'>
                                        <div className='proj_image-bg'></div>
                                        <img src={SOG} className='proj-image art' alt="cover" />
                                    </div>
                                        <div className='proj_text-right'>
                                            <div className='proj-text'>
                                            <h6 className='proj_text-title'>SHADES OF GRAY: Irreversible</h6>
                                            <span className='proj_text-dot violet'></span>
                                            <h6 className='proj_text-category'>editorial</h6>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link to='/website/madman-creative-solutions' className='proj-link'>
                                <div className='featured-proj'>
                                    <div className='proj_image-banner'>
                                        <div className='proj_image-bg'></div>
                                        <img src={Madman} className='proj-image web' alt="cover" />
                                    </div>
                                    <div className='proj_text-left'>
                                        <div className='proj-text'>
                                            <h6 className='proj_text-title'>MADMAN Creative Solutions dot com</h6>
                                            <span className='proj_text-dot red'></span>
                                            <h6 className='proj_text-category'>website</h6>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link to='/website/auro-chocolate' className='proj-link'>
                                <div className='featured-proj'>
                                    <div className='proj_image-banner'>
                                        <div className='proj_image-bg'></div>
                                        <img src={AURO} className='proj-image web' alt="cover" />
                                    </div>
                                    <div className='proj_text-left'>
                                        <div className='proj-text'>
                                            <h6 className='proj_text-title'>AURO Chocolate dot com</h6>
                                            <span className='proj_text-dot brown'></span>
                                            <h6 className='proj_text-category'>website</h6>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home