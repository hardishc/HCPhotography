import React from 'react'
import logo from '../assets/profile/profile.jpg'
import './ProfileBody.css'

function ProfileBody() {
    return (
        <div className='profile'>
            <div className='profile-container'>
                <div className='profile-image'>
                    <img src={logo} alt='profile' />
                </div>
                <div className='profile-info'>
                    <h1>THIS IS ME</h1>
                    <p>I've always been passionate about capturing moments. Regardless of the equipment I had, I was constantly drawn towards photography from a young age. I would always be found, camera in hand, shooting still life and creating dioramas. I let go of my hobby for a bit to pursue my degree in engineering but something about the art always drew me back. I found my niche in landscape, portrait and abstract photography, and found myself spending all my free time exploring the world through my lens. I ended up investing in a proper DSLR, an upgrade from the camera I had "borrowed" from my dad, and spent the last couple years trying to learn as much as I could about the technique behind the art. With the experience I have now gained over the years, I finally decided to share my photos with the world. It's not complete, and it's not perfect, but it's a work in progress.</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileBody
