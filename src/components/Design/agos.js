import { useRef, useState, useEffect } from 'react'
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import './index.scss'
import { Link } from 'react-router-dom'
import Item00 from '../../assets/images/agos/agos-00.gif'
import Item01 from '../../assets/images/agos/agos-01.jpg'
import Item02 from '../../assets/images/agos/agos-02.jpg'
import Item03 from '../../assets/images/agos/agos-03.jpg'
import Item04 from '../../assets/images/agos/agos-04.jpg'
import Item05 from '../../assets/images/agos/agos-05.jpg'
import Item06 from '../../assets/images/agos/agos-06.jpg'
import Item07 from '../../assets/images/agos/agos-07.jpg'
import Item08 from '../../assets/images/agos/agos-08.jpg'
import Item09 from '../../assets/images/agos/agos-09.jpg'
import Item10 from '../../assets/images/agos/agos-10.jpg'
import Item11 from '../../assets/images/agos/agos-11.jpg'
import Item12 from '../../assets/images/agos/agos-12.jpg'
import Item13 from '../../assets/images/agos/agos-13.jpg'
import Item14 from '../../assets/images/agos/agos-14.jpg'
import Item15 from '../../assets/images/agos/agos-15.jpg'
import Item16 from '../../assets/images/agos/agos-16.webp'
import Item17 from '../../assets/images/agos/agos-17.jpg'
import Item18 from '../../assets/images/agos/agos-18.jpg'
import Item19 from '../../assets/images/agos/agos-19.jpg'
import Item20 from '../../assets/images/agos/agos-20.jpg'
import Item21 from '../../assets/images/agos/agos-21.jpg'
import Item22 from '../../assets/images/agos/agos-22.jpg'


const galleryImages = [Item03, Item04, Item05, Item06, Item07, Item08, Item09, Item10, Item16, Item01, Item02, Item11, Item12, Item13, Item14, Item15, Item17, Item19, Item20, Item21, Item22, Item18]

const Agos = () => {
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
                    <h1 className='preloader-text'>AGOS FILM <br></br>SCREENING</h1>
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
                            <h6 className='hero_text-left'>AGOS Film Screening dot psd</h6>
                            <h6 className='hero_text-right'>Visual identity, branding, social media templates</h6>
                        </div>
                        <div className='design_hero-container' ref={heroContainerRef}>
                            <div className='design_hero-overflow' style={{ transform: `scale(${zoom})`, transition: 'transform 0.2s' }}>
                                <img className='design_hero-thumbnail' src={Item00} alt='agos film screening design thumbnail' style={{ filter: `contrast(0.1) blur(${blurValue}px)`, transition: 'filter 0.2s'}} />
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
                            <div id='tag-01' className='description-tag'><h3>visual identity</h3></div>
                            <div id='tag-02' className='description-tag'><h3>design assets</h3></div>
                            <div id='tag-03' className='description-tag'><h3>socmed templates</h3></div>
                            <div id='tag-04' className='description-tag'><h3>photoshop</h3></div>
                            <div id='tag-05' className='description-tag'><h3>event materials</h3></div>
                            <div id='tag-06' className='description-tag'><h3>canva</h3></div>
                            <div id='tag-07' className='description-tag'><h3>digital</h3></div>
                            <div id='tag-08' className='description-tag'><h3>pitch deck</h3></div>
                            <div id='tag-09' className='description-tag'><h3>branding</h3></div>
                            <div id='tag-10' className='description-tag'><h3>film screening</h3></div>
                        </div>
                        <div className='design_description-text'>
                            <h3 className='description-title'>About the Project</h3>
                            <p className='description-paragraph'>AGOS is a charity screening event featuring four short films aiming to tackle the environmental issues that threaten our society. The team behind it commissioned me to create the visual identity and pubmat templates for socmed and presentational use. I created this visual identity to reflect the environmental challenges we face through a digital lens, using a mix of pixelization and map-like graphics.. While the published material's copywriting were not done by me, I was in charge of creating the templates on both Adobe Photoshop and Canva for plug-and-play use by the client's designer. I also was tasked with creating a pitch deck template, which was used for presenting to interested sponsors and donors to support the short films. 
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

export default Agos