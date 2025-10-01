import './index.scss'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import NISJTCWinM5 from '../../assets/fonts/NIS-JTC-Win-M5.ttf'

const Contact = () => {
    const refForm = useRef()

    const sendEmail = (e) => {
    e.preventDefault();
        emailjs
        .sendForm('service_p3hbc8p', 'template_jnzbtsb', refForm.current, {
            publicKey: 'wqRK1byDaDyM9UEQx',
        })
        .then(
            () => {
                alert('Message successfully sent!')
                window.location.reload(false)
            },
            (error) => {
                alert('Failed to send the message, please try again. Error: ' + error.text)
            },
        );
    };

    return (
        <div className='contact-page'>
            <div className='padding-global'>
                <div className='contact-container'>
                    <div className='contact-hero'>
                        <h1 className='title-hover'>Get in touch</h1>
                    </div>
                    <div className='contact-info'>
                        <div className='contact-form'>
                            <form ref={refForm} onSubmit={sendEmail}>
                                <ul>
                                    <div>
                                        <li className='half'>
                                            <input type="text" name="name" placeholder='Name' required />
                                        </li>
                                        <li className='half'>
                                            <input type="email" name="email" placeholder='Email' required />
                                        </li>
                                    </div>
                                    <li>
                                        <input type="text" name="subject" placeholder="Subject of Inquiry" required />
                                    </li>
                                    <li>
                                        <input type="text" name="company" placeholder="Company/Organization you represent" required />
                                    </li>
                                    <li>
                                        <input type="text" name="budget" placeholder="Input your budget" required />
                                    </li>
                                    <li>
                                        <textarea name="message" placeholder="Describe your project" required></textarea>
                                    </li>
                                    <li>
                                        <input type="text" name="findMe" placeholder='How did you find out about me? (e.g. social media, referral...)' required />
                                    </li>
                                    <li>
                                        <input type="submit" className='cta-btn' value="Send" /> 
                                    </li>
                                </ul>
                            </form>
                        </div>
                        <div className='contact-details'>
                            <p>samuelnoel67@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact