import React, { useEffect, useState } from 'react'
import { API } from "../API";
import Pictures from '../components/Pictures'

const LandscapePage = (props) => {
  const [all, setAll] = useState();

  const getApiData = async () => {
    const response = await fetch(`${API}landscape`, { mode: 'cors' })
      .then((response) => response.json())

    setAll(response)
  };

  useEffect(() => {
    document.title = props.title;
    getApiData();
  }, [])

  return (
    <>
      {all &&
        <Pictures props={all} name="Landscape" />
      }
    </>


  )
}

export default LandscapePage