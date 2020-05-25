// import { HYDRATE } from "next-redux-wrapper";

const INITIAL_STATE = {
    currentFilter: 'Bouquet'
} 


const filterReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        // case HYDRATE:
        //     return {...state,...action.payload}
        case 'SET_CURRENT_FILTER':
            return  {
                ...state,
                currentFilter: action.payload
            }
        default:
            return state;
    }
}

export default filterReducer;