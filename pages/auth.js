import SignIn from '../components/sign-in/sign-in.component';
import SignUp from '../components/sign-up/sign-up.components';
import Router from 'next/router';
import {connect} from 'react-redux';
import {  motion } from 'framer-motion'




class Auth extends React.Component {
    

    
    render() {
        const {currentUser}= this.props
        return (
                
                <motion.div className='form-container'
                initial='initial'
                animate='animate'
                >
                    {currentUser ?
                    Router.back()
                    :null}    
                    <motion.div className='sign-in-sign-up-form'
                    initial={{x:100, opacity:0}}
                    animate={{x:0, opacity:1, transition:{duration: 0.4}}}
                    
                    >
                        <SignIn />
                        <SignUp  />
                    </motion.div>
                    
                </motion.div>
        )}
}


const mapStatetoProps = (state) => ({
    currentUser: state.user.currentUser
})

export default connect(mapStatetoProps)(Auth);