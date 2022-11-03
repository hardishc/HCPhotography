import React from 'react'
import { useEffect, useState } from 'react';
import LoadingIcon from './LoadingIcon';
import Modal from '@mui/material/Modal';
import './Pictures.css';

export default function Pictures({ props, name }) {
    const [loading, setLoading] = useState(true);
    const [success, setSuccess] = useState(false);
    const [imageClicked, setImageClicked] = useState(false);
    const [selectedImage, setSelectedImage] = useState(-1);

    const imageClick = (props, alt) => {
        const image = props[alt];
        setSelectedImage(alt)
        setImageClicked(true)
    }

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000);
        if (props.status != "404") {
            setSuccess(true);
        }
    }, [])

    return (
        <>
            {loading ?
                <div className='loadingDiv'>
                    <LoadingIcon />
                </div>
                :
                <div className='pictures'>
                    <div className='pictures-container'>
                        {success ?
                            <>
                                <h2>Portfolio</h2>
                                <h1>{name}</h1>
                                <div className='pictures-image'>
                                    {props.map((image, alt) => (
                                        <img onClick={() => imageClick(props, alt)} src={`https://hcphotographybackend.herokuapp.com/${image}`} alt={alt} key={image} />
                                    ))}
                                    {setImageClicked &&
                                        <Modal
                                            open={imageClicked}
                                            className='imageOpen'
                                            onClick={() => (setImageClicked(false))}>
                                            <img
                                                src={`https://hcphotographybackend.herokuapp.com/${props[selectedImage]}`} />
                                        </Modal>
                                    }
                                </div>
                            </>
                            : <>
                                <h2>Something Went Wrong<br /> Please try again</h2>
                            </>}
                    </div>
                </div>
            }
        </>
    );
}