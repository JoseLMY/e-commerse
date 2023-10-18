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
    const url = 'http://localhost:5173/validate' //Here we are calling the api, in this case the api is local.
    const [emails, setEmails] = useState()
    const fetchApi = async () => {  // We create an asynchronous function, where we wait for the data
    const response = await fetch(url) // These data is saved in response
    
    const responseJSON = await response.json()
    setEmails(responseJSON)
    }

    useEffect(() => {
        fetchApi()
    }, [])

    const dataValidate = () => {
        if (emails.length > 0) {
            alert("The user cannot be created, because it already exists.")
        } else{
            alert("Congratulation, already you have one user")
        }
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
                        <button type='submit' onClick={()=>{dataValidate()}}>CONFIRM</button>
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