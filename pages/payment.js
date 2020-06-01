import React, {useEffect, Fragment} from 'react'
import Router, {withRouter} from 'next/router';
import {connect} from 'react-redux';
import CheckoutItem from '../components/CheckoutItem/checkout-item.component'
import StripeButton from '../components/stripe-button/stripe-button.component'
import Footer from '../components/Footer/footer.component'
const PaymentPage =({currentUser, cartItems, total}) => {
    useEffect(()=>{
        if (!currentUser) {
            Router.back()
        }
    })
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
            <StripeButton currentUser={currentUser} price={total} cartItems={cartItems}/>
        </div>
        <Footer/>
        </Fragment>
    )
}



const mapStateToProps = state => ({
    cartItems: state.cart.cartItems,
    currentUser: state.user.currentUser,
    total: state.cart.cartItems.reduce((sum, cartItem) => 
    sum + cartItem.price*cartItem.quantity, 0
    )
})

export default withRouter(connect(mapStateToProps)(PaymentPage));