import {addItemToCart, removeItemFromCart,addMultipleItemsToCart} from './cart.utils'
const INITIAL_STATE = {
    cartItems:[],
    cartHidden: true
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'TOGGLE_CART_HIDDEN':
            return {
                ...state,
                cartHidden: !state.cartHidden
            }
        case 'ADD_ITEM':
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case 'ADD_MULTIPLE_ITEMS':
            return {
                ...state,
                cartItems: addMultipleItemsToCart(state.cartItems, action.payload)
            }
        case 'CLEAR_ITEM_FROM_CART':
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem =>
                    cartItem.id !== action.payload.id)
            }
        case 'REMOVE_ITEM':
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }


        default:
            return state
    }
}

export default cartReducer;