import React, { useEffect, useState } from 'react'
import { API } from "../API";
import Pictures from '../components/Pictures'

const Gallery = (props) => {
  const [all, setAll] = useState();

  const getApiData = async () => {
    const response = await fetch(`${API}all`, { mode: 'cors' })
      .then((response) => response.json())

    setAll(response)
  };

  useEffect(() => {
    document.title = props.title;
    getApiData();
  }, [props])

  return (
    <>
      {all &&
        <Pictures props={all} name="Photo Gallery" />
      }
    </>
  )
}

export default Gallery