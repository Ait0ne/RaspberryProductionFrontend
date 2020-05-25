export const setChannel = channel => ({
    type: 'SET_CHANNEL',
    payload: channel
})


export const setMessages = messages => ({
    type: 'SET_MESSAGES',
    payload: messages
})

export const setNewMessages = (bool) => ({
    type: 'SET_NEW_MESSAGES',
    payload: bool
})

export const toggleChatHidden = () => ({
    type: 'TOGGLE_CHAT_HIDDEN'
})