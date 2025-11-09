import { useRef, useState, useEffect } from 'react'
import './index.scss'
import { Link } from 'react-router-dom'
import NatuTB from '../../assets/images/natu/natu.jpg'
import Item01 from '../../assets/images/natu/natu-01.webp'
import Item02 from '../../assets/images/natu/natu-02.webp'
import Item03 from '../../assets/images/natu/natu-03.gif'
import Item04 from '../../assets/images/natu/natu-04.jpg'
import Item05 from '../../assets/images/natu/natu-05.jpg'
import Item06 from '../../assets/images/natu/natu-06.jpg'
import Item07 from '../../assets/images/natu/natu-07.jpg'
import Item08 from '../../assets/images/natu/natu-08.jpg'
import Item09 from '../../assets/images/natu/natu-09.jpg'


const Natu = () => {

    useEffect(() => {
        document.title = "Natu Explorations | Samuel Noel"
    }, []);

    const [loading, setLoading] = useState(true)
    const [fadeOut, setFadeOut] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0); //scroll to top of page
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

    useEffect(() => {
        const tags = document.querySelectorAll('.description-tag');
        const parent = document.querySelector('.web_description-tags');
        if (!parent) return;

        tags.forEach(tag => {
            tag.style.position = 'absolute';

            let isDragging = false;
            let offsetX = 0;
            let offsetY = 0;

            const onMouseDown = (e) => {
                e.preventDefault();
                isDragging = true;
                const parentRect = parent.getBoundingClientRect();
                const tagRect = tag.getBoundingClientRect();
                // Mouse position relative to the tag
                offsetX = e.clientX - tagRect.left;
                offsetY = e.clientY - tagRect.top;
                tag.style.zIndex = 1200;
                document.addEventListener('mousemove', onMouseMove);
                document.addEventListener('mouseup', onMouseUp);
            };

            const onMouseMove = (e) => {
                if (!isDragging) return;
                const parentRect = parent.getBoundingClientRect();
                // Set position relative to parent
                tag.style.left = `${e.clientX - parentRect.left - offsetX}px`;
                tag.style.top = `${e.clientY - parentRect.top - offsetY}px`;
            };

            const onMouseUp = () => {
                isDragging = false;
                tag.style.zIndex = 1100;
                document.removeEventListener('mousemove', onMouseMove);
                document.removeEventListener('mouseup', onMouseUp);
            };

            tag.addEventListener('mousedown', onMouseDown);

            // Cleanup
            return () => {
                tag.removeEventListener('mousedown', onMouseDown);
            };
        });
    }, []);

    return (
        <div className='web-page'>
            {loading && (
                <div className={`preloader${fadeOut ? ' fade-out' : ''}`}>
                    <h1 className='preloader-text'>NATU<br></br>EXPLORATIONS</h1>
                    <h6 className='preloader-text'>—through the looking glass—</h6>
                </div>
            )}
            <Link to='/'>
                <div className='back_btn-container'>
                    <div className='back-btn blue-btn'></div>
                    <p className='back_btn-txt'>Return</p>
                </div>
            </Link>
            <div className={`padding-global${loading ? ' hidden' : ''}`}>
                <div className='web_page-container'>
                    <div className='web-hero'>
                        <div className='web_hero-text'>
                            <h6 className='hero_text-left'>NATU Explorations dot com</h6>
                            <h6 className='hero_text-right'>Web development, Webflow, business website</h6>
                        </div>
                        <Link to="https://www.natuexplorations.com/" target="_blank" rel="noopener noreferrer">
                            <div className='web_hero-container'>
                                <h2 className='hero_video-link'>Visit the website</h2>
                                <div className='hero_video-container'> 
                                    <div className='hero_video-visit'></div> 
                                    <iframe className='hero-video' src="https://player.vimeo.com/video/1126243940?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;muted=1&amp;loop=1&amp;controls=0" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className='web-gallery'>
                        <img className='web_gallery-div gallery_outer-image' src={NatuTB} alt='website screenshot'></img>
                        <div className='web_gallery-div'>
                            <img className='gallery-image' src={Item04} alt="website screenshot" />
                            <img className='gallery-image' src={Item05} alt="website screenshot" />
                            <img className='gallery-image' src={Item02} alt="website screenshot" />
                            <img className='gallery-image' src={Item07} alt="website screenshot" />
                        </div>
                        <div className='web_gallery-div'>
                            <img className='gallery-image' src={Item09} alt="website screenshot" />
                            <img className='gallery-image' src={Item01} alt="website screenshot" />
                            <img className='gallery-image' src={Item03} alt="website screenshot" />
                            <img className='gallery-image' src={Item06} alt="website screenshot" />
                        </div>
                        <img className='web_gallery-div gallery_outer-image' src={Item08} alt='website screenshot'></img>
                    </div>
                    <div className='web-description'>
                        <div className='web_description-tags'>
                            <div id='tag-01' className='description-tag'><h3>frontend development</h3></div>
                            <div id='tag-02' className='description-tag'><h3>webflow</h3></div>
                            <div id='tag-03' className='description-tag'><h3>travel experience</h3></div>
                            <div id='tag-04' className='description-tag'><h3>finsweet</h3></div>
                            <div id='tag-05' className='description-tag'><h3>luxury destinations</h3></div>
                            <div id='tag-06' className='description-tag'><h3>website manual</h3></div>
                            <div id='tag-07' className='description-tag'><h3>CMS management</h3></div>
                            <div id='tag-08' className='description-tag'><h3>client-first</h3></div>
                            <div id='tag-09' className='description-tag'><h3>animations</h3></div>
                            <div id='tag-10' className='description-tag'><h3>mobile-responsive</h3></div>
                        </div>
                        <div className='web_description-text'>
                            <h3 className='description-title'>About the Project</h3>
                            <p className='description-paragraph'>NATU Explorations is a travel experience business, providing personalized journeys and exquisite luxury hotels for destinations across the globe. My tasks included building its pages and layouts; setting up CMS management; creating animations and dynamic interactions for its hotel modals; and lastly providing a website manual and workshop for website turnover to the client. This screen-responsive website was made on Webflow, using Finsweet's Client-First guidelines, with the assistance of TypeForm for booking and inquiry needs. NATU Explorations was developed and partially designed by me, with overall design by Enrico Sebastian Cruz.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Natu