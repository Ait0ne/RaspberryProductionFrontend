const INITIAL_STATE = {
    channel: '',
    messages: [],
    newMessages: false,
    chatHidden:true,
}

const chatReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case 'SET_MESSAGES':
            return {
                ...state,
                messages: action.payload
            }
        case 'SET_CHANNEL':
            return {
                ...state,
                channel: action.payload
            }
        case 'SET_NEW_MESSAGES':
            return {
                ...state,
                newMessages: action.payload
            }
        case 'TOGGLE_CHAT_HIDDEN':
            return {
                ...state,
                chatHidden: !state.chatHidden
            }
        default:
            return state
    }
}

export default chatReducer;