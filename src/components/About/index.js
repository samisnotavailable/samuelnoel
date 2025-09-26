import { useEffect } from 'react'
import './index.scss'
import { animate, createTimeline, stagger, text, utils } from "https://esm.sh/animejs@4.1.1";
import { Link } from 'react-router-dom'
import IDfront from '../../assets/images/ID-front.png'
import IDback from '../../assets/images/ID-back.png'
import IDempty from '../../assets/images/ID-front-empty.png'
import IDpic from '../../assets/images/ID-pic.png'


const About = () => {
    useEffect(() => {
        const coords = [];
        const [ $split ] = utils.$('#split');
        const [ $reorder ] = utils.$('#reorder');
        const [ $debug ] = utils.$('#debug');

        if ( !$split || !$reorder || !$debug) return; // Prevent errors if elements not found

        $split.disabled = false;
        $reorder.disabled = true;

        let split;

        const splitAndAnimate = () => {
            $split.disabled = true;

            split = text.split('.about_text-p', {
                lines: true,
            });

            split.addEffect(split => {
                return createTimeline({
                    defaults: {
                        alternate: true,
                        loop: true,
                        loopDelay: 75,
                        duration: 1500,
                        ease: 'inOutQuad',
                    },
                })
                .add(split.lines, {
                    y: 0,
                    scale: 1,
                }, stagger(0, { start: 0 }))
                .add(split.words, {
                    scale: [1, 1],
                }, stagger(100, { use: 'data-line', start: 0 }))
                .init()
            });

            split.addEffect(split => {
                split.words.forEach(($el, i) => {
                    const c = coords[i];
                    if (c) utils.set($el, { x: c.x, y: c.y });
                    $el.addEventListener('pointerenter', () => {
                        $reorder.disabled = false;
                        animate($el, {
                            x: utils.random(-50, 50),
                            y: utils.random(-50, 50),
                        })
                    });
                });
                return () => {
                    split.words.forEach((w, i) => coords[i] = { x: utils.get(w, 'x'), y: utils.get(w, 'y') });
                }
            });
        }

        splitAndAnimate();


        $split.addEventListener('click', splitAndAnimate);

        $reorder.addEventListener('click', () => {
            animate(split.words, {
                x: 0, y: 0, ease: 'inOutExpo'
            });
            $reorder.disabled = true;
        });

        $debug.addEventListener('click', () => {
            split.debug = !split.debug;
            split.refresh();
            $debug.innerText = split.debug ? 'HIDE DEBUG' : 'SHOW DEBUG';
        });

        // Optional: cleanup listeners on unmount
        return () => {
            $split.removeEventListener('click', splitAndAnimate);
            $reorder.removeEventListener('click', splitAndAnimate);
            $debug.removeEventListener('click', splitAndAnimate);
        };
    }, []);

    return (
        <div className='about-page'>
            <div className='padding-global'>
                <div className='about-hero'>
                    <h3 className='about_hero-text'>ABOUT ME</h3>
                </div>
                <div className='about_ID-front'>
                    <img src={IDempty} className='about-image' alt="ID front" />
                    <div className='about-text'>
                        <div className='ID_columns'>
                            <div className='ID_column-01'>
                                <div className='column_01-img'>
                                    <img src={IDpic} className='about-ID' alt="ID pic" />
                                </div>
                                <div className='column_01-ID'>
                                    <div className='ID-info'>
                                        <p className='ID-label'>Contact Details</p>
                                        <div className='ID-textbox'>
                                            <a href='mailto:samuelnoel.work@gmail.com' className='ID-text'>samuelnoel.work@gmail.com</a>
                                        </div>
                                        <div className='ID-textbox'>
                                            <a href='https://www.linkedin.com/in/samuel-noel-a2b3721a4/' className='ID-text'>Samuel Noel on LinkedIn</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='ID_column-02'>
                                <div className='column_02-details'>
                                    <div className='ID-info'>
                                        <p className='ID-label'>Full Name</p>
                                        <div className='ID-textbox'>
                                            <h6 className='ID-text' style={{fontSize: '1.5rem'}}>SAMUEL NOEL</h6>
                                        </div>
                                    </div>
                                    <div className='ID-info' style={{marginTop: '.25rem'}}>
                                        <p className='ID-label'>Description</p>
                                        <div className='ID-textbox'>
                                            <h6 className='ID-text' style={{fontSize: '1.125rem'}}>creative developer & designer</h6>
                                        </div>
                                    </div>
                                    <div className='ID_info-row' style={{marginTop: '.25rem'}}>
                                        <div className='ID-info'>
                                            <p className='ID-label'>Software & Tools Experience</p>
                                            <div className='ID-textbox'>
                                                <p className='ID-label'>Programming Languages</p>
                                                <h6 className='ID-text'>JavaScript, PHP, Python, Java, SQL, Kotlin, Liquid</h6>
                                                <p className='ID-label' style={{marginTop: '.25rem'}}>Frameworks & Libraries</p>
                                                <h6 className='ID-text'>Bootstrap, Laravel, Django, React.js, Next.js, Three.js</h6>
                                                <p className='ID-label' style={{marginTop: '.25rem'}}>Web Builders</p>
                                                <h6 className='ID-text'>Webflow, WordPress, Oxygen, Shopify, Squarespace</h6>
                                                <p className='ID-label' style={{marginTop: '.25rem'}}>Design Softwares</p>
                                                <h6 className='ID-text'>Figma, Canva, Photoshop, Illustrator, Indesign</h6>
                                            </div>
                                        </div>
                                        <div className='ID-info half'>
                                            <p className='ID-label'>Skills</p>
                                            <div className='ID-textbox' style={{height: '100%'}}>
                                                <h6 className='ID-text'>Mobile & web development, HTML/CSS/SCSS, Git, version control, UX/UI design, branding, layout design, project management, task delegation</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='about_ID-back'>
                    <img src={IDback} className='about-image' alt="ID back" />
                    <div className='about-text'>
                        <p className='about_text-p'>
                            My name is Samuel Noel (he/him), and this website is meant as both portfolio and playground for my creative and development work. I specialize in creating for the digital space, whether in the form of frontend development or visual identities and branding. My practice revolves around a full-scope approach, making design kits and website manuals along with the executed projects, to ensure the clients' understanding and ease of use.
                        
                            I took my college years in the De La Salle College of Saint Benilde, under their Information Systems program. From 2022 to 2024, I worked as a Senior Graphic Designer for the Benildean Press Corps. With PINO Studios, I have been their Web Developer and Multimedia Specialist since 2024, working on website projects for e-commerce and professional clients. As of 2025, I am also serving as a Frontend Engineer for Developh, a research & arts institution for critical & creative technologies in the Philippines.
                            
                            I believe that in an era of overconsumption and doomscrolling, when everything looks the same, design has the chance to become authentic again—or at the very least, fun.
                        </p>
                        <fieldset>
                            <button id="split" className='none'>SPLIT UP</button>
                            <button id="reorder">REORGANIZE</button>
                            <button id="debug">DEBUG MODE</button>
                        </fieldset>
                    </div>
                </div>
                <div className='about-resume'>
                    <Link to='/contact' className='cta-btn'>
                        <span className='link_btn-text'>View My Resume</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default About