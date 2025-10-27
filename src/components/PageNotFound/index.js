import { useRef, useState, useEffect } from 'react'
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import './index.scss'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
    return (
        <div className='error-page'>
            <div className='padding-global'>
                <div className='error-hero'>
                    <div className='error-globe'>
                        <h1 className='title-hover'>404 Error</h1>
                        <p>Unfortunately, this is a wrong link.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageNotFound;