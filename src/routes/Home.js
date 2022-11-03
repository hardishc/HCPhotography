import React from 'react'
import { Footer } from '../components/Footer'
import { Outlet } from 'react-router-dom';
import NavBar from "../components/NavBar";
import { useEffect, useState } from 'react';
import LoadingIcon from '../components/LoadingIcon';
import './Home.css'

const Home = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }, [])


  return (
    <>
      <div className='header'>
        <NavBar />
      </div>
      <div className='content'>
        {loading ?
          <div className='loadingDiv'>
            <LoadingIcon />
          </div>
          :
          <Outlet />
        }
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}

export default Home