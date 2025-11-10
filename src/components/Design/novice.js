import { useRef, useState, useEffect } from 'react'
import Lightbox from 'yet-another-react-lightbox';
import "yet-another-react-lightbox/styles.css";
import './index.scss'
import { Link } from 'react-router-dom'
import NoviceTB from '../../assets/images/novice/novice.png'
import Item00 from '../../assets/images/novice/novice-00.gif'
import Item01 from '../../assets/images/novice/novice-01.jpg'
import Item02 from '../../assets/images/novice/novice-02.jpg'
import Item03 from '../../assets/images/novice/novice-03.jpg'
import Item04 from '../../assets/images/novice/novice-04.jpg'
import Item05 from '../../assets/images/novice/novice-05.jpg'
import Item06 from '../../assets/images/novice/novice-06.jpg'
import Item07 from '../../assets/images/novice/novice-07.jpg'
import Item08 from '../../assets/images/novice/novice-08.png'
import Item09 from '../../assets/images/novice/novice-09.jpg'
import Item10 from '../../assets/images/novice/novice-10.jpg'
import Item11 from '../../assets/images/novice/novice-11.jpg'
import Item12 from '../../assets/images/novice/novice-12.jpg'
import Item13 from '../../assets/images/novice/novice-13.jpg'


const galleryImages = [Item01, Item02, Item03, Item04, Item05, Item06, Item07, Item00, Item08, Item09, Item10, Item11, Item12, Item13]

const Novice = () => {

    useEffect(() => {
        document.title = "Novice Magazine | Samuel Noel"
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
                    <h1 className='preloader-text'>NOVICE MAGAZINE</h1>
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
                            <h6 className='hero_text-left'>Novice Magazine issue 04 dot psd</h6>
                            <h6 className='hero_text-right'>Magazine cover, mixed-media, art direction</h6>
                        </div>
                        <div className='design_hero-container' ref={heroContainerRef}>
                            <div className='design_hero-overflow' style={{ transform: `scale(${zoom})`, transition: 'transform 0.2s' }}>
                                <img className='design_hero-thumbnail' src={Item00} alt='novice magazine design thumbnail' style={{ filter: `contrast(0.1) blur(${blurValue}px)`, transition: 'filter 0.2s'}} />
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
                            <div id='tag-01' className='description-tag'><h3>magazine cover</h3></div>
                            <div id='tag-02' className='description-tag'><h3>mixed media</h3></div>
                            <div id='tag-03' className='description-tag'><h3>art direction</h3></div>
                            <div id='tag-04' className='description-tag'><h3>collage</h3></div>
                            <div id='tag-05' className='description-tag'><h3>surreal artwork</h3></div>
                            <div id='tag-06' className='description-tag'><h3>illustration</h3></div>
                            <div id='tag-07' className='description-tag'><h3>digital</h3></div>
                            <div id='tag-08' className='description-tag'><h3>publication</h3></div>
                            <div id='tag-09' className='description-tag'><h3>photoshop</h3></div>
                            <div id='tag-10' className='description-tag'><h3>novice magazine</h3></div>
                        </div>
                        <div className='design_description-text'>
                            <h3 className='description-title'>About the Project</h3>
                            <p className='description-paragraph'>NOVICE Magazine gave me the opportunity to design and illustrate the cover for their fourth issue, centered on the theme of migration. I had artwork, titled "The Impossible Dream",  was digitally made using collage and paint. In the artwork, two figures standing together, with nowhere to go yet having a burden to leave. My cover artwork on Novice Magazine's Issue 04 was used for mockups, digital versions, as well as printed issues. Assets were also converted into a holographic card and a profile picture frame for promotional use. This issue was published in 2022 and can still be bought in select bookstores in the Philippines.</p>
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

export default Novice