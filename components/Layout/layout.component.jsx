import React, { Fragment } from 'react';
import Header from '../Header/header.component';
import Head from 'next/head'
import {connect} from 'react-redux';
import firebase, {auth, createUserProfileDocument, messaging} from '../../firebase/firebase.utils';
import { setCurrentUser } from '../../src/redux/user/user.action';
import {setChannel} from '../../src/redux/chat/chat.actions'
import ChatBody from '../ChatBody/chat-body.component'

class Layout extends React.Component  {



    unsubscribeFromAuth = null;

    componentDidMount() {
        const {setCurrentUser, channel, setChannel} = this.props;

        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);
                userRef.onSnapshot(snapShot => {
                    setCurrentUser({
                        id: snapShot.id,
                        ...snapShot.data()
                    })
                })
            };

        })
        if (channel.length===0) {
            setChannel(new Date().getTime())
        }
    }




    componentWillUnmount() {
        this.unsubscribeFromAuth();

    }


    render() {


        return (
            <Fragment >
                <Head>
                    <link href={`https://fonts.googleapis.com/css2?family=Lora:ital@0;1&family=Open+Sans:wght@400;600;700&display=swap`} rel="stylesheet"/>
                    <link href={`https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&display=swap`} rel="stylesheet"/>
                    
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                    <meta name="theme-color" content="#425566"/>
                    <meta name="Description" content="описание сайта"/>
                    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" charSet="utf-8"/>
                </Head>
                <Header />
                <div className='main'>{this.props.children}</div>
                <ChatBody />
            </Fragment>
        )
    }
}


const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser,
    channel: state.chat.channel
})

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user)),
    setChannel: channel => dispatch(setChannel(channel))
})


export default connect(mapStateToProps,mapDispatchToProps)(Layout);