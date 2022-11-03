import React from 'react'
import './Footer.css'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='social'>
                    <a href="https://hardishc.github.io/Portfolio/" target="_blank"><FaGithub size={30} style={{ color: '#ffffff', marginRight: '1rem' }} /></a>
                    <a href="https://www.linkedin.com/in/hardish-chander/" target="_blank"><FaLinkedin size={30} style={{ color: '#ffffff', marginRight: '1rem' }} /></a>
                    <a href="https://www.instagram.com/hardish_c/" target="_blank"><FaInstagram size={30} style={{ color: '#ffffff', marginRight: '1rem' }} /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer