import React,{useState, useEffect, useContext} from 'react'
import { XMarkIcon } from "@heroicons/react/24/solid"
import swet from 'sweetalert'

import { ShoppingCartContext } from '../../Context'

import "./styles.css"
const LogIn = () => {
    const context = useContext(ShoppingCartContext)
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

    const urlPass = 'http://localhost:5173/pass' //Here we are calling the api, in this case the api is local.
    const [passw, setPassw] = useState([])
    const fetchApiPass = async () => {  // We create an asynchronous function, where we wait for the data
    const response = await fetch(urlPass) // These data is saved in response
    
    const responseJSON = await response.json()
    setPassw(responseJSON)
    }

    useEffect(() => {
        fetchApiPass()
    }, [])
    
    const dataValidate  = (emails, passw, event) => {
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
        } else if (emails.find(email => email.email === valueInputEmail)) {
            if (passw.find(pass => pass.password === valueInputPassword)) {
                swet({
                        icon: "success",
                        buttons: false
                    })
                localStorage.setItem('user', JSON.stringify(valueInputEmail))
                localStorage.setItem('state', JSON.stringify(true))
                context.setBttLogin(true)
                setTimeout(() => {
                    window.location.href ="http://localhost:3000/"
                }, 3000)
            } else{
                swet({
                    icon: "error",
                    title: "Sorry, the password is wrong, please try again.",
                    buttons: "Acept"
                })
            }
        } else{
            swet({
                icon: "error",
                title: "Sorry, the account not exist, please try again.",
                buttons: "Acept"
            })
        }
    }

    return (
        <>
           <div className= {`loginFormContainer`}>
                <div className="form-box">
                    <form className="form" onSubmit={(e) => dataValidate(emails, passw, e)}>
                        <div className='headerLogin'>
                            <span className="title">Log In</span>
                            <a href='/'>
                                <XMarkIcon className='XMarkIcon xmarkCancel' />
                            </a>
                        </div>
                        <div className="form-container">
                            <input 
                                type="email" 
                                className="input validateInput" 
                                name='email' 
                                placeholder="Email" 
                            />
                            <input 
                                type="password" 
                                className="input inputPassword" 
                                name='password' 
                                placeholder="Password" 
                            />
                        </div>
                        <button type='submit'>Log In</button>
                    </form>
                    <div className="form-section">
                        <p>Don't have an account? <a href="/signup">Sign Up</a> </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export {LogIn}