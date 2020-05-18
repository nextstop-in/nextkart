import React from 'react'
import FormInput from '../form-input/form-input.component'
import {signInWithGoogle} from '../../firebase/firebase.utils';

import './sign-in.styles.scss'
import CustomButton from '../custom-button/custom-button.component'

class SignIn extends React.Component{
    constructor(props){
        super(props)
        this.state={
            email : '',
            password : ''

        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleSubmit = event =>{
        event.preventDefault();

        this.setState({email : '', password: ''})  
     
    }

   

    handleChange=event=>{
        const { value , name }=event.target;
        this.setState({[name] :value})
        
    }   
    render(){
        return(
            <div className='signin'>
                <h2>I already have an account</h2>
                <span>Sign in with email and password</span>
            
                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' label='Email' type='email' value={this.state.email} handleChange={this.handleChange} required></FormInput>
                    
                    <FormInput name='password' label='Password' type='password' value={this.state.password} handleChange={this.handleChange} required></FormInput>
                  <div className='buttons'> 
                   <CustomButton type='submit' >Sign In</CustomButton>
                   <CustomButton type="button" onClick={signInWithGoogle} >Google</CustomButton>
                   </div> 
                </form>       
                    
            </div>
        )
    }
}

export default SignIn;