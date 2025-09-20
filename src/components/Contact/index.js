import './index.scss'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

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
                <div className='contact-hero'>
                    <h1>Get in touch</h1>
                </div>
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type="text" name="name" placeholder='Name' required />
                            </li>
                            <li className='half'>
                                <input type="email" name="email" placeholder='Email' required />
                            </li>
                            <li>
                                <input placeholder="Subject" type="text" name="subject" required />
                            </li>
                            <li>
                                <textarea placeholder="Message" name="message" required></textarea>
                            </li>
                            <li>
                                <input type="submit" className='cta-btn' value="Send" /> 
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact