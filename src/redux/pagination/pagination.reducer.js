// import { HYDRATE } from "next-redux-wrapper";


const INITIAL_STATE = {
    activePage:1,
    perPage:10,
    pageRange:3
}

const paginationReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        // case HYDRATE:
        //     return {...state,...action.payload}
        case "SET_CURRENT_PAGE":
            return {
                ...state,
                activePage: action.payload
            }
        default:
            return state
    }
};


export default paginationReducer;