import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import Footer from '../components/Footer/footer.component';
import CheckoutItem from '../components/CheckoutItem/checkout-item.component'
import Router from 'next/router'



const CheckoutPage = ({cartItems, total, currentUser}) => {

    return (   
    <Fragment>
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    
                </div>
                <div className='header-block'>
                    
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>  Price</span>
                </div>
                <div className='header-block'>
                    
                </div>
            </div>
            {
                cartItems.map(cartItem => 
                    <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
                    )
            }
            <div className='total'>
                <span>Total: ${total}</span>
            </div>
            <button className='payment-button' 
            onClick={() =>
                !currentUser ?
                    Router.push('/auth')
                :null
            }>
                Proceed To Payment
                </button>
        </div>
        <Footer/>
        </Fragment>
)}



const mapStateToProps = state => ({
    cartItems: state.cart.cartItems,
    currentUser: state.user.currentUser,
    total: state.cart.cartItems.reduce((sum, cartItem) => 
    sum + cartItem.price*cartItem.quantity, 0
    )
})


export default connect(mapStateToProps)(CheckoutPage);