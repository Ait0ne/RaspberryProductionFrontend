import React from 'react';
import {connect} from 'react-redux';
import {clearItemFromCart, addItem, removeItem} from '../../src/redux/cart/cart.actions';
import API_URL from '../../routes'


const CheckoutItem = ({cartItem, clearItem, addItem, removeItem}) => {
    
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={`${API_URL}${cartItem.gallery[0].formats.thumbnail.url}`} alt='item'/>
            </div>
            <span className='name'>{cartItem.name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={() => removeItem(cartItem)}>&#10094;</div>
                <span className='value'>{cartItem.quantity}</span>
                <div className='arrow' onClick={() => addItem(cartItem)}>&#10095;</div>
                </span>
            <span className='price'>${cartItem.price}</span>
            <div className='remove-button-cross' onClick={() => clearItem(cartItem)}>&#10005;</div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item)),
})


export default connect(null, mapDispatchToProps)(CheckoutItem);