import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faComments, faTimes} from '@fortawesome/free-solid-svg-icons';
import {setNewMessages, toggleChatHidden} from '../../src/redux/chat/chat.actions'
import {connect} from 'react-redux';



const ChatButton = ({newMessages, setNewMessages, toggleChatHidden,chatHidden}) => {
    return (
        <div className='chat-button' onClick={()=>{
            toggleChatHidden();
            setNewMessages(false)
            }}>
            {   newMessages && chatHidden ?
                <div className='new-messages'></div>
            : null }
            <FontAwesomeIcon className='chat-button-icon' icon={chatHidden?faComments:faTimes} size='2x'/>
        </div>
    )
}


const mapStateToProps = state => ({
    newMessages: state.chat.newMessages,
    chatHidden: state.chat.chatHidden
})

const mapDispatchToProps = dispatch => ({
    setNewMessages: bool => dispatch(setNewMessages(bool)),
    toggleChatHidden:() => dispatch(toggleChatHidden())
})

export default connect(mapStateToProps,mapDispatchToProps)(ChatButton);