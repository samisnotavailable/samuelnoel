import { useRef, useState, useEffect } from 'react'
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import './index.scss'
import { Link } from 'react-router-dom'
import SWANTB from '../../assets/images/swan/swan.png'
import Item00 from '../../assets/images/swan/swan-00.png'
import Item01 from '../../assets/images/swan/swan-01.png'
import Item02 from '../../assets/images/swan/swan-02.jpg'
import Item03 from '../../assets/images/swan/swan-03.jpg'
import Item04 from '../../assets/images/swan/swan-04.jpg'
import Item05 from '../../assets/images/swan/swan-05.jpg'
import Item06 from '../../assets/images/swan/swan-06.jpg'
import Item07 from '../../assets/images/swan/swan-07.jpg'
import Item08 from '../../assets/images/swan/swan-08.jpg'
import Item09 from '../../assets/images/swan/swan-09.png'
import Item10 from '../../assets/images/swan/swan-10.png'
import Item11 from '../../assets/images/swan/swan-11.jpg'
import Item12 from '../../assets/images/swan/swan-12.jpg'
import Item13 from '../../assets/images/swan/swan-13.jpg'
import Item14 from '../../assets/images/swan/swan-14.jpg'
import Item15 from '../../assets/images/swan/swan-15.jpg'
import Item16 from '../../assets/images/swan/swan-16.jpg'
import Item17 from '../../assets/images/swan/swan-17.jpg'
import Item18 from '../../assets/images/swan/swan-18.gif'
import Item19 from '../../assets/images/swan/swan-19.png'


const galleryImages = [Item00, Item01, Item02, Item03, Item04, Item05, Item06, Item07, Item08, Item09, Item10, Item18, Item11, Item12, Item13, Item14, Item15, Item16, Item17]

const SWAN = () => {

    useEffect(() => {
        document.title = "SWAN | Samuel Noel"
    }, []);

    const [loading, setLoading] = useState(true)
    const [fadeOut, setFadeOut] = useState(false)
    const heroContainerRef = useRef(null)
    const [zoom, setZoom] = useState(1)
    const ZOOM_SPEED = 0.1
    const ZOOM_MIN = 1
    const ZOOM_MAX = 1.75
    const minBlur = 15; 
    const maxBlur = 0; 
    const blurValue = minBlur - ((zoom - ZOOM_MIN) / (ZOOM_MAX - ZOOM_MIN)) * minBlur;
    
    const [lightboxOpen, setLightboxOpen] = useState(false)
    const [lightboxIndex, setLightboxIndex] = useState(0)

    const slides = galleryImages.map(src => ({ src }))

    const openLightbox = (idx) => {
        setLightboxIndex(idx)
        setLightboxOpen(true)
        // optional: prevent background scroll (library may handle this)
        document.body.style.overflow = 'hidden'
    }
    const closeLightbox = () => {
        setLightboxOpen(false)
        document.body.style.overflow = ''
    }

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
        const parent = document.querySelector('.design_description-tags');
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

    useEffect(() => {
        const container = heroContainerRef.current
        if (!container) return

        const handleWheel = (e) => {
            if (
                (e.deltaY > 0 && zoom < ZOOM_MAX) ||
                (e.deltaY < 0 && zoom > ZOOM_MIN)
            ) {
                e.preventDefault()
                let newZoom = zoom
                if (e.deltaY > 0) {
                    newZoom = Math.min(zoom + ZOOM_SPEED, ZOOM_MAX)
                } else {
                    newZoom = Math.max(zoom - ZOOM_SPEED, ZOOM_MIN)
                }
                setZoom(newZoom)
            }
        }

        container.addEventListener('wheel', handleWheel)
        return () => {
            container.removeEventListener('wheel', handleWheel)
        }
    }, [zoom])


    return (
        <div className='design-page'>
            {loading && (
                <div className={`preloader${fadeOut ? ' fade-out' : ''}`}>
                    <h1 className='preloader-text'>SPACES FOR WOMEN'S ART AND NARRATIVES</h1>
                    <h6 className='preloader-text'>—down the rabbit hole—</h6>
                </div>
            )}
            <Link to='/'>
                <div className='back_btn-container'>
                    <div className='back-btn red-btn'></div>
                    <p className='back_btn-txt'>Return</p>
                </div>
            </Link>
            <div className={`padding-global${loading ? ' hidden' : ''}`}>
                <div className='design_page-container'>
                    <div className='design-hero'>
                        <div className='design_hero-text'>
                            <h6 className='hero_text-left'>SPACES FOR WOMEN'S<br></br>ART & NARRATIVES</h6>
                            <h6 className='hero_text-right'>Merchandise design, online campaign, visual identity</h6>
                        </div>
                        <div className='design_hero-container' ref={heroContainerRef}>
                            <div className='design_hero-overflow' style={{ transform: `scale(${zoom})`, transition: 'transform 0.2s' }}>
                                <img className='design_hero-thumbnail' src={Item19} alt='agos film screening design thumbnail' style={{ filter: `contrast(0.1) blur(${blurValue}px)`, transition: 'filter 0.2s'}} />
                            </div>
                        </div>
                    </div>
                    <div className='design-gallery'>
                        {galleryImages.map((src, idx) => (
                            <div className='design_gallery-item' key={idx}>
                                <img
                                    className='gallery_image-reg'
                                    src={src}
                                    alt={`gallery ${idx + 1}`}
                                    onClick={() => openLightbox(idx)}
                                    style={{ cursor: 'pointer' }}
                                />
                                <h6 className='gallery-title'>{String(idx + 1).padStart(2, '0')}</h6>
                            </div>
                        ))}
                    </div>
                    <div className='design-description'>
                        <div className='design_description-tags'>
                            <div id='tag-01' className='description-tag'><h3>merchandise</h3></div>
                            <div id='tag-02' className='description-tag'><h3>social media</h3></div>
                            <div id='tag-03' className='description-tag'><h3>posters</h3></div>
                            <div id='tag-04' className='description-tag'><h3>visual identity</h3></div>
                            <div id='tag-05' className='description-tag'><h3>photoshop</h3></div>
                            <div id='tag-06' className='description-tag'><h3>online campaign</h3></div>
                            <div id='tag-07' className='description-tag'><h3>swan</h3></div>
                            <div id='tag-08' className='description-tag'><h3>women arts</h3></div>
                            <div id='tag-09' className='description-tag'><h3>apparel</h3></div>
                            <div id='tag-10' className='description-tag'><h3>illustration</h3></div>
                        </div>
                        <div className='design_description-text'>
                            <h3 className='description-title'>About the Project</h3>
                            <p className='description-paragraph'>Spaces for Women's Art and Narratives (SWAN) is the premiere feminism meets fine arts organization of the Loyola Schools, aiming to empower women and feminists through personal and social contexts. I worked in partnership with them through several projects as their lead designer, most importantly for their "Pass a Pad" campaign, in which they had a week-long distribution of menstrual products across Ateneo de Manila University; as well as their official merchandise line to reflect SWAN culture and identity, "Girl Merch". This partnership involved merchandise design, social media posts, printed banners, and visual identity.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Lightbox
                open={lightboxOpen}
                close={closeLightbox}
                index={lightboxIndex}
                slides={slides}
            />
        </div>
    )
}

export default SWAN