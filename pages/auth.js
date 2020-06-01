import SignIn from '../components/sign-in/sign-in.component';
import SignUp from '../components/sign-up/sign-up.components';
import Router, {withRouter} from 'next/router';
import {connect} from 'react-redux';
import {  motion } from 'framer-motion'




class Auth extends React.Component {
    constructor() {
        super()
        this.state={
            deviceWidth:0,
            x:0
        }
        this.updateDeviceWidth=this.updateDeviceWidth.bind(this)
        this.changeSignInSignUp=this.changeSignInSignUp.bind(this)
    }

    componentDidMount() {
        this.updateDeviceWidth()
        window.addEventListener('resize', this.updateDeviceWidth)
    }


    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDeviceWidth)
    }

    updateDeviceWidth() {
        this.setState({deviceWidth:window.innerWidth})
        this.state.deviceWidth>768 ? this.setState({x:0}):null
        
    }

    changeSignInSignUp(amount) {
        this.setState({x:amount})
    }
    onRedirect() {
        Router.push('/payment')
    }
    
    render() {
        const {currentUser, router}= this.props
        const {x, deviceWidth} = this.state
        return (
                
                <motion.div className='form-container'
                initial='initial'
                animate='animate'
                >
                    {!currentUser ? null
                    :(router.query.redirect==='payment'? this.onRedirect():
                    Router.back())}    
                    <motion.div className='sign-in-sign-up-form'
                    initial={{x:100, opacity:0}}
                    animate={{x:0, opacity:1, transition:{duration: 0.4}}}
                    >
                        <div className='auth-small-device-container' style={{transform: `translateX(${x}%)`}}>
                            <SignIn translate={this.changeSignInSignUp} deviceWidth={deviceWidth}/>
                            <SignUp  translate={this.changeSignInSignUp} deviceWidth={deviceWidth}/>
                        </div>
                    </motion.div>
                    
                </motion.div>
        )}
}


const mapStatetoProps = (state) => ({
    currentUser: state.user.currentUser
})

export default withRouter(connect(mapStatetoProps)(Auth));