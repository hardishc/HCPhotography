import React from 'react';
import { useEffect } from 'react';
import ProfileBody from '../components/ProfileBody';

const Profile = (props) => 
{
  useEffect(() => {   
    document.title = props.title; 
  })
  return (
      <ProfileBody/>
  )
}

export default Profile