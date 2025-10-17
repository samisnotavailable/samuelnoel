import { useRef, useState, useEffect } from 'react'
import './index.scss'
import { Link } from 'react-router-dom'
import RRHITB from '../../assets/images/rrhi/rrhi.jpg'
import Item01 from '../../assets/images/rrhi/rrhi-01.jpg'
import Item02 from '../../assets/images/rrhi/rrhi-02.jpg'
import Item03 from '../../assets/images/rrhi/rrhi-03.jpg'
import Item04 from '../../assets/images/rrhi/rrhi-04.jpg'
import Item05 from '../../assets/images/rrhi/rrhi-05.jpg'
import Item06 from '../../assets/images/rrhi/rrhi-06.jpg'
import Item07 from '../../assets/images/rrhi/rrhi-07.jpg'
import Item08 from '../../assets/images/rrhi/rrhi-08.jpg'
import Item09 from '../../assets/images/rrhi/rrhi-09.jpg'


const RRHI = () => {
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
                    <h1 className='preloader-text'>ROBINSONS RETAIL<br></br>HOLDINGS</h1>
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
                            <h6 className='hero_text-left'>ROBINSONS Retail Holdings dot com dot ph</h6>
                            <h6 className='hero_text-right'>Web development, WordPress Oxygen, business website</h6>
                        </div>
                        <Link to="https://www.robinsonsretailholdings.com.ph/" target="_blank" rel="noopener noreferrer">
                            <div className='web_hero-container'>
                                <h2 className='hero_video-link'>Visit the website</h2>
                                <div className='hero_video-container'> 
                                    <div className='hero_video-visit'></div> 
                                    <iframe className='hero-video' src="https://player.vimeo.com/video/1126210817?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;muted=1&amp;loop=1&amp;controls=0" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className='web-gallery'>
                        <img className='web_gallery-div gallery_outer-image' src={RRHITB} alt='website screenshot'></img>
                        <div className='web_gallery-div'>
                            <img className='gallery-image' src={Item04} alt="website screenshot" />
                            <img className='gallery-image' src={Item03} alt="website screenshot" />
                            <img className='gallery-image' src={Item08} alt="website screenshot" />
                            <img className='gallery-image' src={Item02} alt="website screenshot" />
                        </div>
                        <div className='web_gallery-div'>
                            <img className='gallery-image' src={Item09} alt="website screenshot" />
                            <img className='gallery-image' src={Item01} alt="website screenshot" />
                            <img className='gallery-image' src={Item07} alt="website screenshot" />
                            <img className='gallery-image' src={Item06} alt="website screenshot" />
                        </div>
                        <img className='web_gallery-div gallery_outer-image' src={Item05} alt='website screenshot'></img>
                    </div>
                    <div className='web-description'>
                        <div className='web_description-tags'>
                            <div id='tag-01' className='description-tag'><h3>frontend development</h3></div>
                            <div id='tag-02' className='description-tag'><h3>CMS management</h3></div>
                            <div id='tag-03' className='description-tag'><h3>business enterprise</h3></div>
                            <div id='tag-04' className='description-tag'><h3>wordpress</h3></div>
                            <div id='tag-05' className='description-tag'><h3>informational</h3></div>
                            <div id='tag-06' className='description-tag'><h3>backend development</h3></div>
                            <div id='tag-07' className='description-tag'><h3>oxygen builder</h3></div>
                            <div id='tag-08' className='description-tag'><h3>PHP language</h3></div>
                            <div id='tag-09' className='description-tag'><h3>website manual</h3></div>
                            <div id='tag-10' className='description-tag'><h3>mobile-responsive</h3></div>
                        </div>
                        <div className='web_description-text'>
                            <h3 className='description-title'>About the Project</h3>
                            <p className='description-paragraph'>RRHI or Robinsons Retail Holdings, Inc., is a website created for the RRHI company using WordPress and plugin builder Oxygen. My tasks included managing and creating pages, pods, and templates; writing PHP code for page-specific snippets, displaying dynamic data; and lastly providing a website manual and workshop for website turnover to the client. RRHI's website serves as the company's informational website on their business enterprise and is available to view on both desktop and phone. RRHI was co-developed with Gabo Pundavela and designed by Lindt James Lacanlale.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RRHI