import React, {Fragment} from 'react'
import AreaInput from '../AreaInput/area-input.component';
import {sendMessage} from '../../firebase/firebase.utils';
import {connect} from 'react-redux'; 
import {setMessages, setNewMessages, toggleChatHidden} from '../../src/redux/chat/chat.actions';
import {setToken} from '../../src/redux/user/user.action';
import firebase from 'firebase/app';
import 'firebase/firestore';
import {motion} from 'framer-motion';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowUp} from '@fortawesome/free-solid-svg-icons';
import ClickOutside from '../ClickOutside/ClickOutside.component'




class  Chat extends React.Component {
    constructor() {
        super()
        this.state = {
            text:'',
            deviceWidth: 0,
        }
        this.updateDeviceWidth= this.updateDeviceWidth.bind(this);
    }

    unsubscribe = (channel) => {
        
            if (!firebase.apps.length) {
                firebase.initializeApp({
                    apiKey: "AIzaSyABugTRykVjU3cO3nkANbnArtyZ_TPix1Q",
                    authDomain: "raspberry-dacc1.firebaseapp.com",
                    databaseURL: "https://raspberry-dacc1.firebaseio.com",
                    projectId: "raspberry-dacc1",
                    storageBucket: "raspberry-dacc1.appspot.com",
                    messagingSenderId: "435336134829",
                    appId: "1:435336134829:web:36258d0b8bdb9bf9810624",
                    measurementId: "G-E4XKDDZNWV"
                })
            }
                 
            
        
            firebase.firestore().collection('Chat').doc(`${channel}`).collection(`messages`).where('createdAt','>',1590246123874 ).orderBy('createdAt','desc')
            .onSnapshot((docs) => {
                const messages=[] 
                docs.forEach(function(doc) {
                    messages.push(doc.data());
                });
                this.props.setMessages(messages)    
                this.props.setNewMessages(true)
            })
                        
        
    }
    listener = async event => {
        if (event.code === "Enter" || event.code === "NumpadEnter") {
          const userRef = await sendMessage(this.state.text, this.props.channel);
          this.setState({text:''})
        }
      };
    

    componentDidMount() {
        const {channel} = this.props
        this.unsubscribe(channel)
        document.addEventListener("keydown", this.listener);
        this.updateDeviceWidth();
        window.addEventListener('resize', this.updateDeviceWidth)

    }


    componentWillUnmount() {
        document.removeEventListener("keydown", this.listener);
        window.removeEventListener('resize', this.updateDeviceWidth)
    }

    handleSubmit = async event => {

        event.preventDefault();
        const userRef = await sendMessage(this.state.text, this.props.channel);
        this.setState({text:''})
    }


    handleChange = event => {
            this.setState({text:event.target.value})
    }

    updateDeviceWidth() {
        this.setState({deviceWidth:window.innerWidth})
    }

    render () {
        const {messages,channel, toggleChatHidden, setNewMessages} = this.props
        const {deviceWidth} = this.state
        
        return (
            <motion.div initial='initial' animate='animate'>
            <ClickOutside onClick={() => {
                toggleChatHidden()
                setNewMessages(false)
                }}>
                <motion.div 
                initial={{width:'0px', opacity:0}}
                animate={{width:`${deviceWidth>768 ? '336px': `${deviceWidth}px`}`,opacity:1,  transition:{duration:0.3, staggerChildren: 0.09}}}
                
                className='chat-container'
                
                >
                    <div className='chat-title'>
                        <p>Company Name</p>
                        {deviceWidth<769?
                        <div className='close-chat-small-device' onClick={()=> 
                            {
                            toggleChatHidden();
                            setNewMessages(false);
                            }
                        }>&#10005;</div>
                        : null    
                        }
                    </div>
                    <div className='messages-container' >
                    {   messages ?
                        messages.map(message=> <motion.div
                            initial={{opacity:0}}
                            animate={{ opacity:1, transition:{delay:0.1, duration:0.8}}}
                            className={`${message.user.id===channel ? 'message-user': 'message-support'} chat-message`}>{message.text}</motion.div>)
                        :null
                    }
                    </div>
                    <form onSubmit={this.handleSubmit}>


                        <AreaInput 
                        className='message-box'
                        name='text'
                        handleChange={this.handleChange}
                        value={this.state.text}
                        placeholder='Type your message here...'
                        required
                        />       

                        <button className='message-send-button'  type='submit'>
                            <FontAwesomeIcon className='message-send-button-icon' icon={faArrowUp} size='lg'/>
                        </button>

                    </form>
                </motion.div>
            </ClickOutside>
            </motion.div>
    )}
}

const mapStateToProps = state => ({
    messages: state.chat.messages,
    channel: state.chat.channel,
    chatHidden: state.chat.chatHidden,
})

const mapDispatchToProps = dispatch => ({
    setMessages: messages => dispatch(setMessages(messages)),
    setNewMessages:bool => dispatch(setNewMessages(bool)),
    toggleChatHidden: () => dispatch(toggleChatHidden()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Chat);