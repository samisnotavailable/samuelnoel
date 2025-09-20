import './index.scss'
import { Link } from 'react-router-dom'
import Novice from '../../assets/images/novice.jpg'

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
                        <p className='home-text'>My name is Samuel Noel (he/him), I am a creative developer and designer based in the Philippines. Please, feel free to look around or click on the button below to enter a random page.</p>
                        <Link to='/contact' className='cta-btn'>
                            <span className='link_btn-text'>Into the Rabbit Hole</span>
                        </Link>
                    </div>
                    <div className='home-featured' id='home-featured'>
                        <h2>Featured Projects</h2>
                        <div className='home_featured-list'>
                            <div className='featured-proj'>
                                <div className='feat_proj-cover spiral red'></div>
                                <h4 className='feat_proj-title white'>PINO <span>dot</span> PH</h4>
                            </div>
                            <div className='featured-proj'>
                                <div className='feat_proj-cover blur'>
                                    <img src={Novice} className='proj_cover-img' alt="cover" />
                                </div>
                                <h4 className='feat_proj-title'>NOVICE Magazine Issue 03 Cover</h4>
                            </div>
                            <div className='featured-proj'>
                                <h4 className='feat_proj-title'>REYES Family Crest</h4>
                            </div>
                            <div className='featured-proj'>
                                <h4 className='feat_proj-title'>MODO <span>dot</span> PH</h4>
                            </div>
                            <div className='featured-proj'>
                                <h4 className='feat_proj-title'>CCCOLLAGE <span>dot</span> COM</h4>
                            </div>
                            <div className='featured-proj'>
                                <h4 className='feat_proj-title'>AGOS SCREENING EVENT @mint</h4>
                            </div>
                            <div className='featured-proj'>
                                <h4 className='feat_proj-title'>SWAN Pass a Pad CAMPAIGN</h4>
                            </div>
                            <div className='featured-proj'>
                                <h4 className='feat_proj-title'>SWAN MERCHANDISE</h4>
                            </div>
                            <div className='featured-proj'>
                                <div className='feat_proj-cover spiral green'></div>
                                <h4 className='feat_proj-title'>The 30th GAWAD BENILDYANO</h4>
                            </div>
                            <div className='featured-proj'>
                                <h4 className='feat_proj-title'>diende <span>dot</span> neocities <span>dot</span> org</h4>
                            </div>
                            <div className='featured-proj'>
                                <h4 className='feat_proj-title'>NATU Explorations <span>dot</span> COM</h4>
                            </div>
                            <div className='featured-proj'>
                                <h4 className='feat_proj-title'>THE BENILDEAN: Issues 24</h4>
                            </div>
                            <div className='featured-proj'>
                                <h4 className='feat_proj-title'>THE BENILDEAN: Issues 25</h4>
                            </div>
                            <div className='featured-proj'>
                                <h4 className='feat_proj-title'>THE BENILDEAN: Irreversible</h4>
                            </div>
                            <div className='featured-proj'>
                                <h4 className='feat_proj-title'>TORRE LORENZO <span>dot</span> com</h4>
                            </div>
                            <div className='featured-proj'>
                                <h4 className='feat_proj-title'>PEOPLE MAY VARY Online Magazine</h4>
                            </div>
                            <div className='featured-proj'>
                                <h4 className='feat_proj-title'>ROBINSONS Retail Holdings <span>dot</span> com <span>dot</span> ph</h4>
                            </div>
                            <div className='featured-proj'>
                                <h4 className='feat_proj-title'>HIT Productions <span>dot</span> net</h4>
                            </div>
                            <div className='featured-proj'>
                                <h4 className='feat_proj-title'>MADMAN Creative Solutions <span>dot</span> com</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home