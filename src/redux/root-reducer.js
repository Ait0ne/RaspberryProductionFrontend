import  { combineReducers } from 'redux';
import paginationReducer from './pagination/pagination.reducer';
import sortReducer from './sort/sort.reducer';
import filterReducer from './filter/filter.reducer';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import chatReducer from './chat/chat.reducers';



// export default  combineReducers({
//     user:userReducer,
//     cart:cartReducer,
//     filter: filterReducer,
//     pagination: paginationReducer,
//     sort: sortReducer
// })

const rootReducer = combineReducers({
        user:userReducer,
        cart:cartReducer,
        filter: filterReducer,
        pagination: paginationReducer,
        sort: sortReducer,
        chat: chatReducer
    })

    const persistConfig = {
        key: 'primary',
        storage,
        whitelist: ['filter','cart','chat']
    }

    export default persistReducer(persistConfig, rootReducer);