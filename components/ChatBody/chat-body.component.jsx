import React, {Fragment, useState} from 'react';
import Chat from '../Chat/chat.component';
import ChatButton from '../Chatbutton/chat-button.component';
import { connect } from 'react-redux';



const ChatBody = ({chatHidden}) => {


    return (
        <Fragment>
            { !chatHidden ?<Chat /> : null}
            <ChatButton/>
        </Fragment>
    )
}
const mapStateToProps = state => ({
    chatHidden: state.chat.chatHidden
})

export default connect(mapStateToProps)(ChatBody);