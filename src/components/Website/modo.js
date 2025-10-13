import { useRef, useState, useEffect } from 'react'
import './index.scss'
import { Link } from 'react-router-dom'
import ModoTB from '../../assets/images/modo/modo.jpg'
import Item01 from '../../assets/images/modo/modo-01.jpg'
import Item02 from '../../assets/images/modo/modo-02.jpg'
import Item03 from '../../assets/images/modo/modo-03.jpg'
import Item04 from '../../assets/images/modo/modo-04.jpg'
import Item05 from '../../assets/images/modo/modo-05.jpg'
import Item06 from '../../assets/images/modo/modo-06.jpg'
import Item07 from '../../assets/images/modo/modo-07.jpg'
import Item08 from '../../assets/images/modo/modo-08.jpg'
import Item09 from '../../assets/images/modo/modo-09.jpg'


const Modo = () => {
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
                    <h1 className='preloader-text'>MODO Food <br></br>& Lifestyle</h1>
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
                            <h6 className='hero_text-left'>MODO dot ph</h6>
                            <h6 className='hero_text-right'>Web development, CMS management, business website</h6>
                        </div>
                        <Link to="https://modo.ph/" target="_blank" rel="noopener noreferrer">
                            <div className='web_hero-container'>
                                <h2 className='hero_video-link'>Visit the website</h2>
                                <div className='hero_video-container'> 
                                    <div className='hero_video-visit'></div> 
                                    <iframe className='hero-video' src="https://player.vimeo.com/video/1126594944?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;muted=1&amp;loop=1&amp;controls=0" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className='web-gallery'>
                        <img className='web_gallery-div gallery_outer-image' src={ModoTB} alt='diende website screenshot'></img>
                        <div className='web_gallery-div'>
                            <img className='gallery-image' src={Item04} alt="diende website screenshot" />
                            <img className='gallery-image' src={Item03} alt="diende website screenshot" />
                            <img className='gallery-image' src={Item05} alt="diende website screenshot" />
                            <img className='gallery-image' src={Item02} alt="diende website screenshot" />
                        </div>
                        <div className='web_gallery-div'>
                            <img className='gallery-image' src={Item09} alt="diende website screenshot" />
                            <img className='gallery-image' src={Item08} alt="diende website screenshot" />
                            <img className='gallery-image' src={Item07} alt="diende website screenshot" />
                            <img className='gallery-image' src={Item06} alt="diende website screenshot" />
                        </div>
                        <img className='web_gallery-div gallery_outer-image' src={Item01} alt='diende website screenshot'></img>
                    </div>
                    <div className='web-description'>
                        <div className='web_description-tags'>
                            <div id='tag-01' className='description-tag'><h3>frontend development</h3></div>
                            <div id='tag-02' className='description-tag'><h3>CMS management</h3></div>
                            <div id='tag-03' className='description-tag'><h3>business enterprise</h3></div>
                            <div id='tag-04' className='description-tag'><h3>wordpress</h3></div>
                            <div id='tag-05' className='description-tag'><h3></h3></div>
                            <div id='tag-06' className='description-tag'><h3>backend development</h3></div>
                            <div id='tag-07' className='description-tag'><h3>oxygen builder</h3></div>
                            <div id='tag-08' className='description-tag'><h3>PHP language</h3></div>
                            <div id='tag-09' className='description-tag'><h3>retail website</h3></div>
                            <div id='tag-10' className='description-tag'><h3>mobile-responsive</h3></div>
                        </div>
                        <div className='web_description-text'>
                            <h3 className='description-title'>About the Project</h3>
                            <p className='description-paragraph'>This is both an artistic space and a personal blog, containing both writings and artworks I have done under the moniker Diende. Inspired by Evangelion, Adobe Flash websites, and other inventive online places, this indiesite is a love letter to what makes the internet special: a hub to carve out your own identity, and a refuge to find others like you, hence its domain being on Neocities. Each page and section is intended to be as simple yet as reinventive as they can get, while remaining an interactive playground for myself and visitors alike.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modo