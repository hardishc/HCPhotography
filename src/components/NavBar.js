import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes, FaCameraRetro } from 'react-icons/fa';
import './NavBar.css'

function NavBar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [showList, setShowList] = useState(false);

    return (
        <div className='header'>
            <div className='header-container'>
                <Link to='/'><FaCameraRetro size={30} style={{ color: '#ffffff'}} /><h1>Hardish</h1><h4>PHOTOGRAPER</h4></Link>
            </div>
            <div className='hamburger' onClick={handleClick}>
                {click ? (<FaTimes size={20} style={{ color: 'white' }} />) : (<FaBars size={20} style={{ color: 'white' }} />)}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/profile'>Profile</Link>
                </li>
                <li>
                    <div className="expandGallery">
                        <Link onClick={()=>setShowList(showList => !showList)}>Gallery</Link>
                    </div>
                    {showList && 
                    <ul className='sublist'>
                        <li>
                            <Link to='/gallery' onClick={handleClick}>All</Link>
                        </li>
                        <li>
                            <Link to='/abstract' onClick={handleClick}>Abstract</Link>
                        </li>
                        <li>
                            <Link to='/events' onClick={handleClick}>Events</Link>
                        </li>
                        <li>
                            <Link to='/film' onClick={handleClick}>Film</Link>
                        </li>
                        <li>
                            <Link to='/landscape' onClick={handleClick}>Landscape</Link>
                        </li>
                        <li>
                            <Link to='/portrait' onClick={handleClick}>Portrait</Link>
                        </li>
                    </ul>
                }
                </li>
                {/* <li>
                    <Link to='/contact'>Contact</Link>
                </li> */}
            </ul>
        </div>
    )
}

export default NavBar