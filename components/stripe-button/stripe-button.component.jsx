import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import API_URL from '../../routes';
import {connect} from 'react-redux';
import {clearCart} from '../../src/redux/cart/cart.actions'

const StripeCheckoutButton = ( { price, currentUser, cartItems, clearCart, deliveryMethod, deliveryAddress } ) => {
    const order = `${cartItems.map(cartItem=>`${cartItem.name}: ${cartItem.quantity}\n`)} \nTotal:${price} 
    \nDelivery Method: ${deliveryMethod} \n${deliveryMethod==='delivery'?`Delivery Address: ${deliveryAddress.city}, ${deliveryAddress.address}`:''}`
    const onToken = token => {
        fetch(`${API_URL}/orders`,{
                method: 'post',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify({
                    amount: priceForStripe,
                    Status: "Pending",
                    name: currentUser.email,
                    createdAt: new Date(),
                    OrderDetails: order,
                    token
                })                
        }).then(response => {
            console.log(response)
            if(response.ok){
                clearCart()
                alert('Payment successful')                
            }
                else {
                    alert('There was an issue with your payment.')
                }            
        }).catch(error => {
            console.log('Payment error: ', error)
            alert('There was an issue with your payment.')
        })
    }

    const priceForStripe = price * 100
    	
    const publishablekey = 'pk_test_cjTqGCwCgH7H6f2eJRaVcr5R00XHFNsn39'
    return (
        <div style={{display: 'flex',alignSelf:'flex-end', marginTop:'20px'}}>
            <StripeCheckout 
                label = 'Pay Now'
                name = 'TestShop'
                billingAddress
                shippingAddress
                description = {`Your total is ${price}`}
                amount = {priceForStripe}
                panelLabel='Pay Now'
                token={onToken}
                stripeKey={publishablekey}
            />
        </div>
    )
}


const mapDispatchToProps = dispatch=> ({
    clearCart: () => dispatch(clearCart())
})

export default connect(null, mapDispatchToProps)(StripeCheckoutButton)