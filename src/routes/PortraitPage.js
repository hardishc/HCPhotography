import React,{useEffect, useState} from 'react'
import { API } from "../API";
import Pictures from '../components/Pictures'

const PortraitPage = (props) => {
  const [all, setAll] = useState();

  const getApiData = async () => {
    const response = await fetch(`${API}portrait`, {mode: 'cors'})
        .then((response) => response.json())

    setAll(response)
  };

  useEffect( () => {
    getApiData();
    document.title = props.title;
  },[])

  return (
      <>
        {all &&
            <Pictures props={all} name="Portrait" />
        }
      </>
  )
}

export default PortraitPage