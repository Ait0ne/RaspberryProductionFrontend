import React, {useState} from 'react';
import Image from '../Image/image.component';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';
import API_URL from '../../routes.js';
import Link from 'next/link'


const Slider = ({images, id}) => {
    let sliderArr = images.map(image => {
        return <Image alt={image.name} src={`${API_URL}${image.formats.small.url}`}/>
    })

    const [x, setX] = useState(0)

    const goLeft=() => {
        (x===0) ? setX(-100*(sliderArr.length-1)): setX(x + 100);
    }

    const goRight=() => {
        (x===-100*(sliderArr.length-1)) ? setX(0): setX(x - 100);
    }


    return(
        <div className='slider'>
            {
                sliderArr.map((item,index)=>{
                    return(
                        <Link key={index} href='itemgallery/[item]' as={`itemgallery/${id}`}>
                            <div key={index} className='slide' style={{transform: `translateX(${x}%)`}}>
                                {item}
                            </div>
                        </Link>
                    )
                })
            }
            <button id = 'goLeft' className='slider-button' onClick={goLeft}><FontAwesomeIcon className='slider-arrow' icon={faChevronLeft} size='2x'/></button>
            <button id ='goRight' className='slider-button' onClick={goRight}><FontAwesomeIcon className='slider-arrow' icon = {faChevronRight} size='2x'/></button>
        </div>
    )
}

export default Slider;