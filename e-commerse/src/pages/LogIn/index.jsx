import React from 'react'
import { XMarkIcon } from "@heroicons/react/24/solid"

import "./styles.css"
const LogIn = () => {


    return (
        <>
           <div className= {`loginFormContainer`}>
                <div className="form-box">
                    <form className="form">
                        <div className='headerLogin'>
                            <span className="title">Log In</span>
                            <a href='/'>
                                <XMarkIcon className='XMarkIcon' />
                            </a>
                        </div>
                        <div className="form-container">
                            <input type="email" className="input" name='email' placeholder="Email" />
                            <input type="password" className="input" name='password' placeholder="Password" />
                        </div>
                        <button>Log In</button>
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