import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import persistReducer from './root-reducer';


const middlewares = [];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const startState={
    cart:{
    cartItems:[],
    cartHidden: true},
    filter:{currentFilter: 'Bouquet'},
    pagination:{activePage:1,
    perPage:10,
    pageRange:3},
    sort:{sorted: 'Newest'},
    user:{currentUser: null, token: null},
    chat: {channel: '',
    messages: [], newMessages:false, chatHidden:true},
    

}


// const makestore = (initialState, options) => createStore(persistReducer, initialState, applyMiddleware(...middlewares))

// export default makestore;

export function makestore(initialState = startState) {
    return createStore(
      persistReducer,
      initialState,
      applyMiddleware(...middlewares)
    )
  }