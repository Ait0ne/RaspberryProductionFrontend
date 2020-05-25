import React from 'react';
const Image = ({src}) => {
    let imgStyles={
        width:'100%',
        height:'100%',
        border:'none',
    }
    return <img src={src} className='slider-image' alt='slide-img' style={imgStyles}></img>;
}

export default Image