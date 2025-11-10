import './index.scss'
import { useRef, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import { animate, createTimeline, stagger, text, utils } from 'animejs'
import { Link } from 'react-router-dom'
import IDback from '../../assets/images/ID-back.png'
import IDempty from '../../assets/images/ID-front-empty.png'
import IDpic from '../../assets/images/ID-pic.png'

const Connect = () => {
    // Contact form logic
    const refForm = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm('service_p3hbc8p', 'template_jnzbtsb', refForm.current, {
                publicKey: 'wqRK1byDaDyM9UEQx',
            })
            .then(
                () => {
                    alert('Message successfully sent. Please wait for a response within 7 working days.')
                    window.location.reload(false)
                },
                (error) => {
                    alert('Failed to send the message, please try again. Error: ' + error.text)
                },
            );
    };

    // ID section animation logic
    useEffect(() => {
        document.title = "Let's Connect | Samuel Noel"

        const coords = [];
        const [ $split ] = utils.$('#split');
        const [ $reorder ] = utils.$('#reorder');
        const [ $debug ] = utils.$('#debug');

        if (!$split || !$reorder || !$debug) return;

        $split.disabled = false;
        $reorder.disabled = true;

        let split;

        const splitAndAnimate = () => {
            $split.disabled = true;

            split = text.split('.connect_text-p', {
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
                        });
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

        return () => {
            $split.removeEventListener('click', splitAndAnimate);
            $reorder.removeEventListener('click', splitAndAnimate);
            $debug.removeEventListener('click', splitAndAnimate);
        };
    }, []);

    return (
        <div className='connect-page'>
            <Link to='/'>
                <div className='back_btn-container'>
                    <div className='back-btn black-btn'></div>
                    <p className='back_btn-txt'>Return</p>
                </div>
            </Link>
            <div className='padding-global'>
                {/* Contact Section                 <div className='about-resume'>
                    <Link to='/contact' className='cta-btn'>
                        <span className='link_btn-text'>View My Resume</span>
                    </Link>
                </div> */}
                <div className='connect-container'>
                    <div className='connect-hero'>
                        <h1 className='title-hover'>Get in touch.</h1>
                    </div>
                    <div className='connect-info'>
                        <div className='connect-form'>
                            <form ref={refForm} onSubmit={sendEmail}>
                                <ul>
                                    <div className='form-half'>
                                        <li className='half'>
                                            <input className='form-input' type="text" name="name" placeholder='Name' required />
                                        </li>
                                        <li className='half'>
                                            <input className='form-input' type="email" name="email" placeholder='Email' required />
                                        </li>
                                    </div>
                                    <li>
                                        <input className='form-input' type="text" name="company" placeholder="Company or Organization you represent" required />
                                    </li>
                                    <li>
                                        <input className='form-input' type="text" name="subject" placeholder="Subject of Inquiry" required />
                                    </li>
                                    <li>
                                        <input className='form-input' type="text" name="budget" placeholder="Input your budget (indicate PHP or USD)" required />
                                    </li>
                                    <li>
                                        <textarea className='form-input' name="message" placeholder="Describe your project or proposal" required></textarea>
                                    </li>
                                    <li>
                                        <input className='form-input' type="text" name="findMe" placeholder='How did you find out about me? (e.g. social media, referral...)' required />
                                    </li>
                                    <li>
                                        <input type="submit" className='cta-btn' value="Send Inquiry" /> 
                                    </li>
                                </ul>
                            </form>
                        </div>
                        <div className='connect_ID-container'>
                            <div className='connect_ID-front'>
                                <img src={IDempty} className='connect-image' alt="ID front" />
                                <div className='connect-text'>
                                    <div className='ID_columns'>
                                        <div className='ID_column-01'>
                                            <div className='column_01-img'>
                                                <img src={IDpic} className='connect-ID' alt="ID pic" />
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
                            <div className='connect_ID-back'>
                                <img src={IDback} className='connect-image' alt="ID back" />
                                <div className='connect-text'>
                                    <p className='connect_text-p'>
                                        My name is Samuel Noel (he/him), and this website is both portfolio and playground for creative and development work. I specialize in frontend development and visual identities. My practice revolves around a full-scope approach, making design kits and website manuals along with the executed projects, to ensure the clients' understanding and ease of application.
                                    
                                        I took my college in the De La Salle College of Saint Benilde, under the Information Systems program. From 2022 to 2024, I worked as a Senior Graphic Designer for the Benildean Press Corps. With PINO Studios, I have been both Web Developer and Multimedia Specialist since 2024, working on websites for e-commerce and professional clients. As of 2025, I am also serving as a Frontend Engineer for Developh, a research & arts institution for critical & creative technologies in the Philippines.
                                        
                                        I believe that in an era of overconsumption and doomscrolling, when everything looks the same, the internet should become authentic again—or at the very least, fun. And I'll contribute to that.
                                    </p>
                                    <fieldset>
                                        <button id="split" className='none'>SPLIT UP</button>
                                        <button id="reorder">REORGANIZE</button>
                                        <button id="debug">DEBUG MODE</button>
                                    </fieldset>
                                </div>
                            </div>
                            <div className='connect_ID-mobile'>
                                <img src={IDback} className='connect-image' alt="ID back" />
                                <div className='connect_text-mobile'>
                                    <p className='text-mobile'>
                                        My name is Samuel Noel (he/him), and this website is both portfolio and playground for creative and development work. I specialize in frontend development and visual identities. My practice revolves around a full-scope approach, making design kits and website manuals along with the executed projects, to ensure the clients' understanding and ease of application.
                                    
                                        I took my college in the De La Salle College of Saint Benilde, under the Information Systems program. From 2022 to 2024, I worked as a Senior Graphic Designer for the Benildean Press Corps. With PINO Studios, I have been both Web Developer and Multimedia Specialist since 2024, working on websites for e-commerce and professional clients. As of 2025, I am also serving as a Frontend Engineer for Developh, a research & arts institution for critical & creative technologies in the Philippines.
                                        
                                        I believe that in an era of overconsumption and doomscrolling, when everything looks the same, the internet should become authentic again—or at the very least, fun. And I'll contribute to that.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Connect