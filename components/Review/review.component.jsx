import FormInput from '../FormInput/formInput.component';
import AreaInput from '../AreaInput/area-input.component';
import React, { useState} from 'react';
import API_URL from '../../routes'

const ReviewForm = ({item, addComments}) => {

    const [text, setText] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit = async event => {
        event.preventDefault();

        const  req = await fetch(`${API_URL}/comments`, {
                method: 'post',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify({
                    email: email,
                    text: text,
                    name: name,
                    date: new Date(),
                    item: item.id
                })
                })
        const response = await req.json()   
        await addComments(response)     
        setEmail('');
        setName('');
        setText('')
        
 
        
    }
    const handleChange = event => {
        const {value,name} =event.target;
        if (name==='text') {
            setText(value)
        } else if (name==='name') {
            setName(value)
        } else {
            setEmail(value)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <AreaInput 
            name='text'
            handleChange={handleChange}
            value={text}
            label='Your Review'
            required
            />       
                        
            <FormInput 
            name='name'
            type='name'
            handleChange={handleChange}
            value={name}
            label='Name'
            required
            />
            <FormInput 
            name='email'
            type='email'
            label='Email'
            value={email}
            handleChange={handleChange}
            required                   
            />
            <div className='buttons'>
                <button className='review-button' type='submit'>
                    Leave a review
                </button>
            </div>
        </form>
    )
}


export default ReviewForm;