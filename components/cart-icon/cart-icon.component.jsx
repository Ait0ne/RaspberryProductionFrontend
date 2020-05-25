import React from 'react';
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../src/redux/cart/cart.actions';



const CartIcon = ({cartItems,toggleCartHidden}) => {
    return (
        <div className='cart-icon-container' onClick={() => toggleCartHidden()}>
            <img className='cart-icon' alt='cart-icon' src='./icon32.png'/>
            <span className='cart-icon-text'>{cartItems}</span>
        </div>
    )
}

const mapStateToProps = state => ({
    cartItems: state.cart.cartItems.reduce((sum, cartItem) => sum+cartItem.quantity, 0)
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);