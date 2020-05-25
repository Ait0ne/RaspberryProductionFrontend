import {connect} from 'react-redux';
import {addItem,removeItem,clearItemFromCart} from '../../src/redux/cart/cart.actions';
import API_URL from '../../routes';
import Link from 'next/link'


const CartItem = ({cartItem, addItem, removeItem, clearItemFromCart}) => {
    return (
        <div className='cart-item'>
            <div className='cart-item-image-container'>
                
                <img className='cart-item-image' alt='item-image' src={`${API_URL}${cartItem.gallery[0].formats.thumbnail.url}`}/>
            </div>
            <div className='cart-item-content'>
                <Link href='/itemgallery/[item]' as={`/itemgallery/${cartItem.id}`}><span className='cart-item-name'>{cartItem.name}</span></Link>
                <div className='cart-item-quantity'>
                    <div  className='cart-item-arrow' onClick={() => removeItem(cartItem)}>&#10094;</div>
                    <span className='cart-item-value'>{cartItem.quantity}</span>
                    <div className='cart-item-arrow' onClick={() => addItem(cartItem)}>&#10095;</div>
                    <span className='cart-item-price'>${cartItem.price}</span>
                    <div className='cart-item-remove-button' onClick={() => setTimeout(() => clearItemFromCart(cartItem),100)}>&#10005;</div>
                </div>
            </div>
        </div>
    )
}


const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item)),
    clearItemFromCart: item => dispatch(clearItemFromCart(item))
           
})

export default connect(null, mapDispatchToProps)(CartItem);

