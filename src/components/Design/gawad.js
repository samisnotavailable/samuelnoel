import { useRef, useState, useEffect } from 'react'
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import './index.scss'
import { Link } from 'react-router-dom'
import Item00 from '../../assets/images/gawad-benildyano/gawad-benildyano-00.gif'
import Item01 from '../../assets/images/gawad-benildyano/gawad-benildyano-01.jpg'
import Item02 from '../../assets/images/gawad-benildyano/gawad-benildyano-02.jpg'
import Item03 from '../../assets/images/gawad-benildyano/gawad-benildyano-03.jpg'
import Item04 from '../../assets/images/gawad-benildyano/gawad-benildyano-04.jpg'
import Item05 from '../../assets/images/gawad-benildyano/gawad-benildyano-05.jpg'
import Item06 from '../../assets/images/gawad-benildyano/gawad-benildyano-06.jpg'
import Item07 from '../../assets/images/gawad-benildyano/gawad-benildyano-07.jpg'
import Item08 from '../../assets/images/gawad-benildyano/gawad-benildyano-08.jpg'
import Item09 from '../../assets/images/gawad-benildyano/gawad-benildyano-09.jpg'
import Item10 from '../../assets/images/gawad-benildyano/gawad-benildyano-10.jpg'
import Item11 from '../../assets/images/gawad-benildyano/gawad-benildyano-11.jpg'
import Item12 from '../../assets/images/gawad-benildyano/gawad-benildyano-12.jpg'
import Item13 from '../../assets/images/gawad-benildyano/gawad-benildyano-13.jpg'
import Item14 from '../../assets/images/gawad-benildyano/gawad-benildyano-14.jpg'
import Item15 from '../../assets/images/gawad-benildyano/gawad-benildyano-15.jpg'
import Item16 from '../../assets/images/gawad-benildyano/gawad-benildyano-16.jpg'
import Item17 from '../../assets/images/gawad-benildyano/gawad-benildyano-17.jpg'


const galleryImages = [Item01, Item02, Item03, Item04, Item05, Item06, Item07, Item08, Item09, Item10, Item11, Item00, Item12, Item13, Item14, Item15, Item16, Item17]

const Gawad = () => {
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
                    <h1 className='preloader-text'>30th GAWAD <br></br>BENILDYANO</h1>
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
                            <h6 className='hero_text-left'>30th Gawad Benildyano dot psd</h6>
                            <h6 className='hero_text-right'>Visual identity, social media campaign, asset creation</h6>
                        </div>
                        <div className='design_hero-container' ref={heroContainerRef}>
                            <div className='design_hero-overflow' style={{ transform: `scale(${zoom})`, transition: 'transform 0.2s' }}>
                                <img className='design_hero-thumbnail' src={Item00} alt='gawad benildyano design thumbnail' style={{ filter: `contrast(0.1) blur(${blurValue}px)`, transition: 'filter 0.2s'}} />
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
                            <div id='tag-03' className='description-tag'><h3>social media campaign</h3></div>
                            <div id='tag-04' className='description-tag'><h3>photoshop</h3></div>
                            <div id='tag-05' className='description-tag'><h3>event materials</h3></div>
                            <div id='tag-06' className='description-tag'><h3>illustrations</h3></div>
                            <div id='tag-07' className='description-tag'><h3>digital</h3></div>
                            <div id='tag-08' className='description-tag'><h3>live event designs</h3></div>
                            <div id='tag-09' className='description-tag'><h3>illustrator</h3></div>
                            <div id='tag-10' className='description-tag'><h3>gawad benildyano</h3></div>
                        </div>
                        <div className='design_description-text'>
                            <h3 className='description-title'>About the Project</h3>
                            <p className='description-paragraph'>GAWAD BENILDYANO, formerly known as Gawad Sinagtala, had its 30th yearly event to recognize Benildean student excellence for its current academic year. I and a select other creatives where chosen to become part of the creative team for the event's overall visual identity. Following the theme "Service Beyond Boundaries", I pivoted away from the event's usual box and grid-like identity and instead created assets and posters using gradient-mesh circles and loose silhouettes. These background variants and assets then became a reference point for the rest of the event materials, used for several posters, countdowns, certificates, and on-stage motion graphics. 
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

export default Gawad