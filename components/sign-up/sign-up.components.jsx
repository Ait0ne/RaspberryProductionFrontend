import React from 'react';
import FormInput from '../FormInput/formInput.component';
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils'; 
import Router from 'next/router';
import { setCurrentUser } from '../../src/redux/user/user.action';


class SignUp extends React.Component {

    constructor() {
        super()


        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword:''
        }
    }



    handleSubmit = async event => {
        event.preventDefault();
        const {displayName,email,password,confirmPassword}=this.state

        if (password!==confirmPassword) {
            alert("passwords don't match")
            return;
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password)
            await createUserProfileDocument(user, {displayName});
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '',
            })
        } catch (err) {
            console.error(err)
        }

    }


    handleChange = event => {
        const {name,value} = event.target;
        this.setState({[name]: value})
    }


    render() {
        const {displayName,email,password,confirmPassword}=this.state
        const {translate, deviceWidth} = this.props
        return (
            <div className='sign-up'>
                <div className='form-title'>
                    <h2>I do not have an Account</h2>
                    <span>Sign Up with email and password</span>
                </div>
                <form onSubmit={this.handleSubmit}>

                    <FormInput 
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={this.handleChange}
                    label='Display Name'
                    required
                    />
                    <FormInput 
                    type='email'
                    name='email'
                    value={email}
                    onChange={this.handleChange}
                    label='Email'
                    required
                    />
                    <FormInput 
                    type='password'
                    name='password'
                    value={password}
                    onChange={this.handleChange}
                    label='Password'
                    required
                    />
                    <FormInput 
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={this.handleChange}
                    label='Confirm Password'
                    required
                    />
                    <div className='buttons'>
                        <button className='signin-button' type='submit'>SIGN UP</button>
                    </div>
                </form>
                {deviceWidth<769?
                        <div style={{marginTop:20}}>
                            <span style={{color:'black'}}>Already have an account?</span>
                            <span onClick={()=>translate(0)} style={{textDecoration: 'underline', fontWeight:'bold', color:'#d46a92', cursor:'pointer'}}>SIGN IN</span>
                        </div>
                        :null
                }

            </div>
        )
    }

}

export default SignUp;