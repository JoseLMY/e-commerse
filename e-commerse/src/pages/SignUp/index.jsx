import React, { useState, useEffect } from 'react'
import { XMarkIcon, ChevronLeftIcon } from '@heroicons/react/24/solid'

import './styles.css'
const SignUp = () => {


    const [values, setValues] = useState({
        fullName: "",
        email: "",
        password: "",
    })

    const handleInputsChange = (event) => {
        const {name, value} = event.target
        setValues({
            ...values,
            [name] : value
        })
    }

    const handleForm = (event) =>{
        event.preventDefault()
        let valuesJSON = JSON.stringify(values)
        fetch("http://localhost:5173/signIn", {
            method: 'post',
            body: valuesJSON
        })
        
    }

    return (
        <>
           <div className= {`loginFormContainer`}>
                <div className='form-box'>
                    <form className='form' onSubmit={handleForm}>
                        <div className='headerLogin'>
                            <div className='backLogin'>
                                <a href='/login'>
                                    <ChevronLeftIcon className='XMarkIcon'/>
                                </a>
                                <div>
                                    <span className='title'>
                                        Sign Up
                                    </span>
                                </div>
                            </div>
                            <a href='/'>
                                <XMarkIcon className='XMarkIcon' />
                            </a>
                        </div>
                        <div className='form-container'>
                            <input 
                                type='text'  
                                className='input' 
                                name='fullName' 
                                placeholder='Full Name'
                                onChange={handleInputsChange}
                            />
                            <input 
                                type='email' 
                                className='input' 
                                name='email' 
                                placeholder='Email' 
                                onChange={handleInputsChange}
                            />
                            <input 
                                type='password' 
                                className='input' 
                                name='password' 
                                placeholder='Password' 
                                onChange={handleInputsChange}
                            />
                        </div>
                        <button type='submit'>CONFIRM</button>
                    </form>
                    <div className='form-section'>
                        <p>Have an account? <a href='/login'>Log In</a> </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export {SignUp}