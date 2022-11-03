import React from 'react'
import backVideo from '../assets/background/BackHome.mp4'
import './HomeBackground.css'


const HomeBackground = () =>{
    return (
        <div className='hero'>
            <video autoPlay loop muted id='homebackground'>
                <source src={backVideo} type='video/mp4' />
            </video>
        </div>
    )
}

export default HomeBackground