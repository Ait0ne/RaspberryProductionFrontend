import React, {useEffect, useRef, useState} from 'react';
import Router from 'next/router';
import {connect} from 'react-redux';
import {toggleCartHidden}  from '../../src/redux/cart/cart.actions';
import ScrollBar from 'react-scrollbars-custom';
import CartItem from '../cart-item/cart-item.component';
import ClickOutside from '../ClickOutside/ClickOutside.component'
import {motion} from 'framer-motion';

const CartDropdown = ({cartItems,toggleCartHidden, total}) => {
    const [deviceWidth, setDeviceWidth] = useState(0)
    const [deviceHeight, setDeviceHeight] = useState(0)

    useEffect(()=>{
        updateDeviceDimensions()
        window.addEventListener('resize', updateDeviceDimensions)
        return window.removeEventListener('resize', updateDeviceDimensions)
    })

    const updateDeviceDimensions = () => {
        setDeviceWidth(window.innerWidth);
        setDeviceHeight(window.innerHeight);
    }
    return (

        <motion.div initial='initial' animate='animate'>
            {console.log(deviceWidth, deviceHeight)}
        <ClickOutside onClick={()=> toggleCartHidden()}>
            <motion.div className='cart-dropdown'
                initial={{height:'0px'}}
                animate={{height:'340px', transition:{duration: 0.3}}}
                
            >   

                <ScrollBar  style={{height:'280px', width: `100%`}}>
                    <div className='cart-items' >
                        {   cartItems.length ?
                            cartItems.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem}/>)
                            : 
                            <span className='empty-message'>Your cart is empty</span>
                        }
                    </div>
                </ScrollBar>
                    <span className='cart-dropdown-total'>Total: ${total}</span>
                <button 
                className='checkout-button' 
                type='button'
                onClick={() => {
                    Router.push('/checkout')
                    toggleCartHidden()
                }}
                >
                    GO TO CHECKOUT
                </button> 

            </motion.div>
        </ClickOutside>
        </motion.div>
    )
}


const mapStateToProps = state => ({
    cartItems: state.cart.cartItems,
    total: state.cart.cartItems.reduce((sum, cartItem) => 
    sum + cartItem.price*cartItem.quantity, 0
    )
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})


export default connect(mapStateToProps,mapDispatchToProps)(CartDropdown);