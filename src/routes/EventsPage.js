import React, { useEffect, useState } from 'react'
import { API } from "../API";
import Pictures from '../components/Pictures'

const EventsPage = (props) => {
  const [all, setAll] = useState();

  const getApiData = async () => {
    const response = await fetch(`${API}events`, { mode: 'cors' })
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
        <Pictures props={all} name="Events" />
      }
    </>
  )
}

export default EventsPage