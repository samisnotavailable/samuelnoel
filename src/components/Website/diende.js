import { useState, useEffect } from 'react'
import './index.scss'
import { Link } from 'react-router-dom'
import Item01 from '../../assets/images/ID-back.png'

const Diende = () => {
    const [loading, setLoading] = useState(true)
    const [fadeOut, setFadeOut] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeOut(true)
            setTimeout(() => setLoading(false), 500)
        }, 3000)
        return () => clearTimeout(timer)
    }, [])
    useEffect(() => {
        if (typeof document === 'undefined') return
        const previousOverflow = document.body.style.overflow
        if (loading) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = previousOverflow
        }
        return () => {
            document.body.style.overflow = previousOverflow
        }
    }, [loading])

    return (
        <div className='web-page'>
            {loading && (
                <div className={`preloader${fadeOut ? ' fade-out' : ''}`}>
                    <h1 className='preloader-text'>DIENDE</h1>
                    <h6 className='preloader-text'>—through the looking glass—</h6>
                </div>
            )}
            <div className={`padding-global${loading ? ' hidden' : ''}`}>
                <div className='web_page-container'>
                    <Link to='/'>
                        <div className='back_btn-container'>
                            <div className='back-btn'></div>
                            <p className='back_btn-txt'>Return</p>
                        </div>
                    </Link>
                    <div className='web-hero'>
                        <div className='web_hero-text'>
                            <h6 className='hero_text-left'>Diende dot neocities dot org</h6>
                            <h6 className='hero_text-right'>Web development, UX/UI design, art direction</h6>
                        </div>
                        <Link to="https://diende.neocities.org" target="_blank" rel="noopener noreferrer">
                            <div className='web_hero-container'>
                                <h2 className='hero_video-link'>Visit the website</h2>
                                <div className='hero_video-container'> 
                                    <div className='hero_video-visit'></div> 
                                    <iframe className='hero-video' src="https://player.vimeo.com/video/1125097161?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;muted=1&amp;loop=1&amp;controls=0" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className='web-description'>
                        <div className='web_description-grid'>
                            <div className='grid_item'>
                                <img src={Item01} alt='item 01' className='grid-image' />
                            </div>
                            <div className='grid_item'>
                                <img src={Item01} alt='item 02' className='grid-image' />
                            </div>
                            <div className='grid_item'>
                                <img src={Item01} alt='item 03' className='grid-image' />
                            </div>
                            <div className='grid_item'>
                                <img src={Item01} alt='item 04' className='grid-image' />
                            </div>
                            <div className='grid_item'>
                                <img src={Item01} alt='item 05' className='grid-image' />
                            </div>
                            <div className='grid_item'>
                                <img src={Item01} alt='item 06' className='grid-image' />
                            </div>
                            <div className='grid_item'>
                                <img src={Item01} alt='item 07' className='grid-image' />
                            </div>
                            <div className='grid_item'>
                                <img src={Item01} alt='item 08' className='grid-image' />
                            </div>
                            <div className='grid_item'>
                                <img src={Item01} alt='item 09' className='grid-image' />
                            </div>
                            <div className='grid_item'>
                                <img src={Item01} alt='item 10' className='grid-image' />
                            </div>
                            <div className='grid_item'>
                                <img src={Item01} alt='item 01' className='grid-image' />
                            </div>
                            <div className='grid_item'>
                                <img src={Item01} alt='item 02' className='grid-image' />
                            </div>
                            <div className='grid_item'>
                                <img src={Item01} alt='item 03' className='grid-image' />
                            </div>
                            <div className='grid_item'>
                                <img src={Item01} alt='item 04' className='grid-image' />
                            </div>
                            <div className='grid_item'>
                                <img src={Item01} alt='item 05' className='grid-image' />
                            </div>
                            <div className='grid_item'>
                                <img src={Item01} alt='item 06' className='grid-image' />
                            </div>
                            <div className='grid_item'>
                                <img src={Item01} alt='item 07' className='grid-image' />
                            </div>
                            <div className='grid_item'>
                                <img src={Item01} alt='item 08' className='grid-image' />
                            </div>
                            <div className='grid_item'>
                                <img src={Item01} alt='item 09' className='grid-image' />
                            </div>
                            <div className='grid_item'>
                                <img src={Item01} alt='item 10' className='grid-image' />
                            </div>
                            <div className='grid_item'>
                                <img src={Item01} alt='item 01' className='grid-image' />
                            </div>
                            <div className='grid_item'>
                                <img src={Item01} alt='item 02' className='grid-image' />
                            </div>
                            <div className='grid_item'>
                                <img src={Item01} alt='item 03' className='grid-image' />
                            </div>
                            <div className='grid_item'>
                                <img src={Item01} alt='item 04' className='grid-image' />
                            </div>
                            <div className='grid_item'>
                                <img src={Item01} alt='item 05' className='grid-image' />
                            </div>
                            <div className='grid_item'>
                                <img src={Item01} alt='item 06' className='grid-image' />
                            </div>
                            <div className='grid_item'>
                                <img src={Item01} alt='item 07' className='grid-image' />
                            </div>
                            <div className='grid_item'>
                                <img src={Item01} alt='item 08' className='grid-image' />
                            </div>
                            <div className='grid_item'>
                                <img src={Item01} alt='item 09' className='grid-image' />
                            </div>
                            <div className='grid_item'>
                                <img src={Item01} alt='item 10' className='grid-image' />
                            </div>
                        </div>
                        <div className='web_description-text'>
                            <h3 className='description-title'>About the Project</h3>
                            <p className='description-paragraph'>XYZ is a portfolio website for a web developer and designer. The website showcases their skills and projects in a visually appealing way. The website is built using HTML, CSS, and JavaScript. The website is responsive and works well on all devices. The website is also optimized for search engines.</p>
                        </div>
                    </div>
                    <div className='web-gallery'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Diende