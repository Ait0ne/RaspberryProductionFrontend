import CustomButton from '../CustomButton/CustomButton.component';
import Slider from '../Slider/Slider.component';
import {connect} from 'react-redux';
import {addItem} from '../../src/redux/cart/cart.actions'
import {motion} from 'framer-motion'
import React,{useState, useRef} from 'react'

const easing = [.6, -.05, .01, .99]


const fadeInUp = {
    initial: {
        y:60,
        opacity: 0
    },
    animate: {
        y:0,
        opacity:1,
        transition: {
            duration: .3,
            ease: easing
        }
    }
};


const Card = ({item, addItem, index}) => {
    const {id,name,price,gallery} =  item



    const toggleAnimation = () => {
        let fly = document.getElementsByClassName('slider')[index]
        let flyImages = fly.getElementsByClassName('slide')
        
        for (let i=0; i<flyImages.length; i++) {
            if (flyImages[i].getBoundingClientRect().left === fly.getBoundingClientRect().left)
            { fly=flyImages[i].querySelector('img') }
        }
        


        let cart = document.querySelector('.cart-icon')

        let disLeft= fly.getBoundingClientRect().left;
        let disTop= fly.getBoundingClientRect().top;
        let cartleft= cart.getBoundingClientRect().left;
        let carttop= cart.getBoundingClientRect().top;
        let flyCopy = fly.cloneNode(true);

        flyCopy.style =`z-index: 1111; width:260px; border-radius:20px; opacity:0.8; position:fixed; top:${disTop}px;left:${disLeft}px;transition: left 2s, top 2s, width 2s, opacity 2s cubic-bezier(1, 1, 1, 1)`;

        var rechange=document.body.appendChild(flyCopy);
        setTimeout(function() {
            flyCopy.style.left=cartleft+'px';
            flyCopy.style.top=carttop+'px';
            flyCopy.style.width='40px';
            flyCopy.style.opacity='0';
        }, 200);
        setTimeout(function() {
            rechange.parentNode.removeChild(rechange);
        }, 2000);
    }
    
    return (
        <motion.div className='card'
        variants={fadeInUp}
        >            
            <motion.div

            >
                <Slider  images={gallery} id={id}/>
            </motion.div>            
                <div className='card-content'>
                    <div>               
                        {name}
                        
                    </div>
                    <div> {price} </div>
                </div>
            <div>
                <CustomButton onClick={()=> {toggleAnimation();addItem(item)}}>
                   <img className='icon' alt='cart-icon' src ='/icon.svg'/> <div>Add to Cart</div>
                </CustomButton>
            </div>
        </motion.div>
        
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})




export default connect(null, mapDispatchToProps)(Card);