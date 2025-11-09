import { useRef, useState, useEffect } from 'react'
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import './index.scss'
import { Link } from 'react-router-dom'

const PageNotFound = () => {

    useEffect(() => {
        document.title = "Samuel Noel | Developer & Designer"
    }, []);

    return (
        <div className='error-page'>
            <div className='padding-global'>
                <div className='error-hero'>
                    <div className='error-globe'></div>
                    <Link to="/" className='error-text'>
                        <div className='error-text'>
                            <h2 className='error-heading'>!404 Error!</h2>
                            <p className='error-subheading'>Unfortunately, this is a wrong link.</p>
                            <p className='error-desc'>Leave this Rabbit Hole.</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PageNotFound;