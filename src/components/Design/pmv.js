import { useRef, useState, useEffect } from 'react'
import Lightbox from 'yet-another-react-lightbox';
import "yet-another-react-lightbox/styles.css";
import './index.scss'
import { Link } from 'react-router-dom'
import PMVTB from '../../assets/images/pmv/pmv.png'
import Item00 from '../../assets/images/pmv/pmv-00.gif'
import Item01 from '../../assets/images/pmv/pmv-01.jpg'
import Item02 from '../../assets/images/pmv/pmv-02.jpg'
import Item03 from '../../assets/images/pmv/pmv-03.jpg'
import Item04 from '../../assets/images/pmv/pmv-04.jpg'
import Item05 from '../../assets/images/pmv/pmv-05.jpg'
import Item06 from '../../assets/images/pmv/pmv-06.jpg'
import Item07 from '../../assets/images/pmv/pmv-07.jpg'
import Item08 from '../../assets/images/pmv/pmv-08.webp'
import Item09 from '../../assets/images/pmv/pmv-09.png'
import Item10 from '../../assets/images/pmv/pmv-10.png'
import Item11 from '../../assets/images/pmv/pmv-11.webp'
import Item12 from '../../assets/images/pmv/pmv-12.webp'
import Item13 from '../../assets/images/pmv/pmv-13.png'
import Item14 from '../../assets/images/pmv/pmv-14.webp'
import Item15 from '../../assets/images/pmv/pmv-15.webp'
import Item16 from '../../assets/images/pmv/pmv-16.png'
import Item17 from '../../assets/images/pmv/pmv-17.png'


const galleryImages = [Item01, Item02, Item03, Item04, Item05, Item06, Item07, Item08, Item09, Item10, Item11, Item12, Item13, Item14, Item15, Item16, Item17]

const PMV = () => {

    useEffect(() => {
        document.title = "People May Vary | Samuel Noel"
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
                    <h1 className='preloader-text'> PEOPLE MAY VARY</h1>
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
                            <h6 className='hero_text-left'>PEOPLE MAY VARY dot psd</h6>
                            <h6 className='hero_text-right'>Online branding, visual identity, logo design</h6>
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
                            <div id='tag-01' className='description-tag'><h3>platform</h3></div>
                            <div id='tag-02' className='description-tag'><h3>online branding</h3></div>
                            <div id='tag-03' className='description-tag'><h3>creatives</h3></div>
                            <div id='tag-04' className='description-tag'><h3>visual identity</h3></div>
                            <div id='tag-05' className='description-tag'><h3>photoshop</h3></div>
                            <div id='tag-06' className='description-tag'><h3>logo design</h3></div>
                            <div id='tag-07' className='description-tag'><h3>artists</h3></div>
                            <div id='tag-08' className='description-tag'><h3>design community</h3></div>
                            <div id='tag-09' className='description-tag'><h3>production</h3></div>
                            <div id='tag-10' className='description-tag'><h3>people may vary</h3></div>
                        </div>
                        <div className='design_description-text'>
                            <h3 className='description-title'>About the Project</h3>
                            <p className='description-paragraph'>PEOPLE MAY VARY is an online creative space I initiated with a group of select students, to showcase and celebrate diverse stories and works of creative fiction and nonfiction. We hosted, produced, and guided several projects from vlogs, essays, stories, and a newsletter. The logo was a joint effort with designer Kat Guillermo while I worked on the overall branding and visual identity. The logo started from a strict, boxy structure to create the P-M-V letters, but was refined and pushed out of the borderlines to give it a distinctive look. The result was an "out of the box" logo, with distinctive variants to signify holidays, categories, and team distinctions. In order to highlight the people who vary, we incorporated the diverse styles and tastes of our artists, making sure each online post stood out on its own, without disconnecting entirely from PMV's branding. PMV ran until near the end of the pandemic, as a group of artists that empowered other artists.
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

export default PMV