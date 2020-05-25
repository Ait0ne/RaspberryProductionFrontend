// import { HYDRATE } from "next-redux-wrapper";


const INITIAL_STATE = {
    sorted: 'Newest'
}

const sortReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        // case HYDRATE:
        //     return {...state,...action.payload}
        case 'SET_CURRENT_SORT':
            return {
                ...state,
                sorted: action.payload
            }
        default:
            return state
    }
};

export default sortReducer;