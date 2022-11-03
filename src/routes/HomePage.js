import React from 'react'
import { useEffect } from 'react';
import HomeBackground from '../components/HomeBackground'

const Home = (props) => {

    useEffect(() => {
        document.title = props.title; 
    })
    
    return (
        <HomeBackground />
    )
}

export default Home