import React, {useEffect, useState, Fragment} from 'react'
import Router, {withRouter} from 'next/router';
import {connect} from 'react-redux';
import CartItem from '../components/cart-item/cart-item.component'
import StripeButton from '../components/stripe-button/stripe-button.component'
import Footer from '../components/Footer/footer.component'
import API_URL from '../routes'
import {clearCart} from '../src/redux/cart/cart.actions'
import ScrollBar from 'react-scrollbars-custom'
import FormInput from '../components/FormInput/formInput.component'

const PaymentPage =({currentUser, cartItems, total, clearCart}) => {
    const [payMethod, setPayMethod] = useState('')
    const [deliveryMethod, setDeliveryMethod] = useState('')
    const [deliveryAddress, setDeliveryAddress] = useState({city:'', address:''})
    const [address, setAddress] = useState('')
    const [hiddenAddressForm, setHiddenAddressForm] = useState(true)
    // useEffect(()=>{
    //     if (!currentUser) {
    //         Router.back()
    //     }
    // })

    const onMethodFormChange = (event) => {
        setPayMethod(event.target.value)
    }
    const onDeliveryFormChange = (event) => {
        setDeliveryMethod(event.target.value)
    }
    const onDeliveryAddressChange = (event) => {
        const {name, value} = event.target
        setDeliveryAddress({...deliveryAddress,[name]:value})
    }
    const onAddressSubmit = (event) => {
        event.preventDefault()
        setAddress({city:deliveryAddress.city,address:deliveryAddress.address})
        setHiddenAddressForm(true)
    }
    const onCreateOrder = () => {
        const order = `${cartItems.map(cartItem=>`${cartItem.name}: ${cartItem.quantity}\n`)}
         \nTotal:${total}\n Delivery Method: ${deliveryMethod} \n ${deliveryMethod==='delivery'?`Delivery Address: ${address.city}, ${address.address}`:''}`
        fetch(`${API_URL}}/orders`,{
            method: 'post',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                Status: "Pending",
                name: currentUser.email,
                createdAt: new Date(),
                OrderDetails: order,
            })            
        }).then(response => {
        console.log(response)
        if(response.ok){
            clearCart()
            alert('Order successfully created')   
        }
            else {
                alert('There was an issue creating order, please contact Customer Support')
            }
        })
    }


    return (
        
        <Fragment>
        <div className='payment-page-container'>
            <div className='payment-page-main-content'>

                <div className='payment-method-container'>  
                    <p className='payment-method-title'>Choose payment method</p>
                    <form className='payment-method-form' onChange={onMethodFormChange}>
                        <div>
                        <input type='radio' value='cash' name='payment-method' className='payment-method-radio' id = 'payment-method-cash'/>
                        <label for='payment-method-cash'>Pay with Cash</label>
                        </div>
                        <div>
                        <input type='radio' value='card' name='payment-method' className='payment-method-radio' id = 'payment-method-card'/>
                        <label for='payment-method-card'>Pay online using card</label>
                        </div>
                    </form>
                </div>
                <div className='delivery-method-container'>  
                    <p className='delivery-method-title'>Choose delivery method</p>
                    <form className='delivery-method-form' onChange={onDeliveryFormChange}>
                        <div>
                        <input type='radio' value='delivery' name='delivery-method' className='delivery-method-radio' id = 'delivery-method-delivery'/>
                        <label for='delivery-method-delivery'>Delivery</label>
                        </div>
                        <div>
                        <input type='radio' value='pickup' name='delivery-method' className='delivery-method-radio' id = 'delivery-method-pickup'/>
                        <label for='delivery-method-pickup'>Pickup</label>
                        </div>
                    </form>
                    {
                    deliveryMethod!=='delivery'?
                    null:
                    <div>
                    {address===''?
                    <button type='button' 
                    onClick={()=>setHiddenAddressForm(false)} 
                    className='delivery-address-add-button'>
                        Add Delivery Address
                    </button>
                    :
                    <div className='delivery-address-info'>
                        <p className='delivery-address-title'>Delivery Address</p>
                        <div style={{display:'flex', flexDirection:'column'}}>
                        <span>City: {address.city}</span>
                        <span style={{marginTop:'5px'}}>Address: {address.address}</span>
                        </div>
                        <button type='button' onClick={()=>setHiddenAddressForm(false)} className='delivery-address-add-button'>Change</button>
                    </div>}

                    </div>
                }
                </div>
                
                { hiddenAddressForm?null
                        :
                        <div className='delivery-address-form-container'>
                            <form className='delivery-address-form' onSubmit={onAddressSubmit}>
                                <FormInput 
                                label='City' 
                                type='text' 
                                value={deliveryAddress.city} 
                                name='city'  
                                handleChange={onDeliveryAddressChange} 
                                required
                                />
                                <FormInput 
                                label='Address'
                                type='text'
                                value={deliveryAddress.address}
                                name='address'
                                handleChange={onDeliveryAddressChange} 
                                required
                                />                                
                                <button type='submit' className='delivery-address-add-button'>Save Address</button>
                            </form>
                        </div>
                        }
                
                {
                    payMethod==='card'&&deliveryMethod==='pickup'&&total>0 || payMethod==='card'&&deliveryMethod==='delivery'&&address!==''&&total>0?
                    <StripeButton currentUser={currentUser} price={total} cartItems={cartItems} deliveryMethod={deliveryMethod} deliveryAddress={address}/>
                    :null
                }
                {
                    payMethod==='cash'&&deliveryMethod==='pickup'&&total>0 || payMethod==='cash'&&deliveryMethod==='delivery'&&address!==''&&total>0?
                    <button type='button' onClick={onCreateOrder} className='create-order-button'>Create order</button>
                    :null
                }
            </div>
            <div className='payment-page-cart-container'>
                <p className='payment-page-cart-title'>Your cart</p>
                <ScrollBar  style={{height:'280px', width: '100%'}}>
                {
                    cartItems.length ?
                    cartItems.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem}/>)
                    : 
                    <span className='empty-message'>Your cart is empty</span>
                
                }
                </ScrollBar>
                <div className='payment-page-cart-total'>
                    <span>Total: ${total}</span>
                </div>
            </div>
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

const mapDispatchToProps = dispatch => ({
    clearCart: () => dispatch(clearCart())
})



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PaymentPage));