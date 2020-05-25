import React from 'react';
import FormInput from '../FormInput/formInput.component';
import { auth, signInWithFacebook, signInwithGoogle} from '../../firebase/firebase.utils';
import {motion} from 'framer-motion';


class  SignIn extends React.Component{
    constructor(props) {
        super(props)
        
        this.state = {
            email:'',
            password: '',
        }
    }

    handleChange = event => {
        const {value,name} =event.target;
        this.setState({[name]:value})
    }

    handleSubmit =  async event => {
        event.preventDefault();
        const {email, password} = this.state;
        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email:'', password:''})
        } catch (err) {
            
            console.log(err.message)
        }



    }
    
    render() {
        return (
            <motion.div className='sign-in'
            variants={this.props.variants}
            >
                <div className='form-title'>
                    <h2>I already have an account</h2>
                    <span>Sign in with your email and password</span>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    name='email'
                    type='email'
                    handleChange={this.handleChange}
                    value={this.state.email}
                    label='Email'
                    required
                    />
                    <FormInput 
                    name='password'
                    type='password'
                    label='Password'
                    value={this.state.password}
                    handleChange={this.handleChange}
                    required                   
                    />
                    <div className='buttons'>
                        <button className='signin-button' type='submit'>
                            SIGN IN
                        </button>
                    </div>
                    <h2>Sign in with Social Profile</h2>
                    <div className='buttons-left'>

                        <img className='google' src='/google.png' alt='google-icon' onClick={signInwithGoogle}/>
                        <img className='facebook' src='/facebook.png' alt='facebook-icon' onClick={signInWithFacebook}/>
                    </div>

                </form>
            </motion.div>
        )
    }
}

export default SignIn;