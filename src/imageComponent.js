import React from 'react';
import logo from './logo.svg';
import './App.css';

const ImageComponent = (props) => {
    let renderImage = (src, i) => {
        return(
            <img src={src} key={i} alt=""/>
        )
    };
    let arrayOfImageSrc = ['https://avatars.mds.yandex.net/get-pdb/1209255/4d9c0839-aa64-4d8b-9be1-b1eaba159997/s1200',
        'https://avatars.mds.yandex.net/get-pdb/2492590/36e56fe6-32f9-4728-84f6-458ef9ef1770/s1200'];

    let images = arrayOfImageSrc.map((src, i) => renderImage(src, i))

    return (
        <div>
            <p>1123</p>
            {images[props.counter]}
        </div>


    );
}

export default ImageComponent;
