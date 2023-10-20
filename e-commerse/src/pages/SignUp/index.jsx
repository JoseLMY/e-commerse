import React, { useState, useEffect } from 'react'
import { XMarkIcon, ChevronLeftIcon } from '@heroicons/react/24/solid'
import swet from 'sweetalert'

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

    const url = 'http://localhost:5173/validate' //Here we are calling the api, in this case the api is local.
    const [emails, setEmails] = useState([])
    const fetchApi = async () => {  // We create an asynchronous function, where we wait for the data
    const response = await fetch(url) // These data is saved in response
    
    const responseJSON = await response.json()
    setEmails(responseJSON)
    }

    useEffect(() => {
        fetchApi()
    }, [])

    const dataValidate  = (emails, event) => {
        event.preventDefault()
        let valueInputEmail = document.querySelector(".validateInput").value
        let valueInputs = document.querySelector(".input").value
        let valueInputPassword = document.querySelector(".inputPassword").value
        if (valueInputs === "" || valueInputPassword === "") {
            swet({
                icon: "error",
                title: "Sorry, you must fill out all the fields, please try again.",
                buttons: "Acept"
            })
        } else if(emails.find(user => user.email === valueInputEmail)){
            swet({
                icon: "error",
                title: "Sorry, the account already exist, please try again.",
                buttons: "Acept"
            })
        } else {
            let valuesJSON = JSON.stringify(values)
            fetch("http://localhost:5173/signIn", {
                method: 'post',
                body: valuesJSON
            })
            swet({
                icon: "success",
                title: "Congratulation, already have an account",
                buttons: false
            })
            setTimeout(() => {
                window.location.href ="http://localhost:3000/login";
            }, 4000);


        }
    }

    return (
        <>
           <div className= {`loginFormContainer`}>
                <div className='form-box'>
                    <form className='form' onSubmit={(e) => dataValidate(emails, e)}>
                        <div className='headerLogin'>
                            <div className='backLogin'>
                                <a href='/login'>
                                    <ChevronLeftIcon className='XMarkIcon '/>
                                </a>
                                <div>
                                    <span className='title'>
                                        Sign Up
                                    </span>
                                </div>
                            </div>
                            <a href='/'>
                                <XMarkIcon className='XMarkIcon xmarkCancel' />
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
                                className='input validateInput' 
                                name='email' 
                                placeholder='Email' 
                                onChange={handleInputsChange}
                            />
                            <input 
                                type='password' 
                                className='input inputPassword' 
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