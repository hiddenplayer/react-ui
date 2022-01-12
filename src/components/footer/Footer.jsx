import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'

export const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-top'>
                <h1 className='gradient-txt'>Do you want to step in to the future before others</h1>
            </div>
            <div className='footer-btn'>
                <p>Request Early Access</p>
            </div>

            <div className='footer-mid'>
                <div className='footer-mid-logo'>
                    <img src={logo} alt='logo'></img>
                    <p>An awesome website</p>
                </div>
                <div className='footer-mid-column'>
                    <h4>Links</h4>
                    <p>Overons</p>
                    <p>Social Media</p>
                    <p>Counters</p>
                    <p>Contact</p>
                </div>
                <div className='footer-mid-column'>
                    <h4>Company</h4>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Contact</p>
                </div>
                <div className='footer-mid-column'>
                    <h4>Get in touch</h4>
                    <p>Vietnam Dong Nai</p>
                    <p>0123456789</p>
                    <p>ngocthien.dnt@gmail.com</p>
                </div>
            </div>

            <div className='footer-bot'>
                <p>© 2021 DNT. All rights reserved.</p>
            </div>
        </div>
    )
}
